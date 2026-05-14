# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Dev server (auto-selects available port if 3000 is taken)
npm run build    # Production build
npm run lint     # ESLint
npx tsc --noEmit # Type-check without emitting
```

No test suite is configured yet.

## Architecture

Single-page portfolio site (one route: `src/app/page.tsx`) assembled from section components.

**Data layer — single source of truth**
All copy, links, and structured data live in `src/data/site-content.ts`. Every component imports directly from there. Exported types (`Service`, `PortfolioItem`, `SiteContent`) are inferred from the data shape — no separate interface files.

**Component layout**
- `src/components/layout/` — `Header` (sticky, scroll-aware) and `Footer`
- `src/components/sections/` — `Hero`, `Services`, `Portfolio`, `Contact` — one file per page section
- `src/components/ui/` — Shadcn/ui primitives (do not edit manually)

**Shadcn/ui version caveat**
This project uses Shadcn v4 with `@base-ui/react` as the underlying primitive library. The `Button` component does **not** support the `asChild` prop. To render a button-styled link, use `buttonVariants` from `cn(buttonVariants({...}))` applied to an `<a>` tag directly.

**Framer Motion**
Animations use inline `initial/animate/transition` props rather than a shared `Variants` object, because the `ease` field in `Variants` must be typed as `Easing` (not `string`). The pattern used is:
```ts
function fadeUpVariant(delay: number) {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.5, ease: [0.22, 0.61, 0.36, 1] as const },
  };
}
```
Section-level cards use `whileInView` + `viewport={{ once: true }}`.

**Styling**
Tailwind v4 with CSS variables defined in `src/app/globals.css` using `oklch`. Theme tokens (`--primary`, `--muted`, `--border`, etc.) follow the Shadcn convention. No `tailwind.config.ts` — configuration is done via `@theme inline` in the CSS file.
