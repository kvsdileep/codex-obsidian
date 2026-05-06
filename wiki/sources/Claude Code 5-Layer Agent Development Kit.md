---
type: source
title: "Claude Code 5-Layer Agent Development Kit"
source_type: article
author: "Youssef Hosni"
url: "https://todatabeyond.substack.com/p/claude-codes-5-layer-agent-development"
source_path: ".raw/articles/Claude Code’s 5-Layer Agent Development Kit_ The Architecture Most Engineers Are Missing.md"
created: 2026-05-06
updated: 2026-05-06
status: seed
tags:
  - source
  - article
  - agent-architecture
related:
  - "[[wiki/topics/Agent Architecture|Agent Architecture]]"
  - "[[wiki/entities/Claude Code|Claude Code]]"
sources:
  - ".raw/articles/Claude Code’s 5-Layer Agent Development Kit_ The Architecture Most Engineers Are Missing.md"
---

# Claude Code 5-Layer Agent Development Kit

## Summary

This clipped article frames [[wiki/entities/Claude Code|Claude Code]] as an agent runtime rather than only a coding assistant. It argues that reliable agent systems need distinct layers for memory, knowledge, guardrails, delegation, and distribution.

## Key Claims

- Many agent failures are architectural failures, not prompt failures.
- `CLAUDE.md` acts as a memory and policy layer.
- Skills act as a modular knowledge layer.
- Hooks provide deterministic guardrails around tool use and workflow events.
- Subagents provide bounded delegation and keep side work out of the main context.
- Plugins package agent behavior for reuse across teams and projects.

## Entities

- [[wiki/entities/Youssef Hosni|Youssef Hosni]]
- [[wiki/entities/Claude Code|Claude Code]]
- [[wiki/entities/Anthropic|Anthropic]]

## Concepts

- [[wiki/concepts/Layered Agent Architecture|Layered Agent Architecture]]
- [[wiki/concepts/Agent Development Kit|Agent Development Kit]]
- [[wiki/concepts/Deterministic Agent Guardrails|Deterministic Agent Guardrails]]
- [[wiki/concepts/Bounded Agent Delegation|Bounded Agent Delegation]]
- [[wiki/concepts/Agent Capability Distribution|Agent Capability Distribution]]

## Follow-Up Questions

- Which of these layers does Codex expose directly, and which need to be simulated through repo conventions?
- Should this vault define its own reusable ingestion skills or keep using `AGENTS.md` plus prompts?
