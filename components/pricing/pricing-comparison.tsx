"use client";

import { useState } from "react";

import { DiracPricingCard } from "@/components/pricing/dirac-pricing-card";
import { DemeritList } from "@/components/pricing/pricing-lists";

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
      className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] p-1"
      role="group"
      aria-label="Billing period"
    >
      <button
        type="button"
        onClick={() => onChange(false)}
        className="rounded-full px-5 py-2 text-sm font-medium transition-all duration-200"
        style={{
          background: !annual ? "var(--color-accent)" : "transparent",
          color: !annual ? "#000000" : "rgba(255,255,255,0.45)",
        }}
      >
        Monthly
      </button>
      <button
        type="button"
        onClick={() => onChange(true)}
        className="rounded-full px-5 py-2 text-sm font-medium transition-all duration-200"
        style={{
          background: annual ? "var(--color-accent)" : "transparent",
          color: annual ? "#000000" : "rgba(255,255,255,0.45)",
        }}
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
    <div className={className}>
      {showHeader && (
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <BillingToggle annual={annual} onChange={setAnnual} />
          <h2
            className="mt-8 text-3xl md:text-4xl font-semibold tracking-tight text-accent"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Compare your options
          </h2>
        </div>
      )}

      {!showHeader && (
        <div className="flex justify-center mb-10">
          <BillingToggle annual={annual} onChange={setAnnual} />
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6 items-stretch">
        <div className="order-2 lg:order-1 flex flex-col rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 md:p-7 opacity-70 min-h-[480px]">
          <div className="mb-6">
            <h3
              className="text-xl font-semibold text-white/50 mb-1"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Full-Time Assistant
            </h3>
            <p className="text-sm text-white/30">Traditional hire for admin support</p>
          </div>

          <div className="mb-6 pb-6 border-b border-white/[0.06]">
            <div className="flex items-baseline gap-1.5">
              <span
                className="text-4xl font-semibold text-white/40 tracking-tight"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                $3,000+
              </span>
            </div>
            <p className="text-sm text-white/25 mt-1">per month</p>
          </div>

          <div className="flex-1">
            <DemeritList items={ASSISTANT_DEMERITS} />
          </div>

          <button
            type="button"
            disabled
            className="mt-8 w-full h-11 rounded-xl border border-white/10 text-sm font-medium text-white/25 cursor-default"
          >
            Not Practical
          </button>
        </div>

        <DiracPricingCard annual={annual} />

        <div className="order-3 flex flex-col rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 md:p-7 opacity-70 min-h-[480px]">
          <div className="mb-6">
            <h3
              className="text-xl font-semibold text-white/50 mb-1"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Superhuman
            </h3>
            <p className="text-sm text-white/30">Premium email client for power users</p>
          </div>

          <div className="mb-6 pb-6 border-b border-white/[0.06]">
            <div className="flex items-baseline gap-1.5">
              <span
                className="text-4xl font-semibold text-white/40 tracking-tight"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                $25
              </span>
            </div>
            <p className="text-sm text-white/25 mt-1">/ user / month</p>
            <p className="text-xs text-white/20 mt-1">billed $360 / year</p>
          </div>

          <div className="flex-1">
            <DemeritList items={SUPERHUMAN_DEMERITS} />
          </div>

          <button
            type="button"
            disabled
            className="mt-8 w-full h-11 rounded-xl border border-white/10 text-sm font-medium text-white/25 cursor-default"
          >
            Still Manual
          </button>
        </div>
      </div>
    </div>
  );
}
