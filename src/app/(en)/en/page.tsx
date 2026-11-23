import type { Metadata } from "next";
import { HomeEn } from "@/components/site/HomeEn";
import { JsonLd } from "@/components/site/JsonLd";
import { homeJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("home", "en");

export default function Page() {
  return (
    <>
      <JsonLd data={homeJsonLd("en")} />
      <HomeEn />
    </>
  );
}
