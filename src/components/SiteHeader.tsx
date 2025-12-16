import Link from "next/link";
import Container from "./Container";

const NavLink = ({ href, label }: { href: string; label: string }) => (
  <Link
    href={href}
    className="text-sm text-white/70 transition hover:text-white"
  >
    {label}
  </Link>
);

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="h-7 w-7 rounded-xl bg-white/10 ring-1 ring-white/10" />
            <span className="font-semibold tracking-tight text-white">
              segunalabi.com
            </span>
          </Link>

          <nav className="flex items-center gap-5">
            <NavLink href="/projects" label="Projects" />
            <NavLink href="/cv" label="CV" />
            <NavLink href="/contact" label="Contact" />
          </nav>
        </div>
      </Container>
    </header>
  );
}