---
name: case-study
description: Build a new case-study page for this portfolio (Fitzgerald-Portfolio) using the reusable component system established by the Freshpet case study. Use whenever the user asks to build out, scaffold, or flesh out a case study for one of the entries in lib/content.ts (e.g. western-dental, my-florida-roofing, camel-passport), or asks to add a new case study.
---

# Case study builder

This repo is a Next.js 13 (App Router, static export) portfolio. The Freshpet
case study (`app/projects/freshpet/`) is the reference implementation — every
other case study should be built the same way, reusing the same components
rather than inventing new markup per case study.

## Files a new case study needs

For a case study with slug `<slug>` (matching its `id`/`href` in
`lib/content.ts`):

1. **`lib/content.ts`** — the case study must already have an entry in the
   `caseStudies` array (id, title, subtitle, image, href, meta, description,
   tags). This drives the homepage grid and `UpNextSection` automatically —
   don't duplicate that data in the case study page itself.
2. **`app/projects/<slug>/page.tsx`** — thin wrapper, just exports metadata
   and renders the case component:
   ```tsx
   import type { Metadata } from "next";
   import { <Name>Case } from "./<Name>Case";

   export const metadata: Metadata = {
     title: "<Title> Case Study | Fitzgerald Timothe",
     description: "<one-line description for SEO/social>",
   };

   export default function <Name>Page() {
     return <<Name>Case />;
   }
   ```
3. **`app/projects/<slug>/<Name>Case.tsx`** — the actual page content,
   composed entirely from the shared components below. Keep case-specific
   copy/data as local `const` arrays at the top of this file (see Freshpet's
   `metrics`, `facts`, `gallery` arrays) — don't add a new file per case
   study for this; `lib/content.ts` is only for the homepage-grid data.

## The shared component library (`components/`)

All of these already exist and are case-study-agnostic — reuse them as-is,
don't fork copies per case study.

- **`CaseHero`** — full-bleed hero with scroll parallax (`useScroll`/
  `useTransform`, same technique as the reference for any new parallax
  work). Props: `eyebrow`, `title`, `headline`, `subtitle?`, `image`,
  `video?` (Cloudflare Stream UID — see Media below), `titleAccent?`
  (`"green" | "cyan"`), `children?` (rendered as a legible overlay pinned to
  the hero's top — this is where `<BackButton />` goes, see Back button
  below).
- **`MetricBand`** — big stat row with `CountUp`. Props: `metrics: Metric[]`
  (`value`+`prefix`/`suffix` for a count-up number, or `display` for a
  text metric like "2018"; each has `label` and `color`).
- **`FactsBar`** — small `Client / Industry / Role / ...` definition-list
  row. Props: `facts: Fact[]` (`label`, `value`).
- **`NarrativeSection`** — the main prose block, reused for every "chapter"
  of the story (Brief, Role, The Work, etc.). Props: `number?`, `label`,
  `credit?`, `accent?`, `title?` (big display line), `children` (prose),
  `chips?` (discipline tags), `quote?` (pull quote, switches to a two-column
  layout when present).
- **`ImageBreak`** — full-bleed image with scroll parallax. Props: `image`,
  `alt`, `caption?`, `height?` (`"md" | "lg"`), `intensity?` (parallax %,
  default 12 — keep it modest, these blocks are shorter than the hero).
- **`VideoBlock`** — either a real video or a click-to-play card. Props:
  `title`, `caption?`, `sourceUrl?` (adds a "Watch the original ↗" link),
  and exactly one of: `autoplayStreamId` (Cloudflare Stream UID, plays
  muted/looping immediately, no click needed — see Media below), `poster`
  + `embedUrl` (YouTube/Vimeo, click-to-play), or `poster` + `src`
  (self-hosted mp4, click-to-play).
- **`BeforeAfterSlider`** — drag-to-reveal comparison, with a one-time
  "peek" animation on first scroll-into-view. Props: `before`, `after`,
  `beforeAlt`, `afterAlt`, `caption?`, `ratio?`.
- **`Gallery`** — staggered-entrance image grid. Props: `items:
  GalleryItem[]` (`src`, `alt`, `caption?`, `wide?` for a 2-col span).
- **`ChallengeApproachImpact`** — the 3-column CAI block. Props: `number?`,
  `challenge`, `approach`, `impact` (each a paragraph string).
- **`Reflection`** — closing personal-takeaway block. Props: `number?`,
  `children` (prose).
- **`UpNextSection`** — cross-links to the next two case studies. Props:
  `currentProjectId` (must match the `id` in `lib/content.ts`).
- **`Footer`** — standard site footer, always last.
- **`BackButton`** — `Link` back to `/`. On case study pages it's passed as
  `CaseHero`'s `children` so it overlays the hero (not pushed above it like
  on `/about`) — `CaseHero` already adds a short top scrim behind
  `children` for legibility.

