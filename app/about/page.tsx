"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { BackButton } from "@/components/back-button";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import {
  aboutIntro,
  roles,
  hardSkills,
  softSkills,
  tools,
  interests,
  closingTagline,
} from "@/lib/about-content";

const posterLines: { text: string; color: string }[] = [
  { text: "FITZGERALD", color: "text-paper" },
  { text: "TIMOTHE", color: "text-accent" },
];

const chipClass =
  "rounded-full border border-white/15 px-3.5 py-1.5 text-xs font-medium text-white/70";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <BackButton />
      {/* ── Poster hero ───────────────────────────────────────── */}
      <section className="flex flex-col items-center justify-center px-6 pb-12 pt-16 text-center md:pt-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.6 }}
          className="mb-6 font-mono text-xl tracking-[0.1em] text-amber md:text-4xl"
        >
          {"// About"}
        </motion.div>

        <h1 className="uppercase" aria-label="Fitzgerald Timothe">
          {posterLines.map((line, i) => (
            <span key={line.text} className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1.7,
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
          transition={{ duration: 1.7, delay: 0.5 }}
          className="mt-7 max-w-md text-lg font-medium leading-relaxed text-white/65"
        >
          {closingTagline}
        </motion.p>
      </section>

      {/* ── Intro ─────────────────────────────────────────────── */}
      <section className="py-14 md:py-20">
        <Container className="max-w-3xl">
          <div className="space-y-5 text-base font-light leading-relaxed text-white/60">
            {aboutIntro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Career ────────────────────────────────────────────── */}
      <section className="border-t border-white/8 py-14 md:py-20">
        <Container>
          <SectionHeading
            number="//"
            label="Career"
            credit="2015 to present"
            className="mb-10"
          />
          <div className="space-y-10">
            {roles.map((role) => (
              <Reveal key={`${role.title}-${role.company}`}>
                <div className="max-w-3xl">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="text-lg font-semibold tracking-tightest text-paper">
                      {role.title}
                    </h3>
                    <span className="text-sm text-white/50">
                      @ {role.company}
                    </span>
                  </div>
                  <div className="mt-1 text-xs font-medium uppercase tracking-[0.06em] text-white/35">
                    {role.location} · {role.dates}
                  </div>
                  <p className="mt-4 text-[15px] font-light leading-relaxed text-white/65">
                    {role.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Hard Skills ───────────────────────────────────────── */}
      <section className="border-t border-white/8 py-14 md:py-20">
        <Container>
          <SectionHeading
            number="//"
            label="Hard Skills"
            credit="the toolkit"
            accent="cyan"
            className="mb-10"
          />
          <div className="space-y-8">
            {hardSkills.map((group) => (
              <Reveal key={group.category}>
                <h3 className="mb-3 font-mono text-xs uppercase tracking-[0.12em] text-white/35">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className={chipClass}>
                      {item}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Soft Skills ───────────────────────────────────────── */}
      <section className="border-t border-white/8 py-14 md:py-20">
        <Container>
          <SectionHeading
            number="//"
            label="Soft Skills"
            credit="how I work"
            accent="amber"
            className="mb-10"
          />
          <div className="space-y-8">
            {softSkills.map((group) => (
              <Reveal key={group.category}>
                <h3 className="mb-3 font-mono text-xs uppercase tracking-[0.12em] text-white/35">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className={chipClass}>
                      {item}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Tools ─────────────────────────────────────────────── */}
      <section className="border-t border-white/8 py-14 md:py-20">
        <Container>
          <SectionHeading
            number="//"
            label="Tools"
            credit="what I run on"
            className="mb-10"
          />
          <Reveal>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span key={tool} className={chipClass}>
                  {tool}
                </span>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── Interests & Things ────────────────────────────────── */}
      <section className="border-t border-white/8 py-14 md:py-20">
        <Container>
          <SectionHeading
            number="//"
            label="Interests & Things"
            credit="outside the brief"
            accent="cyan"
            className="mb-10"
          />
          <div className="space-y-8">
            {interests.map((interest) => (
              <Reveal key={interest.title}>
                <div className="max-w-2xl">
                  <h3 className="mb-1.5 text-[15px] font-semibold tracking-tightest text-paper">
                    {interest.title}
                  </h3>
                  <p className="text-sm font-light leading-relaxed text-white/60">
                    {interest.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Closing tagline ───────────────────────────────────── */}
      <section className="border-t border-white/8 py-14 md:py-20">
        <Container>
          <Reveal>
            <p
              className="max-w-2xl font-semibold leading-[1.05] tracking-tightest text-paper"
              style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
            >
              {closingTagline}
            </p>
          </Reveal>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
