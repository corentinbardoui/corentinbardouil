"use client";

import { useSyncExternalStore, type ReactNode } from "react";

function subscribe(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

/** Vrai dès que la page a défilé de plus de « seuil » pixels. */
function useScrolledPast(threshold: number) {
  return useSyncExternalStore(
    subscribe,
    () => window.scrollY > threshold,
    () => false,
  );
}

/**
 * L'en-tête lui-même devient la barre flottante : dès que la page défile, il reste en haut de l'écran
 * et son fond apparaît autour de son contenu.
 */
export function Header({ children }: { children: ReactNode }) {
  const floating = useScrolledPast(4);
  return <header className={floating ? "entete flottante" : "entete"}>{children}</header>;
}

/** Flèche sous le haut de page, effacée dès que l'on commence à défiler. */
export function ScrollHint({ href, label }: { href: string; label: string }) {
  const scrolled = useScrolledPast(4);
  return (
    <a className={scrolled ? "indice efface" : "indice"} href={href} aria-label={label}>
      <svg aria-hidden="true" width="14" height="16" viewBox="0 0 14 16" fill="none">
        <path d="M7 1V14" stroke="currentColor" strokeWidth="2" />
        <path d="M1.5 8.5L7 14L12.5 8.5" stroke="currentColor" strokeWidth="2" />
      </svg>
    </a>
  );
}
