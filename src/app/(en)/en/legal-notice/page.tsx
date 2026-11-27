import type { Metadata } from "next";
import { LegalPage } from "@/components/site/LegalPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("legal", "en");

export default function Page() {
  return <LegalPage page="legal" lang="en" />;
}
