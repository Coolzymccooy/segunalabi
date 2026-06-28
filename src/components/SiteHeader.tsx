import Link from "next/link";
import Container from "./Container";
import ArrowIcon from "./ArrowIcon";

const NavLink = ({ href, label }: { href: string; label: string }) => (
  <Link
    href={href}
    className="text-sm font-medium text-ink/70 transition hover:text-ink"
  >
    {label}
  </Link>
);

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/95 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between gap-5">
          <Link
            href="/"
            className="font-serif text-[1.4rem] font-semibold tracking-[-0.03em] text-ink"
          >
            Tiwaton Products
          </Link>

          <nav className="hidden items-center gap-6 md:flex" aria-label="Primary navigation">
            <NavLink href="/#products" label="Products" />
            <NavLink href="/#about" label="Method" />
            <NavLink href="/#experience" label="Reliability" />
            <NavLink href="/#contact" label="Contact" />
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://luminalive.co.uk"
              target="_blank"
              rel="noreferrer"
              className="button-primary hidden sm:inline-flex"
            >
              Explore Lumina
              <ArrowIcon external className="h-4 w-4" />
            </a>
            <details className="mobile-nav relative md:hidden">
              <summary className="grid h-9 w-9 cursor-pointer place-items-center border border-ink/20 text-ink">
                <span className="sr-only">Open navigation</span>
                <span className="space-y-1.5" aria-hidden="true">
                  <span className="block h-px w-5 bg-current" />
                  <span className="block h-px w-5 bg-current" />
                </span>
              </summary>
              <nav
                aria-label="Mobile navigation"
                className="absolute right-0 top-12 w-52 border border-ink/10 bg-paper p-4 shadow-[0_18px_50px_rgba(20,20,18,0.12)]"
              >
                <div className="flex flex-col gap-3">
                  <NavLink href="/#products" label="Products" />
                  <NavLink href="/#about" label="Method" />
                  <NavLink href="/#experience" label="Reliability" />
                  <NavLink href="/#contact" label="Contact" />
                  <a
                    href="https://luminalive.co.uk"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 flex items-center justify-between border-t border-ink/10 pt-4 text-sm font-semibold text-gold"
                  >
                    Explore Lumina
                    <ArrowIcon external className="h-4 w-4" />
                  </a>
                </div>
              </nav>
            </details>
          </div>
        </div>
      </Container>
    </header>
  );
}
