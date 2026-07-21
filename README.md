# Fitzgerald Timothe — Portfolio

Dark, cinematic portfolio for a Senior Brand Strategy & Marketing Leader.
Built as a structural sibling of philiptimothe.com: same stack, same content
model, distinct identity.

## Stack
- Next.js 13 (static export → `/out`)
- TypeScript + Tailwind CSS
- Framer Motion (entrance reveals, poster hero, count-ups)
- Lenis (smooth scroll, reduced-motion aware)
- Hanken Grotesk via `next/font`

## Run it
```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export to /out
```

## Where things live
- `lib/content.ts` — the single source of truth. Edit/reorder case studies here.
- `app/page.tsx` — homepage (poster hero, intro, work grid, what-I-do).
- `app/projects/<slug>/` — one folder per case study (Freshpet lands next).
- `components/` — shared primitives (Container, Footer, CaseStudyCard, etc.).
- `public/` — drop real images + resume here (see README-assets.txt).

## To finish
Search the code for `TODO` — real years, exact metrics, bio, links, and cover
images are all flagged as placeholders.

## Design tokens
- Base `#0a0a0a` · Foreground `#f0f0f0`
- Accents: green `#00e5a0`, cyan `#00c8ff`, amber `#ffb547`
- Type: Hanken Grotesk, heaviness from large size at weight 600 (not ultra-black)
