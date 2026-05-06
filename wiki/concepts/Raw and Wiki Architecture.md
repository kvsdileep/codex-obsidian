---
type: concept
title: "Raw and Wiki Architecture"
created: 2026-05-06
updated: 2026-05-06
status: seed
tags:
  - concept
  - knowledge-base
related:
  - "[[wiki/concepts/LLM Knowledge Base|LLM Knowledge Base]]"
sources:
  - "[[wiki/sources/How to Build Your Own LLM Knowledge Base|How to Build Your Own LLM Knowledge Base]]"
---

# Raw and Wiki Architecture

## Definition

Raw and wiki architecture separates immutable source material from AI-written synthesis notes.

## Why It Matters

The separation keeps evidence intact while allowing the wiki layer to evolve. It also makes ingestion safer: the AI can update summaries and concepts without corrupting original sources.

## Example

- `.raw/articles/` stores clipped articles.
- `.raw/chats/` stores exported conversations.
- `wiki/sources/`, `wiki/concepts/`, `wiki/entities/`, and `wiki/topics/` store synthesized knowledge.

## Sources

- [[wiki/sources/How to Build Your Own LLM Knowledge Base|How to Build Your Own LLM Knowledge Base]]
