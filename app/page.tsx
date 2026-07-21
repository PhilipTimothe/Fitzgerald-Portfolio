"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { CaseStudyCard } from "@/components/case-study-card";
import { SectionHeading } from "@/components/section-heading";
import { CountUp } from "@/components/count-up";
import { caseStudies, skills } from "@/lib/content";

// The movie-poster hero: giant stacked role text in alternating accents.
const posterLines: { text: string; color: string }[] = [
  { text: "BRAND", color: "text-paper" },
  { text: "STRATEGY", color: "text-paper" },
  { text: "& MARKETING", color: "text-paper" },
  { text: "LEADER.", color: "text-paper" },
];

const stats: {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  color: string;
}[] = [
  { value: 13, suffix: "M+", label: "Campaign views", color: "text-accent" },
  { value: 4, label: "Industries", color: "text-paper" },
  { value: 8, suffix: "+", label: "Years experience", color: "text-cyan" }, // TODO: confirm years
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* ── Poster hero ───────────────────────────────────────── */}
      <section className="flex flex-col items-center justify-center px-6 pb-16 pt-16 text-center md:pt-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-6 font-mono text-xl tracking-[0.1em] text-amber md:text-4xl"
        >
          {"// Fitzgerald Timothe"}
        </motion.div>

        <h1
          className="uppercase"
          aria-label="Brand Strategy & Marketing Leader"
        >
          {posterLines.map((line, i) => (
            <span key={line.text} className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.15 + i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`block font-semibold leading-[0.9] tracking-tightest ${line.color}`}
                style={{ fontSize: "clamp(44px, 11vw, 65px)" }}
              >
                {line.text}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-7 max-w-md text-lg font-medium leading-relaxed text-white/65"
        >
          I build brand strategy that borders on{" "}
          <span className="text-accent">clarity</span>,{" "}
          <span className="text-amber">creativity</span>, and{" "}
          <span className="text-cyan">conversion</span>.
        </motion.p>
      </section>

      {/* ── Selected work ─────────────────────────────────────── */}
      <section id="work" className="py-14 md:py-20">
        <Container>
          <SectionHeading
            number="//"
            label="Selected Work"
            credit="case studies, 20XX–2025"
            className="mb-10"
          />
          <div className="mx-auto grid w-full grid-cols-1 gap-4 md:w-[40%]">
            {caseStudies.map((project, i) => (
              <CaseStudyCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </Container>
      </section>

      {/* ── What I do ─────────────────────────────────────────── */}
      <section className="py-14 md:py-20">
        <Container>
          <SectionHeading
            number="//"
            label="What I Do"
            credit="the role, in six acts"
            accent="cyan"
            className="mb-10"
          />
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="rounded-[14px] border border-white/8 bg-white/[0.02] p-6"
              >
                <div
                  className={`mb-3 h-1.5 w-8 rounded-full ${skill.color === "green" ? "bg-accent" : "bg-cyan"}`}
                />
                <h3 className="mb-1.5 text-[15px] font-semibold tracking-tightest text-paper">
                  {skill.title}
                </h3>
                <p className="text-xs leading-relaxed text-white/35">
                  {skill.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
