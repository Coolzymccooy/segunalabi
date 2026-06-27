export type EcosystemProduct = {
  number: string;
  name: string;
  category: string;
  description: string;
  href: string;
  featured?: boolean;
};

export const ecosystemProducts: EcosystemProduct[] = [
  {
    number: "01",
    name: "Lumina",
    category: "Church presentation",
    description:
      "Plan and run live services with lyrics, scripture, media, stage output and team control.",
    href: "https://luminalive.co.uk",
    featured: true,
  },
  {
    number: "02",
    name: "BibleFuel",
    category: "Faith content studio",
    description:
      "Turn scriptures, sermons and ideas into voice-led, social-ready content.",
    href: "https://tiwaton.co.uk/ecosystem.html",
  },
  {
    number: "03",
    name: "AetherCast",
    category: "Broadcast studio",
    description:
      "Switch, stream, replay and control multi-source live production.",
    href: "https://tiwaton.co.uk/ecosystem.html",
  },
  {
    number: "04",
    name: "TiwaGold",
    category: "Trading intelligence",
    description:
      "Rules-based gold trading support with risk gates, validation and telemetry.",
    href: "https://tiwaton.co.uk/ecosystem.html",
  },
  {
    number: "05",
    name: "ScribeAI",
    category: "Meeting intelligence",
    description:
      "Record, transcribe, summarise and search conversations as structured knowledge.",
    href: "https://tiwaton.co.uk/ecosystem.html",
  },
  {
    number: "06",
    name: "ConnectAI",
    category: "Contact centre suite",
    description:
      "Unify calls, campaigns, collaboration and AI-assisted customer handling.",
    href: "https://tiwaton.co.uk/ecosystem.html",
  },
];
