---
type: topic
title: "Personal AI Knowledge Systems"
created: 2026-05-06
updated: 2026-05-06
status: developing
tags:
  - topic
  - knowledge-base
related:
  - "[[wiki/concepts/LLM Knowledge Base|LLM Knowledge Base]]"
sources:
  - "[[wiki/sources/How to Build Your Own LLM Knowledge Base|How to Build Your Own LLM Knowledge Base]]"
---

# Personal AI Knowledge Systems

## Overview

Personal AI knowledge systems are workflows where captured sources are preserved and gradually synthesized into a durable, queryable knowledge base.

## Current Pattern

- Preserve source material in `.raw/`.
- Let Codex maintain linked notes in `wiki/`.
- Use the hot cache and index to avoid rereading every source.
- Query the wiki for accumulated understanding rather than asking AI to reconstruct context from scratch.

## Sources

- [[wiki/sources/How to Build Your Own LLM Knowledge Base|How to Build Your Own LLM Knowledge Base]]
