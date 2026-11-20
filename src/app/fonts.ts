import localFont from "next/font/local";

// Self-hosted fonts (SIL Open Font License): Geist (Vercel) and Unbounded.
export const geist = localFont({
  src: "./fonts/Geist-Variable.woff2",
  variable: "--font-geist",
  weight: "100 900",
  display: "swap",
});

export const unbounded = localFont({
  src: [
    { path: "./fonts/unbounded-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "./fonts/unbounded-latin-600-normal.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-unbounded",
  display: "swap",
});
