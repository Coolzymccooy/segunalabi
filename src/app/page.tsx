import Link from "next/link";
import Container from "@/components/Container";
import Badge from "@/components/Badge";
import ProjectCard from "@/components/ProjectCard";
import Typewriter from "@/components/Typewriter";
import { featuredSlugs, projects } from "@/data/projects";

export default function HomePage() {
  const featured = featuredSlugs
    .map((s) => projects.find((p) => p.slug === s))
    .filter(Boolean);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-40 right-10 h-[420px] w-[420px] rounded-full bg-white/10 blur-3xl" />
        </div>

        <Container>
          <div className="relative py-20 md:py-28">
            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap gap-2">
                <Badge>Technical generalist (QA depth)</Badge>
                <Badge>Systems thinker</Badge>
                <Badge>Founder-type builder</Badge>
              </div>

              <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
                Alabi Oluwasegun Akeem
              </h1>

              <p className="text-xl text-white/80 md:text-2xl">
                I am <Typewriter words={["a product-focused engineer", "a QA automation expert", "a creative problem solver"]} />
              </p>

              <p className="max-w-2xl text-lg text-white/75 md:text-xl">
                I spot product gaps—complexity traps, unreliable workflows, missing automation and weak
                validation—and build practical solutions that are easier to use and harder to break.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/projects"
                  className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:opacity-90"
                >
                  View Projects
                </Link>
                <Link
                  href="/cv"
                  className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Download CV
                </Link>
                <Link
                  href="/contact"
                  className="rounded-2xl border border-white/15 bg-transparent px-5 py-3 text-sm font-semibold text-white/85 transition hover:bg-white/5 hover:text-white"
                >
                  Contact
                </Link>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-sm text-white/60">Current</p>
                  <p className="mt-1 font-semibold">Automation Test Engineer</p>
                  <p className="text-sm text-white/70">Evolution Money Ltd (Manchester)</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-sm text-white/60">Strength</p>
                  <p className="mt-1 font-semibold">Gap → Solution Engineering</p>
                  <p className="text-sm text-white/70">Product design + build + hardening</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-sm text-white/60">Public</p>
                  <p className="mt-1 font-semibold">GitHub</p>
                  <p className="text-sm text-white/70">Coolzymccooy</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Philosophy */}
      <section className="py-14">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <h2 className="text-xl font-semibold">What I do</h2>
              <p className="mt-3 text-white/75">
                I identify product gaps—complexity traps, unreliable workflows,
                missing automation and weak validation—and build practical, end‑to‑end
                solutions that simplify and strengthen the experience.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <h2 className="text-xl font-semibold">How I work</h2>
              <ul className="mt-3 space-y-2 text-white/75">
                <li>• Discover the gap (users, reliability, workflow pain)</li>
                <li>• Design system + UX (simple, fast, scalable)</li>
                <li>• Build end-to-end (web/mobile/APIs)</li>
                <li>• Validate like a tester (automation, edge cases, load)</li>
                <li>• Ship and iterate</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured */}
      <section className="pb-16">
        <Container>
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-semibold">Featured solutions</h2>
            <Link
              href="/projects"
              className="text-sm text-white/70 transition hover:text-white"
            >
              View all →
            </Link>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {featured.map((p) =>
              p ? (
                <ProjectCard
                  key={p.slug}
                  title={p.name}
                  subtitle={p.tagline}
                  slug={p.slug}
                  image={p.image}
                  tags={p.tags}
                />
              ) : null
            )}
          </div>
        </Container>
      </section>
    </div>
  );
}