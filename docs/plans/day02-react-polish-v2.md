# Day02 React deck polish — no mascots, prettier UI, better music

## Goal

Take the existing **Vite + React** instructor deck under `app/` and make it **presentation-grade**: cleaner visual system, richer hover/focus motion, **better ambient music + SFX** — and **fully remove** cute cat / focus-robot / BuddyScene / Three.js character layer.

**Done when:** `cd app && npm run build` succeeds; no BuddyScene/cat/robot strings; music toggle plays a noticeably richer ambient bed; deck still has 18 slides from `content.json`; deployable with `base: '/k5-day02-instructor-slides/'`.

## Repo / cwd

`/Users/minhlethanh/Documents/k5-day02-instructor-slides`

## STOP

- Do **not** invent new lab scores/CP times — slide HTML stays from `app/src/slides/content.json` (may tweak wrapper chrome only).
- Do **not** re-add cats, robots, mascots, “Cute” buddy toggle, or character 3D models.
- Prefer removing `@react-three/fiber` / `drei` / `three` **unless** used only for a subtle non-character background (soft particles/gradient mesh). If keeping Three, it must be background-only and optional behind reduced-motion.
- No copyrighted Spotify/YouTube embeds. Music = improved **Web Audio** procedural composition (or tiny CC0 file under `app/public/audio/` if needed).
- Root `index.html` (legacy monolith) may stay but must not be the deploy source; do not grow cat CSS there — optionally strip engage/buddy blocks from root `index.html` for cleanliness OR leave untouched if out of files fence. Prefer strip buddy bits from root if touching it.

## Context (current HEAD)

- App already ports 18 slides: `app/src/slides/content.json`, shell in `app/src/App.tsx`, styles `app/src/styles/deck.css`.
- `BuddyScene.tsx` + pointer mascots must go.
- `vite.config.ts` already `base: '/k5-day02-instructor-slides/'`.
- Keyboard/timer patterns exist — keep them (←/→, P/R, M/B, N, F).

## Required product changes

### 1) Remove mascots
- Delete `app/src/components/BuddyScene.tsx` (or empty remove import).
- Remove buddy state, localStorage `deck_buddies_off`, Cute button, pointer→character coupling from `App.tsx`.
- Remove buddy/cat/robot CSS from `deck.css`.
- Uninstall unused three/r3f/drei deps from `package.json` if no longer used (run npm uninstall).

### 2) Visual polish (no characters)
- Refined teal/sky/slate light theme (keep Be Vietnam Pro — Vietnamese safe). Avoid purple/cream-terracotta/Inter.
- Stronger hierarchy: glass header, softer shadows, clearer CP rail, nicer progress dots.
- Hover: cards lift + light sheen; buttons/rail micro-scale; optional cursor spotlight (CSS radial only, no mascot).
- Slide transitions: fade/slide + stagger children (respect `prefers-reduced-motion`).
- Optional: subtle animated gradient or soft particle canvas background (2D canvas OK; Three only if background-only).

### 3) Better music + SFX
- Keep default **muted/off** until user gesture.
- **Music (B):** multi-layer ambient — low pad + gentle filtered arpeggio + slow LFO; richer than single drone; fade 0.8s; pause on `visibilitychange`; generationId cleanup like prior fix.
- **SFX (M):** whoosh on slide change, soft chimes for timer start / warn / zero / kickoff.
- Separate toggles SFX vs Music; README documents keys.

### 4) Docs / deploy notes
- Update root `README.md` + `app/README.md`: how to `npm install && npm run build`, preview, Pages path, no mascots.
- Build output `app/dist` is what gets copied to GitHub Pages folder.

## Steps

1. Read `App.tsx`, `deck.css`, `package.json`, `content.json` (length only).
2. Remove BuddyScene + three deps if unused.
3. Polish CSS/layout + hover/spotlight.
4. Implement richer `audio/` module (e.g. `app/src/audio/engine.ts`) and wire toggles.
5. `npm run build` green.
6. Optionally strip buddy blocks from legacy root `index.html`.

```files
app/src/*
app/src/**/*
app/src/App.tsx
app/src/main.tsx
app/src/audio/*
app/src/audio/**/*
app/src/components/*
app/src/components/**/*
app/src/styles/*
app/src/styles/**/*
app/src/slides/*
app/src/slides/**/*
app/package.json
app/package-lock.json
app/vite.config.ts
app/index.html
app/README.md
README.md
index.html
docs/plans/day02-react-polish.md
```

```checks
test -f app/src/App.tsx
test -f app/src/slides/content.json
! rg -q "BuddyScene|buddy-cat|buddy-robot|Meow" app/src
rg -q "Be Vietnam Pro|Be\\+Vietnam\\+Pro" app/src app/index.html
rg -q "AudioContext|webkitAudioContext" app/src
rg -q "prefers-reduced-motion" app/src
cd app && npm run build
python3 -c "import json; d=json.load(open('app/src/slides/content.json')); assert isinstance(d,list) and len(d)>=16; print('slides', len(d))"
```

## Out of scope

- Rewriting slide educational copy in content.json (except fixing broken HTML wrappers if build requires).
- Next.js migration (stay Vite+React for GH Pages).
- Push/PR (Cursor/user pushes after approve).

## Worklog plan

- Title: Day02 React polish no-mascot + music
- WHY: Cleaner framework deck, better music, remove cute mascots per user
- Notion sync: no
