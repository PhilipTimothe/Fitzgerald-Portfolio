"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { cn, withBasePath } from "@/lib/utils";

interface BeforeAfterSliderProps {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
  caption?: string;
  /** Aspect ratio, defaults to 4/3. */
  ratio?: string;
}

export function BeforeAfterSlider({
  before,
  after,
  beforeAlt,
  afterAlt,
  caption,
  ratio = "4 / 3",
}: BeforeAfterSliderProps) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const inView = useInView(containerRef, { once: true, margin: "-50px" });

  const hasBefore = before && !before.includes("placeholder");
  const hasAfter = after && !after.includes("placeholder");

  // One-time "peek": nudge the handle so first-time visitors notice it's draggable.
  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const duration = 1200;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      setPos(50 - 15 * Math.sin(Math.PI * t));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView]);

  const updateFromClientX = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, pct)));
  };

  return (
    <section className="border-b border-white/8 py-14 md:py-20">
      <Container>
        <Reveal>
          <div
            ref={containerRef}
            className="relative w-full select-none overflow-hidden rounded-2xl border border-white/8"
            style={{ aspectRatio: ratio, touchAction: "none" }}
            onPointerDown={(e) => {
              dragging.current = true;
              e.currentTarget.setPointerCapture(e.pointerId);
              updateFromClientX(e.clientX);
            }}
            onPointerMove={(e) => {
              if (dragging.current) updateFromClientX(e.clientX);
            }}
            onPointerUp={() => {
              dragging.current = false;
            }}
          >
            {/* AFTER (base layer) */}
            <div
              role="img"
              aria-label={afterAlt}
              className={cn("absolute inset-0 bg-cover bg-center", !hasAfter && "bg-accent/10")}
              style={hasAfter ? { backgroundImage: `url(${withBasePath(after)})` } : undefined}
            >
              {!hasAfter && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-mono text-[11px] text-accent/50">{after}</span>
                </div>
              )}
            </div>

            {/* BEFORE (clipped overlay) */}
            <div
              role="img"
              aria-label={beforeAlt}
              className={cn("absolute inset-0 bg-cover bg-center", !hasBefore && "bg-white/[0.05]")}
              style={{
                clipPath: `inset(0 ${100 - pos}% 0 0)`,
                ...(hasBefore ? { backgroundImage: `url(${withBasePath(before)})` } : {}),
              }}
            >
              {!hasBefore && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-mono text-[11px] text-white/30">{before}</span>
                </div>
              )}
            </div>

            {/* Corner labels */}
            <span className="absolute left-3 top-3 rounded-full bg-ink/70 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-white/70">
              Before
            </span>
            <span className="absolute right-3 top-3 rounded-full bg-ink/70 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-accent">
              After
            </span>

            {/* Handle */}
            <div
              className="pointer-events-none absolute inset-y-0 w-0.5 bg-accent"
              style={{ left: `${pos}%` }}
            >
              <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent p-2 text-ink shadow-lg">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M9 6L4 12l5 6M15 6l5 6-5 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            {/* Keyboard-accessible control */}
            <input
              type="range"
              min={0}
              max={100}
              value={pos}
              onChange={(e) => setPos(Number(e.target.value))}
              aria-label="Reveal before and after"
              className="absolute inset-x-0 bottom-4 mx-auto w-2/3 cursor-pointer opacity-0 focus:opacity-100"
            />
          </div>
          {caption && <p className="mt-3 text-xs text-white/35">{caption}</p>}
        </Reveal>
      </Container>
    </section>
  );
}
