import type { Metadata, Viewport } from "next";
import "../globals.css";
import "@/components/site/subpages.css";
import { geist, unbounded } from "../fonts";
import { SITE_URL, pages } from "@/data/site";

// Default values. Each page declares its own metadata (canonical, hreflang, sharing)
// with pageMetadata(), so it never inherits the home page's.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: pages.home.en.title,
  description: pages.home.en.description,
};

export const viewport: Viewport = { themeColor: "#04060C" };

export default function EnLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${geist.variable} ${unbounded.variable}`}>
      <body>{children}</body>
    </html>
  );
}
