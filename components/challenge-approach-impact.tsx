import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

interface CAIProps {
  number?: string;
  challenge: string;
  approach: string;
  impact: string;
}

const cols = [
  { key: "challenge", label: "Challenge", accent: "text-white/40", body: "" },
  { key: "approach", label: "Approach", accent: "text-cyan", body: "" },
  { key: "impact", label: "Impact", accent: "text-accent", body: "" },
] as const;

export function ChallengeApproachImpact({ number, challenge, approach, impact }: CAIProps) {
  const values = { challenge, approach, impact };
  return (
    <section className="border-b border-white/8 py-14 md:py-20">
      <Container>
        <Reveal>
          <SectionHeading
            number={number}
            label="Challenge, Approach, Impact"
            credit="the thinking"
            accent="amber"
            className="mb-8"
          />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {cols.map((col) => (
              <div
                key={col.key}
                className="rounded-2xl border border-white/8 bg-white/[0.02] p-6"
              >
                <div
                  className={`mb-3 font-mono text-xs uppercase tracking-[0.12em] ${col.accent}`}
                >
                  {col.label}
                </div>
                <p className="text-sm font-light leading-relaxed text-white/70">
                  {values[col.key]}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
