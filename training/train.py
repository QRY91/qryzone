#!/usr/bin/env python3
"""
Fine-tune Gemma 4 4B on qry.zone articles using QLoRA via unsloth.

Hardware target: RTX 3070 8GB VRAM
Model target:    Gemma 4 4B (fits comfortably in 8GB at 4-bit)

Usage:
    pip install "unsloth[colab-new] @ git+https://github.com/unslothai/unsloth.git"
    pip install trl datasets

    python training/train.py

    # To run with custom data path or fewer steps:
    python training/train.py --data training/data --steps 200

Output: training/gemma4-qryzone-lora/  (LoRA adapter, load with unsloth)
"""

import argparse
import json
from pathlib import Path

# --- Argument parsing ---
parser = argparse.ArgumentParser()
parser.add_argument("--data", default="training/data", help="Directory with extracted.jsonl and synthetic.jsonl")
parser.add_argument("--model", default="google/gemma-4-4b-it",
                    help="HuggingFace model ID. Verify at hf.co/google — naming may vary.")
parser.add_argument("--output", default="training/gemma4-qryzone-lora")
parser.add_argument("--steps", type=int, default=300, help="Max training steps")
parser.add_argument("--lora-rank", type=int, default=16)
parser.add_argument("--seq-len", type=int, default=2048)
args = parser.parse_args()

DATA_DIR = Path(args.data)
OUTPUT_DIR = Path(args.output)


# --- Load dataset ---
def load_all_data(data_dir: Path) -> list[dict]:
    entries = []
    for fname in ("extracted.jsonl", "synthetic.jsonl"):
        path = data_dir / fname
        if path.exists():
            with open(path) as f:
                for line in f:
                    if line.strip():
                        entries.append(json.loads(line))
            print(f"Loaded {fname}: {sum(1 for _ in open(path) if _.strip())} entries")
        else:
            print(f"Missing {fname} — skipping")
    if not entries:
        raise RuntimeError(f"No data found in {data_dir}. Run extract.py and generate_synthetic.py first.")
    return entries


# --- Format as instruction-following (Alpaca style) ---
# The instruction is the title/topic. The response is the article.
# At inference time: prompt with a title or topic, get an article back.

ALPACA_PROMPT = """Below is a title or topic for a qry.zone blog post. Write the article.

### Title:
{}

### Article:
{}"""

EOS_TOKEN = None  # set after model load


def format_entry(entry: dict) -> str:
    title = entry.get("title", entry.get("topic", "")).strip()
    text = entry.get("text", "").strip()
    return ALPACA_PROMPT.format(title, text) + EOS_TOKEN


def main():
    # --- Unsloth import (deferred so argparse works before heavy import) ---
    try:
        from unsloth import FastLanguageModel
    except ImportError:
        print(
            "Install unsloth:\n"
            '  pip install "unsloth[colab-new] @ git+https://github.com/unslothai/unsloth.git"\n'
            "  pip install trl datasets transformers"
        )
        raise

    import torch
    from datasets import Dataset
    from trl import SFTTrainer
    from transformers import TrainingArguments

    print(f"CUDA available: {torch.cuda.is_available()}")
    if torch.cuda.is_available():
        print(f"GPU: {torch.cuda.get_device_name(0)}")
        print(f"VRAM: {torch.cuda.get_device_properties(0).total_memory / 1e9:.1f} GB")

    # --- Load model ---
    print(f"\nLoading {args.model} ...")
    print("(If this fails, check the model ID at hf.co/google — Gemma 4 naming varies)")

    model, tokenizer = FastLanguageModel.from_pretrained(
        model_name=args.model,
        max_seq_length=args.seq_len,
        dtype=None,       # auto-detect (bfloat16 on 30xx+)
        load_in_4bit=True,  # QLoRA — required for 8GB VRAM
    )

    # --- Apply LoRA ---
    model = FastLanguageModel.get_peft_model(
        model,
        r=args.lora_rank,
        target_modules=[
            "q_proj", "k_proj", "v_proj", "o_proj",
            "gate_proj", "up_proj", "down_proj",
        ],
        lora_alpha=args.lora_rank * 2,
        lora_dropout=0,      # 0 is optimal per unsloth
        bias="none",
        use_gradient_checkpointing="unsloth",  # saves 30% VRAM
        random_state=42,
        use_rslora=False,
    )

    # Set EOS token for formatting
    global EOS_TOKEN
    EOS_TOKEN = tokenizer.eos_token

    # --- Load and format data ---
    raw_data = load_all_data(DATA_DIR)
    print(f"\nTotal training examples: {len(raw_data)}")
    total_words = sum(len(e.get("text", "").split()) for e in raw_data)
    print(f"Total words: {total_words:,}")

    formatted = [{"text": format_entry(e)} for e in raw_data]
    dataset = Dataset.from_list(formatted)
    print(f"Dataset: {len(dataset)} examples")

    # --- Training config (tuned for RTX 3070 8GB) ---
    # batch_size=2 + grad_accum=4 = effective batch of 8
    # This fits comfortably in 8GB for 4B model with seq_len=2048
    trainer = SFTTrainer(
        model=model,
        tokenizer=tokenizer,
        train_dataset=dataset,
        dataset_text_field="text",
        max_seq_length=args.seq_len,
        dataset_num_proc=4,
        args=TrainingArguments(
            per_device_train_batch_size=2,
            gradient_accumulation_steps=4,
            warmup_steps=20,
            max_steps=args.steps,
            learning_rate=2e-4,
            fp16=not torch.cuda.is_bf16_supported(),
            bf16=torch.cuda.is_bf16_supported(),
            logging_steps=10,
            optim="adamw_8bit",      # 8-bit Adam saves ~2GB VRAM
            weight_decay=0.01,
            lr_scheduler_type="cosine",
            seed=42,
            output_dir=str(OUTPUT_DIR / "checkpoints"),
            report_to="none",        # set to "wandb" if you want tracking
            save_steps=100,
            save_total_limit=2,
        ),
    )

    # --- Train ---
    print(f"\nTraining for {args.steps} steps...")
    print(f"Output → {OUTPUT_DIR}")
    trainer_stats = trainer.train()
    print(f"\nTraining complete: {trainer_stats.metrics}")

    # --- Save LoRA adapter ---
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    model.save_pretrained(str(OUTPUT_DIR))
    tokenizer.save_pretrained(str(OUTPUT_DIR))
    print(f"Adapter saved to {OUTPUT_DIR}")
    print("\nTo load and infer:")
    print(f"""
    from unsloth import FastLanguageModel
    model, tokenizer = FastLanguageModel.from_pretrained("{OUTPUT_DIR}")
    FastLanguageModel.for_inference(model)

    prompt = \"\"\"Below is a title or topic for a qry.zone blog post. Write the article.

### Title:
context switching is the tax on ambition

### Article:
\"\"\"
    inputs = tokenizer(prompt, return_tensors="pt").to("cuda")
    outputs = model.generate(**inputs, max_new_tokens=512, temperature=0.8, do_sample=True)
    print(tokenizer.decode(outputs[0], skip_special_tokens=True))
    """)


if __name__ == "__main__":
    main()
