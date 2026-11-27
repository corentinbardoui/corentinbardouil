// Domaine principal : corentinbardouil.com redirige vers www sur Vercel.
// Toutes les URL absolues (canonique, hreflang, partage, sitemap, données structurées)
// doivent donc pointer vers www, sinon Google reçoit des signaux contradictoires.
export const SITE_URL = "https://www.corentinbardouil.com";

export const SITE_NAME = "Corentin Bardouil";

// Date de mise en production, affichée sur les pages légales. Format AAAA-MM-JJ.
export const LEGAL_DATE = "2026-11-27";

// Date de dernière modification du contenu, reprise dans le sitemap.
// À mettre à jour quand les textes des pages changent.
export const LAST_UPDATE = "2026-11-27";

// Lancement : passer à true pour afficher la section « Ce que je partage », son lien de menu,
// la carte 01 vers cette section et la dernière phrase du récit correspondante.
export const SHOW_CONTENT: boolean = false;

export const EMAIL = "corentin.bardouil@gmail.com";

export const PROFILES = {
  linkedin: "https://www.linkedin.com/in/corentin-bardouil",
  github: "https://github.com/corentinbardoui",
};

export type Lang = "fr" | "en";
export type PageKey = "home" | "legal" | "privacy" | "terms";

type PageMeta = { path: string; title: string; description: string };

export const pages: Record<PageKey, Record<Lang, PageMeta>> = {
  home: {
    fr: {
      path: "/",
      title: "Corentin Bardouil, ingénieur et fondateur",
      description:
        "Ingénieur et fondateur, je relie la tech aux vrais enjeux des entreprises. Intégrer l’IA dans vos process, ou une heure en 1:1 pour avancer sur votre projet.",
    },
    en: {
      path: "/en",
      title: "Corentin Bardouil, engineer and founder",
      description:
        "Engineer and founder, I connect tech to the real challenges businesses face. Bring AI into your processes, or book a 1:1 hour to move your project forward.",
    },
  },
  legal: {
    fr: {
      path: "/mentions-legales",
      title: "Mentions légales, Corentin Bardouil",
      description: "Éditeur du site, hébergement et propriété des contenus.",
    },
    en: {
      path: "/en/legal-notice",
      title: "Legal notice, Corentin Bardouil",
      description: "Site publisher, hosting and content ownership.",
    },
  },
  privacy: {
    fr: {
      path: "/confidentialite",
      title: "Confidentialité, Corentin Bardouil",
      description: "Les données collectées sur ce site, leurs usages, leur durée de conservation et vos droits.",
    },
    en: {
      path: "/en/privacy",
      title: "Privacy, Corentin Bardouil",
      description: "The data collected on this site, how it is used, how long it is kept and your rights.",
    },
  },
  terms: {
    fr: {
      path: "/conditions-de-vente",
      title: "Conditions de vente, Corentin Bardouil",
      description: "Conditions de l’échange 1:1 : prestation, prix, paiement, report, annulation et remboursement.",
    },
    en: {
      path: "/en/terms",
      title: "Terms of sale, Corentin Bardouil",
      description: "Terms for the 1:1 session: service, price, payment, rescheduling, cancellation and refunds.",
    },
  },
};

export const shareImages: Record<Lang, { url: string; alt: string }> = {
  fr: {
    url: "/og-fr.png?v=2",
    alt: "Corentin Bardouil, ingénieur et fondateur. Je relie la tech aux vrais enjeux des entreprises.",
  },
  en: {
    url: "/og-en.png?v=2",
    alt: "Corentin Bardouil, engineer and founder. I connect tech to the real challenges businesses face.",
  },
};
