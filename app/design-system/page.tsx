import { ArrowRight } from "lucide-react";

import { AttentionBadge } from "@/components/ui/attention-badge";
import { Button } from "@/components/ui/button";

function VariantRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-8">
      <p className="w-36 shrink-0 text-sm text-muted">{label}</p>
      <div className="flex flex-wrap items-center gap-3">{children}</div>
    </div>
  );
}

export default function DesignSystemPage() {
  return (
    <main className="min-h-screen bg-canvas px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-serif text-3xl text-ink mb-2">Button variants</h1>
        <p className="text-muted mb-12">
          Coral is reserved for the primary action and needs-you markers.
        </p>

        <section className="panel-card p-8 space-y-8">
          <VariantRow label="Primary">
            <Button href="#" size="sm">
              Get Started
            </Button>
            <Button href="#" size="md">
              Get Started
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
            <Button href="#" size="lg">
              Get Started
            </Button>
          </VariantRow>

          <VariantRow label="Secondary">
            <Button href="#" variant="secondary" size="sm">
              See the product
            </Button>
            <Button href="#" variant="secondary" size="md">
              See the product
            </Button>
          </VariantRow>

          <VariantRow label="Ghost">
            <Button href="#" variant="ghost">
              Learn more
            </Button>
          </VariantRow>

          <VariantRow label="Link">
            <Button href="#" variant="link">
              or see a demo
            </Button>
          </VariantRow>

          <VariantRow label="Needs you">
            <AttentionBadge>Needs you</AttentionBadge>
            <AttentionBadge>Needs reply</AttentionBadge>
          </VariantRow>
        </section>
      </div>
    </main>
  );
}
