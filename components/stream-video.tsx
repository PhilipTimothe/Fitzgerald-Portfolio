"use client";

import { useEffect, useRef } from "react";
import Hls from "hls.js";
import { cn } from "@/lib/utils";

interface StreamVideoProps {
  /** HLS manifest URL (.m3u8), e.g. from cloudflareStreamManifestSrc(). */
  src: string;
  className?: string;
}

/** A muted, looping, autoplaying HLS background video. No controls, no modal. */
export function StreamVideo({ src, className }: StreamVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls: Hls | null = null;

    if (Hls.isSupported()) {
      hls = new Hls({ enableWorker: true, lowLatencyMode: true });
      hls.loadSource(src);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {});
      });
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
      video.addEventListener("loadedmetadata", () => {
        video.play().catch(() => {});
      });
    }

    return () => {
      hls?.destroy();
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      className={cn("h-full w-full object-cover", className)}
      playsInline
      muted
      loop
      autoPlay
      preload="auto"
    />
  );
}
