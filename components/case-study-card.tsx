"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project, Tag } from "@/lib/content";
import { cn } from "@/lib/utils";

const tagColor: Record<Tag["color"], string> = {
  green: "border-accent/25 text-accent",
  cyan: "border-cyan/25 text-cyan",
  amber: "border-amber/25 text-amber",
};

export function CaseStudyCard({ project, index = 0 }: { project: Project; index?: number }) {
  const [client, years, category] = project.meta;
  const hasImage = project.image && !project.image.includes("cover.jpg");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      className={cn(project.featured && "md:col-span-2")}
    >
      <Link href={project.href} className="group block">
        {/* Cover */}
        <div
          className={cn(
            "relative overflow-hidden rounded-[16px] border border-white/8 bg-white/[0.03] noise-overlay",
            "transition-colors duration-200 group-hover:border-accent/35",
            project.featured ? "aspect-[16/7]" : "aspect-square"
          )}
          style={
            hasImage
              ? { backgroundImage: `url(${project.image})`, backgroundSize: "cover", backgroundPosition: "center" }
              : undefined
          }
        >
          {project.featured && (
            <span className="absolute left-5 top-5 z-10 text-[10px] font-bold uppercase tracking-[0.1em] text-amber">
              Featured
            </span>
          )}
          {!hasImage && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 text-center">
              <span className="text-2xl font-semibold tracking-tightest text-white/25">
                {project.title}
              </span>
              <span className="font-mono text-[11px] text-white/15">{project.image}</span>
            </div>
          )}
        </div>

        {/* Meta + copy */}
        <div className="mt-5 space-y-3">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
            <span className="font-semibold text-paper">{client}</span>
            <span className="text-white/40">{years}</span>
            <span className="text-white/70">{category}</span>
          </div>

          <p className="max-w-2xl text-[13px] leading-relaxed text-white/45">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag.label}
                className={cn(
                  "rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.04em]",
                  tagColor[tag.color]
                )}
              >
                {tag.label}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2 pt-1 text-xs font-medium text-paper transition-all duration-200 group-hover:gap-3">
            <span>Case Study</span>
            <span aria-hidden>→</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
