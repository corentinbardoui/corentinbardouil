import type { Metadata } from "next";
import { LegalPage } from "@/components/site/LegalPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("terms", "fr");

export default function Page() {
  return <LegalPage page="terms" lang="fr" />;
}
