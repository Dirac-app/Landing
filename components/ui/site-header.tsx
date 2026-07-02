import Link from "next/link";

import { DiracLogoMark } from "@/components/ui/dirac-logo";

type SiteHeaderProps = {
  backHref?: string;
  backLabel?: string;
};

export function SiteHeader({
  backHref = "/",
  backLabel = "Back to home",
}: SiteHeaderProps) {
  return (
    <header className="border-b border-border bg-white/95">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Dirac home">
          <DiracLogoMark size="sm" />
          <span className="font-serif text-[17px] font-medium tracking-tight text-ink">
            Dirac
          </span>
        </Link>
        <Link
          href={backHref}
          className="text-sm text-muted hover:text-ink transition-colors duration-200"
        >
          {backLabel}
        </Link>
      </div>
    </header>
  );
}
