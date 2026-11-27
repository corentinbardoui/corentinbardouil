import type { Metadata, Viewport } from "next";
import "../globals.css";
import { manrope, unbounded } from "../fonts";
import { SITE_URL, pages } from "@/data/site";

// Valeurs par défaut. Chaque page déclare ses propres métadonnées (canonique, hreflang, partage)
// avec pageMetadata(), pour ne jamais hériter de celles de l'accueil.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: pages.home.en.title,
  description: pages.home.en.description,
};

export const viewport: Viewport = { themeColor: "#F4F6F8" };

export default function EnLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${manrope.variable} ${unbounded.variable}`}>
      <body>{children}</body>
    </html>
  );
}
