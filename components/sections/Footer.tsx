import { BuiltByNerodyn } from "@/components/ui/built-by-nerodyn";
import { DiracLogoMark } from "@/components/ui/dirac-logo";
import { SIGNUP_URL } from "@/lib/urls";

const footerLinks = [
  { href: "mailto:peter@dirac.app", label: "peter@dirac.app" },
  { href: "/#why", label: "Why" },
  { href: "/#faq", label: "FAQ" },
  { href: "/pricing", label: "Pricing" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "https://twitter.com", label: "X / Twitter", external: true },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5 mb-4">
              <DiracLogoMark size="sm" />
              <span className="font-serif text-base font-medium text-ink">Dirac</span>
            </div>
            <p className="text-sm text-muted leading-relaxed">
              The email agent built around decisions, not busywork.
            </p>
            <p className="text-xs text-muted/80 mt-6">
              © {year} Dirac. All rights reserved.
            </p>
          </div>

          <div className="flex flex-col gap-6 md:items-end md:text-right">
            <a
              href={SIGNUP_URL}
              className="text-sm font-medium text-ink hover:text-muted transition-colors duration-200 w-fit"
            >
              Get started →
            </a>
            <nav
              className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2 md:justify-end"
              aria-label="Footer"
            >
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  {...("external" in link && link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="text-sm text-muted hover:text-ink transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="flex flex-wrap items-center gap-4">
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
                className="h-6 w-auto"
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
                className="h-6 w-auto"
              />
            </a>
          </div>
          <BuiltByNerodyn />
        </div>
      </div>
    </footer>
  );
}
