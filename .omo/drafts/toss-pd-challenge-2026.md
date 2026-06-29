---
slug: toss-pd-challenge-2026
status: plan-written
intent: unclear
pending-action: execute .omo/plans/toss-pd-challenge-2026.md only if user asks to start production work
approach: Build a decision-complete plan for a differentiated Toss Product Designer Challenge submission. Treat the task as a product-strategy/design artifact, not implementation. Default thesis: the core scheduling problem is not "find a common empty slot"; it is helping the meeting owner make and communicate a defensible decision when hard constraints, soft preferences, role importance, and unknown context conflict.
---

# Draft: toss-pd-challenge-2026

## Components (topology ledger)
<!-- Lock the SHAPE before depth. One row per top-level component that can succeed or fail independently. -->
<!-- id | outcome (one line) | status: active|deferred | evidence path -->
| C1 | Official challenge and application-form requirements are confirmed, including exact questions and submission constraints. | active | https://toss.im/career/designer-challenge-2026; https://api-public.toss.im/api/v3/ipd-eggnog/career/jobs/7777462003 |
| C2 | Toss evaluation intent is translated into an actionable rubric: problem definition, solution design, visual completeness, and Product Designer role fit. | active | https://toss.im/career/designer-challenge-2026; Greenhouse job API metadata |
| C3 | Existing calendar/scheduling UX patterns are mapped so the plan can avoid obvious poll/ranking-only answers. | active | Google Calendar Help; Calendly Meeting Polls; Doodle Group Poll official pages |
| C4 | A differentiated problem thesis and evidence model are selected. | active | official task text plus competitor pattern analysis |
| C5 | A focused prototype scope is defined with screens, scenario data, and must-not-have guardrails. | active | official task notice: show actual use flow; focus on core flow; no whole-app branding |
| C6 | The three written answers are planned as a coherent case narrative, not separate essays. | active | application-form questions from job API |

## Open assumptions (announced defaults)
<!-- Intent is UNCLEAR: research resolves ambiguity, defaults are adopted (not asked), and each is surfaced in the plan's human TL;DR for veto. -->
<!-- assumption | adopted default | rationale | reversible? -->
| Intent route | UNCLEAR | User wants a deep, differentiated approach and asks the planner to decide how to approach before execution. Asking many preferences would offload the planning work. | Yes |
| Primary artifact | Figma prototype plus structured written answers | Challenge accepts Figma/web/GitHub/video URLs, but the rubric rewards design reasoning and a visible flow. Figma is fastest for high visual completeness without over-indexing on engineering. | Yes |
| Surface | Desktop web organizer flow with one lightweight participant confirmation surface if needed | Same-company scheduling is plausibly desk/workflow-heavy; desktop calendar density makes trade-offs legible. Participant confirmation can be shown as a small secondary surface only if it clarifies the core flow. | Yes |
| Differentiator | "Defensible scheduling decision" over "availability matching" | Most applicants will build availability overlays, votes, rankings, or AI recommendations. The official prompt emphasizes conditions, required/optional attendance, and "situations"; the better product problem is decision confidence and explainable trade-off. | Yes |
| Research posture | Desk research + scenario stress tests, not claims of real user interviews unless the user later provides them | The plan must be executable without waiting on human interview logistics. It can still produce credible qualitative reasoning from official task constraints and competitor UX. | Yes |
| AI usage | Use AI only for exploration/variant generation; do not make "AI scheduler" the product's whole idea | Official notice allows AI tools, but evaluation is on problem definition and product thinking. An AI wrapper would be a common and shallow answer. | Yes |

## Findings (cited - path:lines)
- Official landing page title/description: "토스 프로덕트 디자이너 챌린지 2026" and "정답이 없는 문제, 당신의 잠재력을 보여주세요." Source: https://toss.im/career/designer-challenge-2026.
- Challenge purpose: prior company work is not important; only the submitted solution evaluates potential. Source: official landing page and job API metadata.
- Task: design the experience for six same-company colleagues to schedule a 1-hour meeting by next week; constraints include lunch-after avoidance, offsite-heavy days, required attendees, and optional attendees. Source: official landing page task section and job API metadata.
- Submission questions confirmed from application-form API:
  1. "사용자의 어떤 문제를 발견했나요? 그것이 왜 문제라고 생각했나요?" Additional description: "기존 캘린더 서비스들의 UX에서 발견한 문제 혹은 주제 안에서 새롭게 정의한 문제에 대해 알려주세요."
  2. "그 문제를 어떻게 해결했나요?"
  3. "왜 이 방식으로 설계했나요?" Additional description: "주요 의사결정의 이유를 알려주세요. 고민했던 대안, 포기한 범위가 있다면 함께 적어주세요."
