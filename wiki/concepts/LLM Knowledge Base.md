---
type: concept
title: "LLM Knowledge Base"
created: 2026-05-06
updated: 2026-05-06
status: seed
tags:
  - concept
  - knowledge-base
related:
  - "[[wiki/concepts/Raw and Wiki Architecture|Raw and Wiki Architecture]]"
  - "[[wiki/concepts/AI as Librarian|AI as Librarian]]"
sources:
  - "[[wiki/sources/How to Build Your Own LLM Knowledge Base|How to Build Your Own LLM Knowledge Base]]"
---

# LLM Knowledge Base

## Definition

An LLM knowledge base is a persistent set of notes that an AI helps build from raw sources, so future questions can be answered from accumulated context rather than from scratch.

## Why It Matters

Without persistence, AI conversations repeatedly rebuild the same background context. A knowledge base turns each source and question into compounding context.

## Connections

- This vault implements the pattern through `.raw/`, `wiki/`, `wiki/index.md`, `wiki/hot.md`, and `.raw/.manifest.json`.

## Sources

- [[wiki/sources/How to Build Your Own LLM Knowledge Base|How to Build Your Own LLM Knowledge Base]]
