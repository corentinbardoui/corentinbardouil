import type { Metadata } from "next";
import { LegalPage } from "@/components/site/LegalPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("privacy", "en");

export default function Page() {
  return <LegalPage page="privacy" lang="en" />;
}
