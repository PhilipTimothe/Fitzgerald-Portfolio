// Single source of truth for the About page. Edit here to update copy.

export const aboutIntro = [
  "I'm a marketing strategist and campaign leader who has spent more than 13 years learning how brands actually connect with the people they're built for. My path runs through insurance, consumer packaged goods, agency work, healthcare, home services, and my own dessert company, and that range is the point. The same core question shows up everywhere: what are we really offering, why should anyone care, and what do we want them to do next.",
  "I'm at my best when I'm turning something complicated into something clear, whether that's a new insurance product, a rebrand, or a paid acquisition engine. I care about the craft of the work and the numbers underneath it in equal measure, because a campaign only matters if it moves the business. In the end, I want to build brands and campaigns that earn attention honestly and give people a reason to stay.",
];

export interface Role {
  title: string;
  company: string;
  location: string;
  dates: string;
  body: string;
}

export const roles: Role[] = [
  {
    title: "Head of Growth",
    company: "International Advertising Solutions",
    location: "London, UK (Remote)",
    dates: "2026 to Present",
    body: "I lead growth for a media planning and buying agency, owning both the strategy and the execution across digital marketing, website, and outbound pipeline. I defined the paid acquisition approach across Google Ads and Meta, from campaign structure and targeting through conversion tracking, and rebuilt the SEO foundation and site architecture to strengthen organic discovery and conversion together. I mapped the user journey for a full website redesign, sourced and vetted outbound lead-generation partners through head-to-head competitive analysis, and wrote the role definitions and frameworks the team needs to hire and scale. The through-line is bringing structure to a growing operation and tying every marketing effort back to revenue.",
  },
  {
    title: "Marketing Lead",
    company: "WhiteCoatLab",
    location: "Remote",
    dates: "2023 to Present (Part Time)",
    body: "Alongside my other work, I lead marketing for WhiteCoatLab, a delivery and implementation studio, where I own how the studio shows up and how it reaches the clients it's built for. I shape the positioning, brand voice, and the content and channels that bring new work in, turning a portfolio of client delivery into a clear story about what the studio does and who it's for. Working closely with the founder, I get to do the kind of hands-on, wear-every-hat marketing I like most, close to the work and close to the results.",
  },
  {
    title: "Senior Marketing Specialist",
    company: "Orion180",
    location: "Melbourne, FL (Hybrid)",
    dates: "2024 to 2025",
    body: "At Orion180 I built and ran the marketing behind a fast-growing insurance business, supporting homeowners and flood products, agent education, technology adoption, product launches, and state expansion. I led the Private Flood marketing program and the FLEX Home Insurance Florida launch, created the First Friday Flood webinar series, ran MY180 platform communications and the monthly agent newsletter, and kept a network of more than 500 agent partners informed and equipped. Behind the campaigns, I managed 15-plus concurrent projects across multiple states, coordinating cross-functional teams and vendors to land launches on time. It taught me how to make complex, regulated products feel simple and worth acting on.",
  },
  {
    title: "Senior Digital Marketing Specialist",
    company: "My FL Roofing Contractor",
    location: "Vero Beach, FL (Remote)",
    dates: "2023 to 2024",
    body: "I ran full-funnel digital marketing for a home services brand: Google Ads and Meta campaigns from setup through ongoing optimization, email marketing through Constant Contact, and a steady content calendar across social and blog. I managed the WordPress site end to end, led SEO audits that surfaced untapped keywords and cleaned up indexing, and built CRM automations to keep customers engaged. I also handled the visual side, designing campaign creative in Canva and Adobe and flying DJI drones to capture aerial project footage.",
  },
  {
    title: "Co-Founder & Marketing Lead",
    company: "The House of Scoops (THOS)",
    location: "Los Angeles County, CA",
    dates: "2020 to 2023",
    body: "I founded and ran The House of Scoops, an independent dessert business, and owned nearly every lever of it: branding, marketing, the website, operations, vendors, customer experience, and growth planning. I designed the customer journey from floor plan to loyalty program, built the digital presence on WordPress with SEMrush, Google Business, and Yelp, and shot and edited the brand's content myself in Adobe. Disciplined budgeting got us to 40% profit margins by year-end. More than anything, running my own company taught me how marketing decisions ripple straight into sales, operations, and the customer relationship.",
  },
  {
    title: "Digital Marketing Specialist",
    company: "Western Dental & Orthodontics",
    location: "Orange, CA",
    dates: "2019 to 2020",
    body: "I led email marketing end to end, optimizing nine automated flows and responsive pages across marketing, transactional, and ad-hoc campaigns. I drove SEO strategy and content, managed lead generation through Google Ads with Salesforce and SEMrush tracking, and shaped a social strategy built on storytelling to strengthen the brand across channels, with performance analysis feeding every next move.",
  },
  {
    title: "Account Manager",
    company: "Passport Brand Design",
    location: "Newport Beach, CA",
    dates: "2019",
    body: "On the agency side, I managed relationships with client executives and kept projects moving with clear weekly reporting against milestones. I led presentations that defined account objectives and walked clients through the brand journey, and worked cross-functionally to ship campaigns that matched the brief.",
  },
  {
    title: "Marketing Manager",
    company: "Freshpet",
    location: "Secaucus, NJ",
    dates: "2015 to 2018",
    body: "At Freshpet I worked inside a fast-moving CPG brand, supporting consumer marketing, digital campaigns, content, and product initiatives. I ran projects from concept to completion, translated consumer behavior trends into insights leadership could act on, and used SEO and competitive analysis to sharpen our digital efforts.",
  },
];

