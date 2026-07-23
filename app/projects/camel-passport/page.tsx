import type { Metadata } from "next";
import { CamelCase } from "./CamelCase";

export const metadata: Metadata = {
  title: "Camel Case Study | Fitzgerald Timothe",
  description:
    "Brand strategy and copywriting for Passport Brand Design: a three-phase Camel Crush rebrand and instructional launch copy for Camel X, a carbon-core cigarette.",
};

export default function CamelPage() {
  return <CamelCase />;
}
