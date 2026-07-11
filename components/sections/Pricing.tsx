import { Check, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Pinstripe } from "@/components/ui/pinstripe";
import { SectionLabel } from "@/components/ui/section-label";
import { SiteContainer } from "@/components/ui/site-container";
import { SIGNUP_URL } from "@/lib/urls";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Monthly",
    description: "Full Dirac Pro — brief, drafts, triage, and voice learning.",
    price: "$20",
    period: "/month",
    trial: "7-day trial (no credit card required)",
    featured: false,
    features: [
      { label: "Morning brief", included: true },
      { label: "AI drafts in your voice", included: true },
      { label: "Priority triage", included: true },
      { label: "Gmail & Outlook", included: true },
      { label: "Annual savings", included: false },
    ],
  },
  {
    name: "Annual",
    description: "Everything in Monthly, billed yearly — save $40.",
    price: "$200",
    period: "/year",
    trial: "7-day trial (no credit card required)",
    featured: true,
    badge: "Best value",
    features: [
      { label: "Morning brief", included: true },
      { label: "AI drafts in your voice", included: true },
      { label: "Priority triage", included: true },
      { label: "Gmail & Outlook", included: true },
      { label: "Annual savings ($40)", included: true },
    ],
  },
] as const;

export function Pricing() {
  return (
    <>
      <Pinstripe />
      <section id="pricing" className="bg-white py-20 md:py-28">
        <SiteContainer>
          <SectionLabel>Pricing</SectionLabel>
          <h2 className="mt-4 max-w-2xl font-serif text-3xl font-medium leading-[1.12] tracking-tight text-ink md:text-5xl">
            One plan. Two ways to pay.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
            Same brief and workspace on every plan. Cancel anytime.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={cn(
                  "relative flex flex-col rounded-2xl border bg-white p-7 md:p-8",
                  plan.featured
                    ? "border-transparent shadow-[0_0_0_2px_#111]"
                    : "border-border",
                )}
              >
                {plan.featured && "badge" in plan ? (
                  <span className="absolute right-6 top-6 rounded-full bg-ink px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                    {plan.badge}
                  </span>
                ) : null}

                <h3 className="text-xl font-semibold text-ink">{plan.name}</h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
                  {plan.description}
                </p>

                <p className="mt-6 font-serif text-4xl font-medium tracking-tight text-ink">
                  {plan.price}
                  <span className="text-lg font-sans font-normal text-muted">
                    {plan.period}
                  </span>
                </p>
                <p className="mt-2 text-xs text-muted">{plan.trial}</p>

                <Button
                  href={SIGNUP_URL}
                  variant={plan.featured ? "primary" : "secondary"}
                  className="mt-6 w-full normal-case tracking-normal"
                >
                  Start trial
                </Button>

                <div className="mt-8">
                  <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
                    Included
                  </p>
                  <ul className="mt-4 space-y-3">
                    {plan.features.map((feature) => (
                      <li
                        key={feature.label}
                        className="flex items-center gap-2.5 text-sm text-ink"
                      >
                        {feature.included ? (
                          <Check className="h-4 w-4 text-good" aria-hidden />
                        ) : (
                          <X className="h-4 w-4 text-bad" aria-hidden />
                        )}
                        <span
                          className={cn(!feature.included && "text-muted")}
                        >
                          {feature.label}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </SiteContainer>
      </section>
    </>
  );
}
