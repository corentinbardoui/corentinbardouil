import type { Metadata } from "next";
import { HomeFr } from "@/components/site/HomeFr";
import { JsonLd } from "@/components/site/JsonLd";
import { homeJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("home", "fr");

export default function Page() {
  return (
    <>
      <JsonLd data={homeJsonLd("fr")} />
      <HomeFr />
    </>
  );
}
