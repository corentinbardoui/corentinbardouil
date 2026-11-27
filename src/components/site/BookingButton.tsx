"use client";

import { getCalApi } from "@calcom/embed-react";
import type { MouseEvent, ReactNode } from "react";
import { CAL_LINK, CAL_URL } from "@/data/booking";

/**
 * Bouton de réservation. Rien n'est chargé depuis Cal.com avant le clic.
 * Si la fenêtre intégrée ne s'ouvre pas (script bloqué, réseau), la page Cal.com s'ouvre à la place.
 * Sans JavaScript, ou avec Cmd/Ctrl + clic, c'est un lien ordinaire.
 */
export function BookingButton({ className, children }: { className?: string; children: ReactNode }) {
  const open = async (e: MouseEvent<HTMLAnchorElement>) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    const fallback = window.setTimeout(() => {
      if (!document.querySelector("cal-modal-box")) window.location.assign(CAL_URL);
    }, 6000);
    try {
      const cal = await getCalApi({ namespace: "echange" });
      cal("ui", { theme: "light", cssVarsPerTheme: { light: { "cal-brand": "#0A1633" }, dark: { "cal-brand": "#0A1633" } } });
      cal("modal", { calLink: CAL_LINK, config: { theme: "light" } });
    } catch {
      window.clearTimeout(fallback);
      window.location.assign(CAL_URL);
    }
  };

  return (
    <a className={className} href={CAL_URL} onClick={open}>
      {children}
    </a>
  );
}
