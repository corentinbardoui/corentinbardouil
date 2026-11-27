import type { Metadata } from "next";
import { Home } from "@/components/site/Home";
import { JsonLd } from "@/components/site/JsonLd";
import { homeJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("home", "en");

export default function Page() {
  return (
    <>
      <JsonLd data={homeJsonLd("en")} />
      <Home lang="en" />
    </>
  );
}
