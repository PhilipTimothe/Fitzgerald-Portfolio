import { CaseHero } from "@/components/case-hero";
import { FactsBar, type Fact } from "@/components/facts-bar";
import { NarrativeSection } from "@/components/narrative-section";
import { ImageBreak } from "@/components/image-break";
import { FramedImage } from "@/components/framed-image";
import { ChallengeApproachImpact } from "@/components/challenge-approach-impact";
import { Reflection } from "@/components/reflection";
import { UpNextSection } from "@/components/up-next-section";
import { Footer } from "@/components/footer";
import { BackButton } from "@/components/back-button";

// TODO: confirm exact tenure with Fitzgerald — inferred from post dates
// (Instagram posts timestamped Jan/Feb 2020, Kobe & Gigi tribute dated
// Jan 27 2020, Brident emails referencing benefits not rolling over "to
// 2020"), which brackets the visible work to roughly 2019 into 2020.
const facts: Fact[] = [
  { label: "Channels", value: "Social, Email, Content, Local SEO" },
  { label: "Audiences", value: "Pediatric / Family + Adult Ortho" },
  { label: "Languages", value: "English / Spanish" },
  { label: "Local SEO", value: "Versioned store pages, V1–V3, at scale" },
  { label: "Responsiveness", value: "Real-time — posted within a day" },
  { label: "Voice", value: "“Priced for people, not pop stars”" },
];

