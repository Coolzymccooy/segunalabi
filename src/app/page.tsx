import Link from "next/link";
import Container from "@/components/Container";
import ArrowIcon from "@/components/ArrowIcon";
import { ecosystemProducts } from "@/data/ecosystem";

const method = [
  [
    "Find the real problem",
    "Understand the user, the operational friction and what success should look like.",
  ],
  [
    "Design the system",
    "Turn the workflow into a clear, scalable product and technical model.",
  ],
  [
    "Build end to end",
    "Own the interface, APIs, integrations and production path.",
  ],
  [
    "Validate under pressure",
    "Use automation, observability and edge-case testing to make it dependable.",
  ],
];

export default function HomePage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                name: "Tiwaton Ltd",
                url: "https://segunalabi.co.uk",
                sameAs: ["https://tiwaton.co.uk", "https://luminalive.co.uk"],
              },
              {
                "@type": "SoftwareApplication",
                name: "Lumina Presenter",
                applicationCategory: "Church presentation software",
                operatingSystem: "Windows, macOS, Web",
                url: "https://luminalive.co.uk",
                description:
                  "Church presentation software for live services, Bible slides, worship lyrics, hymns, stage display, livestream graphics and AI-assisted service planning.",
                image: "https://luminalive.co.uk/og/lumina-home.png",
              },
              {
                "@type": "WebSite",
                name: "Tiwaton Product Studio",
                url: "https://segunalabi.co.uk",
                about: { "@type": "SoftwareApplication", name: "Lumina Presenter", url: "https://luminalive.co.uk" },
              },
            ],
          }),
        }}
      />

      <section className="border-b border-ink/10">
        <Container>
          <div className="grid min-h-[440px] items-center gap-8 py-8 md:grid-cols-[0.82fr_1.18fr]">
            <div className="hero-enter">
              <h1 className="max-w-[680px] font-serif text-[clamp(2.75rem,4.8vw,5.5rem)] font-medium leading-[0.96] tracking-[-0.05em]">
                Practical software for real work.
              </h1>
              <p className="mt-4 max-w-[620px] text-base leading-7 text-ink/70 sm:text-lg">
                A product studio building AI-powered tools across worship, media, enterprise and finance — starting with Lumina Presenter for live church services.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="https://luminalive.co.uk"
                  target="_blank"
                  rel="noreferrer"
                  className="button-primary inline-flex"
                >
                  Explore Lumina
                  <ArrowIcon external className="h-4 w-4" />
                </a>
                <a href="#ecosystem" className="button-secondary inline-flex">
                  View the ecosystem
                </a>
              </div>

              <div className="mt-6 flex items-center gap-3 border-t border-ink/10 pt-4 text-xs text-ink/60">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  className="h-5 w-5 text-gold"
                  fill="none"
                >
                  <path
                    d="M10 18s5-4.8 5-10a5 5 0 1 0-10 0c0 5.2 5 10 5 10Z"
                    stroke="currentColor"
                    strokeWidth="1.3"
                  />
                  <circle cx="10" cy="8" r="1.7" stroke="currentColor" strokeWidth="1.3" />
                </svg>
                United Kingdom · Tiwaton product studio
              </div>
            </div>

            <div className="hero-enter [animation-delay:120ms]">
              <div className="overflow-hidden rounded-[6px] border border-ink/15 bg-[#10110f] shadow-[0_18px_55px_rgba(20,21,18,0.12)]">
                <div className="flex h-9 items-center gap-1.5 border-b border-white/10 px-4">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
                  <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
                  <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
                  <span className="ml-2 text-[10px] uppercase tracking-[0.18em] text-white/45">
                    Lumina Presenter
                  </span>
                </div>
                <img
                  src="https://luminalive.co.uk/og/lumina-home.png"
                  alt="Lumina Presenter church presentation software"
                  className="aspect-[1200/630] w-full object-cover"
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section
        id="products"
        className="scroll-mt-16 border-b border-ink/10 pb-16 pt-10 lg:pb-20 lg:pt-12"
      >
        <Container>
          <div className="grid items-start gap-8 md:grid-cols-[0.72fr_1.28fr]">
            <div className="md:sticky md:top-24">
              <h2 className="max-w-lg font-serif text-3xl font-medium leading-tight tracking-[-0.03em] sm:text-4xl">
                Launching now: Lumina Presenter
              </h2>
              <p className="mt-4 max-w-lg text-base leading-7 text-ink/65">
                A calmer way to plan and run live church services — from lyrics and
                scripture to stage display, motion backgrounds and team control.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="https://luminalive.co.uk"
                  target="_blank"
                  rel="noreferrer"
                  className="button-primary inline-flex"
                >
                  Visit Lumina Live
                  <ArrowIcon external className="h-4 w-4" />
                </a>
                <Link href="/projects/lumina-presenter" className="button-secondary inline-flex">
                  See product details
                </Link>
              </div>
              <div className="mt-6 border-y border-ink/10">
                {["Lyrics & Scripture", "Stage Output", "Team Control"].map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between border-b border-ink/10 py-3 text-sm last:border-b-0"
                  >
                    <span>{item}</span>
                    <span className="text-gold">↗</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[6px] border border-ink/15 bg-[#10110f] shadow-[0_18px_55px_rgba(20,21,18,0.1)]">
              <img
                src="https://luminalive.co.uk/og/lumina-home.png"
                alt="Lumina Presenter product overview"
                className="aspect-[1200/630] w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </Container>
      </section>

      <section id="ecosystem" className="scroll-mt-16 border-b border-ink/10 py-14 lg:py-16">
        <Container>
          <div className="flex flex-col gap-6 border-b border-gold/55 pb-7 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="max-w-3xl font-serif text-4xl font-medium leading-[1] tracking-[-0.04em] sm:text-5xl">
                The Tiwaton product ecosystem
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-ink/65">
                One company, six focused products — built around real workflows and shared
                engineering infrastructure.
              </p>
            </div>
            <a
              href="https://tiwaton.co.uk/ecosystem.html"
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center gap-2 border-b border-gold pb-1 text-sm font-semibold"
            >
              Explore Tiwaton
              <ArrowIcon external className="h-4 w-4 text-gold" />
            </a>
          </div>

          <div>
            {ecosystemProducts.map((product) => (
              <a
                key={product.number}
                href={product.href}
                target="_blank"
                rel="noreferrer"
                className="group grid gap-2 border-b border-ink/10 py-5 transition-colors hover:bg-white/55 md:grid-cols-[0.35fr_1.15fr_0.9fr_1.7fr_auto] md:items-center md:px-3"
              >
                <span className={product.featured ? "text-gold" : "text-ink/50"}>
                  {product.number}
                </span>
                <span className="font-serif text-3xl font-medium tracking-[-0.03em]">
                  {product.name}
                </span>
                <span className="text-sm text-ink/65">{product.category}</span>
                <span className="max-w-xl text-sm leading-6 text-ink/70">
                  {product.description}
                </span>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-gold">
                  {product.featured ? (
                    "Visit Lumina"
                  ) : (
                    <span className="sr-only">View {product.name}</span>
                  )}
                  <ArrowIcon
                    external
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </a>
            ))}
          </div>
        </Container>
      </section>

      <section id="about" className="scroll-mt-16 border-b border-ink/10 py-14 lg:py-16">
        <Container>
          <div className="grid gap-8 md:grid-cols-[0.92fr_1.08fr]">
            <div className="md:pr-8">
              <div className="h-1 w-14 bg-gold" />
              <h2 className="mt-5 max-w-xl font-serif text-4xl font-medium leading-[1.02] tracking-[-0.04em] sm:text-5xl">
                From product gap to reliable software.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-ink/65">
                The studio works across product thinking, engineering and quality — shaping the
                workflow, building the system and validating edge cases before users
                find them.
              </p>
            </div>

            <ol className="border-t border-ink/15 md:border-l md:border-t-0 md:pl-8">
              {method.map(([title, body], index) => (
                <li
                  key={title}
                  className="grid gap-2 border-b border-ink/10 py-5 sm:grid-cols-[58px_1fr]"
                >
                  <span className="font-serif text-2xl text-gold">0{index + 1}</span>
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="mt-1.5 max-w-2xl text-sm leading-6 text-ink/65">{body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div
            id="experience"
            className="mt-8 grid scroll-mt-16 gap-4 border-t border-ink/10 pt-5 text-sm sm:grid-cols-2"
          >
            <p>
              <span className="mr-3 text-gold">01</span>
              Founder · Tiwaton Ltd
            </p>
            <p>
              <span className="mr-3 text-gold">02</span>
              Product engineering · Quality automation
            </p>
          </div>
        </Container>
      </section>

      <section id="contact" className="scroll-mt-16 bg-[#151815] py-10 text-white lg:py-12">
        <Container>
          <div className="grid items-center gap-6 md:grid-cols-[1fr_auto]">
            <div>
              <h2 className="max-w-4xl font-serif text-3xl font-medium leading-tight tracking-[-0.03em] sm:text-4xl">
                Building something that needs product judgement and engineering depth?
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-white/65">
                Let&apos;s discuss the problem, the users and the route to a dependable release.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link href="/contact" className="button-primary inline-flex">
                Start a conversation
                <ArrowIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
