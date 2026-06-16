import { BuiltByNerodyn } from "@/components/ui/built-by-nerodyn";
import { DiracLogoMark } from "@/components/ui/dirac-logo";
import { SIGNUP_URL } from "@/lib/urls";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-[1fr_auto] gap-10 items-start">
          {/* Left */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <DiracLogoMark size="sm" />
              <span
                className="text-sm font-semibold text-white/60"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                Dirac
              </span>
            </div>
            <p className="text-xs text-white/25 max-w-[240px] leading-relaxed">
              The email agent built around decisions, not busywork.
            </p>
            <p className="text-xs text-white/18 mt-2">
              © {year} Dirac. All rights reserved.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <a
                href="https://twelve.tools"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-badge"
              >
                <img
                  src="https://twelve.tools/badge1-dark.svg"
                  alt="Featured on Twelve Tools"
                  width={200}
                  height={54}
                  className="h-7 w-auto"
                />
              </a>
              <a
                href="https://www.producthunt.com/products/dirac-3?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-dirac-4"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-badge"
              >
                <img
                  src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1167329&theme=dark&t=1781598802634"
                  alt="Dirac - The AI inbox that briefs founders every morning | Product Hunt"
                  width={250}
                  height={54}
                  className="h-7 w-auto"
                />
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-3 items-start md:items-end">
            <a
              href={SIGNUP_URL}
              className="inline-flex h-9 items-center justify-center rounded-full btn-primary px-5 text-xs font-semibold mb-1"
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
                href="#faq"
                className="text-xs text-white/30 hover:text-white/60 transition-colors duration-200"
              >
                FAQ
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
