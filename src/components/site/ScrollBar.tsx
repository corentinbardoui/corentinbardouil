"use client";

import { useEffect } from "react";

// Shows the floating header (.barre-flot) once the page has scrolled past the hero top.
export function ScrollBar() {
  useEffect(() => {
    const onScroll = () => {
      const barre = document.querySelector(".barre-flot");
      if (barre) barre.classList.toggle("visible", window.scrollY > 120);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return null;
}