export function WesternDentalCase() {
  return (
    <main className="min-h-screen">
      <CaseHero
        eyebrow="// Case Study · Healthcare / DSO"
        title="Western Dental"
        headline="A big chain that had to win one neighborhood at a time."
        subtitle="Fitzgerald's work made a multi-location brand feel like the corner practice, and made going to the dentist feel human, across every channel a patient touches."
        image="/WDimage02wide.jpg"
        // image="/WDHeroImage.jpg"
        imageFit="cover"
        mobilePosition="right"
        titleAccent="cyan"
      >
        <BackButton />
      </CaseHero>

      <FactsBar facts={facts} />

      {/* 01 Client & Category Context */}
      <NarrativeSection
        number="01"
        label="Client & Category"
        credit="the setup"
        title="A DSO has to be two contradictory things at once."
      >
        <p>
          Western Dental is a large dental service organization (DSO): a network
          of local offices operating under one brand, offering general
          dentistry, orthodontics, and specialty care. Its positioning is
          accessible, affordable, community dental care — insurance and Medicaid
          accepted, financing offered for the uninsured, bilingual
          communication, and a deliberately un-clinical, un-intimidating tone.
        </p>
        <p>
          That category has a structural tension worth naming, because it is the
          strategy. A DSO needs the scale and consistency of a national brand,
          but a patient chooses a dentist the way they choose a neighborhood: by
          proximity, familiarity, and trust. So the marketing has to be
          systematized enough to run across many locations, and specific enough
          to feel like it was written for your street.
        </p>
      </NarrativeSection>

      {/* 02 Role & Scope */}
      <NarrativeSection
        number="02"
        label="Role & Scope"
        credit="what I owned"
        accent="cyan"
        chips={[
          "Social & Audience Development",
          "Email Marketing",
          "Editorial Content",
          "Local SEO Copywriting",
        ]}
      >
        <p>
          Across this client, I operated a full-funnel content and channels
          remit: top-of-funnel awareness through social and blog content,
          consideration through product launches and ortho promotions,
          conversion and retention through booking and reactivation emails, and
          discoverability through hyper-localized SEO written store by store.
        </p>
      </NarrativeSection>

      <ImageBreak
        image="/WDHeroImage.jpg"
        alt="Western Dental campaign creative"
        mobilePosition="right"
      />

      {/* 03 Execution — Social */}
      <NarrativeSection
        number="03"
        label="Execution — Social"
        credit="Instagram"
        accent="amber"
        title="Patient stories, offers, launches, and the brand's people, in one consistent voice."
        quote="Smiles that would light up an entire arena... Rest easy, Kobe & Gigi."
      >
        <p>
          The feed ran a deliberate mix: patient transformation stories like a
          “New Year, New Teeth” braces reveal; bold, benefit-forward promo
          creatives (“Braces $500 off,” “Grinners Grinning: Braces $99/month”)
          built to convert; the launch of ClearArc invisible aligners,
          positioned against the category leader; and a
          #WesternDentalKidsSpotlight series featuring the brand’s own
          practitioners, humanizing the network through the people in it.
        </p>
        <p>
          The day after Kobe Bryant and his daughter Gianna died, the brand
          posted a restrained tribute — proof of a brand paying attention and
          responding with genuine feeling rather than a scheduled calendar.
          Visible engagement on these posts is modest (26 to 82 likes); the
          strength here is editorial range and one consistent voice across
          promo, story, launch, and moment.
        </p>
      </NarrativeSection>

      {/* 04 Execution — Email */}
      <NarrativeSection
        number="04"
        label="Execution — Email"
        credit="Brident / South Texas Dental"
        title="A real lifecycle, not one-off blasts."
        quote="Personalized care that will even make the tooth fairy jealous."
      >
        <p>
          The email program covered acquisition (“Don’t Leave Your Smile to
          Chance,” pitching free ortho consults and bite-sized payment plans),
          reactivation with a deadline (benefits that don’t roll over into the
          new year), and retention (tying six-month checkups to long-term health
          rather than a sale).
        </p>
        <p>
          Every send is bilingual — each CTA repeats in Spanish — and the voice
          stays warm and human even in a transactional email, real audience
          awareness carried all the way through the copy.
        </p>
      </NarrativeSection>

      <FramedImage image="/WDimage03.JPEG" alt="Western Dental brand content" />

      {/* 05 Execution — Content */}
      <NarrativeSection
        number="05"
        label="Execution — Content"
        credit="the blog"
        title="Top-of-funnel content that builds authority without ever feeling clinical."
      >
        <p>
          Pieces like “Fun facts about teeth” and “How to floss properly” are
          classic top-of-funnel SEO writing: shareable, keyword-rich, and
          genuinely useful, reassuring in tone rather than instructional. The
          same personality that shows up in the emails and the social captions
          shows up here — that tonal consistency across every format is what
          owning a brand voice actually means in practice.
        </p>
      </NarrativeSection>

      {/* 06 Execution — Local SEO */}
      <NarrativeSection
        number="06"
        label="Execution — Local SEO"
        credit="the standout craft"
        accent="green"
        title="The same skeleton, a different neighborhood every time."
        chips={[
          "#819 Oakland",
          "#809 San Mateo",
          "#120 Redwood City",
          "#808 Santa Clara",
        ]}
        quote="Priced for people, not pop stars."
      >
        <p>
          Individual store-location pages, each tagged with a store code and a
          version marker (V1 through V3). Every page runs the same proven
          skeleton — neighborhood-dentist welcome,
          all-specialists-under-one-roof value prop, insurance and financing, an
          emergency-appointment CTA — but the flesh is unique to each location:
          real cross streets, real neighborhoods, real landmarks across the
          road.
        </p>
        <p>
          The version markers are the tell: this is a deliberately systematized
          program built to give search engines distinct, locally relevant
          content per store while avoiding the duplicate-content penalty that
          kills most multi-location SEO — the hard, unglamorous skill that
          actually moves local rankings. Only four pages are shown here; the
          versioning implies a much larger program behind them.
        </p>
      </NarrativeSection>

      <FramedImage image="/WDImage01.jpg" alt="Western Dental social and campaign creative" />

      {/* 07 Challenge, Approach, Impact */}
      <ChallengeApproachImpact
        number="07"
        challenge="How do you make a large chain feel local, and make going to the dentist feel human, at the same time and across every channel a patient touches?"
        approach="Meet each audience exactly where they are, and let warmth and locality do the persuading — reduce geographic distance through hyper-local SEO, language distance through bilingual email, and emotional distance through a playful, human voice instead of clinical authority."
        impact="No hard performance numbers exist in the source for this client — that gap is real and stated honestly here. What's demonstrable through the work itself: four channels run in parallel, a versioned local-SEO program systematized at scale, bilingual reach, and real-time cultural responsiveness, all in one consistent brand voice."
      />

      {/* 08 Reflection */}
      <Reflection number="08">
        <p>
          Where Freshpet proves I can land a single big idea, Western Dental
          proves I can operate a whole brand’s marketing surface at once —
          holding one voice across social, email, content, and search, while
          tailoring the message to each audience’s actual location, language,
          and life.
        </p>
        <p>
          The local SEO work in particular is systems thinking: not just writing
          well once, but building a repeatable, scalable content machine that
          performs across dozens of markets.
        </p>
      </Reflection>

      <UpNextSection currentProjectId="western-dental" />
      <Footer />
    </main>
  );
}
