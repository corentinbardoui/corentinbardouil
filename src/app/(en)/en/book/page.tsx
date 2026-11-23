import type { Metadata } from "next";
import { RendezVousEn } from "@/components/site/RendezVousEn";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("booking", "en");

export default async function Page({ searchParams }: { searchParams: Promise<{ format?: string | string[] }> }) {
  const { format } = await searchParams;
  return <RendezVousEn initialFormat={format === "regard" ? "regard" : "echange"} />;
}
