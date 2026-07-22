"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { cn, withBasePath } from "@/lib/utils";
import { cloudflareStreamManifestSrc } from "@/lib/cloudflare-stream";
import { StreamVideo } from "@/components/stream-video";

interface VideoBlockProps {
  poster?: string;
  /** YouTube/Vimeo embed URL (autoplay appended on click). */
  embedUrl?: string;
  /** Or a self-hosted mp4 under /public. */
  src?: string;
  /** Cloudflare Stream video UID. Plays muted and looping immediately, no click-to-play. */
  autoplayStreamId?: string;
  title: string;
  caption?: string;
  /** Link to the original video (e.g. on YouTube), shown after the caption. */
  sourceUrl?: string;
}

export function VideoBlock({ poster, embedUrl, src, autoplayStreamId, title, caption, sourceUrl }: VideoBlockProps) {
  const [playing, setPlaying] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const hasPoster = poster && !poster.includes("placeholder");

  useEffect(() => {
    setReduceMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  return (
    <section className="border-b border-white/8 py-14 md:py-20">
      <Container>
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-white/8 bg-black">
            <div className="relative aspect-video">
              {autoplayStreamId ? (
                <StreamVideo
                  src={cloudflareStreamManifestSrc(autoplayStreamId)}
                  className="absolute inset-0"
                />
              ) : playing && embedUrl ? (
                <iframe
                  src={`${embedUrl}${embedUrl.includes("?") ? "&" : "?"}autoplay=1`}
                  title={title}
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              ) : playing && src ? (
                <video src={withBasePath(src)} controls autoPlay className="absolute inset-0 h-full w-full" />
              ) : (
                <button
                  type="button"
                  onClick={() => setPlaying(true)}
                  aria-label={`Play video: ${title}`}
                  className={cn(
                    "group absolute inset-0 flex items-center justify-center bg-cover bg-center",
                    !hasPoster && "bg-white/[0.03]"
                  )}
                  style={hasPoster ? { backgroundImage: `url(${withBasePath(poster)})` } : undefined}
                >
                  <span className="absolute inset-0 bg-ink/30 transition-colors group-hover:bg-ink/10" />
                  <motion.span
                    animate={reduceMotion ? undefined : { scale: [1, 1.04, 1] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                    className="relative flex h-16 w-16 items-center justify-center rounded-full bg-accent text-ink transition-transform group-hover:scale-105"
                  >
                    <Play size={24} className="ml-0.5" fill="currentColor" />
                  </motion.span>
                  {!hasPoster && (
                    <span className="absolute bottom-3 right-3 font-mono text-[11px] text-white/25">
                      {poster}
                    </span>
                  )}
                </button>
              )}
            </div>
          </div>
          {caption && <p className="mt-3 text-xs text-white/35">{caption}</p>}
          {sourceUrl && (
            <a
              href={sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-block text-xs font-medium text-accent hover:underline"
            >
              Watch the original ↗
            </a>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
