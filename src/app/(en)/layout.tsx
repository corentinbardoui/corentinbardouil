import type { Metadata, Viewport } from "next";
import "../globals.css";
import "@/components/site/subpages.css";
import { geist, unbounded } from "../fonts";
import { SITE_URL, meta } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: meta.en.title,
  description: meta.en.description,
  alternates: { canonical: "/en", languages: { fr: "/", en: "/en" } },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "/en",
    siteName: "Corentin Bardouil",
    title: meta.en.title,
    description: meta.en.description,
    images: [{ url: "/og-en.png", width: 1200, height: 630, alt: meta.en.title }],
  },
  twitter: { card: "summary_large_image", images: ["/og-en.png"] },
};

export const viewport: Viewport = { themeColor: "#04060C" };

export default function EnLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${unbounded.variable}`}>
      <body>{children}</body>
    </html>
  );
}
