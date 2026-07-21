import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  /** e.g. "01" */
  number?: string;
  label: string;
  /** Small "credits and annotations" suffix, e.g. "case studies, 2021–2025" */
  credit?: string;
  accent?: "green" | "cyan" | "amber";
  className?: string;
  align?: "left" | "center";
}

const accentColor = {
  green: "text-accent",
  cyan: "text-cyan",
  amber: "text-amber",
};

export function SectionHeading({
  number,
  label,
  credit,
  accent = "green",
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex items-baseline gap-2 flex-wrap",
        align === "center" && "justify-center",
        className
      )}
    >
      {number && (
        <span className={cn("font-mono text-lg md:text-xl leading-none", accentColor[accent])}>
          {number}.
        </span>
      )}
      <h2 className="font-sans font-semibold uppercase tracking-[0.14em] text-xs md:text-sm text-white/40 leading-none">
        {label}
      </h2>
      {credit && (
        <span className="text-[11px] font-medium tracking-[0.06em] text-white/20 lowercase">
          — {credit}
        </span>
      )}
    </div>
  );
}
