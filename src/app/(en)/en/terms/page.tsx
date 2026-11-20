import type { Metadata } from "next";
import { ConditionsEn } from "@/components/site/ConditionsEn";

export const metadata: Metadata = {
  title: "Terms of sale, Corentin Bardouil",
  description: "Terms of sale for the second opinion, for businesses only.",
  alternates: { canonical: "/en/terms", languages: { fr: "/conditions-de-vente", en: "/en/terms" } },
};

export default function Page() {
  return <ConditionsEn />;
}
