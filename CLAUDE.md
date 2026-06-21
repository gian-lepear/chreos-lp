# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Single-page marketing landing page (Portuguese, pt-BR) for **Chreos** — "hot leads" platform for lawyers handling real-estate auction stays (sustar leilões de imóveis). No backend: contact form redirects to WhatsApp. Two routes: `/` (home), `/privacidade`.

## Commands

Package manager: **pnpm** (Node 20.19+, pnpm 10+). CI/prod usa Node 24 LTS.

- `pnpm dev` — dev server, hot reload, `http://localhost:5173`
- `pnpm build` — production build to `dist/public/`
- `pnpm preview` — serve production build
- `pnpm typecheck` — `tsc --noEmit`
- `pnpm lint` — `eslint . --fix`
- `pnpm format` — `prettier --write .`

No tests.

## Architecture

- **Stack:** React 19 + TypeScript, Vite 7, Tailwind CSS 4 (`@tailwindcss/vite`, no `tailwind.config` — theme in `src/index.css` via CSS variables), Framer Motion (animations), Wouter (routing), React Hook Form + Zod (form validation), shadcn/ui components.
- **Path aliases:** `@/` → `src/`, `@assets/` → `public/attached_assets/`.
- **Entry:** `src/main.tsx` → `src/App.tsx` (router + providers) → `src/pages/home.tsx`.
- **Page content** mostly in two big files: `src/pages/home.tsx` (hero, live ticker, section orchestration) and `src/pages/home-sections.tsx` (bulk of marketing sections). Edit these for copy/layout.
- **Static demo data** (fake auction tickers, stats) in `src/data/landing.ts` — drives `LiveTicker` and stat counters. Not real.
- **`src/components/`** holds app components (`CTAForm.tsx`, `Indicator.tsx`); `src/components/ui/` is generated shadcn/ui library (don't hand-edit unless customizing primitive).

## Contact form / WhatsApp

`src/components/CTAForm.tsx` reads target number from env var `VITE_CONTACT_FORM_WHATSAPP_NUMBER` (international format, digits only, e.g. `5511976396660`). On submit opens `https://wa.me/<number>?text=<prefilled message>`. Set env var or form link breaks. (Note: README still documents older hardcoded constant — env var is current source of truth.)

## Build-time SEO (vite.config.ts)

Two custom Vite plugins run on `closeBundle`:
- **seoPlugin** — generates `robots.txt`, `sitemap.xml`. Gated by env:
  - `ALLOW_INDEXING=true` → allow crawlers + emit sitemap. Else → `Disallow: /` (staging/dev default).
  - `SITE_URL` — canonical URL, required when indexing enabled.
- **criticalCssPlugin** — inlines critical CSS via Beasties.
- `BASE_PATH` env sets Vite `base` (and Wouter router base); `PORT` overrides dev/preview port.

Copy `.env.sample` to `.env` for local config.

## Design system (enforced in UI work)

- **Palette:** Navy `#0f1c2c` · Off-white `#fcf9f3` · Gold gradient `#C9A84C → #e6c364`.
- **Type:** Newsreader (serif, headings) + Inter (sans, body), via `@fontsource-variable`.
- **Border-radius: 0 everywhere** except status pills (`9999px`).
- **No 1px borders** — depth from color layering, not outlines.