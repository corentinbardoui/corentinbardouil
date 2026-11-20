import type { Metadata } from "next";
import { ConditionsFr } from "@/components/site/ConditionsFr";

export const metadata: Metadata = {
  title: "Conditions de vente | Corentin Bardouil",
  description: "Conditions de vente du regard extérieur, réservé aux professionnels.",
  alternates: { canonical: "/conditions-de-vente", languages: { fr: "/conditions-de-vente", en: "/en/terms" } },
};

export default function Page() {
  return <ConditionsFr />;
}
