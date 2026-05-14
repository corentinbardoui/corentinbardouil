"use client";

import { LangProvider } from "@/lib/language";
import { PersonalHeader } from "./PersonalHeader";
import { PersonalHero } from "./PersonalHero";
import { CurrentFocus } from "./CurrentFocus";
import { FeaturedProjects } from "./FeaturedProjects";
import { TechInterests } from "./TechInterests";
import { PersonalAbout } from "./PersonalAbout";
import { PersonalFooter } from "./PersonalFooter";

export function PersonalPageWrapper() {
  return (
    <LangProvider>
      <PersonalHeader />
      <main className="flex-1">
        <PersonalHero />
        <CurrentFocus />
        <FeaturedProjects />
        <TechInterests />
        <PersonalAbout />
      </main>
      <PersonalFooter />
    </LangProvider>
  );
}
