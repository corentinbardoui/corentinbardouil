import type { Metadata, Viewport } from "next";
import "../globals.css";
import "@/components/site/subpages.css";
import { geist, unbounded } from "../fonts";
import { SITE_URL, pages } from "@/data/site";

// Valeurs par défaut. Chaque page déclare ses propres métadonnées (canonique, hreflang, partage)
// avec pageMetadata(), pour ne jamais hériter de celles de l'accueil.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: pages.home.fr.title,
  description: pages.home.fr.description,
};

export const viewport: Viewport = { themeColor: "#04060C" };

export default function FrLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" data-scroll-behavior="smooth" className={`${geist.variable} ${unbounded.variable}`}>
      <body>{children}</body>
    </html>
  );
}
