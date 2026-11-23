import type { Metadata } from "next";
import { ConditionsEn } from "@/components/site/ConditionsEn";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("terms", "en");

export default function Page() {
  return <ConditionsEn />;
}
