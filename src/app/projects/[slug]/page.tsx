import { notFound } from "next/navigation";
import Link from "next/link";
import ArrowIcon from "@/components/ArrowIcon";
import Container from "@/components/Container";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) return notFound();

  const links = [
    ["live", "View Lumina"],
    ["churchPresentation", "Church presentation software"],
    ["biblePresentation", "Bible presentation software"],
    ["foundingChurches", "Founding churches"],
    ["github", "View code"],
    ["demo", "View demo"],
  ] as const;
  const isLumina = project.slug === "lumina-presenter";

  return (
    <div>
      <section className="border-b border-ink/10 py-10 lg:py-14">
        <Container>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-ink/60 transition hover:text-ink"
          >
            <span aria-hidden="true">←</span>
            All products
          </Link>
          <div className="mt-6 grid gap-6 md:grid-cols-[1.15fr_0.85fr] md:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-gold">
                {project.tags.join(" · ")}
              </p>
              <h1 className="mt-3 font-serif text-[clamp(2.5rem,6vw,4.5rem)] font-medium leading-[0.98] tracking-[-0.045em]">
                {project.name}
              </h1>
            </div>
            <p className="max-w-xl text-base leading-7 text-ink/65">{project.tagline}</p>
          </div>

          {links.some(([key]) => project.links?.[key]) && (
            <div className="mt-6 flex flex-wrap gap-3">
              {links.map(([key, label]) =>
                project.links?.[key] ? (
                  <a
                    key={key}
                    href={project.links[key]}
                    target="_blank"
                    rel="noreferrer"
                    className={key === "live" ? "button-primary inline-flex" : "button-secondary inline-flex"}
                  >
                    {label}
                    <ArrowIcon external className="h-4 w-4" />
                  </a>
                ) : null,
              )}
            </div>
          )}

          {isLumina && (
            <div className="mt-8 rounded-[6px] border border-gold/35 bg-white/55 p-5">
              <p className="text-sm uppercase tracking-[0.16em] text-gold">Product link map</p>
              <h2 className="mt-2 font-serif text-2xl tracking-[-0.03em]">
                Lumina Presenter is the church presentation software layer for live services.
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-ink/68">
                The live product pages below explain Lumina’s workflow for worship lyrics, Bible
                slides, hymns, service run sheets, stage display, livestream graphics and AI-assisted
                preparation. These are the best pages to share with pastors, worship leaders and
                church media teams.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href="https://luminalive.co.uk/church-presentation-software" target="_blank" rel="noreferrer" className="button-secondary inline-flex">
                  Church presentation software
                  <ArrowIcon external className="h-4 w-4" />
                </a>
                <a href="https://luminalive.co.uk/bible-presentation-software" target="_blank" rel="noreferrer" className="button-secondary inline-flex">
                  Bible presentation software
                  <ArrowIcon external className="h-4 w-4" />
                </a>
                <a href="https://luminalive.co.uk/founding-churches" target="_blank" rel="noreferrer" className="button-primary inline-flex">
                  Founding churches
                  <ArrowIcon external className="h-4 w-4" />
                </a>
              </div>
            </div>
          )}

        </Container>
      </section>

      <section className="py-10 lg:py-14">
        <Container>
          <div className="grid border-t border-ink/15 lg:grid-cols-2">
            <div className="border-b border-ink/10 py-7 lg:border-r lg:pr-8">
              <p className="text-sm uppercase tracking-[0.16em] text-gold">The problem</p>
              <p className="mt-3 max-w-xl text-base leading-7 text-ink/68">{project.gap}</p>
            </div>
            <div className="border-b border-ink/10 py-7 lg:pl-8">
              <p className="text-sm uppercase tracking-[0.16em] text-gold">The solution</p>
              <p className="mt-3 max-w-xl text-base leading-7 text-ink/68">{project.solution}</p>
            </div>
            <div className="border-b border-ink/10 py-7 lg:border-r lg:pr-8">
              <h2 className="font-serif text-2xl">Key capabilities</h2>
              <ul className="mt-4 space-y-3">
                {project.capabilities.map((capability) => (
                  <li key={capability} className="flex gap-3 border-t border-ink/10 pt-3 text-sm leading-6 text-ink/68">
                    <span className="text-gold">—</span>
                    {capability}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-b border-ink/10 py-7 lg:pl-8">
              <h2 className="font-serif text-2xl">System outline</h2>
              <ul className="mt-4 space-y-3">
                {project.architecture.map((item) => (
                  <li key={item} className="flex gap-3 border-t border-ink/10 pt-3 text-sm leading-6 text-ink/68">
                    <span className="text-gold">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/projects" className="button-secondary inline-flex">
              Back to products
            </Link>
            <Link href="/contact" className="button-primary inline-flex">
              Start a conversation
              <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
