import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function Reflection({ number, children }: { number?: string; children: React.ReactNode }) {
  return (
    <section className="border-b border-white/8 py-14 md:py-20">
      <Container>
        <Reveal>
          <SectionHeading number={number} label="Reflection" credit="what I took from it" className="mb-8" />
          <div className="max-w-2xl space-y-4 text-lg font-light leading-relaxed text-white/75">
            {children}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
