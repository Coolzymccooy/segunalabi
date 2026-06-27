import Link from "next/link";
import ArrowIcon from "@/components/ArrowIcon";
import Container from "@/components/Container";

export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function CVPage() {
  return (
    <section className="py-12 lg:py-16">
      <Container>
        <h1 className="max-w-2xl font-serif text-[clamp(2.5rem,6vw,4.5rem)] font-medium leading-[0.98] tracking-[-0.045em]">
          Professional profile
        </h1>
        <p className="mt-4 max-w-xl text-base leading-7 text-ink/65">
          Detailed employment history and a current CV are available privately on request.
        </p>
        <Link href="/contact" className="button-primary mt-6 inline-flex">
          Request details
          <ArrowIcon className="h-4 w-4" />
        </Link>
      </Container>
    </section>
  );
}
