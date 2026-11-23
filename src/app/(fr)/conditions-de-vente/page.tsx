import type { Metadata } from "next";
import { ConditionsFr } from "@/components/site/ConditionsFr";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("terms", "fr");

export default function Page() {
  return <ConditionsFr />;
}
