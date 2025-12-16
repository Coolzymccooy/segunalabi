import Container from "./Container";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 py-10">
      <Container>
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-white/60">
            © {year} Alabi Oluwasegun Akeem — Manchester, UK
          </p>
          <p className="text-sm text-white/60">
            Built with passion using Next.js &amp; Tailwind
          </p>
        </div>
      </Container>
    </footer>
  );
}