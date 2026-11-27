// Textes de la page d'accueil, repris tels quels des maquettes.
import type { ReactNode } from "react";
import { PROFILES, SHOW_CONTENT, type Lang } from "./site";

type Door = { title: string; desc: string };
type Item = { label: string; title: string; text: string };
type Card = { cover: ReactNode; format: string; title: string; url: string };

type HomeCopy = {
  accroche: string;
  sousAccroche: string;
  doorsLabel: string;
  contentTag: string;
  firstCallTag: string;
  price: string;
  doors: { content: Door; company: Door; session: Door };
  portraitAlt: string;
  aboutTitle: string;
  aboutLead: string;
  story: ReactNode[];
  quote: string;
  today: ReactNode;
  sharing: {
    title: string;
    lead: string;
    linkedinTitle: string;
    linkedinText: string;
    follow: string;
    // Contenus mis en avant. Renseigner les « url » avant d'activer la section :
    // sans adresse, une carte s'affiche sans lien.
    featured: { kicker: string; coverTitle: string; format: string; title: string; text: string; cta: string; url: string };
    cards: Card[];
  };
  band: {
    kicker: string;
    title: string;
    problem: string;
    method: string;
    answer: string;
    cta: string;
    note: string;
    examplesLabel: string;
    examples: Item[];
  };
  session: {
    title: string;
    lead: string;
    formatLabel: string;
    format: string[];
    topics: { title: string; items: string[] }[];
    outside: string;
    talk: string;
    howTitle: string;
    steps: { title: string; text: string }[];
    book: string;
    priceNote: string;
  };
};

function Linkedin({ children }: { children: ReactNode }) {
  return (
    <a href={PROFILES.linkedin} target="_blank" rel="noopener">
      {children}
    </a>
  );
}

