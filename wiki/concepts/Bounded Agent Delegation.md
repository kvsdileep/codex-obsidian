---
type: concept
title: "Bounded Agent Delegation"
created: 2026-05-06
updated: 2026-05-06
status: seed
tags:
  - concept
  - agents
related:
  - "[[wiki/concepts/Layered Agent Architecture|Layered Agent Architecture]]"
sources:
  - "[[wiki/sources/Claude Code 5-Layer Agent Development Kit|Claude Code 5-Layer Agent Development Kit]]"
---

# Bounded Agent Delegation

## Definition

Bounded agent delegation sends a specific task to a specialized agent with its own context, tools, and constraints, then returns only the result to the main thread.

## Why It Matters

Delegation keeps the main context cleaner and prevents one general agent from accumulating every exploratory path, log, and side task.

## Sources

- [[wiki/sources/Claude Code 5-Layer Agent Development Kit|Claude Code 5-Layer Agent Development Kit]]
