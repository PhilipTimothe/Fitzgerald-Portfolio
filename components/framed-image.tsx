import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { cn, withBasePath } from "@/lib/utils";

interface FramedImageProps {
  image: string;
  alt: string;
  caption?: string;
  /** Aspect ratio for the frame. */
  ratio?: string;
}

/** A single boxed, square image contained to 75% width on desktop (full width on mobile). */
export function FramedImage({ image, alt, caption, ratio = "1 / 1" }: FramedImageProps) {
  const hasImage = image && !image.includes("placeholder");

  return (
    <section className="py-14 md:py-20">
      <Container>
        <Reveal>
          <div className="mx-auto w-full md:w-3/4">
            <div
              role="img"
              aria-label={alt}
              className={cn(
                "overflow-hidden rounded-[16px] bg-cover bg-center",
                !hasImage && "bg-white/[0.03]"
              )}
              style={{
                aspectRatio: ratio,
                ...(hasImage ? { backgroundImage: `url(${withBasePath(image)})` } : {}),
              }}
            >
              {!hasImage && (
                <div className="flex h-full items-center justify-center">
                  <span className="font-mono text-[11px] text-white/20">{image}</span>
                </div>
              )}
            </div>
            {caption && <p className="mt-3 text-xs text-white/35">{caption}</p>}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
