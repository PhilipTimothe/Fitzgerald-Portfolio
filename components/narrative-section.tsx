import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

interface NarrativeSectionProps {
  number?: string;
  label: string;
  credit?: string;
  accent?: "green" | "cyan" | "amber";
  /** Big display line under the section label. */
  title?: string;
  children: React.ReactNode;
  /** Discipline chips, e.g. ["Brand Strategy", "Video", "Packaging"]. */
  chips?: string[];
  /** Optional pull quote rendered beside the prose. */
  quote?: string;
  className?: string;
}

export function NarrativeSection({
  number,
  label,
  credit,
  accent = "green",
  title,
  children,
  chips,
  quote,
  className,
}: NarrativeSectionProps) {
  return (
    <section className={cn("border-b border-white/8 py-14 md:py-20", className)}>
      <Container>
        <Reveal>
          <SectionHeading
            number={number}
            label={label}
            credit={credit}
            accent={accent}
            className="mb-8"
          />
          {title && (
            <h3
              className="mb-6 max-w-3xl font-semibold leading-[1.05] tracking-tightest text-paper"
              style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
            >
              {title}
            </h3>
          )}

          <div className={cn(quote && "grid gap-10 md:grid-cols-[1.6fr_1fr] md:items-start")}>
            <div className="max-w-2xl space-y-4 text-base font-light leading-relaxed text-white/70">
              {children}
            </div>
            {quote && (
              <blockquote className="border-l-2 border-accent/40 pl-5 text-lg font-light italic leading-relaxed text-paper">
                {quote}
              </blockquote>
            )}
          </div>

          {chips && chips.length > 0 && (
            <div className="mt-7 flex flex-wrap gap-2">
              {chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-white/15 px-3.5 py-1.5 text-xs font-medium text-white/70"
                >
                  {chip}
                </span>
              ))}
            </div>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
