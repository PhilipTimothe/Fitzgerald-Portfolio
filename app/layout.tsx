import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/lenis-provider";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-hanken",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fitzgerald Timothe | Brand Strategy & Marketing Leader",
  description:
    "Senior brand strategy and marketing leader. I build brand strategy that borders on clarity, creativity, and conversion across CPG, healthcare, entertainment, and agency work.",
  openGraph: {
    title: "Fitzgerald Timothe | Brand Strategy & Marketing Leader",
    description:
      "Senior brand strategy and marketing leader across CPG, healthcare, entertainment, and agency work.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={hanken.variable}>
      <body className="bg-ink font-sans text-paper antialiased">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
