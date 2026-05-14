// src/data/site-content.ts

export const siteMetadata = {
  title: "Corentin Bardouil | Ingénierie IA & Stratégie Opérationnelle",
  description:
    "Ingénieur et Consultant. J'accompagne les entreprises dans leur transformation digitale en alliant stratégie opérationnelle et développement de solutions IA sur-mesure.",
};

export const navData = {
  name: "Corentin Bardouil",
  links: [
    { label: "Services", href: "#services" },
    { label: "Réalisations", href: "#portfolio" },
    { label: "À propos", href: "#about" },
  ],
  cta: "Discuter d'un projet",
  ctaHref: "#contact",
};

export const heroData = {
  tagline: "Ingénieur & Consultant",
  headline: "Le trait d'union entre l'analyse et l'action.",
  sub: "J'accompagne les entreprises dans leur transformation digitale en alliant stratégie opérationnelle et développement de solutions IA sur-mesure.",
  cta: "Voir mes services",
  ctaHref: "#services",
};

export const aboutData = {
  headline: "Le trait d'union entre l'analyse et l'action.",
  story: [
    "J'ai toujours cherché à comprendre comment les systèmes complexes fonctionnent. D'abord par les mathématiques en prépa, puis par la stratégie en cabinet, et aujourd'hui par le code.",
    "Pendant mes années en école d'ingénieur et mon parcours en conseil, mon quotidien était fait d'analyses, de diagnostic et de structuration. J'ai aimé comprendre la mécanique derrière les grandes organisations. J'ai appris à poser les bonnes questions, à structurer la pensée et à faire le pont entre la direction et le terrain. C'était formateur, nécessaire, mais il me manquait une pièce essentielle : la capacité de transformer ces réflexions en objets tangibles.",
    "Plus je passais de temps à recommander des solutions, plus je sentais une limite : le fossé entre la stratégie et l'exécution. En entreprise, les idées sont nombreuses, mais la capacité à les construire, à les coder et à les mettre en mouvement est rare. C'est là que ma transition s'est opérée. J'ai commencé à coder mes propres outils, à prototyper des agents IA, à automatiser ce qui prenait trop de temps. J'ai découvert une liberté nouvelle : celle de ne plus dépendre de quelqu'un d'autre pour concrétiser une intuition.",
    "Aujourd'hui, je ne suis plus seulement celui qui analyse. Je suis celui qui bâtit les outils qui rendent ces analyses fluides et actionnables. Mon rôle est de mettre mon expertise de consultant au service de mon profil d'ingénieur. Je suis le partenaire qui comprend la stratégie, mais qui sait aussi mettre les mains dans le cambouis pour livrer une solution qui fonctionne.",
  ],
};

export const services = [
  {
    title: "Diagnostic : Identifier les leviers de performance",
    description:
      "Une lecture pragmatique de votre organisation pour identifier les points de friction et définir une trajectoire claire.",
    items: [
      "Audit opérationnel pour mettre en lumière les inefficacités.",
      "Priorisation stratégique des chantiers à fort retour sur investissement.",
      "Élaboration d'une feuille de route de transformation structurée.",
    ],
  },
  {
    title: "Optimisation : Structurer les opérations",
    description:
      "La mise en place de systèmes fluides pour libérer du temps opérationnel et fiabiliser la production.",
    items: [
      "Fluidification des flux de travail pour éliminer les frictions.",
      "Mise en place d'outils de pilotage et de reporting en temps réel.",
      "Accompagnement dédié pour ancrer durablement les nouvelles méthodes.",
    ],
  },
  {
    title: "Ingénierie : Développer votre avantage technologique",
    description:
      "Conception et développement d'outils IA sur-mesure quand les solutions standards atteignent leurs limites.",
    items: [
      "Développement de solutions dédiées (agents IA, web-apps, automatisation).",
      "Prototypage agile (PoC) pour valider rapidement la faisabilité technique.",
      "Architecture technique robuste, sécurisée et évolutive.",
    ],
  },
];

export const portfolio = {
  iaSolutions: [
    {
      title: "Agents IA spécialisés",
      desc: "Analyse, extraction et synthèse de données complexes.",
    },
    {
      title: "Plateformes d'automatisation",
      desc: "Environnements dédiés pour optimiser la productivité quotidienne.",
    },
    {
      title: "Architecture technique",
      desc: "Conception de systèmes fiables, sécurisés et évolutifs.",
    },
  ],
  missionsConseil: [
    {
      sector: "Banque & Assurance",
      focus: "Pilotage stratégique et transformation organisationnelle.",
    },
    {
      sector: "Immobilier",
      focus: "IA appliquée à l'analyse de diagnostics et automatisation métier.",
    },
    {
      sector: "Pilotage & Data",
      focus: "Structuration de la donnée et aide à la décision.",
    },
  ],
};

export const contactData = {
  heading: "Discutons de votre projet",
  sub: "Une idée, un défi, une deadline serrée ? Prenons 30 minutes pour explorer ensemble.",
  cta: "Réserver un créneau",
  ctaHref: "https://cal.com/",
  email: "corentin.bardouil@gmail.com",
};

export const footerData = {
  name: "Corentin Bardouil",
  tagline: "Ingénierie IA & Stratégie Opérationnelle",
  links: [
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "GitHub", href: "https://github.com" },
  ],
};

export type Service = (typeof services)[number];
export type IaSolution = (typeof portfolio.iaSolutions)[number];
export type MissionConseil = (typeof portfolio.missionsConseil)[number];