- Submission URL is required; Figma prototype, website, GitHub, and video links are accepted; Google Drive links cannot be submitted. Source: official landing page and job API question "과제 작업 제출물 URL".
- Evaluation dimensions: problem definition, solution design, visual completeness. The official wording emphasizes finding/defining the user's essential problem, reflecting clear hypotheses and intent in the solution, and high-quality visual/UI details. Source: official landing page evaluation section.
- Notice constraints: the artifact must show actual product usage flow; a result screen without problem definition is off-brief; whole-app flow, branding, and visual concept are not evaluated; copying existing screens or only improving visual style is off-brief. Source: official landing page notice section.
- Product Designer role fit: Toss describes the PD as the team's sole designer with responsibility/authority for UX, working with PO/developers/data analysts, and considering business/policy/operation as UX-affecting surfaces. Source: official landing page FAQ and job API metadata.
- Required capability signals: define root problems with qualitative/quantitative evidence; propose screens with clear hypotheses; turn complex business rules and technical constraints across mobile/PC into intuitive experience; communicate design value persuasively to business/development/policy colleagues. Source: job API metadata.
- Existing service baseline: Google Calendar supports comparing calendars / appointment schedules; Calendly and Doodle meeting polls focus on proposing/voting/selecting times. These patterns solve availability capture and basic consensus, but they do not foreground the social/decision burden of explaining why one trade-off is acceptable. Sources: Google Calendar Help, Calendly Meeting Polls, Doodle Group Poll official pages.
- Current API does not expose separate maxLength/maxlength or visible per-question character limits for the three challenge answer fields. Source: job API question fields and app bundle string scan.

## Decisions (with rationale)
- Lead with the problem thesis: "The hardest part is not identifying a shared empty slot; it is helping the organizer make a fair, explainable decision when availability, preference, role criticality, and uncertainty conflict."
- Do not frame the product as another poll. Polls create more input but leave the organizer to interpret the answer, chase missing context, and justify the final choice.
- The prototype should make invisible scheduling context visible as typed constraints: hard unavailable, soft avoid, role criticality, uncertainty, and meeting urgency.
- The central UI object should be a "decision card" for each recommended slot: selected time, confidence, who is satisfied, what trade-off remains, why this is better than alternatives, and what one-tap confirmation is still needed.
- The final share step should include a short "decision receipt" so attendees understand why this time was chosen and can raise only a targeted exception. This distinguishes the solution from majority voting.
- Written answers should explicitly name rejected alternatives: full polling table, pure calendar overlay, AI auto-scheduler, full team calendar app, and brand-heavy visual concept.

## Scope IN
- Official requirement confirmation and exact question mapping.
- Competitive UX pattern map for Google Calendar, Calendly, Doodle, and common availability-poll flows.
- Differentiated problem definition, hypothesis, and scenario model.
- Prototype plan: 8-12 high-fidelity screens, likely Figma, focused on the organizer's core flow and optionally a single attendee confirmation moment.
- Answer plan for the three official questions, including what evidence each paragraph must prove.
- Visual/interaction guardrails aligned to Toss's rubric without copying Toss UI.
- Agent-executable QA plan for final artifact: link access, flow completeness, 90-second evaluator comprehension, and submission constraints.

## Scope OUT (Must NOT have)
- Do not build a full calendar product, account system, or production web app unless the user later changes scope.
- Do not make the solution a generic "AI finds the best time" wrapper.
- Do not rely on "everyone votes on a poll" as the main product insight.
- Do not spend time on whole-app branding, onboarding, marketing pages, or visual concept outside the core flow.
- Do not claim real user research that was not actually conducted.
- Do not copy Toss app screens or treat Toss visual style as the point of the submission.

## Open questions
- None blocking for the planning brief. The recommended direction is reversible at the approval gate.

## Approval gate
status: plan-written
<!-- When exploration is exhausted and unknowns are answered, set status: awaiting-approval. -->
<!-- That durable record is the loop guard: on a later turn read it and resume at the gate instead of re-running exploration. -->
completed action: wrote the full decision-complete plan into .omo/plans/toss-pd-challenge-2026.md.
pending action: wait for the user's explicit instruction before producing the actual Figma/web artifact or written submission draft.
