"use client";

import { CountUp } from "@/components/count-up";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

export interface Metric {
  /** Numeric value for count-up. Omit for a text-only metric. */
  value?: number;
  prefix?: string;
  suffix?: string;
  /** Text metric shown instead of a count-up, e.g. "Award-winning". */
  display?: string;
  label: string;
  color?: "green" | "cyan" | "amber" | "paper";
}

const colorClass = {
  green: "text-accent",
  cyan: "text-cyan",
  amber: "text-amber",
  paper: "text-paper",
};

export function MetricBand({ metrics }: { metrics: Metric[] }) {
  return (
    <section className="border-y border-white/8 bg-white/[0.02]">
      <Container className="py-10 md:py-12">
        <Reveal>
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4">
            {metrics.map((m) => (
              <div key={m.label} className="flex flex-col gap-1.5">
                <div
                  className={cn(
                    "text-4xl font-bold tracking-tightest md:text-5xl",
                    colorClass[m.color ?? "paper"]
                  )}
                >
                  {m.display ? (
                    m.display
                  ) : (
                    <CountUp value={m.value ?? 0} prefix={m.prefix} suffix={m.suffix} />
                  )}
                </div>
                <span className="text-xs font-medium uppercase tracking-[0.07em] text-white/35">
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
