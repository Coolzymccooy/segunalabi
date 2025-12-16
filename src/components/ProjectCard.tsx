import Link from "next/link";
import Image from "next/image";
import Badge from "./Badge";

export default function ProjectCard({
  title,
  subtitle,
  slug,
  image,
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
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition hover:bg-white/[0.06]"
    >
      <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
        <div className="absolute -top-28 -right-28 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="relative flex flex-col gap-4">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-black/40">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover opacity-90 transition group-hover:opacity-100"
            sizes="(min-width: 768px) 50vw, 100vw"
            priority={false}
          />
        </div>

        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <p className="mt-1 text-sm text-white/70">{subtitle}</p>
          </div>

          <span className="text-sm text-white/50 transition group-hover:text-white/70">
            View →
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 3).map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>
      </div>
    </Link>
  );
}