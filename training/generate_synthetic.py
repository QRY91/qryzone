#!/usr/bin/env python3
"""
Generate synthetic training examples in qry.zone voice using Claude API.

Reads real extracted articles for topic context, then generates new articles
on adjacent topics using the voice-analysis patterns as system prompt.

Output: training/data/synthetic.jsonl
Usage:  ANTHROPIC_API_KEY=... python training/generate_synthetic.py
Deps:   pip install anthropic
"""

import json
import os
import sys
import time
from pathlib import Path

try:
    import anthropic
except ImportError:
    print("pip install anthropic", file=sys.stderr)
    sys.exit(1)

REPO_ROOT = Path(__file__).parent.parent
EXTRACTED = REPO_ROOT / "training" / "data" / "extracted.jsonl"
OUT = REPO_ROOT / "training" / "data" / "synthetic.jsonl"

# Voice extracted from recursive-mirror/voice-analysis.html
VOICE_SYSTEM_PROMPT = """You are writing blog posts for qry.zone. Match this voice exactly.

## Core identity
Direct, questioning, earnestly irreverent. Technical precision + philosophical wandering.
No gatekeeping. Comfortable with profanity when it serves. Self-aware.

## Sentence structure — use all of these

**Fragment punch.** Short declarative statements. No subject needed.
"Three things from this debugging session taught me this:"
"The fastest code is code that doesn't run."
"Let's get to work."

**Self-question.** Mid-thought interrogation. Questions that drive exploration.
"Could I learn how to make a videogame?"
"Does this even need to happen at all?"

**Rhetorical escalation.** Questions that answer themselves through absurdity.
Build the absurdity, then deflate it. Throw in a "Please." at the end of earnest requests.

**Parenthetical aside.** Show the process. Make the thinking visible.
"(yes, really)" "(¯\\_(ツ)_/¯)" "(this took two of us 1.5 hours, just so we're clear)"

## Rhythm
Short. Short. Longer flowing thought that unpacks the idea. Short.

The staccato fragments hit first. The longer sentence explains. Then you land it short again.

## What NOT to do
- No "perhaps" or "it could be argued" — state it or question it, never hedge
- No upfront lessons or thesis statements — start in the middle of the thing
- No section headers that explain what the section is about ("Conclusion:", "The takeaway:")
- No corporate voice, no newsletter voice, no "In this post, I'll cover..."
- No purple-to-blue gradients (obviously not applicable here but the energy applies)

## Format
Plain text. Paragraphs separated by blank lines.
Use `---` for section breaks when needed, not headers.
Keep articles short: 200–600 words is right. Dense, not padded.

Write one focused thing. Leave before you're done explaining.
"""

# Topics drawn from the existing article cluster + natural adjacents
# These should feel like things the author would actually write about
TOPIC_SEEDS = [
    "the sunk cost of knowing how your own tools work",
    "writing tests for code you didn't write",
    "when documentation is lying and you know it",
    "the moment you realize you've been solving the wrong problem",
    "why I reach for a spreadsheet before I reach for code",
    "the git blame that taught me to stop blaming",
    "estimations are lies we tell in meetings",
    "on naming things: the three good options and the forty bad ones",
    "the pull request that sat open for three weeks",
    "cargo-culting config files from Stack Overflow",
    "why I stopped fixing bugs at 11pm",
    "the architecture diagram that was wrong before we even drew it",
    "shipping something broken on purpose",
    "the meeting that could have been a comment in the code",
    "when local-first means local-only and that's fine",
    "on keeping a work log and actually using it",
    "the second-system effect in miniature",
    "refactoring by deletion",
    "the codebase that no one owns",
    "why I prefer ugly working code to beautiful broken code",
    "what rubber duck debugging actually teaches you",
    "the dependency you added and immediately regretted",
    "on being a generalist in a world that wants specialists",
    "the tool you built for yourself that actually stuck",
    "context switching is the tax on ambition",
    "the feedback loop that was too slow to be useful",
    "writing for the person who inherits your code",
    "the deploy that worked on the first try (and why I didn't trust it)",
    "slow tools and what they're good for",
    "the database schema decision I'd take back",
]


def load_extracted() -> list[dict]:
    if not EXTRACTED.exists():
        print(f"Run extract.py first — {EXTRACTED} not found", file=sys.stderr)
        sys.exit(1)
    with open(EXTRACTED) as f:
        return [json.loads(line) for line in f if line.strip()]


def make_prompt(topic: str, examples: list[dict]) -> str:
    # Include 2 short real examples as few-shot context
    few_shot = ""
    short_examples = sorted(examples, key=lambda x: len(x["text"]))[:5]
    import random
    sampled = random.sample(short_examples, min(2, len(short_examples)))
    for ex in sampled:
        few_shot += f"\n\n---\nTitle: {ex['title']}\n\n{ex['text'][:800]}"

    return f"""Here are two example articles from the site for voice reference:{few_shot}

---

Now write a new article on this topic: **{topic}**

Requirements:
- 200–500 words
- Match the voice exactly — fragments, self-questions, the rhythm
- Start in the middle. No preamble.
- No title in the output — just the article body.
- End before you've said everything. Leave something for the reader to finish."""


def generate_article(client: anthropic.Anthropic, topic: str, examples: list[dict]) -> str | None:
    try:
        msg = client.messages.create(
            model="claude-opus-4-5",
            max_tokens=1024,
            system=VOICE_SYSTEM_PROMPT,
            messages=[{"role": "user", "content": make_prompt(topic, examples)}],
        )
        return msg.content[0].text.strip()
    except Exception as e:
        print(f"  API error for '{topic}': {e}", file=sys.stderr)
        return None


def main():
    api_key = os.environ.get("ANTHROPIC_API_KEY")
    if not api_key:
        print("Set ANTHROPIC_API_KEY", file=sys.stderr)
        sys.exit(1)

    client = anthropic.Anthropic(api_key=api_key)
    examples = load_extracted()
    print(f"Loaded {len(examples)} real articles for context")

    # Check if resuming (don't regenerate topics already done)
    done_topics: set[str] = set()
    existing: list[dict] = []
    if OUT.exists():
        with open(OUT) as f:
            for line in f:
                if line.strip():
                    entry = json.loads(line)
                    done_topics.add(entry.get("topic", ""))
                    existing.append(entry)
        print(f"Resuming: {len(done_topics)} topics already generated")

    topics_to_do = [t for t in TOPIC_SEEDS if t not in done_topics]
    print(f"Generating {len(topics_to_do)} new articles...")

    results = list(existing)
    with open(OUT, "w") as f:
        # Write existing first
        for entry in existing:
            f.write(json.dumps(entry, ensure_ascii=False) + "\n")

        for i, topic in enumerate(topics_to_do):
            print(f"  [{i+1}/{len(topics_to_do)}] {topic[:60]}...", end="", flush=True)
            text = generate_article(client, topic, examples)
            if text:
                entry = {"title": topic, "text": text, "tags": ["synthetic"], "topic": topic}
                f.write(json.dumps(entry, ensure_ascii=False) + "\n")
                f.flush()
                results.append(entry)
                print(f" ({len(text.split())} words)")
            else:
                print(" FAILED")

            # Rate limit breathing room
            if i < len(topics_to_do) - 1:
                time.sleep(0.5)

    total_words = sum(len(r["text"].split()) for r in results)
    print(f"\nDone: {len(results)} synthetic articles → {OUT}")
    print(f"Total words: {total_words:,}")


if __name__ == "__main__":
    main()
