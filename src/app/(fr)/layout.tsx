import type { Metadata, Viewport } from "next";
import "../globals.css";
import "@/components/site/subpages.css";
import { geist, unbounded } from "../fonts";
import { SITE_URL, meta } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: meta.fr.title,
  description: meta.fr.description,
  alternates: { canonical: "/", languages: { fr: "/", en: "/en" } },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/",
    siteName: "Corentin Bardouil",
    title: meta.fr.title,
    description: meta.fr.description,
    images: [{ url: "/og-fr.png", width: 1200, height: 630, alt: meta.fr.title }],
  },
  twitter: { card: "summary_large_image", images: ["/og-fr.png"] },
};

export const viewport: Viewport = { themeColor: "#04060C" };

export default function FrLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${geist.variable} ${unbounded.variable}`}>
      <body>{children}</body>
    </html>
  );
}
