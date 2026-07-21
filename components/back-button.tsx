import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/container";

export function BackButton() {
  return (
    <Container className="pt-6 md:pt-8">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-xs font-medium text-white/50 transition-colors hover:text-accent"
      >
        <ArrowLeft size={14} />
        Back to work
      </Link>
    </Container>
  );
}
