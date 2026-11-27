import type { Metadata } from "next";
import { LegalPage } from "@/components/site/LegalPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("privacy", "fr");

export default function Page() {
  return <LegalPage page="privacy" lang="fr" />;
}
