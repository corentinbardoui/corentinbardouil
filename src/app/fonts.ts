import localFont from "next/font/local";

// Polices auto-hébergées (SIL Open Font License) : Manrope pour le texte, Unbounded pour le nom.
export const manrope = localFont({
  src: "./fonts/manrope-latin-wght-normal.woff2",
  variable: "--font-manrope",
  weight: "200 800",
  display: "swap",
});

export const unbounded = localFont({
  src: "./fonts/unbounded-latin-600-normal.woff2",
  variable: "--font-unbounded",
  weight: "600",
  display: "swap",
});
