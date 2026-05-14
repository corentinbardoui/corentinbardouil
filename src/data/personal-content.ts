export const personalMeta = {
  title: "Corentin Bardouil — Technical Founder",
  description:
    "Technical founder building AI-native software and infrastructure. Autonomous agent systems, developer tools, and programmable workflows.",
  openGraph: {
    title: "Corentin Bardouil — Technical Founder",
    description:
      "Building AI-native infrastructure and autonomous agent systems.",
    url: "https://corentinbardouil.com",
    siteName: "Corentin Bardouil",
    locale: "en_US",
    type: "website" as const,
  },
};

export const personalNav = {
  name: "Corentin Bardouil",
  initials: "CB",
  links: [
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
  ],
  github: "https://github.com/corentinbardouil",
  linkedin: "https://linkedin.com/in/corentin-bardouil",
};

export const currentFocusData = {
  label: "Currently",
  paragraphs: [
    "I'm exploring the infrastructure layer required for autonomous AI agents: financial systems, orchestration frameworks, AI-native interfaces, and programmable workflows.",
    "Most AI products today use language models as a thin layer over existing UIs. I'm interested in the harder problem: what does infrastructure look like when the agent is the user?",
  ],
  building: "Stealth — financial infrastructure for autonomous agents.",
};

export const projects = [
  {
    id: "sicle",
    name: "Stealth",
    subtitle: "Financial infrastructure for autonomous AI agents.",
    description:
      "We're building the infrastructure layer that allows AI agents to transact safely: programmable wallets, transaction policies, real-time supervision, and MCP-compatible integrations. The bet is that agents need financial primitives purpose-built for their constraints — not human banking bolted on.",
    highlights: [
      "Double-entry ledger",
      "Policy engine",
      "Agent orchestration",
      "Real-time supervision",
      "MCP integrations",
    ],
    tech: ["FastAPI", "PostgreSQL", "React", "MCP Protocol", "Double-entry Ledger", "AI Agent Infrastructure"],
    status: "Building now",
    role: null as string | null,
    variant: "flagship" as const,
    images: [] as string[],
    links: { demo: null as string | null, github: null as string | null },
  },
  {
    id: "orya",
    name: "Orya",
    subtitle: "Connected safety system for children.",
    description:
      "Co-founded and built a connected wearable product designed to improve child safety through real-time monitoring and digital infrastructure.",
    highlights: [
      "Led technical architecture and product development end-to-end",
      "Hardware/software integration, backend systems, web platform, and operational tooling",
      "Financial modeling and business strategy",
    ],
    tech: ["Web Platform", "Backoffice Systems", "Backend Infrastructure", "Hardware Integration", "Connected Product"],
    status: "Co-founder · CTO",
    role: "Co-founder · CTO",
    variant: "featured" as const,
    images: ["/images/orya-1.png"],
    links: { demo: "https://orya.care" as string | null, github: null as string | null },
  },
  {
    id: "travel",
    name: "AI Travel Planner",
    subtitle: "AI-native travel planning.",
    description:
      "Users describe a trip in natural language; the AI generates and updates a real interactive itinerary in real time. Streaming generation, conversational editing, and live map integration.",
    highlights: [
      "Interactive maps",
      "Conversational editing",
      "Streaming generation",
      "Multi-step orchestration",
    ],
    tech: ["Next.js", "TypeScript", "FastAPI", "Claude API", "Mapbox"],
    status: "Shipped",
    role: null as string | null,
    variant: "mvp" as const,
    images: ["/images/AI Travel Planner.png"],
    links: { demo: "https://travel-planner-murex-tau.vercel.app" as string | null, github: null as string | null },
  },
  {
    id: "vela",
    name: "AI Project Manager",
    subtitle: "AI-native project management.",
    description:
      "Project management where AI agents structure, prioritize, and execute workflows from natural language. Real-time Kanban with autonomous task orchestration.",
    highlights: [
      "Real-time Kanban",
      "AI task orchestration",
      "Conversational onboarding",
      "Autonomous agents",
    ],
    tech: ["Next.js", "TypeScript", "Supabase Realtime", "Claude API", "Vercel AI SDK", "Multi-agent Systems"],
    status: "Shipped",
    role: null as string | null,
    variant: "mvp" as const,
    images: ["/images/AI Project Manager.png"],
    links: { demo: null as string | null, github: null as string | null },
  },
  {
    id: "lora",
    name: "Marketing SaaS",
    subtitle: "Multi-tenant messaging automation SaaS.",
    description:
      "Production-grade B2B messaging platform with campaign orchestration, analytics, and organization-based collaboration. Built for async processing at scale.",
    highlights: [
      "Multi-tenant architecture",
      "Async processing",
      "Analytics dashboards",
      "Team collaboration",
    ],
    tech: ["Next.js", "FastAPI", "PostgreSQL", "Multi-tenant SaaS", "Async Processing"],
    status: "Shipped",
    role: null as string | null,
    variant: "mvp" as const,
    images: ["/images/Marketing Saas.png"],
    links: { demo: null as string | null, github: null as string | null },
  },
];

export const techInterests = [
  "Product Engineering",
  "Startup Ecosystems",
  "AI Infrastructure",
  "Autonomous Agents",
  "AI-native Interfaces",
  "Financial Systems",
  "Blockchain Systems",
  "Biomedical Engineering",
];

export const writingData = [
  { title: "Why language is becoming the new software interface", date: "Coming soon", slug: null, published: false },
  { title: "Infrastructure for autonomous agents", date: "Coming soon", slug: null, published: false },
  { title: "AI-native product design", date: "Coming soon", slug: null, published: false },
];

export const personalAbout = {
  paragraphs: [
    "I studied mathematics in prépa, then engineering at IMT Atlantique with a biomedical engineering exchange in Madrid. I spent several years as a strategy consultant in banking and insurance — learning to navigate organizational complexity, structure ambiguous problems, and bridge the gap between executive intent and operational reality.",
    "Then I left to build.",
    "Today I'm focused on AI-native infrastructure: the systems that let autonomous agents act in the real world — manage money, execute workflows, coordinate across tools. I'm drawn to the layer below the model, where the interesting constraints live.",
  ],
  links: {
    linkedin: "https://linkedin.com/in/corentin-bardouil",
    github: "https://github.com/corentinbardouil",
    email: "corentin.bardouil@gmail.com",
  },
};

export const personalFooter = {
  name: "Corentin Bardouil",
  links: [
    { label: "GitHub", href: "https://github.com/corentinbardouil", icon: "/github.svg" },
    { label: "LinkedIn", href: "https://linkedin.com/in/corentin-bardouil", icon: "/linkedin.svg" },
    { label: "Email", href: "mailto:corentin.bardouil@gmail.com", icon: "/mail.svg" },
  ],
};

export type Project = (typeof projects)[number];
