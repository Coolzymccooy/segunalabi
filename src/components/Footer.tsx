import Container from "./Container";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink/10 bg-paper py-6">
      <Container>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <Link href="/" className="font-serif text-2xl font-semibold tracking-tight">
            Tiwaton Products
          </Link>
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink/65" aria-label="Footer navigation">
            <a href="https://tiwaton.co.uk" target="_blank" rel="noreferrer">Tiwaton</a>
            <a href="https://luminalive.co.uk" target="_blank" rel="noreferrer">Lumina</a>
          </nav>
          <p className="text-sm text-ink/55">
            United Kingdom · © {year}
          </p>
        </div>
      </Container>
    </footer>
  );
}