export const home: Record<Lang, HomeCopy> = {
  fr: {
    accroche: "Ingénieur et fondateur.",
    sousAccroche: "Je relie la tech aux vrais enjeux des entreprises.",
    doorsLabel: "Par où continuer",
    contentTag: "Contenus",
    firstCallTag: "Premier échange offert",
    price: "199 €",
    doors: {
      content: { title: "Suivre ce que je partage", desc: "Des posts, des carrousels et des vidéos, sur LinkedIn." },
      company: { title: "Intégrer l’IA dans votre entreprise", desc: "Avec mon associé, c’est notre métier." },
      session: {
        title: "Échanger avec moi en 1:1",
        desc: "Une heure pour avancer sur un projet, votre usage de l’IA ou votre vision tech et business.",
      },
    },
    portraitAlt: "Portrait de Corentin Bardouil",
    aboutTitle: "Qui je suis",
    aboutLead: "Ingénieur, consultant, puis fondateur. Trois métiers, un même fil : rendre la tech vraiment utile.",
    story: [
      <>
        Tout part d’une curiosité qui ne s’est jamais calmée. Formé à IMT Atlantique puis à Madrid, en ingénierie
        biomédicale, j’ai fait <strong>mes premiers pas dans l’IA</strong> au CEA, sur l’analyse d’images. De ces années
        reste un réflexe : comprendre comment les choses fonctionnent avant de promettre ce qu’elles peuvent faire.
      </>,
      <>
        Puis près de trois ans de conseil en stratégie, dans la banque et l’assurance. À piloter des projets et des
        portefeuilles de projets, à faire travailler ensemble directions, métiers et équipes tech, à rendre un sujet
        complexe assez clair pour qu’un comité tranche. Une école exigeante, où j’ai compris{" "}
        <strong>comment une entreprise décide vraiment</strong>.
      </>,
      <>
        Restait l’envie de construire. Avec deux associés, j’ai lancé <a href="https://orya.care">Orya</a>, un bracelet
        connecté pour la sécurité des enfants. Je n’avais jamais créé d’application ;{" "}
        <strong>cinq mois plus tard, toute la tech tournait</strong>. Puis <a href="https://intake.fr">Intake</a>, une
        app de planification de course pour le trail, testée par des athlètes élite.
      </>,
      <>
        En parallèle, <strong>des entreprises m’ont confié leur tech</strong> : une startup de l’épargne, accompagnée de
        l’audit de son code jusqu’à son MVP, ou une société de gestion dont il a fallu reprendre toute l’infrastructure
        en quelques jours. Au plus près de leurs vrais problèmes, une conviction s’est imposée.
      </>,
    ],
    quote: "Avec l’IA, presque tout est devenu faisable. Le vrai travail, c’est de choisir ce qui vaut la peine d’être fait.",
    today: (
      <>
        Aujourd’hui, ces trois métiers se rejoignent : avec mon associé,{" "}
        <strong>nous aidons les entreprises à intégrer l’IA dans leurs process</strong>.{" "}
        {SHOW_CONTENT ? (
          <>Et ici, je partage ce que j’apprends en chemin, y compris ce qui ne marche pas.</>
        ) : (
          <>
            Et sur <Linkedin>LinkedIn</Linkedin>, je partage ce que j’apprends en chemin, y compris ce qui ne marche pas.
          </>
        )}
      </>
    ),
    sharing: {
      title: "Ce que je partage",
      lead: "Ce que l’IA change concrètement pour les entreprises : les annonces qui comptent, des cas d’usage métier par métier et des retours d’expérience, y compris sur ce qui ne fonctionne pas.",
      linkedinTitle: "Sur LinkedIn",
      linkedinText: "Des posts, des carrousels et des vidéos, tirés du terrain.",
      follow: "Suivre sur LinkedIn",
      featured: {
        kicker: "La méthode",
        coverTitle: "Construire ou brancher ?",
        format: "LinkedIn, vidéo",
        title: "Construire ou brancher : la question à poser avant tout projet IA",
        text: "Utiliser, brancher, construire : trois options, dans cet ordre. Et le coût qu’on oublie toujours, l’entretien.",
        cta: "Regarder la vidéo",
        url: "",
      },
      cards: [
        { cover: <>La maison <br />de l’IA</>, format: "LinkedIn, carrousel", title: "L’IA est une ressource : modèle, harness, outils et contexte", url: "" },
        { cover: <>Le MCP, <br />la prise universelle</>, format: "LinkedIn, vidéo", title: "Comment une IA se branche sur vos logiciels, sans tout redévelopper", url: "" },
        { cover: <>Une journée <br />au garage</>, format: "LinkedIn, carrousel", title: "Trois frictions du quotidien, ce que l’IA fait à chaque étape, et ce qui reste humain", url: "" },
      ],
    },
    band: {
      kicker: "Pour votre entreprise",
      title: "Intégrer l’IA dans vos process métiers internes.",
      problem: "Beaucoup d’entreprises utilisent déjà ChatGPT, Claude ou Copilot. Pourtant, au quotidien, presque rien n’a changé : on copie, on colle, on relance à la main.",
      method: "Les outils sont là, il manque la méthode.",
      answer: "Nous partons de vos process pour repérer où l’IA fait vraiment gagner du temps, puis la mettre en place avec vos équipes.",
      cta: "Parlons de votre entreprise",
      note: "Premier échange de 15 minutes, offert.",
      examplesLabel: "Exemples de tâches",
      examples: [
        { label: "Finance", title: "Saisir les factures fournisseurs", text: "Rapprochées des bons de commande" },
        { label: "Commercial", title: "Préparer la fiche prospect", text: "Avant chaque rendez-vous" },
        { label: "Service client", title: "Répondre aux demandes clients", text: "Triées, avec une réponse à valider" },
      ],
    },
    session: {
      title: "Un échange 1:1",
      lead: "Une heure avec moi pour avancer sur un sujet précis. Vous arrivez avec votre question, on la travaille ensemble, et vous repartez avec une décision plus claire et les prochaines étapes, par écrit.",
      formatLabel: "Le format",
      format: ["1 heure", "En visio", "Compte rendu sous 24 heures", "199 €"],
      topics: [
        { title: "Entreprendre", items: ["Lancer un projet, de l’idée au premier client", "Construire seul, recruter ou s’associer", "Tenir dans la durée"] },
        { title: "L’IA dans votre activité", items: ["Ce que l’IA change pour votre métier", "Vos outils et vos usages au quotidien", "Challenger une idée de produit IA"] },
        { title: "Votre vision tech et business", items: ["Relire votre feuille de route produit", "Arbitrer un choix technique structurant", "Aligner la tech sur votre modèle économique"] },
      ],
      outside: "Un regard extérieur sur votre réflexion, ni un diagnostic ni une mission. Intégrer l’IA dans les process de votre entreprise, c’est une autre offre :",
      talk: "parlons-en",
      howTitle: "Comment ça se passe",
      steps: [
        { title: "Choisissez un créneau", text: "Dans l’agenda, selon vos disponibilités." },
        { title: "Présentez votre sujet", text: "En quelques lignes, avec vos documents si besoin." },
        { title: "Réglez pour confirmer", text: "Le paiement valide le rendez-vous." },
        { title: "Recevez le compte rendu", text: "Sous 24 heures, les pistes et les prochaines étapes, par écrit." },
      ],
      book: "Réserver un échange",
      priceNote: "199 €, réservé aux professionnels.",
    },
  },
  en: {
    accroche: "Engineer and founder.",
    sousAccroche: "I connect tech to the real challenges businesses face.",
    doorsLabel: "Where to go next",
    contentTag: "Content",
    firstCallTag: "Free first call",
    price: "€199",
    doors: {
      content: { title: "Follow what I share", desc: "Posts, carousels and videos, on LinkedIn." },
      company: { title: "Bring AI into your company", desc: "It’s what my partner and I do." },
      session: {
        title: "A 1:1 session with me",
        desc: "One hour to move forward on a project, your use of AI or your tech and business vision.",
      },
    },
    portraitAlt: "Portrait of Corentin Bardouil",
    aboutTitle: "About me",
    aboutLead: "Engineer, consultant, then founder. Three jobs, one thread: making tech genuinely useful.",
    story: [
      <>
        It all starts with a curiosity that never settled down. Trained at IMT Atlantique, then in Madrid in biomedical
        engineering, I took <strong>my first steps in AI</strong> at the CEA, the French public research organization,
        working on image analysis. Those years left me with a reflex: understand how things work before promising what
        they can do.
      </>,
      <>
        Then nearly three years in strategy consulting, in banking and insurance. Running projects and project
        portfolios, getting executives, business teams and tech teams to work together, making a complex issue clear
        enough for a committee to decide. A demanding school, where I learned{" "}
        <strong>how a company really makes decisions</strong>.
      </>,
      <>
        What remained was the urge to build. With two partners, I launched <a href="https://orya.care">Orya</a>, a
        connected bracelet for children’s safety. I had never built an app;{" "}
        <strong>five months later, all the tech was running</strong>. Then <a href="https://intake.fr">Intake</a>, a
        race-planning app for trail running, tested by elite athletes.
      </>,
      <>
        Alongside that, <strong>companies trusted me with their tech</strong>: a savings startup, from the audit of its
        code to its MVP, or an asset management firm whose entire infrastructure had to be taken over in a few days.
        Working that close to their real problems, one conviction took hold.
      </>,
    ],
    quote: "With AI, almost anything has become possible. The real work is choosing what is worth doing.",
    today: (
      <>
        Today, these three jobs come together: with my partner,{" "}
        <strong>we help companies bring AI into their processes</strong>.{" "}
        {SHOW_CONTENT ? (
          <>And here, I share what I learn along the way, including what doesn’t work.</>
        ) : (
          <>
            And on <Linkedin>LinkedIn</Linkedin>, I share what I learn along the way, including what doesn’t work.
          </>
        )}
      </>
    ),
    sharing: {
      title: "What I share",
      lead: "What AI actually changes for companies: the announcements that matter, use cases job by job, and lessons from the field, including what doesn’t work.",
      linkedinTitle: "On LinkedIn",
      linkedinText: "Posts, carousels and videos, drawn from the field.",
      follow: "Follow on LinkedIn",
      featured: {
        kicker: "The method",
        coverTitle: "Build or plug in?",
        format: "LinkedIn, video",
        title: "Build or plug in: the question to ask before any AI project",
        text: "Use, plug in, build: three options, in that order. And the cost everyone forgets: maintenance.",
        cta: "Watch the video",
        url: "",
      },
      cards: [
        { cover: <>The house <br />of AI</>, format: "LinkedIn, carousel", title: "AI as a resource: model, harness, tools and context", url: "" },
        { cover: <>MCP, <br />the universal plug</>, format: "LinkedIn, video", title: "How AI plugs into your software without rebuilding everything", url: "" },
        { cover: <>A day <br />at the garage</>, format: "LinkedIn, carousel", title: "Three everyday frictions, what AI does at each step, and what stays human", url: "" },
      ],
    },
    band: {
      kicker: "For your company",
      title: "Bring AI into your internal business processes.",
      problem: "Many companies already use ChatGPT, Claude or Copilot. Yet day to day, almost nothing has changed: people copy, paste and chase things up by hand.",
      method: "The tools are there. What’s missing is the method.",
      answer: "We start from your processes to find where AI really saves time, then put it in place with your teams.",
      cta: "Let’s talk about your company",
      note: "Free 15-minute first call.",
      examplesLabel: "Example tasks",
      examples: [
        { label: "Finance", title: "Enter supplier invoices", text: "Matched against purchase orders" },
        { label: "Sales", title: "Prepare the prospect brief", text: "Before every meeting" },
        { label: "Customer service", title: "Answer customer requests", text: "Sorted, with a reply ready to approve" },
      ],
    },
    session: {
      title: "A 1:1 session",
      lead: "One hour with me to move forward on a specific topic. You bring your question, we work on it together, and you leave with a clearer decision and the next steps, in writing.",
      formatLabel: "The format",
      format: ["1 hour", "Video call, in French", "Written summary within 24 hours", "€199"],
      topics: [
        { title: "Entrepreneurship", items: ["Launching a project, from idea to first customer", "Going solo, hiring or teaming up", "Going the distance"] },
        { title: "AI in your business", items: ["What AI changes in your line of work", "Your tools and day-to-day practices", "Stress-testing an AI product idea"] },
        { title: "Your tech and business vision", items: ["Reviewing your product roadmap", "Making a major technical call", "Aligning tech with your business model"] },
      ],
      outside: "An outside view on your thinking, neither an audit nor a project. Bringing AI into your company’s processes is a different offer:",
      talk: "let’s talk",
      howTitle: "How it works",
      steps: [
        { title: "Pick a time slot", text: "In the calendar, whenever suits you." },
        { title: "Describe your topic", text: "In a few lines, with your documents if needed." },
        { title: "Pay to confirm", text: "Payment confirms the booking." },
        { title: "Get your summary", text: "Within 24 hours, the options and next steps, in writing." },
      ],
      book: "Book a session",
      priceNote: "€199, for professionals only.",
    },
  },
};
