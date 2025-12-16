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
    tagline: "Modern worship & event presentation (EasyWorship alternative)",
    status: "Live",
    image: "/projects/lumina-presenter.png",
    tags: ["Presentation", "Church", "UX"],
    gap:
      "Presentation tools in worship/live environments often feel dated, rigid, and slow to operate under pressure.",
    solution:
      "A modern presenter experience designed for speed, clarity, and smooth live operation.",
    capabilities: [
      "Fast navigation for live services",
      "Cleaner modern UI",
      "Built for worship/event workflows",
    ],
    architecture: [
      "Presentation library",
      "Cue/queue system",
      "Output views (projector/stage)",
    ],
    links: {},
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
];

export const featuredSlugs = [
  "aether-studio",
  "lumina-presenter",
  "propscout-investment-engine",
  "appointment-hunter-ai",
  "shiftcare",
  "tiwaton-ai-studio",
];