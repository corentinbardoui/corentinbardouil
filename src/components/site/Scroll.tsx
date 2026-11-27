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

/** En-tête flottant, qui glisse depuis le haut après 120 px de défilement. */
export function FloatingBar({ children }: { children: ReactNode }) {
  const visible = useScrolledPast(120);
  // Masquée, la barre sort du parcours clavier (visibility) et son menu téléphone se referme.
  const closeMenu = (el: HTMLDivElement | null) => {
    if (!visible) el?.querySelector("details")?.removeAttribute("open");
  };
  return (
    <div className={visible ? "barre-flot visible" : "barre-flot"} ref={closeMenu}>
      {children}
    </div>
  );
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
