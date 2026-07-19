import { SiteContainer } from "@/components/ui/site-container";
import { SIGNUP_URL } from "@/lib/urls";

const columns = [
  {
    title: "Support",
    links: [
      { href: "/terms", label: "Terms of Service" },
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/#faq", label: "FAQ" },
    ],
  },
  {
    title: "Product",
    links: [
      { href: "/#product", label: "Features" },
      { href: "/#how", label: "How it works" },
      { href: "/#pricing", label: "Pricing" },
      { href: "/pricing", label: "Compare plans" },
    ],
  },
  {
    title: "Contact",
    links: [
      { href: "mailto:peter@dirac.app", label: "peter@dirac.app" },
      { href: SIGNUP_URL, label: "Join waitlist" },
    ],
  },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-white">
      <SiteContainer className="py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div className="max-w-sm">
            <span className="inline-flex rounded-full border border-border px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-ink">
              Dirac
            </span>
            <p className="mt-5 font-serif text-2xl font-medium leading-snug tracking-tight text-ink md:text-3xl">
              Your AI email agent, built for founders who live in their inbox.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
                  {column.title}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.href + link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-ink/75 transition-colors hover:text-ink"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Dirac. All rights reserved.</p>
          <p>Built for decisions, not busywork.</p>
        </div>
      </SiteContainer>
    </footer>
  );
}
