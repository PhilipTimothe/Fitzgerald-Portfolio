"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn, withBasePath } from "@/lib/utils";

interface ImageBreakProps {
  image: string;
  alt: string;
  caption?: string;
  /** Height preset. */
  height?: "md" | "lg";
  /** Parallax range in percent, applied both above and below center. Defaults to a modest shift since these blocks are shorter than the hero. */
  intensity?: number;
  /** Background position on mobile; falls back to centered on md+. Defaults to "center". */
  mobilePosition?: "center" | "left" | "right";
}

const mobilePositionClass = {
  center: "bg-center",
  left: "bg-left md:bg-center",
  right: "bg-right md:bg-center",
};

export function ImageBreak({
  image,
  alt,
  caption,
  height = "md",
  intensity = 12,
  mobilePosition = "center",
}: ImageBreakProps) {
  const hasImage = image && !image.includes("placeholder");
  const ref = useRef<HTMLDivElement>(null);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    setReduceMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [`-${intensity}%`, `${intensity}%`]);

  return (
    <figure className="border-b border-white/8">
      <div
        ref={ref}
        role="img"
        aria-label={alt}
        className={cn(
          "relative w-full overflow-hidden bg-cover bg-center",
          height === "lg" ? "h-[60vh] min-h-[420px]" : "h-[44vh] min-h-[300px]",
          !hasImage && "bg-white/[0.03]"
        )}
      >
        <motion.div
          style={{
            ...(reduceMotion ? {} : { y }),
            ...(hasImage ? { backgroundImage: `url(${withBasePath(image)})` } : {}),
          }}
          className={cn(
            "absolute inset-x-0 -top-[15%] h-[130%] bg-cover",
            mobilePositionClass[mobilePosition],
            !hasImage && "bg-white/[0.03]"
          )}
        />
        {!hasImage && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-mono text-[11px] text-white/20">{image}</span>
          </div>
        )}
      </div>
      {caption && (
        <figcaption className="mx-auto max-w-6xl px-6 py-3 text-xs text-white/35 md:px-8">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
