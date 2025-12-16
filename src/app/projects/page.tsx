import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <section className="py-14">
      <Container>
        <h1 className="text-3xl font-semibold">Projects</h1>
        <p className="mt-2 max-w-2xl text-white/70">
          A selection of solutions I built by identifying gaps in existing tools and shipping reliable, end‑to‑end products.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard
              key={p.slug}
              title={p.name}
              subtitle={p.tagline}
              slug={p.slug}
              image={p.image}
              tags={p.tags}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}