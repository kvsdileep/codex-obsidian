Title: Claude

URL Source: https://claude.ai/share/23974ed4-62ab-4457-92c8-6bda79477f42

Markdown Content:
# Claude

Agentic AI training curriculum for enterprise SDLC

This is a copy of a chat between Claude and a user. Content may include unverified or unsafe content that do not represent the views of Anthropic. Shared snapshot may contain attachments and data not displayed here.

Report

## You said: Hey Claude—I just added the “b2b-curriculum” skill.

Hey Claude—I just added the “b2b-curriculum” skill. Can you make something amazing with it?

Client - Cheersin Interactive Category Requirement Details Program Overview Customized, advanced AI training focused on Agentic AI across the SDLC. Designed for ~20 cross-functional participants (Developers, BAs, PMs, QA, Data, UX). Strong focus on real-world use cases, automation, and security/governance. Customization Approach Curriculum will be tailored based on questionnaire inputs, internal use cases, tools, and technical environment to ensure maximum relevance and business impact. Participants (Batch Size) ~20 participants across roles. Batch structure to be finalized post curriculum review. Preferred Duration Weekday sessions; 2 hours per session on alternate days. Primary Learning Objective Build a structured, scalable, and measurable AI-enabled SDLC model and expand Agentic AI ecosystem across business use cases. Key Learning Objectives • Improve engineering productivity using AI across SDLC• Reduce delivery timelines via automation• Improve quality & consistency through standardized AI workflows• Build an AI-first engineering culture• Establish governance (hallucination control, security, IP/privacy, validation) Training Expectation Highly practical, implementation-driven, aligned with real enterprise SDLC scenarios (not generic awareness). Tools / Platforms to be Covered LiteLLM – AI gateway, guardrails, usage trackingOllama – Local model orchestrationWeaviate – Vector DB for proprietary dataLangfuse – LLM observability & evaluationDroids ([factory.ai]([http://factory.ai](http://factory.ai/))) – CLI-based agent automation across SDLCCrewAI – AI agents for business workflows Expected Business Outcomes • ~70% reduction in operating cost (6 months target)• Increased engineering productivity• Faster software delivery timelines• AI-driven automation across SDLC Participant Personas Development Team – Full-stack devs (4–8 yrs), Module Leads (10+ yrs)Business Analysts – 5 yrs experienceData Team – Analysts (2–4 yrs, ETL, analytics, big data)Program Manager – 15–20 yrs (strategy, governance)UX Team – 5+ yrs (design systems)QA Team – Analysts (5+ yrs), Sr. QA (10+ yrs) AI Familiarity Level Moderate exposure to AI tools across teams; need structured, advanced implementation knowledge. Top Problem Statements • Converting AI adoption into measurable business impact• Building enterprise-grade Agentic AI ecosystem• Creating unified AI-driven SDLC, governance & workflows Budget Range Under evaluation; exploring vendors. Proposal requested for internal assessment. Primary Tools / Ecosystem Microsoft O365 (Teams, Email, SharePoint) Seniority Levels Associate to Senior roles, Module Leads, Program Managers, SVP/Dept. Head Preferred Delivery Mode Online (Remote)

Show more

May 4

## Claude responded: I'll build this curriculum for Cheersin Interactive.

I'll build this curriculum for Cheersin Interactive. Let me first read the b2b-curriculum skill to follow the right approach.

Read the b2b-curriculum skill

Read the b2b-curriculum skill

Let me read the truncated middle section and the template:

Viewed 3 files

Viewed 3 files

Now let me also check the xlsx skill briefly:

Read the xlsx skill

Read the xlsx skill

I have everything I need. Now let me think through this curriculum carefully before building it.

This is a serious enterprise engagement — Cheersin Interactive wants advanced, implementation-driven Agentic AI training across the SDLC for ~20 cross-functional participants (Devs, BAs, PMs, QA, Data, UX). They've named a specific tool stack (LiteLLM, Ollama, Weaviate, Langfuse, Droids/factory.ai, CrewAI), and they're asking for 2-hour sessions on alternate weekday afternoons, online.

Key design decisions I'm making:

1.   **This is a multi-session program, not a workshop.** With 2-hour sessions on alternate days, I need to plan it as a structured cohort — probably 10-12 sessions over ~4-5 weeks.
2.   **Mixed audience needs tracking.** Devs/QA/Data are technical; BAs/PMs/UX are less so. The skill says start with shared foundation, branch into tracks, reconvene. With 2-hour sessions that's tricky — better approach: keep most sessions plenary but have 1-2 role-specific deep dives.
3.   **The 70% cost reduction claim is aspirational.** I should not promise this in the curriculum — just say the program builds the foundation toward it.
4.   **Tool stack discipline.** Six tools is a lot, but they're explicitly named. I'll map each to specific sessions so it's not just a tool zoo.
5.   **Honest framing.** This is a learning program, not a consulting engagement. I won't promise "AI-driven SDLC governance framework delivered" — I'll promise sessions where they explore, prototype, and discuss it.
6.   **The audience is moderately AI-literate already.** I can skip "what is AI" entirely and start at agentic concepts.

Let me design the structure. With ~24 hours of contact time (12 sessions × 2 hours), I'll structure it in 4 phases:

*   **Phase 1: Foundations of Agentic AI in the Enterprise (Sessions 1-3)** — Agentic vs generative; SDLC mapping; governance frame
*   **Phase 2: The Core Stack (Sessions 4-7)** — LiteLLM gateway, Ollama, Weaviate, Langfuse — hands-on
*   **Phase 3: Agents in the SDLC (Sessions 8-10)** — Droids for engineering, CrewAI for business workflows, role-specific use cases
*   **Phase 4: Integration & Governance (Sessions 11-12)** — Hallucination control, security/IP, capstone showcase

Let me build this now.

Ran 2 commands, created a file

Ran 2 commands, created a file

Built cleanly. Let me verify the output by opening it and checking dimensions before delivering:

Ran 2 commands, read a file

Ran 2 commands, read a file

Done. Six sheets: Overview, Program Roadmap, Curriculum (the main one — all 12 sessions blocked out minute-by-minute), Tool Stack, Outcomes, and Notes & Assumptions.

A few design calls worth flagging so you can push back before sending it to Cheersin:

**Structured it as a 12-session cohort, not a workshop.** Their brief says 2 hours on alternate weekday afternoons, but never names a session count. I sized it at 24 hours total (~4-5 weeks calendar), which is the smallest amount of time I think can genuinely cover six tools hands-on plus governance. If they want it shorter, the honest cuts are S5 (Ollama) and one of S8/S9 — not S7 (Langfuse) or S11 (governance).

**Most sessions are plenary; only S8 and S9 split into tracks.** The brief lists six personas but says batch structure is to be finalised post review. With 20 people, two tracks of ~10 work; three would fragment too much. Engineering (Devs, QA, Module Leads) gets Droids; Delivery (BAs, PMs, Data, UX) gets CrewAI. They reconvene from S10 onwards.

**I deliberately did not promise the 70% cost reduction.** It's named explicitly as a non-promise on the Outcomes sheet, with the framing that the program builds the foundation and the implementation work that follows is where that number gets earned. This protects you if the client's CFO ever asks "the deck said 70%."

**Use cases stay illustrative.** I don't know Cheersin's actual business beyond "interactive," so the SDLC mapping in S2 is built _with_ the cohort rather than handed to them. If you have real Cheersin context I should fold in (specific products, dominant SDLC stack, known pain points), let me know and I'll thread it through.

**Open questions worth raising with Cheersin before kickoff** are all on the Notes & Assumptions sheet — Droids licensing, sandbox hosting, LLM API keys, batch sizing past 25.

Want me to adjust any of this — shorten the program, change the track split, fold in specific Cheersin context, or strip the "what this does not promise" section if it reads too cautious?

## You said: give me 1hr based blocks - otherwise it is too much

give me 1hr based blocks - otherwise it is too much

May 5

## Claude responded: Got it — switching to 1-hour blocks.

Got it — switching to 1-hour blocks. Before I rebuild, I want to make sure I get the structural change right because "1-hour blocks" can mean two different things and they produce very different curricula:

## You said: [User dismissed — do not proceed, wait for next instruction]

[User dismissed — do not proceed, wait for next instruction]

May 5

## Claude responded: Got it — waiting for your next instruction.

Got it — waiting for your next instruction.

## You said: i want to export this chat

i want to export this chat

7:12 AM

## Claude responded: To export this chat, you'll need to use Claude's built-in export feature rather than something I can do from here.

To export this chat, you'll need to use Claude's built-in export feature rather than something I can do from here. The options depend on what you need:

**For a single conversation (this one):** Open the conversation menu (usually three dots near the top of the chat) and look for a Share or Export option. On claude.ai you can typically copy a shareable link, or copy the full text manually.

**For your full chat history:** Go to Settings → Privacy → Export data. Anthropic emails you a download with all your conversations as JSON.

**Quickest workaround if neither works:** Select all the text in this conversation and paste it into a doc. If you want, I can also reproduce the curriculum content (all six sheets' worth) as a single Markdown document you can save — that would capture the substantive output without needing the chat scaffolding around it.

Want me to do that?

[Try Claude yourself](https://claude.ai/new)
