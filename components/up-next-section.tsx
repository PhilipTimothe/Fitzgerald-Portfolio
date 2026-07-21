import Link from "next/link";
import { caseStudies } from "@/lib/content";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";

export function UpNextSection({ currentProjectId }: { currentProjectId: string }) {
  const currentIndex = caseStudies.findIndex((p) => p.id === currentProjectId);
  // Next two projects in sequence, wrapping around.
  const next = [1, 2]
    .map((offset) => caseStudies[(currentIndex + offset) % caseStudies.length])
    .filter((p) => p.id !== currentProjectId);

  return (
    <section className="border-t border-white/8 py-12 md:py-16">
      <Container>
        <SectionHeading label="Up Next" credit="keep watching" accent="cyan" className="mb-8" />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {next.map((project) => (
            <Link
              key={project.id}
              href={project.href}
              className="group rounded-[16px] border border-white/8 bg-white/[0.02] p-6 transition-colors hover:border-accent/35"
            >
              <div className="flex items-center gap-3 text-xs">
                <span className="font-semibold text-paper">{project.meta[0]}</span>
                <span className="text-white/40">{project.meta[2]}</span>
              </div>
              <p className="mt-3 text-xl font-semibold tracking-tightest text-paper">
                {project.subtitle}
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs font-medium text-white/60 transition-all group-hover:gap-3 group-hover:text-accent">
                <span>View case study</span>
                <span aria-hidden>→</span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
