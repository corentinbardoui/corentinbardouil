import type { Metadata } from "next";
import { Home } from "@/components/site/Home";
import { JsonLd } from "@/components/site/JsonLd";
import { homeJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("home", "fr");

export default function Page() {
  return (
    <>
      <JsonLd data={homeJsonLd("fr")} />
      <Home lang="fr" />
    </>
  );
}
