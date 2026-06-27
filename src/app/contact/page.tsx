import Container from "@/components/Container";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div>
      <section className="border-b border-ink/10 py-10 lg:py-12">
        <Container>
          <h1 className="max-w-3xl font-serif text-[clamp(2.5rem,6vw,4.5rem)] font-medium leading-[0.98] tracking-[-0.045em]">
            Start with the problem.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-ink/65">
            For product partnerships, engineering work or a conversation about Tiwaton,
            share the users, the workflow and what needs to improve.
          </p>
        </Container>
      </section>

      <section className="py-10 lg:py-12">
        <Container>
          <div className="grid gap-8 md:grid-cols-[0.72fr_1.28fr]">
            <div>
              <h2 className="font-serif text-2xl">Direct contact</h2>
              <div className="mt-4 space-y-3 border-t border-ink/15 pt-4 text-sm">
                <div>
                  <p className="text-xs text-ink/50">Email</p>
                  <a
                    className="mt-1 inline-block border-b border-gold"
                    href="mailto:segun@tiwaton.co.uk"
                  >
                    segun@tiwaton.co.uk
                  </a>
                </div>
                <div>
                  <p className="text-xs text-ink/50">Location</p>
                  <p className="mt-1">United Kingdom</p>
                </div>
              </div>
            </div>

            <div className="border-t border-ink/15 pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
              <h2 className="font-serif text-2xl">Send an enquiry</h2>
              <div className="mt-5">
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
