"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

import { BuiltByNerodyn } from "@/components/ui/built-by-nerodyn";
import { SIGNUP_URL } from "@/lib/urls";

const FEATURES = [
  "Morning Brief — daily summaries and priorities before you open your inbox",
  "AI drafts — replies written in your voice, ready to send",
  "Unified inbox — Gmail and Outlook in one place",
] as const;

export function PricingContent() {
  const [annual, setAnnual] = useState(false);

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
        <div className="mb-12">
          <h1
            className="text-4xl md:text-5xl font-semibold tracking-tight mb-4"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Pricing
          </h1>
          <p className="text-white/50 text-lg leading-relaxed max-w-lg">
            One plan. Everything you need to run your inbox with AI.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-8">
            <div>
              <p className="text-sm font-medium text-accent-light mb-1">Dirac Pro</p>
              <p className="text-white/45 text-sm">For founders and operators</p>
            </div>

            <div
              className="inline-flex items-center rounded-full border border-white/10 bg-white/4 p-1 self-start"
              role="group"
              aria-label="Billing period"
            >
              <button
                type="button"
                onClick={() => setAnnual(false)}
                className="rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200"
                style={{
                  background: !annual ? "rgba(255,255,255,0.12)" : "transparent",
                  color: !annual ? "#ffffff" : "rgba(255,255,255,0.45)",
                }}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setAnnual(true)}
                className="rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200"
                style={{
                  background: annual ? "rgba(255,255,255,0.12)" : "transparent",
                  color: annual ? "#ffffff" : "rgba(255,255,255,0.45)",
                }}
              >
                Annual
              </button>
            </div>
          </div>

          <div className="mb-2 flex items-baseline gap-2">
            <span
              className="text-5xl font-semibold tracking-tight"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              ${annual ? 200 : 20}
            </span>
            <span className="text-white/40 text-lg">/ {annual ? "year" : "month"}</span>
          </div>
          {annual && (
            <p className="text-sm text-white/35 mb-8">Save $40 vs paying monthly</p>
          )}
          {!annual && <div className="mb-8" />}

          <p className="text-sm text-white/50 mb-8">
            14-day free trial · No credit card required
          </p>

          <a
            href={SIGNUP_URL}
            className="inline-flex w-full sm:w-auto h-12 items-center justify-center gap-2 rounded-xl btn-accent px-8 text-sm font-semibold text-black transition-all duration-200 hover:opacity-90 active:scale-[0.98] mb-10"
          >
            Start Free Trial
            <ArrowRight className="h-4 w-4" />
          </a>

          <div className="border-t border-white/8 pt-8">
            <p className="text-xs font-medium uppercase tracking-wider text-white/35 mb-5">
              What&apos;s included
            </p>
            <ul className="flex flex-col gap-4">
              {FEATURES.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-white/60">
                  <Check className="h-4 w-4 text-accent-light shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <BuiltByNerodyn />
        </div>
      </main>
    </div>
  );
}
