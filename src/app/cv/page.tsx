import Container from "@/components/Container";
import Link from "next/link";

const CV_PATH = "/cv/alabi-oluwasegun-akeem-cv.pdf";

export default function CVPage() {
  return (
    <section className="py-14">
      <Container>
        <h1 className="text-3xl font-semibold">Curriculum Vitae</h1>
        <p className="mt-2 text-white/70">
          View in‑browser or download. References available on request.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={CV_PATH}
            className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:opacity-90"
          >
            Download CV (PDF)
          </Link>
        </div>

        <div className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
          <iframe
            src={CV_PATH}
            className="h-[75vh] w-full"
            title="CV"
          />
        </div>
      </Container>
    </section>
  );
}