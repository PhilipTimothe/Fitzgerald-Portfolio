import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { BackButton } from "@/components/back-button";

export const metadata = { title: "About | Fitzgerald Timothe" };

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <BackButton />
      <section className="py-14 md:py-20">
        <Container className="max-w-3xl">
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.14em] text-white/35">
            {"// About"}
          </p>
          <h1
            className="mb-8 font-semibold leading-[0.95] tracking-tightest text-paper"
            style={{ fontSize: "clamp(40px, 7vw, 72px)" }}
          >
            Strategy first. <span className="text-accent">Craft always.</span>
          </h1>
          {/* TODO: replace with Fitzgerald's real bio */}
          <div className="space-y-5 text-base font-light leading-relaxed text-white/60">
            <p>
              I am a brand strategy and marketing leader with eight years
              spanning consumer brands and CPG, entertainment and media,
              healthcare, and agency work. My core strength is positioning:
              finding the sharpest, truest way to say what a brand is, then
              building the campaigns that prove it.
            </p>
            <p>
              I have launched award-winning packaging, run audience-development
              programs that reached millions, and built repeatable content
              systems that keep brands consistent as they scale. I care about
              the number on the dashboard and the feeling in the room.
            </p>
          </div>
        </Container>
      </section>
      <Footer />
    </main>
  );
}
