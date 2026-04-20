#!/usr/bin/env python3
"""
Extract prose from qryzone HTML articles into JSONL for fine-tuning.

Output: training/data/extracted.jsonl
Usage:  python training/extract.py
Deps:   pip install beautifulsoup4
"""

import json
import re
import sys
from pathlib import Path

try:
    from bs4 import BeautifulSoup, Comment
except ImportError:
    print("pip install beautifulsoup4", file=sys.stderr)
    sys.exit(1)

import yaml

REPO_ROOT = Path(__file__).parent.parent
SRC = REPO_ROOT / "src"
OUT = REPO_ROOT / "training" / "data" / "extracted.jsonl"

# Files to skip — not prose essays
SKIP_PATTERNS = [
    "hidden/", "assets/", "_includes/",
    "styleguide", "explore", "sailboat-test",
    "index.html",
]

# Tags whose full content (including children) we drop
DROP_TAGS = {"style", "script", "nav"}

# Tags we render as markdown equivalents
HEADING_MAP = {"h1": None, "h2": "##", "h3": "###", "h4": "####"}


def parse_frontmatter(raw: str) -> tuple[dict, str]:
    match = re.match(r"^---\n(.*?)\n---\n(.*)", raw, re.DOTALL)
    if not match:
        return {}, raw
    fm_raw, body = match.group(1), match.group(2)
    try:
        fm = yaml.safe_load(fm_raw) or {}
    except yaml.YAMLError:
        fm = {}
    return fm, body


def extract_tags(fm: dict) -> list[str]:
    tags = []
    for key in ("exploreTags", "tags"):
        val = fm.get(key)
        if isinstance(val, list):
            tags.extend(str(v) for v in val if v)
        elif isinstance(val, str) and val:
            tags.append(val)
    return tags


def node_to_text(tag) -> str:
    """Recursively convert a BS4 tag/node to clean plain text."""
    from bs4 import NavigableString, Tag

    if isinstance(tag, Comment):
        return ""
    if isinstance(tag, NavigableString):
        return str(tag)

    name = tag.name if hasattr(tag, "name") else None

    if name in DROP_TAGS:
        return ""

    # Back-links at top of sub-articles — skip
    if name == "p" and tag.find("a") and tag.get_text().startswith("←"):
        return ""
    if name == "a" and "Back to" in tag.get_text():
        return ""

    # Horizontal rules
    if name == "hr":
        return "\n---\n"

    # Headings
    if name in HEADING_MAP:
        prefix = HEADING_MAP[name]
        inner = "".join(node_to_text(c) for c in tag.children).strip()
        if not inner:
            return ""
        if prefix is None:  # h1 — skip, we have it in title
            return ""
        return f"\n{prefix} {inner}\n"

    # Lists
    if name == "ul":
        items = [node_to_text(li).strip() for li in tag.find_all("li", recursive=False)]
        return "\n" + "\n".join(f"- {i}" for i in items if i) + "\n"
    if name == "ol":
        items = [node_to_text(li).strip() for li in tag.find_all("li", recursive=False)]
        return "\n" + "\n".join(f"{n+1}. {i}" for n, i in enumerate(items) if i) + "\n"

    # Code
    if name == "code":
        inner = tag.get_text()
        return f"`{inner}`"
    if name == "pre":
        inner = tag.get_text()
        return f"\n```\n{inner}\n```\n"

    # Strong / em — just text
    if name in ("strong", "b"):
        inner = "".join(node_to_text(c) for c in tag.children)
        return f"**{inner.strip()}**"
    if name in ("em", "i"):
        inner = "".join(node_to_text(c) for c in tag.children)
        return f"*{inner.strip()}*"

    # Block-level elements that become paragraphs
    if name in ("p", "li"):
        inner = "".join(node_to_text(c) for c in tag.children)
        # Collapse whitespace (HTML line-wrapping artifacts)
        inner = re.sub(r"\s+", " ", inner).strip()
        if not inner:
            return ""
        return f"\n{inner}\n"

    # Divs / sections / articles / headers / footers — recurse
    if name in ("div", "section", "article", "header", "footer", "blockquote", "aside"):
        return "".join(node_to_text(c) for c in tag.children)

    # Anchors — just the link text
    if name == "a":
        return "".join(node_to_text(c) for c in tag.children)

    # Span, time, small, etc.
    if name is not None:
        return "".join(node_to_text(c) for c in tag.children)

    return str(tag)


def clean(text: str) -> str:
    # Collapse 3+ blank lines → 2
    text = re.sub(r"\n{3,}", "\n\n", text)
    # Trim leading/trailing whitespace per line (but keep structure)
    lines = [l.rstrip() for l in text.splitlines()]
    return "\n".join(lines).strip()


def extract_file(path: Path) -> dict | None:
    raw = path.read_text(encoding="utf-8")
    fm, body = parse_frontmatter(raw)

    title = fm.get("title", path.stem).removesuffix(" - qry.zone")
    if not title:
        return None

    soup = BeautifulSoup(body, "html.parser")

    # Find the article element
    article = soup.find("article")
    if not article:
        return None

    # Remove the h1 header block (we have it as title)
    header = article.find("header", class_="article-header")
    if header:
        header.decompose()

    text = clean(node_to_text(article))
    if len(text) < 100:  # skip near-empty extractions
        return None

    return {
        "title": title,
        "text": text,
        "tags": extract_tags(fm),
        "status": fm.get("status", ""),
        "source": str(path.relative_to(REPO_ROOT)),
    }


def should_skip(path: Path) -> bool:
    rel = str(path.relative_to(SRC))
    return any(p in rel for p in SKIP_PATTERNS)


def main():
    files = sorted(SRC.rglob("*.html"))
    results = []
    skipped = 0

    for f in files:
        if should_skip(f):
            skipped += 1
            continue
        try:
            entry = extract_file(f)
            if entry:
                results.append(entry)
            else:
                skipped += 1
        except Exception as e:
            print(f"  skip {f.name}: {e}", file=sys.stderr)
            skipped += 1

    OUT.write_text("\n".join(json.dumps(r, ensure_ascii=False) for r in results) + "\n")
    print(f"Extracted {len(results)} articles → {OUT}")
    print(f"Skipped {skipped} files")

    # Quick stats
    total_words = sum(len(r["text"].split()) for r in results)
    print(f"Total words: {total_words:,} (~{total_words // 750} pages)")


if __name__ == "__main__":
    main()
