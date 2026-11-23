import type { Metadata } from "next";
import { RendezVousFr } from "@/components/site/RendezVousFr";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("booking", "fr");

export default async function Page({ searchParams }: { searchParams: Promise<{ format?: string | string[] }> }) {
  const { format } = await searchParams;
  return <RendezVousFr initialFormat={format === "regard" ? "regard" : "echange"} />;
}
