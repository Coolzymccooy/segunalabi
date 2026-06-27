import Link from "next/link";
import ArrowIcon from "./ArrowIcon";

export default function ProjectCard({
  title,
  subtitle,
  slug,
  tags,
}: {
  title: string;
  subtitle: string;
  slug: string;
  image: string;
  tags: string[];
}) {
  return (
    <Link
      href={`/projects/${slug}`}
      className="group block border-t border-ink/15 py-6"
    >
      <div className="flex items-start justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.15em] text-gold">
            {tags.slice(0, 3).join(" · ")}
          </p>
          <h3 className="mt-3 font-serif text-3xl">{title}</h3>
          <p className="mt-2 max-w-xl leading-7 text-ink/65">{subtitle}</p>
        </div>
        <ArrowIcon className="mt-1 h-5 w-5 text-gold transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
