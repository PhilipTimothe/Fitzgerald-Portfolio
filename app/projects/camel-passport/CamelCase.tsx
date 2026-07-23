import { CaseHero } from "@/components/case-hero";
import { FactsBar, type Fact } from "@/components/facts-bar";
import { NarrativeSection } from "@/components/narrative-section";
import { BeforeAfterSlider } from "@/components/before-after-slider";
import { ChallengeApproachImpact } from "@/components/challenge-approach-impact";
import { Reflection } from "@/components/reflection";
import { UpNextSection } from "@/components/up-next-section";
import { Footer } from "@/components/footer";
import { BackButton } from "@/components/back-button";

// TODO: get real years from Fitzgerald — no dates appear anywhere in the source deck.
const facts: Fact[] = [
  { label: "Engagement", value: "Agency-side — Passport Brand Design" },
  { label: "Rebrand", value: "3-phase Camel Crush progression" },
  { label: "Legacy SKUs", value: "9 designs shown in the “before” state" },
  { label: "Launch", value: "Camel X — a carbon-core cigarette" },
  { label: "Category", value: "Heavily regulated — the pack is the only channel" },
  { label: "Toolkit", value: "Design & pack-level communication only" },
];

export function CamelCase() {
  return (
    <main className="min-h-screen">
      <CaseHero
        eyebrow="// Case Study · Tobacco / Regulated CPG"
        title="Camel"
        headline="When you can’t advertise, the pack is the brand."
        subtitle="In a category where you can’t advertise, the pack is the entire brand. Fitzgerald’s work modernized a mature line across three deliberate phases, then turned a new product’s biggest usability hurdle into a branded ritual."
        image="/camel.png"
        titleAccent="amber"
      >
        <BackButton />
      </CaseHero>

      <FactsBar facts={facts} />

      {/* 01 Client & Category */}
      <NarrativeSection
        number="01"
        label="Client & Category"
        credit="the constraint"
        title="When the toolkit is taken away, the pack becomes the entire brand."
      >
        <p>
          Tobacco marketing in the US operates under severe restrictions.
          Broadcast advertising has been banned for decades, health or
          reduced-harm claims are prohibited, descriptor language like
          “light” and “mild” was banned in 2009 under the Family Smoking
          Prevention and Tobacco Control Act, and most conventional media
          and digital channels are either legally closed or practically
          off-limits. What remains is the package itself, plus limited
          point-of-sale and age-verified direct channels.
        </p>
        <p>
          That produces an unusual strategic condition: the pack is not
          brand collateral, it is the brand’s primary medium. Every job a
          campaign would normally do — differentiate, signal variant,
          communicate quality, create shelf presence, carry the brand’s
          personality — collapses into a few square inches of printed
          board. This case study covers work for the Camel Crush family, a
          Reynolds brand, done through the agency Passport Brand Design.
        </p>
      </NarrativeSection>

      {/* 02 Role & Scope */}
      <NarrativeSection
        number="02"
        label="Role & Scope"
        credit="what I owned"
        accent="cyan"
        chips={["Brand Strategy", "Copywriting", "Agency-Side"]}
      >
        <p>
          My work here was brand strategy and copywriting on a multi-phase
          rebrand of the Camel Crush line. The Camel X launch copy,
          “Learn the Light,” is writing I authored directly. Design carries
          a strategic load in this category that it rarely carries
          anywhere else, and that’s the lens this case study is presented
          through.
        </p>
      </NarrativeSection>

      {/* 03 The Challenge */}
      <NarrativeSection
        number="03"
        label="The Challenge"
        credit="two problems"
        accent="amber"
        title="A line that reads as one product, and a product that behaves like a defective one."
      >
        <p>
          The rebrand problem: the legacy Camel Crush packs are dark,
          dense, and visually near-identical across variants. Three SKUs —
          Crush, Menthol, Menthol Silver — sit side by side in
          navy-to-black fields with a glowing circle and the camel
          silhouette, differentiated mainly by small type and a subtle
          color shift inside the circle. At arm’s length behind a counter,
          they read as one product. The brief: modernize the line so it
          holds up at retail and so variants are navigable, without
          discarding the equity in the camel silhouette and the Crush
          name.
        </p>
        <p>
          The launch problem: Camel X uses a carbon core rather than
          conventional construction, so it doesn’t light or draw the way a
          smoker expects. A product that behaves unfamiliarly in the first
          thirty seconds of use invites the conclusion that it’s
          defective. The challenge was to onboard consumers to a
          genuinely novel product using only pack-level and owned
          communication, without the usability quirk reading as a flaw.
        </p>
      </NarrativeSection>

      {/* 04 The Strategic Insight */}
      <NarrativeSection
        number="04"
        label="The Strategic Insight"
        credit="the thinking"
        accent="cyan"
        title="Evolve in phases, and turn the friction into the ritual."
      >
        <p>
          On the rebrand: mature brands carry equity in exactly the assets
          that look dated. Moving in three deliberate steps rather than
          one leap is how you modernize without stranding loyal buyers or
          abandoning recognition — sequencing a rebrand this way is a
          strategist’s decision, not a designer’s.
        </p>
        <p>
          On Camel X: the difficulty of lighting the product is reframed
          as part of what makes it curious, and the discovery phase
          becomes a teaching opportunity rather than a warning label.
          Giving consumers agency and information makes the product more
          theirs — the same reflex as turning a category’s biggest
          liability into its defining mechanism.
        </p>
      </NarrativeSection>

      {/* 05 Execution — The Rebrand Progression */}
      <NarrativeSection
        number="05"
        label="Execution — The Rebrand Progression"
        credit="three phases"
        title="The same family, read left to right: dark and undifferentiated, to bright and color-coded, to bold, to minimal and premium."
      >
        <p>
          Two things happen across the arc at once. Variant navigation
          improves at every step — color does the work that banned
          descriptor words used to do, a direct response to the
          regulatory environment. And the brand climbs in perceived
          value: the endpoint reads considerably more premium than the
          origin.
        </p>
      </NarrativeSection>

      <BeforeAfterSlider
        before="/CamalOriginal01.jpg"
        after="/Camal02.jpg"
        beforeAlt="Legacy Camel Crush packs, dark and near-identical across variants"
        afterAlt="Phase one, “Next Level Crush” — brighter cyan and green fields, color-coded variants"
        caption="Phase one, “Next Level Crush.” The change is primarily one of luminance and color coding: the packs become brighter and the variants become distinguishable by color at a glance."
      />

      <BeforeAfterSlider
        before="/CamalOriginal01.jpg"
        after="/camal03.jpg"
        beforeAlt="Legacy Camel Crush packs, dark and near-identical across variants"
        afterAlt="Phase two, “Let’s Keep Crushing It” — bold CRUSH wordmark over teal and green gradient fields"
        caption="Phase two, “Let’s Keep Crushing It.” The Camel wordmark recedes and CRUSH becomes the dominant typographic element — the boldest, highest-energy phase, where the sub-brand asserts itself over the parent brand."
      />

      <BeforeAfterSlider
        before="/CamalOriginal01.jpg"
        after="/Camal04.jpg"
        beforeAlt="Legacy Camel Crush packs, dark and near-identical across variants"
        afterAlt="Phase three — a near-white, minimalist pack with a small green camel"
        caption="Phase three inverts everything: a near-white field, restrained type, a small green camel, and a quiet, premium feel. Where phase two shouted, this one whispers."
      />

      {/* 06 Execution — Camel X */}
      <NarrativeSection
        number="06"
        label="Execution — Camel X, “Learn the Light”"
        credit="launch copy"
        accent="amber"
        chips={["The Heat", "The Draw"]}
        quote="Giving consumers agency and information makes the product more theirs."
      >
        <p>
          “Learn the Light” is an instructional page teaching consumers how
          to light and use Camel X, framed explicitly as a discovery-phase
          opportunity to teach people how to interact with a new product.
          It opens by naming the product’s unusual lighting process as the
          thing that makes it curious, then breaks the ritual into two
          steps: The Heat, which explains that an ordinary lighter won’t
          do it and you’re igniting a carbon core rather than
          easily-burning tobacco — “patience pays, wait a moment longer
          than you’d think” — and The Draw, where two full draws activate
          the core and light it from within.
        </p>
        <p>
          The copy works because it does four things at once: it
          pre-empts failure by telling users what to expect before they
          conclude the product is broken; it explains mechanism, which is
          what converts “annoying” into “engineered”; it uses
          command-and-consequence rhythm that reads like instructions for
          something worth learning rather than a warning label; and it
          elevates the friction into ritual — the same move that makes
          pour-over coffee and cigars feel like practices rather than
          chores.
        </p>
      </NarrativeSection>

      {/* 07 Challenge, Approach, Impact */}
      <ChallengeApproachImpact
        number="07"
        challenge="How do you modernize a mature product line without discarding its equity, and onboard consumers to a genuinely unfamiliar product, using only the pack and pack-level communication?"
        approach="Evolve identity in phases rather than a single leap, letting color do the differentiation work that banned descriptor language used to do — and turn a product’s biggest usability friction into a taught, named ritual that makes it feel earned rather than defective."
        impact="No sales data, share figures, or launch metrics appear in the source — that gap is real and stated honestly here. What’s demonstrable through the work itself: disciplined multi-phase sequencing, an equity-preserving approach to a mature brand, and copy that turns a product liability into a brand asset."
      />

      {/* 08 Reflection */}
      <Reflection number="08">
        <p>
          Camel shows a strategist who can work where most of the toolkit
          has been taken away. No broadcast, no claims, no descriptors,
          just the pack and the moment of first use. Within that box, the
          rebrand sequences in phases that respect existing equity while
          climbing toward premium, and the launch copy converts a
          product’s most likely rejection point into the reason to feel
          ownership of it.
        </p>
        <p>
          Where Freshpet shows a big consumer idea and Western Dental
          shows systems at scale, Camel shows constraint-driven thinking
          and craft: the ability to find the one available lever and pull
          it precisely.
        </p>
      </Reflection>

      {/* 09 Honesty ledger */}
      <NarrativeSection
        number="09"
        label="Honesty Ledger"
        credit="sourced vs. reconstructed"
      >
        <p>
          Directly sourced: the three-phase pack progression and its visual
          description at each stage; the “Learn the Light” copy structure,
          its two named steps, and its language; the regulatory
          restrictions on tobacco marketing described above.
        </p>
        <p>
          Reconstructed or flagged, and not yet confirmed: the years this
          work took place — no dates appear anywhere in the source, and
          they’re needed before this page is final. Whether Fitzgerald
          designed the packs, directed the design, or developed the
          strategy behind the progression — the “brand strategy and
          copywriting” framing above is a deliberately safe hedge, not a
          confirmed fact, since overstating design authorship here is a
          real interview risk and understating it wastes strong work.
          Whether the three phases shipped as a sequential market rollout
          or were explored as parallel concept routes. And Passport Brand
          Design’s exact positioning and Fitzgerald’s engagement type,
          which aren’t stated in the source.
        </p>
        <p>
          The honest gap: there are no performance metrics in the source
          for this client. This case study is built on constraint,
          sequencing, and craft, not numbers, unless and until real data
          and confirmed details come in from Fitzgerald.
        </p>
      </NarrativeSection>

      <UpNextSection currentProjectId="camel-passport" />
      <Footer />
    </main>
  );
}
