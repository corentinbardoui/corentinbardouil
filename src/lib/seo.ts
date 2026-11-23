import type { Metadata } from "next";
import { PROFILES, SITE_NAME, SITE_URL, pages, shareImages, type Lang, type PageKey } from "@/data/site";

const ogLocale: Record<Lang, string> = { fr: "fr_FR", en: "en_GB" };

/** URL absolue d'un chemin du site, sans barre finale pour l'accueil (comme la balise canonique). */
export function absoluteUrl(path: string): string {
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}

/** Équivalents FR et EN d'une page, avec le français par défaut (x-default). */
export function languageAlternates(page: PageKey, toUrl: (path: string) => string = (path) => path) {
  return {
    fr: toUrl(pages[page].fr.path),
    en: toUrl(pages[page].en.path),
    "x-default": toUrl(pages[page].fr.path),
  };
}

/**
 * Métadonnées complètes d'une page : titre, description, canonique, hreflang et aperçus de partage.
 * Chaque page déclare les siennes, pour qu'une sous-page n'hérite jamais de l'URL ou du titre de l'accueil.
 */
export function pageMetadata(page: PageKey, lang: Lang): Metadata {
  const { path, title, description, shareTitle = title } = pages[page][lang];
  const image = shareImages[lang];
  const otherLang: Lang = lang === "fr" ? "en" : "fr";

  return {
    title,
    description,
    alternates: { canonical: path, languages: languageAlternates(page) },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: ogLocale[lang],
      alternateLocale: [ogLocale[otherLang]],
      url: path,
      title: shareTitle,
      description,
      images: [{ url: image.url, width: 1200, height: 630, alt: image.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description,
      images: [{ url: image.url, alt: image.alt }],
    },
  };
}

const personDetails: Record<Lang, { jobTitle: string; knowsAbout: string[] }> = {
  fr: {
    jobTitle: "Forward deployed engineer",
    knowsAbout: ["Intelligence artificielle", "Process métiers", "Conseil en stratégie"],
  },
  en: {
    jobTitle: "Forward Deployed Engineer",
    knowsAbout: ["Artificial intelligence", "Business processes", "Strategy consulting"],
  },
};

/**
 * Données structurées des pages d'accueil : le site (nom affiché par Google à la place du domaine)
 * et la personne. Elles reprennent uniquement ce qui est visible sur la page.
 */
export function homeJsonLd(lang: Lang) {
  const home = `${SITE_URL}/`;
  const { jobTitle, knowsAbout } = personDetails[lang];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${home}#website`,
        url: home,
        name: SITE_NAME,
        publisher: { "@id": `${home}#person` },
      },
      {
        "@type": "Person",
        "@id": `${home}#person`,
        name: SITE_NAME,
        url: home,
        jobTitle,
        description: pages.home[lang].description,
        knowsAbout,
        alumniOf: { "@type": "CollegeOrUniversity", name: "IMT Atlantique" },
        workLocation: [
          { "@type": "Place", name: "Paris" },
          { "@type": "Place", name: "Bretagne" },
        ],
        sameAs: [PROFILES.linkedin, PROFILES.github],
      },
    ],
  };
}
