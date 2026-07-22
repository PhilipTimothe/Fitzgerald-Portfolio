import type { Metadata } from "next";
import { WesternDentalCase } from "./WesternDentalCase";

export const metadata: Metadata = {
  title: "Western Dental Case Study | Fitzgerald Timothe",
  description:
    "Multi-channel marketing for a large dental network: social, bilingual email, content, and hyper-localized SEO built to make a big chain feel like the corner practice.",
};

export default function WesternDentalPage() {
  return <WesternDentalCase />;
}
