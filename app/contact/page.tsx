import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { BackButton } from "@/components/back-button";

export const metadata = { title: "Contact | Fitzgerald Timothe" };

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <BackButton />
      <section className="py-14 md:py-24">
        <Container className="max-w-2xl">
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.14em] text-white/35">
            {"// Get in touch"}
          </p>
          <h1
            className="mb-8 font-semibold leading-[0.95] tracking-tightest text-paper"
            style={{ fontSize: "clamp(40px, 7vw, 72px)" }}
          >
            Let&apos;s build something <span className="text-cyan">worth watching.</span>
          </h1>
          {/* TODO: replace with real email + links */}
          <div className="flex flex-col gap-3 text-lg">
            <a href="mailto:hello@example.com" className="text-accent hover:underline">
              hello@example.com
            </a>
            <a href="#" className="text-white/60 transition-colors hover:text-accent">
              LinkedIn →
            </a>
          </div>
        </Container>
      </section>
      <Footer />
    </main>
  );
}