export interface SkillGroup {
  category: string;
  items: string[];
}

export const hardSkills: SkillGroup[] = [
  {
    category: "Strategy & Brand",
    items: [
      "Brand Strategy & Positioning",
      "Integrated Campaign Development",
      "Product Marketing",
      "Go-to-Market Strategy",
      "Website Strategy",
      "Growth Strategy",
      "Demand Generation",
    ],
  },
  {
    category: "Paid, Search & Lifecycle",
    items: [
      "Paid Media (Google Ads, Meta)",
      "SEO & SEM",
      "Email Marketing & Automation",
      "CRM / Lifecycle Marketing",
      "Programmatic & Affiliate",
      "Lead Generation",
    ],
  },
  {
    category: "Content & Creative",
    items: [
      "Content Development",
      "Copywriting",
      "Social Media Strategy",
      "Graphic Design (Adobe Suite, Canva)",
      "Video & Aerial Content",
    ],
  },
  {
    category: "Data & Operations",
    items: [
      "Campaign Reporting & Analytics",
      "KPI Tracking",
      "P&L / Forecasting",
      "Cross-Functional Project Leadership",
      "Vendor Management",
    ],
  },
];

export const softSkills: SkillGroup[] = [
  {
    category: "Communication & Collaboration",
    items: [
      "Stakeholder Management",
      "Cross-Functional Team Leadership",
      "Presentation & Storytelling",
      "Client Relationship Management",
    ],
  },
  {
    category: "Thinking & Execution",
    items: [
      "Strategic Thinking",
      "Problem-Solving",
      "Adaptability",
      "Business Judgment",
      "Ownership & Accountability",
    ],
  },
];

export const tools: string[] = [
  "Google Ads",
  "Meta Business Manager",
  "LinkedIn Campaign Manager",
  "SEMrush",
  "Google Analytics",
  "HubSpot",
  "Salesforce",
  "MS Dynamics",
  "Constant Contact",
  "WordPress",
  "Adobe Creative Suite",
  "Canva",
  "JIRA",
  "Trello",
  "Asana",
  "Wrike",
  "QuickBooks",
  "Microsoft Office",
];

export interface Interest {
  title: string;
  body: string;
}

export const interests: Interest[] = [
  {
    title: "Brand Storytelling",
    body: "Every brand is really a story about a promise. I'm drawn to the work of finding the one true thing a product does for someone and building everything else around it. Good positioning isn't decoration, it's clarity people can feel.",
  },
  {
    title: "Design & Craft",
    body: "I came up doing the making, not just the directing. Shooting, designing, and editing my own work in Adobe and Canva gave me respect for the craft, and it still shapes how I brief, review, and ship.",
  },
  {
    title: "Entrepreneurship",
    body: "Running my own business changed how I think about marketing. When you own the whole thing, you learn fast that a campaign is only as good as the sale, the operation, and the customer it serves.",
  },
  // TODO: confirm with Fitzgerald — inferred from his background, not yet approved.
  {
    title: "Visual Content",
    body: "From drone footage on rooftops to brand photography in the shop, I love turning the real, physical world into content that makes people stop and look.",
  },
  // TODO: confirm with Fitzgerald — inferred from his background, not yet approved.
  {
    title: "Learning & Growth",
    body: "I stay curious across channels, tools, and industries. Every new category is a chance to learn a different audience and stretch how I work.",
  },
  // TODO: confirm with Fitzgerald — placeholder, needs to be made personal.
  {
    title: "Community & Impact",
    body: "The work I care about most connects with people and leaves something better behind.",
  },
];

export const closingTagline = "Building brands, shaping campaigns, driving growth.";
