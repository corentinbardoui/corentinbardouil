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

Bilingual showcase site (FR at the root, EN under `/en`), reproduced from the design mockups (frost and peach gradient, night blue).

**Routes**: two root layouts via route groups, so each language gets its own `<html lang>`:
- `src/app/(fr)/`: `/`, `/mentions-legales`, `/confidentialite`, `/conditions-de-vente`
- `src/app/(en)/en/`: `/en`, `/en/legal-notice`, `/en/privacy`, `/en/terms`
- `next.config.ts` redirects the old booking pages (`/rendez-vous`, `/en/book`) to `#echange` with a 301.

**Components** in `src/components/site/`:
- `SiteShell`: header, « FR | EN » switch, footer and company dialog, shared by every page.
- `Home`: the home page, both languages. `LegalPage`: renders the legal Markdown.
- `CompanyDialog` (client): native `<dialog>`, posts to Formspree. Every company button is a `CompanyButton`.
- `BookingButton` (client): Cal.com modal, loaded only on click, plain link as fallback.
- `MobileMenu` (client): the `<details>` menu below 760px.
- `Scroll` (client): `Header` (the single header, which turns into a floating bar as soon as the page scrolls; keep its height plus bottom margin constant) and `ScrollHint` (arrow in the white space under the hero).
- Smooth scrolling is CSS, off with reduced motion. Keep `data-scroll-behavior="smooth"` on `<html>` and give new anchored sections an `id` so they get `scroll-margin-top`.

**Content**:
- Home copy in `src/data/home.tsx`; header, footer and form copy in `src/data/chrome.ts`.
- Legal texts in `src/content/legal/<page>.<lang>.md` (supports `#`, `##`, paragraphs, `-` lists, bold, links, emails). `{{date}}` is `LEGAL_DATE` in `src/data/site.ts`.
- `SHOW_CONTENT` (`src/data/site.ts`) shows the "Ce que je partage" section. Fill the `url` fields in `src/data/home.tsx` before enabling it; a card with no url is not a link.

**Services**:
- Booking: `src/data/booking.ts`, a single French Cal.com event (`corentin-bardouil/echange`) used by both languages. Price, payment and questions are set in Cal.com. Refunds and invoices are manual.
- Company requests: Formspree, form id in `src/data/forms.ts`. Hidden `_gotcha` field against spam. No company booking on this site.
- No analytics. Adding any provider or tracker requires updating the privacy policy.

**Styling**: plain CSS in `src/app/globals.css`, no Tailwind. Breakpoints at 1040px and 760px.
- Palette: night blue `#0A1633`, night black `#04060C`, cards `#0B111D`, light `#F4F6F8`, frost `#86CFE8` `#CFECF6`, deep frost `#1E7392`, frame corners `#3592B5`, peach `#F6B89A`. 2px radius.

**Fonts**: self-hosted with `next/font/local` (`src/app/fonts.ts`): Manrope (`--font-manrope`) for text, Unbounded 600 (`--font-unbounded`) for the name only.

**SEO**: page titles, descriptions and paths live in `src/data/site.ts` (`pages`).
- Every page exports `metadata = pageMetadata(page, lang)` from `src/lib/seo.ts`: canonical, hreflang (`fr`, `en`, `x-default` to FR) and Open Graph / Twitter. A new page must declare its own, or it would have no canonical.
- `SITE_URL` is `https://www.corentinbardouil.com`: Vercel redirects the bare domain to www, so absolute URLs must use www.
- `robots.ts`, `sitemap.ts` (built from `pages`, `lastmod` = `LAST_UPDATE`, update it when copy changes) and `manifest.ts`.
- Home pages render Person + WebSite JSON-LD (`homeJsonLd`), limited to what the page shows.
- Icons: tab icons are the plain frost « c » (`src/app/favicon.ico`, `icon.png`, `icon.svg`), legible at 16px. Large icons use the framed version (`src/app/apple-icon.png`, `public/icon-192.png` and `icon-512.png` for the manifest). Keep their URLs stable.

**Copy rules**: do not rewrite validated copy, no em dashes, no « · », say « entreprises » rather than « PME », never « agents IA », do not name clients, partners or the unannounced company anywhere.
