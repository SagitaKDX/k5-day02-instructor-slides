# Day02 slides — richer animation + SFX + ambient music

## Goal

Upgrade existing live instructor deck `index.html` so students feel more engaged while the instructor presents: **more intentional animations**, clearer **SFX on transitions/timer**, and **optional ambient background music** (Web Audio synth loop — no copyrighted tracks). Keep Vietnamese typography (Be Vietnam Pro), responsive layout, and faithful lab content.

**Done when:** checks exit 0; mute/music toggles work; reduced-motion disables heavy motion + audio; content/text of CPs/scores unchanged.

## Repo / cwd

`/Users/minhlethanh/Documents/k5-day02-instructor-slides`

## STOP

- Do **not** invent new CP times, scores, or repo naming — only motion/audio/UI chrome.
- Do **not** modify `content/**` or `reference/**`.
- No npm. No external copyrighted MP3/CDN audio. Prefer **Web Audio API** synthesized beds + SFX. Optional tiny local generated assets under `assets/` only if needed.
- If `index.html` missing → **blocked**.

## Current baseline (verbatim)

Slide reveal (~L270+):

```css
.slide {
  opacity: 0; visibility: hidden;
  transform: translateY(16px) scale(0.995);
  transition: opacity 0.35s ..., transform 0.35s ..., visibility 0.35s;
}
```

SFX today: only short `playSlideWhoosh()` sine blip (~L2067+); `isMuted` default true; key `M`.

Almost no per-element stagger / title entrance / card pop beyond whole-slide fade.

## Required upgrades

### A) Motion (at least 4 intentional patterns)

1. **Slide enter**: keep fade/slide; slightly longer ease; direction aware optional (next vs prev).
2. **Stagger children** on `.slide.active`: titles, `.slide-card` / cards, table rows, badges — cascade `animation-delay` via CSS `.slide.active .slide-card:nth-child(...)` or JS class `entered`.
3. **CP rail pulse** when active node changes (subtle scale/glow on `.active-rail`).
4. **Timer urgency**: keep/enhance pulse under 2:00; optional soft shake when overtime.
5. **Kickoff CTA**: gentle breathing pulse on `.btn-kickoff`.
6. **Progress dots**: scale-up on active.

All gated by:

```css
@media (prefers-reduced-motion: reduce) {
  /* disable stagger/keyframes; near-instant slide switch; no music/SFX */
}
```

### B) Sound design (Web Audio)

Keep default **muted** until instructor gesture (browser autoplay policy).

| Event | Sound |
|-------|--------|
| Slide change | whoosh/chirp (improve current) |
| Timer start | soft ascending chime |
| Timer ≤120s | rare soft tick (every 30s) OR one warn blip once when crossing 120s |
| Timer hit 0 | distinct soft alarm (not harsh) |
| Kickoff CTA | brighter confirm chime |
| CP rail jump | short tick |

API shape suggestion (names free as long as clear):

- `ensureAudio()`
- `playSfx('whoosh'|'chime'|'warn'|'tick'|'kickoff')`
- respect `isMuted` + reduced-motion

### C) Ambient music (engage)

- Synthesize a **looping ambient bed** (pads / soft arpeggio, low volume ~0.03–0.06 gain) via oscillators + filters — calm classroom vibe, not EDM.
- Separate toggle from SFX: buttons **Mute SFX (`M`)** and **Music (`B`)** or combined master mute + music toggle.
  - Recommended UX: master **Sound** panel — `🔇/🔊` SFX (M), `🎵` Music (B). Both default **off**.
- Music starts only after user enables it (resume AudioContext on click).
- Fade in/out 0.8s; pause music when tab hidden (`visibilitychange`); stop on reduced-motion.
- Never autoplay music on load.

### D) Polish

- Update header buttons + README keyboard cheatsheet (`M` SFX, `B` music).
- Preserve: 18 slides, Be Vietnam Pro, DAY02 content, kickoffLab force-start, `data-completed-through` rail, metaKey guard, localStorage try/catch.
- Do not bloat past ~180KB if avoidable; keep single-file preferred.

## Steps

1. Read current `index.html` audio + CSS slide/header sections.
2. Add CSS keyframes + stagger + rail/dot/CTA/timer motion; wire reduced-motion.
3. Expand Web Audio SFX helpers; hook show()/timer/kickoff/rail.
4. Add ambient music engine + toggle UI + key `B`.
5. Update README present section for sound/music.
6. Run checks.

```files
index.html
README.md
assets/**
docs/plans/day02-slides-engage.md
```

```checks
test -f index.html
rg -q "Be Vietnam Pro" index.html
rg -q "AudioContext|webkitAudioContext" index.html
rg -q "prefers-reduced-motion" index.html
rg -q "@keyframes" index.html
python3 -c "import pathlib,re; t=pathlib.Path('index.html').read_text(encoding='utf-8'); assert t.count('class=\"slide')>=16; assert 'DAY02' in t; assert 'playSfx' in t or 'playSlideWhoosh' in t; assert 'music' in t.lower() or 'Ambient' in t or 'startMusic' in t or 'toggleMusic' in t; assert '@keyframes' in t; print('ok', t.count('@keyframes'), 'keyframes', t.count('class=\"slide'), 'slides')"
```

## Out of scope

- Changing lab copy/scores/CP structure (except tiny labels for new buttons).
- Push/PR.
- External Spotify/YouTube embeds.

## Worklog plan

- Title: Day02 slides engage motion+audio
- WHY: Make instructor deck more fun with animation, SFX, ambient music
- Notion sync: no
