# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Dark, cinematic portfolio site for Fitzgerald Timothe (Senior Brand Strategy & Marketing Leader). Built as a structural sibling of philiptimothe.com — same stack, same content model, distinct visual identity.

## Commands

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export to /out (output: "export" in next.config.js)
npm run lint        # next lint
```

There is no test suite configured in this repo.

## Architecture

**Stack:** Next.js 13 App Router, statically exported (`output: "export"`, `images: { unoptimized: true }`, `trailingSlash: true` — no server, no image optimization API, no dynamic routes at request time). TypeScript, Tailwind, Framer Motion for entrance animations, Lenis for smooth scroll, Hanken Grotesk via `next/font`.

**`lib/content.ts` is the single source of truth for case studies and skills.** Adding, editing, or reordering an entry in `caseStudies` automatically propagates to the homepage grid (`app/page.tsx`) and the "Up Next" cross-navigation (`components/up-next-section.tsx`). When adding a new case study you must also create the matching page at `app/projects/<slug>/page.tsx` — entries in `content.ts` do not generate pages by themselves.

**Case study pages under `app/projects/<slug>/`** are hand-written (not templated from a shared layout component), each pulling its own data out of `lib/content.ts` by id and using `UpNextSection` for the footer nav. Only `app/projects/freshpet/` exists as a directory so far and is currently empty — it's the next case study to be built out.

**Shared primitives in `components/`:**
- `Container` — page-width wrapper used on every page.
- `Reveal` — the standard fade+rise-on-scroll entrance animation (Framer Motion `whileInView`, `once: true`). Reuse this instead of hand-rolling new motion variants; it's what "consistent motion feel" means across the site.
- `SectionHeading` — the `// 01. LABEL — credit` heading pattern used at the top of every section.
- `CaseStudyCard`, `UpNextSection` — homepage grid card and cross-page navigation, both driven by `lib/content.ts`.
- `CountUp` — animated stat counters (used for the homepage stats row).
- `BackButton` — back nav used on interior pages (about, contact, case studies).
- `LenisProvider` — wraps `app/layout.tsx`; initializes Lenis smooth scroll on mount and is a no-op when `prefers-reduced-motion: reduce` is set. Respecting reduced motion is load-bearing here — don't add animations that bypass this check.

**Design tokens** (`tailwind.config.ts`): background `ink` `#0a0a0a`, foreground `paper` `#f0f0f0`, accents `accent` (green `#00e5a0`), `cyan` `#00c8ff`, `amber` `#ffb547` (amber used sparingly). Tags on case studies carry a `color: "green" | "cyan" | "amber"` that maps to these. Font is Hanken Grotesk — heaviness comes from large size at weight 600, not an ultra-black weight.

**Placeholders:** grep for `TODO` before treating content as final — real years, exact metrics, bio copy, social/contact links, and cover images (`freshpet-cover.jpg`, `western-dental-cover.jpg`, `roofing-cover.jpg`, `camel-cover.jpg`, `resume.pdf`) are all flagged placeholders pending real assets in `public/`. `CaseStudyCard` detects a missing real cover image by checking whether `project.image` still ends in `cover.jpg` and falls back to a text placeholder — keep that behavior in mind if renaming placeholder filenames.
