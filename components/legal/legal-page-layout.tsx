import { PageFrame } from "@/components/ui/page-frame";
import { BuiltByNerodyn } from "@/components/ui/built-by-nerodyn";
import { SiteHeader } from "@/components/ui/site-header";

type LegalPageLayoutProps = {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
};

export function LegalPageLayout({ title, lastUpdated, children }: LegalPageLayoutProps) {
  return (
    <PageFrame className="min-h-screen text-ink">
      <SiteHeader />

      <main className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <header className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-ink mb-4 leading-[1.1]">
            {title}
          </h1>
          <p className="text-sm text-muted">Last updated: {lastUpdated}</p>
        </header>

        <div className="legal-prose">{children}</div>

        <div className="mt-16 pt-8 border-t border-border flex justify-center">
          <BuiltByNerodyn />
        </div>
      </main>
    </PageFrame>
  );
}
