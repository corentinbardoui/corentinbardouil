# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Dev server
npm run build    # Production build
npm run lint     # ESLint
npx tsc --noEmit # Type-check without emitting
```

No test suite is configured yet.

## Architecture

Bilingual site (FR at the root, EN under `/en`), ported from the validated design mockup « Site, verre version sombre ».

**Routes** — two root layouts via route groups, so each language gets its own `<html lang>`:
- `src/app/(fr)/` — `/`, `/rendez-vous`, `/conditions-de-vente`
- `src/app/(en)/en/` — `/en`, `/en/book`, `/en/terms`
- `?format=regard` on the booking pages preselects the one-hour second opinion.

**Components** — `src/components/site/`:
- `HomeFr` / `HomeEn`, `RendezVousFr` / `RendezVousEn` (client, format state), `ConditionsFr` / `ConditionsEn`.
- These were generated from the mockup HTML and use inline styles on purpose, to stay pixel-faithful. Edit copy directly in these files.
- `ScrollBar` shows the floating header (`.barre-flot`) after 120px of scroll.

**Styling** — plain CSS, no Tailwind utilities in use:
- `src/app/globals.css`: global rules for the home page (focus, CTA motion, responsive breakpoints).
- `src/components/site/subpages.css`: booking and terms pages, scoped under `.p-rdv` and `.p-cgv`.
- Palette: night `#04060C`, surface `#0B111D`, light `#F4F6F8`, text `#0A1633`, chartreuse `#CDF23C`, ice blues `#CFECF6` `#AEDFEF` `#86CFE8`.

**Fonts** — self-hosted with `next/font/local` (`src/app/fonts.ts`): Geist (`--font-geist`) and Unbounded (`--font-unbounded`).

**Booking** — `src/data/booking.ts` holds the two Cal.com event links (`corentin-bardouil/premier-echange`, `corentin-bardouil/regard-exterieur`), embedded with `@calcom/embed-react`. Override with `NEXT_PUBLIC_CAL_ECHANGE` / `NEXT_PUBLIC_CAL_REGARD`.

**SEO** — page titles, descriptions and paths live in `src/data/site.ts` (`pages`).
- Every page exports `metadata = pageMetadata(page, lang)` from `src/lib/seo.ts`: canonical, hreflang (`fr`, `en`, `x-default` → FR) and Open Graph / Twitter. Layouts only hold defaults, so a new page must declare its own metadata, or it would have no canonical.
- `SITE_URL` is `https://www.corentinbardouil.com`: Vercel redirects the bare domain to www, so absolute URLs must use www.
- `src/app/robots.ts`, `sitemap.ts` (built from `pages`, `lastmod` = `LAST_UPDATE`, update it when copy changes) and `manifest.ts`.
- Home pages render Person + WebSite JSON-LD (`homeJsonLd`), limited to what the page shows.
- Icons: `src/app/favicon.ico`, `icon.png`, `apple-icon.png`, plus `public/icon-192.png` for the manifest. Keep their URLs stable.
- Images below the fold use `loading="lazy"`; only the hero background is preloaded (`fetchPriority="high"`).

**Copy rules** — no em dashes, no « · », say « startups et entreprises », do not name clients or partners publicly.

`src/components/ui/` holds unused shadcn primitives from the previous version (do not edit manually).
