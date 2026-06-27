import Link from "next/link";
import ArrowIcon from "@/components/ArrowIcon";
import Container from "@/components/Container";
import { ecosystemProducts } from "@/data/ecosystem";
import { projects } from "@/data/projects";

const ecosystemNames = new Set([
  "Lumina Presenter",
  "BibleFuel Studio",
  "Aether Studio",
  "ScribeAI",
  "ConnectAI",
]);

export default function ProjectsPage() {
  const additionalProjects = projects.filter((project) => !ecosystemNames.has(project.name));

  return (
    <div>
      <section className="border-b border-ink/10 py-10 lg:py-14">
        <Container>
          <h1 className="max-w-4xl font-serif text-[clamp(2.5rem,6vw,4.5rem)] font-medium leading-[0.98] tracking-[-0.045em]">
            Products built around real workflows.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-ink/65">
            Tiwaton is the primary portfolio. Each product is focused on a defined
            operational problem, with shared engineering and AI infrastructure behind it.
          </p>
          <a
            href="https://tiwaton.co.uk/ecosystem.html"
            target="_blank"
            rel="noreferrer"
            className="button-primary mt-5 inline-flex"
          >
            Explore Tiwaton
            <ArrowIcon external className="h-4 w-4" />
          </a>
        </Container>
      </section>

      <section className="border-b border-ink/10 py-10 lg:py-14">
        <Container>
          <h2 className="font-serif text-3xl font-medium tracking-tight">The core ecosystem</h2>
          <div className="mt-6 border-t border-gold/60">
            {ecosystemProducts.map((product) => (
              <a
                key={product.number}
                href={product.href}
                target="_blank"
                rel="noreferrer"
                className="group grid gap-2 border-b border-ink/10 py-5 md:grid-cols-[54px_1fr_1fr_2fr_auto] md:items-center"
              >
                <span className="text-sm text-gold">{product.number}</span>
                <span className="font-serif text-2xl">{product.name}</span>
                <span className="text-sm text-ink/60">{product.category}</span>
                <span className="text-sm leading-6 text-ink/65">{product.description}</span>
                <ArrowIcon
                  external
                  className="h-4 w-4 text-gold transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-10 lg:py-14">
        <Container>
          <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <h2 className="font-serif text-3xl font-medium tracking-tight">Additional product work</h2>
              <p className="mt-3 max-w-md text-sm leading-6 text-ink/60">
                Earlier builds and focused experiments across healthcare, education,
                property, civic technology and creative tools.
              </p>
            </div>
            <div className="border-t border-ink/15">
              {additionalProjects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="group grid gap-2 border-b border-ink/10 py-4 sm:grid-cols-[1fr_1.5fr_auto] sm:items-center"
                >
                  <span className="font-semibold">{project.name}</span>
                  <span className="text-sm text-ink/60">{project.tagline}</span>
                  <ArrowIcon className="h-4 w-4 text-gold transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
