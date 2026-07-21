import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Fitzgerald's cinematic identity
        ink: "#0a0a0a",        // near-black page base
        paper: "#f0f0f0",      // primary foreground
        accent: "#00e5a0",     // electric green
        cyan: "#00c8ff",       // cool cyan
        amber: "#ffb547",      // warm amber, used sparingly
      },
      fontFamily: {
        sans: ["var(--font-hanken)", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.03em",
      },
    },
  },
  plugins: [],
};
export default config;
