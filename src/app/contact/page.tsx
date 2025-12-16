import Container from "@/components/Container";
import Badge from "@/components/Badge";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <section className="py-14">
      <Container>
        <h1 className="text-3xl font-semibold">Contact</h1>
        <p className="mt-2 max-w-2xl text-white/70">
          Let’s talk about collaboration, roles, or how I can help build your next product. References are available on request.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-xl font-semibold">Direct</h2>
            <div className="mt-4 space-y-3 text-white/75">
              <p>
                Email:{" "}
                <a
                  className="text-white underline underline-offset-4"
                  href="mailto:coolshegz@gmail.com"
                >
                  coolshegz@gmail.com
                </a>
              </p>
              <p>
                Backup:{" "}
                <a
                  className="text-white underline underline-offset-4"
                  href="mailto:segunalabi_a@yahoo.com"
                >
                  segunalabi_a@yahoo.com
                </a>
              </p>
              <p>Location: Manchester, UK</p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-xl font-semibold">Send a message</h2>
            <div className="mt-4">
              <ContactForm />
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="text-xl font-semibold">Verification</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            <Badge>GitHub: Coolzymccooy</Badge>
            <Badge>segunalabi.com</Badge>
            <Badge>Product-Focused Engineer</Badge>
            <Badge>QA Depth</Badge>
          </div>
          <p className="mt-4 text-white/75">
            Prefer not to use LinkedIn. This site is my public technical profile.
          </p>
        </div>
      </Container>
    </section>
  );
}