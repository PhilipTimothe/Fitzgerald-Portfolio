import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";

export interface Fact {
  label: string;
  value: string;
}

export function FactsBar({ facts }: { facts: Fact[] }) {
  return (
    <section className="border-b border-white/8">
      <Container className="py-8">
        <Reveal>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3 lg:grid-cols-5">
            {facts.map((f) => (
              <div key={f.label} className="flex flex-col gap-1.5">
                <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-white/30">
                  {f.label}
                </dt>
                <dd className="text-sm font-medium text-paper">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
