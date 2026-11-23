// Domaine principal : corentinbardouil.com redirige vers www sur Vercel.
// Toutes les URL absolues (canonique, hreflang, partage, sitemap, données structurées)
// doivent donc pointer vers www, sinon Google reçoit des signaux contradictoires.
export const SITE_URL = "https://www.corentinbardouil.com";

export const SITE_NAME = "Corentin Bardouil";

// Date de dernière modification du contenu, reprise dans le sitemap.
// À mettre à jour quand les textes des pages changent.
export const LAST_UPDATE = "2026-11-23";

export const PROFILES = {
  linkedin: "https://www.linkedin.com/in/corentin-bardouil",
  github: "https://github.com/corentinbardoui",
};

export type Lang = "fr" | "en";
export type PageKey = "home" | "booking" | "terms";

type PageMeta = {
  path: string;
  title: string;
  description: string;
  // Titre affiché dans les aperçus de partage, s'il diffère du titre d'onglet.
  shareTitle?: string;
};

export const pages: Record<PageKey, Record<Lang, PageMeta>> = {
  home: {
    fr: {
      path: "/",
      title: "Corentin Bardouil | L’IA dans vos process métiers",
      shareTitle: "Intégrer l’IA dans vos process métiers",
      description:
        "Forward deployed engineer pour les startups et les entreprises : diagnostic de vos process, mise en place de l’IA et adoption par vos équipes.",
    },
    en: {
      path: "/en",
      title: "Corentin Bardouil | AI in your business processes",
      shareTitle: "Put AI to work in your business processes",
      description:
        "Forward Deployed Engineer for startups and companies: process diagnosis, AI implementation and adoption by your teams.",
    },
  },
  booking: {
    fr: {
      path: "/rendez-vous",
      title: "Prendre rendez-vous | Corentin Bardouil",
      description: "Premier échange de 30 minutes, gratuit, ou regard extérieur d’une heure à 199 €.",
    },
    en: {
      path: "/en/book",
      title: "Book a call | Corentin Bardouil",
      description: "A free 30-minute intro call, or a one-hour second opinion for €199.",
    },
  },
  terms: {
    fr: {
      path: "/conditions-de-vente",
      title: "Conditions de vente | Corentin Bardouil",
      description: "Conditions de vente du regard extérieur, réservé aux professionnels.",
    },
    en: {
      path: "/en/terms",
      title: "Terms of sale | Corentin Bardouil",
      description: "Terms of sale for the second opinion, for businesses only.",
    },
  },
};

export const shareImages: Record<Lang, { url: string; alt: string }> = {
  fr: { url: "/og-fr.png", alt: "Intégrer l’IA dans vos process métiers, Corentin Bardouil" },
  en: { url: "/og-en.png", alt: "Put AI to work in your business processes, Corentin Bardouil" },
};
