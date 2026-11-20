import type { Metadata } from "next";
import { RendezVousEn } from "@/components/site/RendezVousEn";

export const metadata: Metadata = {
  title: "Book a call, Corentin Bardouil",
  description: "A free 30-minute intro call, or a one-hour second opinion for €199.",
  alternates: { canonical: "/en/book", languages: { fr: "/rendez-vous", en: "/en/book" } },
};

export default async function Page({ searchParams }: { searchParams: Promise<{ format?: string | string[] }> }) {
  const { format } = await searchParams;
  return <RendezVousEn initialFormat={format === "regard" ? "regard" : "echange"} />;
}
