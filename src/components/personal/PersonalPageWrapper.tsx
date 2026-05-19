"use client";

import { LangProvider } from "@/lib/language";
import { ThemeProvider } from "@/lib/theme";
import { PersonalHeader } from "./PersonalHeader";
import { PersonalHero } from "./PersonalHero";
import { CurrentFocus } from "./CurrentFocus";
import { FeaturedProjects } from "./FeaturedProjects";
import { TechInterests } from "./TechInterests";
import { PersonalAbout } from "./PersonalAbout";
import { PersonalFooter } from "./PersonalFooter";

export function PersonalPageWrapper() {
  return (
    <ThemeProvider>
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
    </ThemeProvider>
  );
}
