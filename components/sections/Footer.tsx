import { BuiltByNerodyn } from "@/components/ui/built-by-nerodyn";
import { PRICING_PATH } from "@/lib/urls";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-[1fr_auto] gap-10 items-start">
          {/* Left */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-md border border-white/10 bg-white/4 flex items-center justify-center text-[10px] text-white/20 font-mono">
                D
              </div>
              <span
                className="text-sm font-semibold text-white/60"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                Dirac
              </span>
            </div>
            <p className="text-xs text-white/25 max-w-[240px] leading-relaxed">
              Chief of staff for your inbox. AI-native email that handles the work before you
              start the day.
            </p>
            <p className="text-xs text-white/18 mt-2">
              © {year} Dirac. All rights reserved.
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-3 items-start md:items-end">
            <a
              href={PRICING_PATH}
              className="inline-flex h-9 items-center justify-center rounded-full btn-accent px-5 text-xs font-semibold text-black transition-all duration-200 hover:opacity-90 active:scale-[0.98] mb-1"
            >
              Get Started
            </a>
            <div className="flex flex-col md:items-end gap-2.5">
              <a
                href="mailto:peter@dirac.app"
                className="text-xs text-white/30 hover:text-white/60 transition-colors duration-200"
              >
                peter@dirac.app
              </a>
              <a
                href="#why"
                className="text-xs text-white/30 hover:text-white/60 transition-colors duration-200"
              >
                Why
              </a>
              <a
                href="/pricing"
                className="text-xs text-white/30 hover:text-white/60 transition-colors duration-200"
              >
                Pricing
              </a>
              <a
                href="/privacy"
                className="text-xs text-white/30 hover:text-white/60 transition-colors duration-200"
              >
                Privacy
              </a>
              <a
                href="/terms"
                className="text-xs text-white/30 hover:text-white/60 transition-colors duration-200"
              >
                Terms
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-white/30 hover:text-white/60 transition-colors duration-200"
              >
                X / Twitter
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-white/5 flex justify-center">
          <BuiltByNerodyn />
        </div>
      </div>
    </footer>
  );
}