Section order in the reference implementation (`FreshpetCase.tsx`):
`CaseHero` (with `BackButton` as children) → `MetricBand` → `FactsBar` →
`NarrativeSection` (Brief) → `ImageBreak` → `NarrativeSection` (Role) →
`NarrativeSection` (The Work) → `VideoBlock` → `BeforeAfterSlider` →
`Gallery` → `ChallengeApproachImpact` → `Reflection` → `UpNextSection` →
`Footer`. Not every case study needs every section — pick what fits the
story — but keep whatever's used in this relative order.

## Media conventions — read before adding any image or video

This site deploys to GitHub Pages under a subpath (`/Fitzgerald-Portfolio`),
set via `basePath`/`assetPrefix` in `next.config.js`, active only when
`GITHUB_ACTIONS=true`. `next/link` and `next/image` rewrite that
automatically; **raw strings do not** — a plain `<a href="/x.jpg">` or CSS
`url(/x.jpg)` will 404 in production while working fine in local dev. This
bit us twice already (footer resume link, case-study-card cover images).

- Any root-absolute path to a file in `public/` (images, pdfs, self-hosted
  video `src`) must go through **`withBasePath()`** from `lib/utils.ts`.
  Every component above that takes an image/asset path already does this
  internally — you don't need to call it yourself when just passing props,
  only if you add a new raw asset reference somewhere.
- **Placeholder detection**: components treat an image/video prop as "not
  real yet" by checking `.includes("placeholder")` (or, on `CaseHero`
  specifically, also `.includes("cover.jpg")`) and render a text fallback
  box instead of attempting to load it. Use `/placeholder/<name>.jpg`-style
  paths for anything not yet shot/sourced, exactly like Freshpet's gallery
  and image-break placeholders — don't invent a different placeholder
  convention.
- **Cloudflare Stream video** (for a real hero/showcase video, not
  YouTube): use `cloudflareStreamManifestSrc(videoId)` from
  `lib/cloudflare-stream.ts` to build the `.m3u8` URL, and pass it through
  the **`StreamVideo`** component (`components/stream-video.tsx`) — a
  native `<video>` + `hls.js`, muted/looping/autoplay. **Do not** embed
  Cloudflare Stream via an `<iframe>` — that was tried first and is
  unreliable across browsers/extensions; native `<video>` + hls.js is the
  pattern that actually works, confirmed working in this repo. `CaseHero`'s
  `video` prop and `VideoBlock`'s `autoplayStreamId` prop already wire this
  up for you — just pass the video UID.

## Animation conventions

- Standard one-shot entrance: `Reveal` (fade + rise, `duration: 0.6`,
  `ease: "easeOut"`, `viewport={{ once: true, margin: "-50px" }}`). Every
  component above already wraps its content in `Reveal` or an equivalent
  `whileInView` block — you don't need to add it again around them.
  `NarrativeSection`, `ChallengeApproachImpact`, `Reflection`, `MetricBand`,
  `FactsBar`, `VideoBlock`, `BeforeAfterSlider` all use it internally.
  `Gallery` tiles stagger by `index * 0.08`, matching the homepage's
  `CaseStudyCard` pattern.
- Continuous/looping effects (`ImageBreak`'s parallax, `BeforeAfterSlider`'s
  first-view "peek", `VideoBlock`'s idle play-button pulse) are gated
  behind `window.matchMedia("(prefers-reduced-motion: reduce)")`, same
  pattern as `count-up.tsx` and `lenis-provider.tsx`. If you add any new
  continuous/auto-playing motion, gate it the same way — one-shot
  `whileInView` entrances don't need this (they already degrade fine, and
  nothing else in the codebase JS-gates them).
- Timing budget: stay inside 0.5–0.7s, `easeOut`, animate only
  `transform`/`opacity`. Don't introduce a new easing curve or a slower
  block — visual consistency across case studies matters more than any one
  flourish.

## Recipe

1. Confirm the case study's entry exists in `lib/content.ts` (id, href
   `/projects/<slug>`, etc.) — add it first if missing.
2. `mkdir -p app/projects/<slug>` and create `<Name>Case.tsx` + `page.tsx`
   as shown above.
3. Write the section-specific `const` data (metrics, facts, gallery items,
   etc.) at the top of `<Name>Case.tsx`, then compose the sections in the
   order above, using real copy where you have it and `/placeholder/...`
   paths where you don't.
4. `npm run lint && npm run build` — must be clean before calling it done.
5. If any image/video is a real (non-placeholder) asset, also run
   `GITHUB_ACTIONS=true npm run build` and grep the output HTML for
   `/Fitzgerald-Portfolio/` prefixes on those asset URLs, to confirm
   `withBasePath`/`StreamVideo` wiring is correct — don't skip this, it's
   the step that catches the subpath bug before it reaches production.
6. Visually check in a browser (dev server) that every section renders and
   scroll-entrance/parallax fires once without errors before considering
   the case study done.
