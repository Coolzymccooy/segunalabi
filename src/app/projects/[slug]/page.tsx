import { projects } from "@/data/projects";
import Container from "@/components/Container";
import Badge from "@/components/Badge";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const p = projects.find((x) => x.slug === params.slug);
  if (!p) return notFound();

  const linkKeys: Array<keyof typeof p.links> = ["live", "github", "demo"];

  return (
    <section className="py-14">
      <Container>
        <div className="flex flex-wrap items-center gap-2">
          <Badge>{p.status}</Badge>
          {p.tags.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>

        <h1 className="mt-4 text-4xl font-semibold">{p.name}</h1>
        <p className="mt-2 max-w-3xl text-lg text-white/75">{p.tagline}</p>

        <div className="mt-8 relative aspect-[16/9] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
          <Image src={p.image} alt={p.name} fill className="object-cover" />
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-xl font-semibold">The gap</h2>
            <p className="mt-3 text-white/75">{p.gap}</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-xl font-semibold">The solution</h2>
            <p className="mt-3 text-white/75">{p.solution}</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-xl font-semibold">Key capabilities</h2>
            <ul className="mt-3 space-y-2 text-white/75">
              {p.capabilities.map((c) => (
                <li key={c}>• {c}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-xl font-semibold">Architecture</h2>
            <ul className="mt-3 space-y-2 text-white/75">
              {p.architecture.map((a) => (
                <li key={a}>• {a}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Links */}
        {linkKeys.some((key) => p.links?.[key]) && (
          <div className="mt-8 flex flex-wrap gap-3">
            {linkKeys.map((key) =>
              p.links?.[key] ? (
                <Link
                  key={key}
                  href={p.links[key] as string}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:opacity-90"
                >
                  {key === "live" && "View live"}
                  {key === "github" && "View code"}
                  {key === "demo" && "View demo"}
                </Link>
              ) : null
            )}
          </div>
        )}

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Back to Projects
          </Link>
          <Link
            href="/contact"
            className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:opacity-90"
          >
            Contact
          </Link>
        </div>
      </Container>
    </section>
  );
}