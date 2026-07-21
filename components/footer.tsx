import Link from "next/link";
import { Container } from "@/components/container";

export function Footer() {
  return (
    <footer className="border-t border-white/8">
      <Container className="flex flex-wrap items-center justify-between gap-4 py-6">
        <span className="text-xs font-semibold text-white/30">
          Fitzgerald Timothe &copy; {new Date().getFullYear()}
        </span>
        <nav className="flex gap-5">
          {/* TODO: replace # with real links */}
          <a
            href="#"
            className="text-xs font-medium uppercase tracking-[0.04em] text-white/30 transition-colors hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href={`${process.env.NEXT_PUBLIC_BASE_PATH}/resume.pdf`}
            className="text-xs font-medium uppercase tracking-[0.04em] text-white/30 transition-colors hover:text-accent"
          >
            Resume
          </a>
          <Link
            href="/contact"
            className="text-xs font-medium uppercase tracking-[0.04em] text-white/30 transition-colors hover:text-accent"
          >
            Contact
          </Link>
        </nav>
      </Container>
    </footer>
  );
}
