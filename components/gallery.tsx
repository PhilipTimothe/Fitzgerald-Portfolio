"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/container";
import { cn, withBasePath } from "@/lib/utils";

export interface GalleryItem {
  src: string;
  alt: string;
  caption?: string;
  /** Span two columns on wide screens. */
  wide?: boolean;
}

export function Gallery({ items }: { items: GalleryItem[] }) {
  return (
    <section className="border-b border-white/8 py-14 md:py-20">
      <Container>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => {
            const hasImage = item.src && !item.src.includes("placeholder");
            return (
              <motion.figure
                key={item.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                className={cn("group", item.wide && "sm:col-span-2 lg:col-span-2")}
              >
                <div
                  role="img"
                  aria-label={item.alt}
                  className={cn(
                    "relative aspect-[4/3] overflow-hidden rounded-xl border border-white/8 bg-cover bg-center transition-colors group-hover:border-white/20",
                    !hasImage && "bg-white/[0.03]"
                  )}
                  style={hasImage ? { backgroundImage: `url(${withBasePath(item.src)})` } : undefined}
                >
                  {!hasImage && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-mono text-[11px] text-white/20">{item.src}</span>
                    </div>
                  )}
                </div>
                {item.caption && (
                  <figcaption className="mt-2 text-xs text-white/35">{item.caption}</figcaption>
                )}
              </motion.figure>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
