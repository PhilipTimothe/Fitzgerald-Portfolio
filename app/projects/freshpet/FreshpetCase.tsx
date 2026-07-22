import { CaseHero } from "@/components/case-hero";
import { MetricBand, type Metric } from "@/components/metric-band";
import { FactsBar, type Fact } from "@/components/facts-bar";
import { NarrativeSection } from "@/components/narrative-section";
import { ImageBreak } from "@/components/image-break";
import { VideoBlock } from "@/components/video-block";
import { BeforeAfterSlider } from "@/components/before-after-slider";
import { Gallery, type GalleryItem } from "@/components/gallery";
import { ChallengeApproachImpact } from "@/components/challenge-approach-impact";
import { Reflection } from "@/components/reflection";
import { UpNextSection } from "@/components/up-next-section";
import { Footer } from "@/components/footer";

// ── Case data (copy is real; image paths are placeholders to swap) ──
const metrics: Metric[] = [
  { value: 13, suffix: "M+", label: "Video views", color: "green" },
  { value: 1, suffix: "M+", label: "Views, week one", color: "cyan" },
  { display: "2018", label: "Package design award", color: "amber" },
  { display: "Lift", label: "Sales and engagement", color: "paper" },
];

const facts: Fact[] = [
  { label: "Client", value: "Freshpet" },
  { label: "Industry", value: "CPG / Pet" },
  { label: "Role", value: "Audience Development and Brand" },
  { label: "Services", value: "Video, Packaging, Copy, Social" },
  { label: "Year", value: "20XX" }, // TODO: confirm years
];

const gallery: GalleryItem[] = [
  {
    src: "/placeholder/freshpet-social-01.jpg",
    alt: "Freshpet social campaign creative",
    wide: true,
  },
  {
    src: "/placeholder/freshpet-packaging-01.jpg",
    alt: "Freshpet Vital PURE packaging beauty shot",
  },
  {
    src: "/placeholder/freshpet-stews-01.jpg",
    alt: "Freshpet Stews packaging beauty shot",
  },
  {
    src: "/placeholder/freshpet-catcups-01.jpg",
    alt: "Freshpet Cat Cups launch creative",
  },
  {
    src: "/placeholder/freshpet-lifestyle-01.jpg",
    alt: "Freshpet lifestyle photography",
  },
];

export function FreshpetCase() {
  return (
    <main className="min-h-screen">
      <CaseHero
        eyebrow="// Case Study · CPG / Pet"
        title="Freshpet"
        headline="Fresh enough to fool you."
        subtitle="Widening an all-natural pet food brand to younger and older buyers by proving quality instead of claiming it."
        image="/freshpetheader.jpeg"
        video="38821eaaeb3862180a9e137840d66b3d"
        titleAccent="green"
      />

      <MetricBand metrics={metrics} />
      <FactsBar facts={facts} />

      {/* 01 The Brief */}
      <NarrativeSection
        number="01"
        label="The Brief"
        credit="the objective"
        title="Make fresh, refrigerated pet food feel obvious instead of strange."
        quote="The barrier was never taste. It was unfamiliarity."
      >
        <p>
          Freshpet had a loyal core: households roughly 30 to 50, higher income,
          already sold on fresh pet food. The job was to widen that base at both
          ends, younger and older buyers who liked the idea but hesitated
          because the category was new to them.
        </p>
        <p>
          A refrigerated roll of pet food is an unfamiliar thing to trust. The
          work had to move Freshpet from novelty to premium staple, and it had
          to do it across video, packaging, and voice at once.
        </p>
      </NarrativeSection>

      <ImageBreak
        image="/freshpetbreak01.jpg"
        alt="Freshpet campaign hero image"
        caption="Campaign hero. Replace with a high-resolution still."
        height="lg"
      />

      {/* 02 My Role */}
      <NarrativeSection
        number="02"
        label="My Role"
        credit="what I owned"
        accent="cyan"
        chips={[
          "Brand Strategy",
          "Audience Development",
          "Packaging",
          "Copywriting",
          "Social",
        ]}
      >
        <p>
          I led audience development and brand work across the program, setting
          the strategy and steering the creative from the taste-test concept
          through the packaging rebrand and launch copy. I partnered with
          production for the video and with packaging design for the redesign.
        </p>
      </NarrativeSection>

      {/* 03 The Work */}
      <NarrativeSection
        number="03"
        label="The Work"
        credit="three moves"
        title="Prove it, package it, give it a voice."
      >
        <p>
          The strategy came down to three moves: a demonstration that dissolved
          the trust problem, a packaging system that made the product read as
          premium food, and copy that gave the brand warmth. The taste test
          carried the campaign.
        </p>
      </NarrativeSection>

      <VideoBlock
        autoplayStreamId="452c7a49ebf4d776fd9dfa007b7d366a"
        title="Freshpet blind taste test"
        caption="The blind taste test: plated like a restaurant dish, eaten by people aged 13 to 60, revealed after as pet food. 1M+ views in week one, 13M+ to date, with a lift in engagement and sales across markets."
      />

      <BeforeAfterSlider
        before="/FreshpetBefore.jpg"
        after="/freshpetafter.jpg"
        beforeAlt="Freshpet packaging before the rebrand"
        afterAlt="Freshpet Vital PURE and Stews packaging after the rebrand"
        caption="Packaging rebrand across new and existing SKUs. The Stews line went on to win a 2018 American Package Design Award."
      />

      {/* <Gallery items={gallery} /> */}

      {/* 04 Challenge, Approach, Impact */}
      <ChallengeApproachImpact
        number="04"
        challenge="Younger and older shoppers liked the promise of fresh pet food but did not trust a refrigerated roll they had never seen before. Unfamiliarity, not taste, was the barrier."
        approach="Prove the quality instead of claiming it. A blind taste test turned skepticism into a demonstration, while a premium packaging system made the product read as food rather than novelty."
        impact="13M+ video views, a measurable lift in engagement and sales across markets, and an award-winning packaging system that repositioned the line."
      />

      {/* 05 Reflection */}
      <Reflection number="05">
        <p>
          The taste test worked because it never asked anyone to believe a
          claim. It let people find the answer themselves, then reframed it in
          one line.
        </p>
        <p>
          I keep coming back to that. The strongest brand moments hand the
          audience the proof and let them draw the conclusion.
        </p>
      </Reflection>

      <UpNextSection currentProjectId="freshpet" />
      <Footer />
    </main>
  );
}
