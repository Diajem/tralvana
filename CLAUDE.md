# TREVANA — Claude Code Project Guide

## Project Overview
Tralvana is a premium international travel website built with Next.js 14.
Tagline: "Your World Starts Here"
Owner: Peter (Diajem brand)

## Tech Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS (custom design system)
- Framer Motion (animations)
- PWA (mobile app ready)
- Hostinger deployment

## Design System
Dark luxury theme. Key colours:
- Background: #0A0A0F (tralvana-black)
- Card: #16162A (tralvana-card)
- Gold: #C9A84C (tralvana-gold)
- Muted text: #8A8AA0 (tralvana-muted)
- Fonts: Playfair Display (headings), DM Sans (body)

## Affiliate Structure
All affiliate IDs are in `src/lib/affiliates.ts`
Amazon IDs are in `src/lib/currency.ts`
Environment variables are in `.env.local` (copy from `.env.example`)

NEVER hardcode affiliate IDs in components — always import from affiliates.ts

## Currency System
Currency auto-detects from IP via `src/lib/CurrencyContext.tsx`
Supports: GBP (UK), USD (Americas/Africa), EUR (Europe)
Amazon store switches automatically by region

## i18n (Languages)
Translation files: `src/i18n/en.json`, `es.json`, `fr.json`
Add new languages by creating new JSON file and adding to next.config.js locales array

## Key Sections
1. Hero — cinematic slideshow, multiple destinations
2. Search Widget — Flights, Hotels, Cars, Tours tabs
3. Destinations — Caribbean, Africa, Europe, Americas, Asia, Middle East + Sports Travel placeholder
4. Featured Deals — Expedia powered, currency-aware pricing
5. Airport Services — Bee Parking (Awin), WorldSIM (Awin), TTfone (Awin), eSIM, Priority Pass, Insurance
6. Tralvana TV — video showcase section
7. Sports Travel — placeholder, to be activated
8. Blog — travel guides and SEO content
9. Travel Shop — Amazon Associates, auto-switches by region (UK/US/DE/FR/ES/IT)
10. Partners Bar — affiliate trust bar

## Affiliate Partners Active
- Expedia: https://expedia.com/affiliate/mZObD29
- Amazon UK: diajemglobal-21
- Amazon US: diajemgroup-20
- Amazon ES: diajemgroup00-21
- Amazon DE: diajemgroup0c-21
- Amazon FR: diajemgroup0a-21
- Amazon IT: diajemgroup04-21
- Awin ID: 1773696
  - Bee Parking Heathrow: merchant 121428
  - TTfone: merchant 28737
  - WorldSIM: merchant 104675

## Affiliates Pending (add to .env.local when registered)
- Travelpayouts marker
- Opodo affiliate ID
- Booking.com affiliate ID
- Skyscanner affiliate ID
- Viator affiliate ID
- GetYourGuide affiliate ID
- Discover Cars affiliate ID
- Sandals affiliate ID (via CJ Affiliate)
- Safari.com affiliate ID
- Priority Pass affiliate ID
- Holafly eSIM affiliate ID
- World Nomads affiliate ID (via CJ Affiliate)

## Deployment — Hostinger
Build: `npm run build`
Output: `.next` folder
Deploy via Hostinger Node.js hosting or export as static

## Commands
```bash
npm install          # install dependencies
npm run dev          # start dev server on localhost:3000
npm run build        # production build
npm run start        # run production build locally
```

## Adding New Affiliates
1. Add ID to `.env.local`
2. Add to `src/lib/affiliates.ts`
3. Add `NEXT_PUBLIC_` prefixed variable to `.env.example`
4. Use in components by importing from affiliates.ts

## Adding New Destinations
Create page in `src/app/destinations/[destination]/page.tsx`

## Adding Blog Posts
Create MDX or page in `src/app/blog/[slug]/page.tsx`

## Sports Travel (Phase 2)
- Premium League match packages
- Champions League travel
- World Cup 2026 packages
- Africa Cup of Nations
- NFL London games
- Register interest form already in place
