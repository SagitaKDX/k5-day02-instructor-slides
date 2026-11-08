# Plan Implementation: K5 Day02 Instructor Slides Deck

## Overview

Live-presentable instructor deck for **K5 · L3 · Day 02 — Discovery & Problem Framing**.
Single-file `index.html` modeled on `reference/day12-index.html` with Vietnamese-safe typography, motion, optional Web Audio slide sounds (default muted), 240' lab timer, CP rail jump, keyboard/click/swipe nav, and speaker notes (`N`).

## Slide Mapping (18 Slides, data-index 0–17)

0. **Title & Overview:** K5 · L3 · Day 02 — Discovery & Problem Framing (VinUni AI20k, 240', 2 diamond halves, individual + group).
1. **Format & Double Diamond:** Individual (CP0, 1, 2, 7) + Group (CP3–6), one shared repo forked by team leader.
2. **Learning Goals:** 4 goals covering JTBD, Mom Test, Problem Statement v0/v1, AI Ladder (No AI / Rule / Workflow / Agent).
3. **Schedule 240':** Full exact timebox table for CP0–CP7 with 2 breaks of 10'.
4. **Repo & File Naming:** `K5-<L3A/L3B>-DAY02-HoVaTen-MSSV-DiscoveryProblemFraming` & `report/individual/MSSV_HoTen.md`.
5. **Rules & AI Boundaries:** Explicit permissions and prohibitions for AI at every checkpoint.
6. **CP0 — Đọc bài mẫu (15'):** Understand deliverable example, candidate convergence, small-scope Go.
7. **CP1 — Scan 5+ problems (25'):** 4 lenses (repeat, time-consuming, heavy reading, pain from others), Job Story without solution, real metrics.
8. **CP2 — Top 3 Cards & Draft Workflow (35'):** Card fields, draft workflow with step durations and bottleneck, skeptic PM AI critique.
9. **Bridge / Break 10':** Transition from Discover (expansion) to Define (convergence).
10. **CP3 — Hội tụ OST (30'):** No-AI pitching, clustering, Opportunity Solution Tree, 7 criteria scoring, candidate selection with rejection reasons.
11. **CP4 — Kiểm chứng Mom Test & Research (30'):** Past behavior inquiry, disconfirming evidence, 2-3 market solutions with live links, NO fabrication.
12. **CP5 — Before/After & PS v0 (45'):** Before/After workflow with HITL & fallback, PS v0 with 6 fields (Actor, Workflow, Bottleneck, Impact, Metric, Boundary).
13. **CP6a — AI Intervention Ladder:** No AI / Rule / Workflow / Agent hierarchy, minimal intervention principle, PAIR questions.
14. **CP6b — PS v1, 4 Risks & Go/Not Yet/No-Go:** Marty Cagan 4 risks (Value, Usability, Feasibility, Viability), measurable stop threshold, PS v1 refinements.
15. **CP7 — Reflection cá nhân (15'):** Individual reflection (&gt;200 words, no AI writing), role logging, 6-link core chain.
16. **Rubric:** 40 individual + 60 team = 100 points, bonus &le; 10, heavy penalty breakdown.
17. **Checklist & Kickoff:** Submission checklist, deadline reminders, CP0 kickoff CTA button.

## Key Technical Decisions

- **Typography:** `Be Vietnam Pro` (weights 400, 500, 600, 700, 800) + `JetBrains Mono` for mono elements.
- **Audio:** Web Audio API oscillator sweep (sine 280Hz &rarr; 520Hz &rarr; 220Hz), muted by default, saved in `localStorage`.
- **Accessibility:** `prefers-reduced-motion: reduce` media query disables transitions, transforms, and audio.
- **Responsive & Projector-friendly:** CSS grid, clamp() typography, high contrast colors (Teal, Sky, Slate, Emerald, Amber, Rose).
