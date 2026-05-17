# corentinbardouil.com

Personal portfolio site — live at [corentinbardouil.com](https://corentinbardouil.com).

## Stack

- **Framework:** Next.js 15 (App Router, server components for metadata)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 with `oklch` color space, no config file
- **Animations:** Framer Motion — `whileInView` scroll reveals, custom easing
- **UI primitives:** shadcn/ui v4 with `@base-ui/react`
- **Deployment:** Vercel

## Architecture

Single-page site with a clean data/UI separation:

```
src/
├── app/
│   ├── page.tsx              # Server component — exports metadata
│   └── globals.css           # Tailwind theme + CSS utilities
├── components/
│   └── personal/             # One file per section
│       ├── PersonalPageWrapper.tsx   # Client boundary (LangProvider)
│       ├── PersonalHero.tsx
│       ├── CurrentFocus.tsx
│       ├── FeaturedProjects.tsx      # Flagship / Featured / MVP card variants
│       ├── TechInterests.tsx
│       ├── PersonalAbout.tsx
│       ├── PersonalHeader.tsx        # EN/FR toggle, glassmorphism dropdown
│       └── PersonalFooter.tsx
├── data/
│   ├── personal-content.ts   # All structured data (single source of truth)
│   └── translations.ts       # EN/FR strings
└── lib/
    └── language.tsx           # LangContext + useLang hook
```

Key decisions:
- `page.tsx` stays a server component to export `metadata` — `PersonalPageWrapper` acts as the client boundary for `LangProvider`
- All copy lives in `personal-content.ts` and `translations.ts` — components are purely presentational
- Tailwind v4 configured entirely via `@theme inline` in CSS, no `tailwind.config.ts`
- Framer Motion animations use inline props (not `Variants`) to avoid the `ease` type constraint

## Run locally

```bash
npm install
npm run dev
```

```bash
npm run build      # Production build
npm run lint       # ESLint
npx tsc --noEmit   # Type-check
```
