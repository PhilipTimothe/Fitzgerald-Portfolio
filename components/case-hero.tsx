"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn, withBasePath } from "@/lib/utils";
import { cloudflareStreamManifestSrc } from "@/lib/cloudflare-stream";
import { StreamVideo } from "@/components/stream-video";

interface CaseHeroProps {
  eyebrow: string;
  title: string;
  /** Descriptive line under the title, e.g. "Fresh enough to fool you" */
  headline: string;
  subtitle?: string;
  image: string;
  /** Cloudflare Stream video UID. When set, plays as a muted looping background instead of `image`. */
  video?: string;
  titleAccent?: "green" | "cyan";
  /** Rendered as an overlay pinned to the top of the hero, e.g. a BackButton. */
  children?: React.ReactNode;
}

export function CaseHero({
  eyebrow,
  title,
  headline,
  subtitle,
  image,
  video,
  titleAccent = "green",
  children,
}: CaseHeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const hasVideo = Boolean(video);
  const hasImage = !hasVideo && image && !image.includes("cover.jpg") && !image.includes("placeholder");

  return (
    <section
      ref={ref}
      className="relative h-[72vh] min-h-[520px] w-full overflow-hidden md:h-[86vh]"
    >
      {/* Parallax background */}
      <motion.div
        style={{ y, ...(hasImage ? { backgroundImage: `url(${withBasePath(image)})` } : {}) }}
        className={cn(
          "absolute inset-0 -top-[10%] h-[120%] bg-cover bg-center",
          !hasImage && !hasVideo && "bg-white/[0.03]"
        )}
      >
        {hasVideo && (
          <StreamVideo
            src={cloudflareStreamManifestSrc(video!)}
            className="pointer-events-none absolute inset-0"
          />
        )}
      </motion.div>
      {/* Scrim for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/20" />

      {children && (
        <>
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ink/70 to-transparent" />
          <div className="absolute inset-x-0 top-0 z-10">{children}</div>
        </>
      )}

      {!hasImage && !hasVideo && (
        <div className="absolute right-6 top-6 font-mono text-[11px] text-white/20">
          {image}
        </div>
      )}

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0">
        <div className="mx-auto w-full max-w-6xl px-6 pb-14 md:px-8 md:pb-20">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 font-mono text-xs uppercase tracking-[0.14em] text-amber md:text-sm"
          >
            {eyebrow}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-semibold uppercase leading-[0.9] tracking-tightest"
            style={{ fontSize: "clamp(48px, 9vw, 108px)" }}
          >
            <span className={titleAccent === "green" ? "text-accent" : "text-cyan"}>
              {title}
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-4 max-w-2xl text-xl font-light text-paper md:text-2xl"
          >
            {headline}
          </motion.p>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-3 max-w-xl text-sm leading-relaxed text-white/55"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}
