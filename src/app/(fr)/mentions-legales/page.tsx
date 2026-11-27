import type { Metadata } from "next";
import { LegalPage } from "@/components/site/LegalPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("legal", "fr");

export default function Page() {
  return <LegalPage page="legal" lang="fr" />;
}
