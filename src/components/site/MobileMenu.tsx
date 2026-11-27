"use client";

import { useEffect, useRef, type ReactNode } from "react";

/** Menu téléphone (<details>), refermé après un choix, un clic à côté ou la touche Échap. */
export function MobileMenu({ children }: { children: ReactNode }) {
  const menu = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const el = menu.current;
    if (!el) return;
    const onClick = (e: Event) => {
      const target = e.target as Element;
      if (!el.contains(target) || target.closest("a")) el.open = false;
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape" || !el.open) return;
      el.open = false;
      el.querySelector("summary")?.focus();
    };
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <details className="menu-mobile" ref={menu}>
      {children}
    </details>
  );
}
