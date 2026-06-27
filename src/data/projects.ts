export type Project = {
  slug: string;
  name: string;
  tagline: string;
  status: "Live";
  image: string;
  tags: string[];
  gap: string;
  solution: string;
  capabilities: string[];
  architecture: string[];
  links: {
    live?: string;
    github?: string;
    demo?: string;
  };
};

export const projects: Project[] = [
  {
    slug: "aether-studio",
    name: "Aether Studio",
    tagline: "Streaming studio without OBS Studio or Camo",
    status: "Live",
    image: "/projects/aether-studio.png",
    tags: ["Streaming", "Real-time", "Product"],
    gap:
      "Live streaming often requires complex setups across multiple tools, with steep learning curves and fragile routing.",
    solution:
      "A streamlined studio that provides a unified streaming workflow with simple controls and reliable output behaviour.",
    capabilities: [
      "Live studio-style controls",
      "Audio + video handling in one place",
      "Focus on simplicity and reliability",
    ],
    architecture: [
      "UI control layer (studio panel)",
      "Media capture / ingest",
      "Processing & routing",
      "Output to streaming destination",
    ],
    links: {},
  },
  {
    slug: "lumina-presenter",
    name: "Lumina Presenter",
    tagline: "Church presentation software for calm, coordinated live services",
    status: "Live",
    image: "/projects/lumina-presenter.png",
    tags: ["Presentation", "Church", "UX"],
    gap:
      "Church media teams often plan services across disconnected tools, then operate dated presentation software under live pressure.",
    solution:
      "Lumina brings service run sheets, lyrics, scripture, media, stage display and team control into one modern workflow for web, Windows and macOS.",
    capabilities: [
      "Lyrics, Bible slides, hymns and sermon media",
      "Motion backgrounds and audience output",
      "Stage display and confidence monitoring",
      "Remote control and team workflows",
      "Web planning with Windows and macOS presentation",
    ],
    architecture: [
      "Service planning and run-sheet layer",
      "Presentation library and live cue system",
      "Audience, stage and confidence outputs",
      "Desktop presentation with web-based planning",
    ],
    links: { live: "https://luminalive.co.uk" },
  },
  {
    slug: "payflow",
    name: "PayFlow",
    tagline: "Payment solution focused on clean flows and validation",
    status: "Live",
    image: "/projects/payflow.png",
    tags: ["Payments", "Validation", "APIs"],
    gap:
      "Payment flows can be fragmented and error-prone when validation, edge cases, and integrations aren’t treated as first-class.",
    solution:
      "A cleaner payment workflow designed with reliability, validation, and integration readiness in mind.",
    capabilities: [
      "Clear transaction flow design",
      "Strong validation mindset",
      "Integration-friendly structure",
    ],
    architecture: ["Client flow", "API layer", "Payment processing", "Receipts/logging"],
    links: {},
  },
  {
    slug: "photogenix-ai-studio",
    name: "PhotoGenix AI Studio",
    tagline: "Next-gen AI Photoshop-style editing workflows",
    status: "Live",
    image: "/projects/photogenix-ai-studio.png",
    tags: ["AI", "Imaging", "Workflow"],
    gap:
      "Traditional photo editing is powerful but slow and complex for most users.",
    solution:
      "An AI-assisted editing studio that simplifies common workflows into fast, guided actions.",
    capabilities: ["AI-powered enhancements", "Simplified editing workflows", "Creator-friendly UI"],
    architecture: ["Editor UI", "AI operations", "Export pipeline"],
    links: {},
  },
  {
    slug: "tiwaton-adventure",
    name: "Tiwaton Adventure",
    tagline: "Family adventure and learning experience hub",
    status: "Live",
    image: "/projects/tiwaton-adventure.png",
    tags: ["Family", "Learning", "Experience"],
    gap:
      "Families need safe, engaging digital experiences that mix creativity, fun, and learning without noise.",
    solution:
      "A family-first app built around exploration, activities, and shared experiences.",
    capabilities: ["Family activity flows", "Kid-friendly UX", "Experience-driven design"],
    architecture: ["UI experience layer", "Content/activities", "User progress & storage"],
    links: {},
  },
  {
    slug: "propscout-investment-engine",
    name: "PropScout – Investment Engine",
    tagline: "Property deal sourcing and investment scoring",
    status: "Live",
    image: "/projects/propscout-investment-engine.png",
    tags: ["Property", "Scoring", "Automation"],
    gap:
      "Deal sourcing is time-consuming and inconsistent without a structured scoring approach.",
    solution:
      "An engine that supports sourcing and highlights opportunities with consistent evaluation logic.",
    capabilities: ["Opportunity surfacing", "Scoring approach", "Decision support"],
    architecture: ["Data ingest", "Scoring rules", "Results + shortlist"],
    links: {},
  },
  {
    slug: "codecosmos",
    name: "CodeCosmos",
    tagline: "Coding learning app for kids",
    status: "Live",
    image: "/projects/codecosmos.png",
    tags: ["Kids", "Education", "Learning"],
    gap:
      "Many coding tools aren’t designed for younger learners and early confidence building.",
    solution:
      "A kid-friendly approach to coding concepts built around interaction and progress.",
    capabilities: ["Beginner-friendly learning", "Engagement loops", "Progress structure"],
    architecture: ["Learning modules", "Progress tracking", "Rewards/feedback"],
    links: {},
  },
  {
    slug: "appointment-hunter-ai",
    name: "Appointment Hunter AI",
    tagline: "NHS dentist appointment gap detection",
    status: "Live",
    image: "/projects/appointment-hunter-ai.png",
    tags: ["Automation", "Search", "AI-assisted"],
    gap:
      "Finding available NHS dentist appointments is difficult because availability changes and gaps are hard to spot.",
    solution:
      "A solution that helps surface availability gaps efficiently for faster discovery.",
    capabilities: ["Gap detection", "Opportunity surfacing", "Practical UX"],
    architecture: ["Data scan/search", "Gap detection logic", "Results surfacing"],
    links: {},
  },
  {
    slug: "shiftcare",
    name: "ShiftCare",
    tagline: "Mobile app for agency workforce engagement + shift coordination",
    status: "Live",
    image: "/projects/shiftcare.png",
    tags: ["Mobile", "Workforce", "Operations"],
    gap:
      "Agency-worker engagement is often manual and fragmented, causing missed shifts and poor coordination.",
    solution:
      "A mobile-first platform for shift visibility, coordination, and engagement.",
    capabilities: ["Shift discovery", "Worker engagement flows", "Operational clarity"],
    architecture: ["Mobile UI", "API layer", "Shift management + notifications"],
    links: {},
  },
  {
    slug: "ai-native-studio",
    name: "The AI-Native Studio",
    tagline: "Music creatives end-to-end studio and streaming engine",
    status: "Live",
    image: "/projects/ai-native-studio.png",
    tags: ["Music", "Studio", "Streaming"],
    gap:
      "Creative workflows are fragmented across tools, making it hard to go from idea to publish smoothly.",
    solution:
      "An end-to-end studio workflow designed to support creation through to streaming/output.",
    capabilities: ["Creative workflow focus", "Studio-style controls", "Output readiness"],
    architecture: ["Creation tools", "Processing pipeline", "Export/stream output"],
    links: {},
  },
  {
    slug: "tiwaton-ai-studio",
    name: "TIWATON AI STUDIO",
    tagline: "AI-assisted streaming & audio studio for churches and creators",
    status: "Live",
    image: "/projects/tiwaton-ai-studio.png",
    tags: ["Audio", "Streaming", "Church"],
    gap:
      "Churches/creators often rely on complex audio/streaming setups that are difficult to manage consistently.",
    solution:
      "A simplified studio built for real-world live use, with a strong quality-and-reliability mindset.",
    capabilities: ["Live-ready workflow", "Simplified controls", "Built for reliability"],
    architecture: ["Studio UI", "Audio processing/routing", "Broadcast output"],
    links: {},
  },
  {
    slug: "scribeai",
    name: "ScribeAI",
    tagline: "Offline-first AI meeting & sermon transcription assistant",
    status: "Live",
    image: "/projects/scribeai.png",
    tags: ["AI", "Transcription", "Productivity"],
    gap:
      "Meeting and sermon recordings sit unprocessed for weeks because transcription tools are slow, cloud-dependent, and miss accents.",
    solution:
      "An offline-first assistant that captures audio, transcribes with strong accent handling, summarises key points, and exports action items — all without needing a live internet connection.",
    capabilities: [
      "High-accuracy transcription with accent support",
      "Automatic summarisation + action-item extraction",
      "Auto-deliverables pack: minutes, decisions, follow-up email",
      "Battery-aware capture mode for mobile",
      "Studio Live broadcast mode",
    ],
    architecture: [
      "React frontend + Node.js/Express backend",
      "Offline-first audio capture pipeline",
      "AI processing layer (transcription → summarisation)",
      "Export engine (PDF, CSV, email)",
    ],
    links: {},
  },
  {
    slug: "rotaai",
    name: "RotaAI",
    tagline: "AI-powered medical rostering for NHS-style hospital environments",
    status: "Live",
    image: "/projects/rotaai.png",
    tags: ["AI", "Healthcare", "Automation"],
    gap:
      "NHS-style hospital rostering is done in spreadsheets or rigid legacy tools that can't adapt to dynamic staffing constraints or compliance rules.",
    solution:
      "An AI-driven rostering engine that generates optimised, constraint-aware rotas for medical teams — reducing manual effort and scheduling conflicts.",
    capabilities: [
      "AI-generated rota optimisation",
      "NHS compliance rule enforcement",
      "Staff availability + preference handling",
      "Real-time conflict detection",
      "Dashboard + export for coordinators",
    ],
    architecture: [
      "React UI + Prisma/PostgreSQL backend",
      "AI constraint-solver (Gemini 2.5 Flash)",
      "Rostering rule engine",
      "REST API + notification layer",
    ],
    links: {},
  },
  {
    slug: "connectai",
    name: "ConnectAI",
    tagline: "B2B SaaS AI-powered contact centre platform",
    status: "Live",
    image: "/projects/connectai.png",
    tags: ["AI", "SaaS", "Contact Centre"],
    gap:
      "Contact centres rely on fragmented tooling for calls, chat, and CRM — agents switch contexts constantly, and AI capabilities are bolted on rather than built in.",
    solution:
      "A unified B2B contact centre platform with AI-native workflows: real-time call intelligence, collaboration tools, and tenant-isolated multi-channel management.",
    capabilities: [
      "Real-time AI call intelligence (Gemini 2.5 Flash)",
      "LiveKit-powered SFU voice calls",
      "Multi-channel: voice, chat, Firestore collab",
      "Tenant-isolated multi-org architecture",
      "AI copilot with route-keyed deduplication",
    ],
    architecture: [
      "React + Vite frontend",
      "Node.js/Express multi-tenant backend",
      "LiveKit SFU for real-time calls",
      "Firebase Firestore for collab/chat",
    ],
    links: {},
  },
  {
    slug: "omnigen",
    name: "OmniGen",
    tagline: "Universal AI orchestrator for multi-modal content generation",
    status: "Live",
    image: "/projects/omnigen.png",
    tags: ["AI", "Multi-modal", "Generation"],
    gap:
      "Creators working with text, image, video, and voice generation have to juggle multiple AI tools and APIs, with no unified workflow or consistent UX.",
    solution:
      "A single console that intelligently routes generation requests to the best Gemini and Veo models — text, image, video, and speech — through one interface.",
    capabilities: [
      "Intelligent model routing (text / image / video / speech)",
      "Google Gemini + Veo model integration",
      "PWA — installable on mobile and desktop",
      "API key proxying for client-safe usage",
      "Multi-modal in one session",
    ],
    architecture: [
      "React frontend (PWA-enabled)",
      "Express backend proxy for Gemini/Veo",
      "Multi-modal routing engine",
      "REST API layer",
    ],
    links: {},
  },
  {
    slug: "biblefuel-studio",
    name: "BibleFuel Studio",
    tagline: "Bible study and content creation workspace for teachers and preachers",
    status: "Live",
    image: "/projects/biblefuel-studio.png",
    tags: ["Bible", "Content", "Church"],
    gap:
      "Bible teachers and preachers lack a unified workspace to research, structure, and create sermon or study content without switching between multiple tools.",
    solution:
      "A focused studio that combines Bible reference lookup, note-taking, and content assembly into a single streamlined workflow purpose-built for ministry.",
    capabilities: [
      "Bible reference lookup and cross-referencing",
      "Study note and outline creation",
      "Content structuring for sermons and devotionals",
      "Export-ready output (PDF, text, share)",
    ],
    architecture: ["Bible data layer", "Rich-text editor/workspace", "Content pipeline", "Export module"],
    links: {},
  },
  {
    slug: "famhub",
    name: "FamHub",
    tagline: "Family coordination and shared-life management platform",
    status: "Live",
    image: "/projects/famhub.png",
    tags: ["Family", "Coordination", "Mobile"],
    gap:
      "Families rely on scattered group chats, separate calendars, and multiple apps to coordinate daily life — there is no single trusted hub built around family context.",
    solution:
      "A family-first platform that unifies scheduling, shared tasks, memories, and communication into one trusted space.",
    capabilities: [
      "Shared family calendar and task lists",
      "Family memory and moments board",
      "Smart reminders for family events",
      "Role-aware member profiles (parents/kids)",
    ],
    architecture: ["Family identity layer", "Shared real-time data model", "Mobile-first UI", "Notification system"],
    links: {},
  },
  {
    slug: "agege-market-pay",
    name: "Agege Market Pay",
    tagline: "Regulation-safe PWA for digitising market levy collections",
    status: "Live",
    image: "/projects/agege-market-pay.png",
    tags: ["Fintech", "PWA", "Civic Tech"],
    gap:
      "Market levy collection in informal economies is manual, paper-based, and opaque — leading to revenue leakage, disputes, and no audit trail for traders or authorities.",
    solution:
      "A installable PWA that digitises levy billing and collections: real-time authority dashboards, digital receipts for traders, and camera-based verification.",
    capabilities: [
      "Installable PWA (no app store needed)",
      "Real-time collection dashboard for authorities",
      "Digital receipts with camera verification",
      "Regulation-safe audit trail",
      "Offline-resilient for low-connectivity markets",
    ],
    architecture: [
      "React PWA frontend (camera permissions)",
      "Gemini AI for receipt parsing / verification",
      "REST API layer",
      "Local-first storage with sync",
    ],
    links: {},
  },
];

export const featuredSlugs = [
  "connectai",
  "rotaai",
  "scribeai",
  "omnigen",
  "lumina-presenter",
  "agege-market-pay",
];
