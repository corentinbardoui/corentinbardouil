import type { Metadata } from "next";
import { RendezVousFr } from "@/components/site/RendezVousFr";

export const metadata: Metadata = {
  title: "Prendre rendez-vous, Corentin Bardouil",
  description: "Premier échange de 30 minutes, gratuit, ou regard extérieur d’une heure à 199 €.",
  alternates: { canonical: "/rendez-vous", languages: { fr: "/rendez-vous", en: "/en/book" } },
};

export default async function Page({ searchParams }: { searchParams: Promise<{ format?: string | string[] }> }) {
  const { format } = await searchParams;
  return <RendezVousFr initialFormat={format === "regard" ? "regard" : "echange"} />;
}
