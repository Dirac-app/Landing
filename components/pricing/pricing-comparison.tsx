"use client";

import { useState } from "react";

import { DiracPricingCard } from "@/components/pricing/dirac-pricing-card";
import { DemeritList } from "@/components/pricing/pricing-lists";
import { cn } from "@/lib/utils";

const ASSISTANT_DEMERITS = [
  "Not available at 11pm when deals close",
  "Limited to 9–5 weekdays",
  "Requires ongoing management and context handoffs",
  "2–4 weeks to onboard and train",
  "PTO, sick days, and turnover risk",
  "Salary, benefits, and equity overhead",
] as const;

const SUPERHUMAN_DEMERITS = [
  "You still write every reply yourself",
  "No overnight processing or morning brief",
  "No AI drafts calibrated to your voice",
  "Keyboard shortcuts — steep learning curve",
  "Faster UI, not faster outcomes",
  "Per-seat pricing adds up across your team",
] as const;

function BillingToggle({
  annual,
  onChange,
}: {
  annual: boolean;
  onChange: (annual: boolean) => void;
}) {
  return (
    <div
      className="inline-flex items-center rounded-full border border-border bg-panel p-1 shadow-[0_1px_2px_rgba(31,27,24,0.04)]"
      role="group"
      aria-label="Billing period"
    >
      <button
        type="button"
        onClick={() => onChange(false)}
        className={cn(
          "rounded-full px-5 py-2 text-sm font-medium transition-all duration-200",
          !annual
            ? "bg-panel text-ink shadow-[0_1px_2px_rgba(31,27,24,0.06)] ring-1 ring-border"
            : "bg-transparent text-muted hover:text-ink",
        )}
      >
        Monthly
      </button>
      <button
        type="button"
        onClick={() => onChange(true)}
        className={cn(
          "rounded-full px-5 py-2 text-sm font-medium transition-all duration-200",
          annual
            ? "bg-panel text-ink shadow-[0_1px_2px_rgba(31,27,24,0.06)] ring-1 ring-border"
            : "bg-transparent text-muted hover:text-ink",
        )}
      >
        Annual
      </button>
    </div>
  );
}

type PricingComparisonProps = {
  showHeader?: boolean;
  className?: string;
};

export function PricingComparison({ showHeader = true, className = "" }: PricingComparisonProps) {
  const [annual, setAnnual] = useState(false);

  return (
    <div className={`overflow-x-hidden ${className}`}>
      {showHeader && (
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <BillingToggle annual={annual} onChange={setAnnual} />
          <h2 className="font-serif mt-8 text-3xl md:text-4xl font-medium tracking-tight text-ink">
            Compare your options
          </h2>
        </div>
      )}

      {!showHeader && (
        <div className="flex justify-center mb-10">
          <BillingToggle annual={annual} onChange={setAnnual} />
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6 items-stretch min-w-0 w-full overflow-hidden">
        <div className="order-2 lg:order-1 flex flex-col panel-card p-7 md:p-8 opacity-70 min-w-0">
          <div className="mb-6">
            <h3 className="font-serif text-xl font-medium text-muted mb-1">
              Full-Time Assistant
            </h3>
            <p className="text-sm text-muted">Traditional hire for admin support</p>
          </div>

          <div className="mb-6 pb-6 border-b border-border">
            <div className="flex items-baseline gap-1.5">
              <span className="font-serif text-4xl font-medium text-muted tracking-tight">
                $3,000+
              </span>
            </div>
            <p className="text-sm text-muted mt-1">per month</p>
          </div>

          <div className="flex-1">
            <DemeritList items={ASSISTANT_DEMERITS} />
          </div>

          <button
            type="button"
            disabled
            className="mt-8 w-full h-11 rounded-xl border border-border text-sm font-medium text-muted cursor-default"
          >
            Not Practical
          </button>
        </div>

        <DiracPricingCard annual={annual} />

        <div className="order-3 flex flex-col panel-card p-7 md:p-8 opacity-70 min-w-0">
          <div className="mb-6">
            <h3 className="font-serif text-xl font-medium text-muted mb-1">
              Superhuman
            </h3>
            <p className="text-sm text-muted">Premium email client for power users</p>
          </div>

          <div className="mb-6 pb-6 border-b border-border">
            <div className="flex items-baseline gap-1.5">
              <span className="font-serif text-4xl font-medium text-muted tracking-tight">
                $25
              </span>
            </div>
            <p className="text-sm text-muted mt-1">/ user / month</p>
            <p className="text-xs text-muted/80 mt-1">billed $360 / year</p>
          </div>

          <div className="flex-1">
            <DemeritList items={SUPERHUMAN_DEMERITS} />
          </div>

          <button
            type="button"
            disabled
            className="mt-8 w-full h-11 rounded-xl border border-border text-sm font-medium text-muted cursor-default"
          >
            Still Manual
          </button>
        </div>
      </div>
    </div>
  );
}
