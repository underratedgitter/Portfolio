# Multi-Agent Engineering Protocols

This repository uses a streamlined 3-agent development pipeline:

## 1. Gemini (Role: Lead Architect)
* **Scope**: Ingests repo context, clarifies domain models (`CONTEXT.md`), and writes comprehensive technical specifications.

## 2. Claude Code (Role: Implementation Engineer)
* **Scope**: Builds features, UI components, styling, and application logic (`src/`).
* **Execution**: Takes the Gemini spec, decomposes it with `/to-tickets`, and implements the code test-first.

## 3. Codex (Role: QA, Testing & Code Reviewer)
* **Scope**: Combined Verification Phase.
  - **Testing**: Writes and executes automated tests (`/tdd`), asserting expected edge cases and behaviors.
  - **Code Review**: Audits the implementation (`/code-review`), checking for regressions, performance issues, and clean code conventions before commit.
