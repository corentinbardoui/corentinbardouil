import type { Lang } from "@/lib/language";

export const t = {
  en: {
    nav: {
      links: [
        { label: "Projects", href: "#projects" },
        { label: "About", href: "#about" },
      ],
    },
    hero: {
      badge: "Nantes · Technical Founder",
      headlinePart1: "Technical Founder building AI-native software",
      headlinePart2: "and infrastructure.",
      sub: "I build autonomous agent systems, AI-native products, and developer infrastructure.",
      cta: "View Projects",
      scroll: "scroll",
    },
    focus: {
      label: "Currently",
      paragraphs: [
        "I'm exploring the infrastructure layer required for autonomous AI agents: financial systems, orchestration frameworks, AI-native interfaces, and programmable workflows.",
        "Most AI products today use language models as a thin layer over existing UIs. I'm interested in the harder problem: what does infrastructure look like when the agent is the user?",
      ],
      building: "Stealth — financial infrastructure for autonomous agents.",
    },
    projects: {
      label: "Projects",
      sub: "Things I've built or am building. Focused on AI infrastructure, autonomous agents, and full-stack product engineering.",
      highlightsLabel: "Highlights",
      items: [
        {
          subtitle: "Financial infrastructure for autonomous AI agents.",
          description: "We're building the infrastructure layer that allows AI agents to transact safely: programmable wallets, transaction policies, real-time supervision, and MCP-compatible integrations. The bet is that agents need financial primitives purpose-built for their constraints — not human banking bolted on.",
          highlights: ["Double-entry ledger", "Policy engine", "Agent orchestration", "Real-time supervision", "MCP integrations"],
          status: "Building now",
        },
        {
          subtitle: "Connected safety system for children.",
          description: "Co-founded and built a connected wearable product designed to improve child safety through real-time monitoring and digital infrastructure.",
          highlights: [
            "Led technical architecture and product development end-to-end",
            "Hardware/software integration, backend systems, web platform, and operational tooling",
            "Financial modeling and business strategy",
          ],
          status: "Co-founder · CTO",
        },
        {
          subtitle: "AI-native travel planning.",
          description: "Users describe a trip in natural language; the AI generates and updates a real interactive itinerary in real time. Streaming generation, conversational editing, and live map integration.",
          highlights: ["Interactive maps", "Conversational editing", "Streaming generation", "Multi-step orchestration"],
          status: "Shipped",
        },
        {
          subtitle: "AI-native project management.",
          description: "Project management where AI agents structure, prioritize, and execute workflows from natural language. Real-time Kanban with autonomous task orchestration.",
          highlights: ["Real-time Kanban", "AI task orchestration", "Conversational onboarding", "Autonomous agents"],
          status: "Shipped",
        },
        {
          subtitle: "Multi-tenant messaging automation SaaS.",
          description: "Production-grade B2B messaging platform with campaign orchestration, analytics, and organization-based collaboration. Built for async processing at scale.",
          highlights: ["Multi-tenant architecture", "Async processing", "Analytics dashboards", "Team collaboration"],
          status: "Shipped",
        },
      ],
    },
    interests: { label: "Interests" },
    about: {
      label: "About",
      paragraphs: [
        "I studied mathematics in prépa, then engineering at IMT Atlantique with a biomedical engineering exchange in Madrid. I spent several years as a strategy consultant in banking and insurance — learning to navigate organizational complexity, structure ambiguous problems, and bridge the gap between executive intent and operational reality.",
        "Then I left to build.",
        "Today I'm focused on AI-native infrastructure: the systems that let autonomous agents act in the real world — manage money, execute workflows, coordinate across tools. I'm drawn to the layer below the model, where the interesting constraints live.",
      ],
      emphasis: "Then I left to build.",
    },
  },
  fr: {
    nav: {
      links: [
        { label: "Projets", href: "#projects" },
        { label: "À propos", href: "#about" },
      ],
    },
    hero: {
      badge: "Nantes · Fondateur technique",
      headlinePart1: "Fondateur technique — logiciels et",
      headlinePart2: "infrastructures natifs à l'IA.",
      sub: "Je construis des systèmes d'agents autonomes, des produits natifs à l'IA et des outils pour développeurs.",
      cta: "Voir les projets",
      scroll: "défiler",
    },
    focus: {
      label: "En ce moment",
      paragraphs: [
        "J'explore la couche d'infrastructure nécessaire aux agents IA autonomes : systèmes financiers, frameworks d'orchestration, interfaces natives à l'IA et workflows programmables.",
        "La plupart des produits IA utilisent aujourd'hui les modèles de langage comme une couche superficielle par-dessus des interfaces existantes. Le problème qui m'intéresse est plus difficile : à quoi ressemble l'infrastructure quand l'agent est l'utilisateur ?",
      ],
      building: "Stealth — infrastructure financière pour agents autonomes.",
    },
    projects: {
      label: "Projets",
      sub: "Ce que j'ai construit ou suis en train de construire. Axé sur l'infrastructure IA, les agents autonomes et l'ingénierie produit full-stack.",
      highlightsLabel: "Points clés",
      items: [
        {
          subtitle: "Infrastructure financière pour agents IA autonomes.",
          description: "Nous construisons la couche d'infrastructure permettant aux agents IA de transacter en toute sécurité : wallets programmables, politiques de transaction, supervision en temps réel et intégrations MCP. Le pari : les agents ont besoin de primitives financières conçues pour leurs contraintes — pas du système bancaire humain adapté.",
          highlights: ["Grand livre double entrée", "Moteur de politiques", "Orchestration d'agents", "Supervision temps réel", "Intégrations MCP"],
          status: "En cours",
        },
        {
          subtitle: "Système connecté de sécurité pour enfants.",
          description: "Co-fondateur et responsable du développement technique d'un produit wearable conçu pour améliorer la sécurité des enfants grâce à une infrastructure connectée en temps réel.",
          highlights: [
            "Direction de l'architecture technique et du développement produit de bout en bout",
            "Intégration hardware/software, infrastructure backend, plateforme web et outils opérationnels",
            "Modélisation financière et structuration stratégique du projet",
          ],
          status: "Co-fondateur · CTO",
        },
        {
          subtitle: "Planification de voyages native à l'IA.",
          description: "L'utilisateur décrit un voyage en langage naturel ; l'IA génère et met à jour un itinéraire interactif en temps réel. Génération en streaming, édition conversationnelle et intégration de cartes en direct.",
          highlights: ["Cartes interactives", "Édition conversationnelle", "Génération en streaming", "Orchestration multi-étapes"],
          status: "Livré",
        },
        {
          subtitle: "Gestion de projet native à l'IA.",
          description: "Un système de gestion de projet où des agents IA structurent, priorisent et exécutent des workflows à partir d'instructions en langage naturel. Kanban temps réel avec orchestration autonome des tâches.",
          highlights: ["Kanban temps réel", "Orchestration IA des tâches", "Onboarding conversationnel", "Agents autonomes"],
          status: "Livré",
        },
        {
          subtitle: "SaaS d'automatisation de messagerie multi-tenant.",
          description: "Plateforme de messagerie B2B production-ready avec orchestration de campagnes, analytics et collaboration par organisation. Conçu pour le traitement asynchrone à grande échelle.",
          highlights: ["Architecture multi-tenant", "Traitement asynchrone", "Tableaux de bord analytics", "Collaboration d'équipe"],
          status: "Livré",
        },
      ],
    },
    interests: { label: "Intérêts" },
    about: {
      label: "À propos",
      paragraphs: [
        "J'ai étudié les mathématiques en prépa, puis l'ingénierie à IMT Atlantique avec un échange en ingénierie biomédicale à Madrid. J'ai passé plusieurs années comme consultant en stratégie dans la banque et l'assurance — apprenant à naviguer dans la complexité organisationnelle, structurer l'ambiguïté et faire le pont entre la vision des dirigeants et la réalité opérationnelle.",
        "Puis j'ai tout quitté pour construire.",
        "Aujourd'hui je me concentre sur l'infrastructure native à l'IA : les systèmes qui permettent aux agents autonomes d'agir dans le monde réel — gérer de l'argent, exécuter des workflows, coordonner des outils. Je suis attiré par la couche sous le modèle, là où se trouvent les contraintes intéressantes.",
      ],
      emphasis: "Puis j'ai tout quitté pour construire.",
    },
  },
} satisfies Record<Lang, unknown>;

export type Translations = typeof t.en;
