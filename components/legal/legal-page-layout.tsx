import { BuiltByNerodyn } from "@/components/ui/built-by-nerodyn";

type LegalPageLayoutProps = {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
};

export function LegalPageLayout({ title, lastUpdated, children }: LegalPageLayoutProps) {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-white/5">
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5 group">
            <div
              className="w-7 h-7 rounded-lg border border-white/15 bg-white/5 flex items-center justify-center text-xs text-white/30 font-mono"
              aria-hidden
            >
              D
            </div>
            <span
              className="text-[17px] font-semibold tracking-tight"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Dirac
            </span>
          </a>
          <a
            href="/"
            className="text-sm text-white/50 hover:text-white/90 transition-colors duration-200"
          >
            Back to home
          </a>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <header className="mb-12">
          <h1
            className="text-4xl md:text-5xl font-semibold tracking-tight mb-4"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            {title}
          </h1>
          <p className="text-sm text-white/35">Last updated: {lastUpdated}</p>
        </header>

        <div className="legal-prose">{children}</div>

        <div className="mt-16 flex justify-center">
          <BuiltByNerodyn />
        </div>
      </main>
    </div>
  );
}
