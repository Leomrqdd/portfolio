# portfolio-leo

Personal portfolio — front-only, single scrolling page. Software / infra dev, Solana validator ops.

## Stack

- **Vite + React + TypeScript**
- **Tailwind CSS v4** (CSS-first config in `src/index.css`)
- **motion** for animations (wired, applied later)
- Google Fonts: **Silkscreen** (pixel headings) + **JetBrains Mono** (body / mono)

## Visual direction

"Pixel hybrid" — terminal + low-tech 8-bit, sober. Hard corners (no border-radius),
2px borders, hard 8-bit shadows (`4px 4px 0 #060912`, no blur). Dark blue palette.

## Getting started

```bash
npm install
npm run dev           # local dev server (web3, default)
npm run dev:general   # local dev server (general variant)
npm run build         # type-check + production build, web3
npm run build:general # production build, general
npm run preview       # preview the production build
```

The build picks a content set via `VITE_VARIANT` (`web3` by default, or `general`). GitHub Pages sets `web3`; the Vercel subdomain sets `general`.

## Structure

```
src/
  data/
    types.ts         # shared content types
    web3.ts          # lmrqd.xyz copy
    general.ts       # subdomain copy
    index.ts         # selects a variant from VITE_VARIANT
  index.css          # Tailwind import + @theme design tokens
  App.tsx            # page composition
  components/
    Section.tsx      # shared SectionTitle
```

All content lives in `src/data/` — edit there, not in components.

## Status

Components are locked. Animations (terminal auto-typing, LEO glitch, pixel light-up,
scroll reveals) are not implemented yet — current state renders the final, static layout.
