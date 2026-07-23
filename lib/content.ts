// ─────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH
// Add, edit, or reorder case studies here and it propagates to the
// homepage grid and the "Up Next" navigation automatically.
//
// Anything marked  // TODO  is a placeholder Fitzgerald should confirm
// (real years, exact metrics, final image filenames).
// ─────────────────────────────────────────────────────────────

export interface Tag {
  label: string;
  color: "green" | "cyan" | "amber";
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  /** Path under /public. Drop the real cover image here later. */
  image: string;
  href: string;
  /** [client, years, category] */
  meta: [string, string, string];
  description: string;
  tags: Tag[];
  /** Featured = wide card on the homepage grid. */
  featured?: boolean;
}

export const caseStudies: Project[] = [
  {
    id: "freshpet",
    title: "Freshpet",
    subtitle: "Fresh Enough to Fool You",
    image: "/freshpet.jpeg", // TODO: add cover image
    href: "/projects/freshpet",
    meta: ["Freshpet", "20XX – 20XX" /* TODO: confirm years */, "Brand · CPG"],
    description:
      "I led audience development and brand work for Freshpet, from a blind taste-test video that reached 13M+ views to an award-winning packaging rebrand. The through-line: make an unfamiliar category feel fresh, premium, and worth trying.",
    tags: [
      { label: "Brand Strategy", color: "green" },
      { label: "CPG", color: "green" },
      { label: "Campaign", color: "cyan" },
    ],
    featured: false,
  },
  {
    id: "western-dental",
    title: "Western Dental",
    subtitle: "A Network That Feels Local",
    image: "/western-dental.png", // TODO: add cover image
    href: "/projects/western-dental",
    meta: [
      "Western Dental / Brident",
      "20XX – 20XX" /* TODO */,
      "Content · Healthcare",
    ],
    description:
      "I ran multi-channel audience development for Western Dental and Brident across social, email, long-form blog, and hyper-local SEO. A repeatable content system made a large dental network feel like a trusted neighborhood practice.",
    tags: [
      { label: "Content", color: "green" },
      { label: "SEO", color: "cyan" },
      { label: "Email", color: "green" },
    ],
  },
  // {
  //   id: "my-florida-roofing",
  //   title: "My Florida Roofing",
  //   subtitle: "Built to Be Found",
  //   image: "/myfloridaroofing.jpg", // TODO: add cover image
  //   href: "/projects/my-florida-roofing",
  //   meta: [
  //     "My Florida Roofing Contractor",
  //     "2023 – 2024",
  //     "Demand Gen · Home Services",
  //   ],
  //   description:
  //     "I owned demand generation for My Florida Roofing Contractor across technical SEO, email, direct mail, and print. Measured SEO lift and a consistent brand system turned a regional contractor into a category leader in its market.",
  //   tags: [
  //     { label: "SEO", color: "green" },
  //     { label: "Demand Gen", color: "cyan" },
  //     { label: "Print", color: "green" },
  //   ],
  // },
  {
    id: "camel-passport",
    title: "Camel",
    subtitle: "Precision in a Regulated Category",
    image: "/camel.png", // TODO: add cover image
    href: "/projects/camel-passport",
    meta: [
      "Passport Brand Design",
      "20XX – 20XX" /* TODO */,
      "Rebrand · Agency",
    ],
    description:
      "At Passport Brand Design I led rebranding and launch work for Camel, including the Camel Crush system refresh and instructional launch copy for Camel X. Regulated-category work that demanded precision in both strategy and craft.",
    tags: [
      { label: "Rebrand", color: "green" },
      { label: "Agency", color: "cyan" },
      { label: "Copywriting", color: "green" },
    ],
  },
];

// What I Do — the discipline grid on the homepage.
export interface Skill {
  title: string;
  desc: string;
  color: "green" | "cyan";
}

export const skills: Skill[] = [
  {
    title: "Brand Strategy",
    desc: "Positioning, narrative architecture, and visual identity direction.",
    color: "green",
  },
  {
    title: "Campaign Execution",
    desc: "Integrated campaigns across paid, owned, and earned channels.",
    color: "cyan",
  },
  {
    title: "Team Leadership",
    desc: "Building and scaling high-output creative and marketing teams.",
    color: "green",
  },
  {
    title: "Consumer Insights",
    desc: "Data-backed research that sharpens creative and messaging decisions.",
    color: "cyan",
  },
  {
    title: "Content Strategy",
    desc: "Scalable content systems built for consistency and growth.",
    color: "green",
  },
  {
    title: "Market Positioning",
    desc: "Competitive analysis and long-range strategic roadmaps.",
    color: "cyan",
  },
];
