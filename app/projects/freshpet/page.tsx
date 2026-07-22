import type { Metadata } from "next";
import { FreshpetCase } from "./FreshpetCase";

export const metadata: Metadata = {
  title: "Freshpet Case Study | Fitzgerald Timothe",
  description:
    "Audience development and brand work for Freshpet: a blind taste-test video with 13M+ views and an award-winning packaging rebrand.",
};

export default function FreshpetPage() {
  return <FreshpetCase />;
}
