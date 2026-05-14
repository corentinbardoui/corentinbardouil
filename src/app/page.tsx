import type { Metadata } from "next";
import { PersonalPageWrapper } from "@/components/personal/PersonalPageWrapper";
import { personalMeta } from "@/data/personal-content";

export const metadata: Metadata = {
  title: personalMeta.title,
  description: personalMeta.description,
  openGraph: personalMeta.openGraph,
};

export default function HomePage() {
  return <PersonalPageWrapper />;
}
