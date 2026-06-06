"use client";

import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

import { SIGNUP_URL } from "@/lib/urls";
import { BenefitList } from "@/components/pricing/pricing-lists";

const DIRAC_BENEFITS = [
  "Works 24/7 — your inbox handled before you wake up",
  "Never write another email from scratch",
  "Inbox triaged and prioritized automatically",
  "Start saving time in under 10 minutes",
  "Drafts in your voice, not generic AI templates",
  "Morning brief with summaries and ready-to-send replies",
] as const;

type DiracPricingCardProps = {
  annual: boolean;
};

export function DiracPricingCard({ annual }: DiracPricingCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0, translateX: 0, translateY: 0 });

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 5;
    const rotateX = ((centerY - y) / centerY) * 5;
    const translateX = ((x - centerX) / centerX) * 8;
    const translateY = ((y - centerY) / centerY) * 8;

    setTransform({ rotateX, rotateY, translateX, translateY });
  }

  function handleMouseLeave() {
    setHovered(false);
    setTransform({ rotateX: 0, rotateY: 0, translateX: 0, translateY: 0 });
  }

  return (
    <div
      className="order-1 lg:order-2 relative z-10 lg:-my-5"
      style={{ perspective: "1200px" }}
    >
      <div
        ref={cardRef}
        onMouseEnter={() => setHovered(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="h-full will-change-transform"
        style={{
          transform: `rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) translate3d(${transform.translateX}px, ${transform.translateY}px, 0)`,
          transition: hovered ? "transform 0.12s ease-out" : "transform 0.45s ease-out",
        }}
      >
        <div
          className="rounded-2xl p-[1px] h-full transition-opacity duration-300"
          style={{
            opacity: hovered ? 1 : 0.65,
            background:
              "linear-gradient(160deg, rgba(249, 115, 22, 0.42) 0%, rgba(251, 146, 60, 0.22) 100%)",
            boxShadow: hovered
              ? "0 0 40px rgba(249, 115, 22, 0.18)"
              : "0 0 24px rgba(249, 115, 22, 0.08)",
          }}
        >
          <div
            className="flex flex-col rounded-2xl p-6 md:p-8 lg:py-10 h-full min-h-[520px] lg:min-h-[580px]"
            style={{ background: "#0F0E0C" }}
          >
            <div className="mb-6">
              <h2
                className="text-2xl font-semibold text-accent mb-1"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                Dirac
              </h2>
              <p className="text-sm text-white/55">Get 10+ hours back every week</p>
            </div>

            <div className="mb-6 pb-6 border-b border-white/[0.08]">
              <div className="flex items-baseline gap-2">
                <span
                  className="text-5xl font-semibold tracking-tight"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  ${annual ? 200 : 20}
                </span>
                <span className="text-white/45 text-base">
                  {annual ? "per year" : "per month"}
                </span>
              </div>
              {annual && (
                <p className="text-sm text-accent-light/80 mt-2">Save $40 vs monthly billing</p>
              )}
              <p className="text-sm text-white/40 mt-2">
                14-day free trial · No credit card required
              </p>
            </div>

            <div className="flex-1">
              <BenefitList items={DIRAC_BENEFITS} />
            </div>

            <a
              href={SIGNUP_URL}
              className="mt-8 inline-flex w-full h-12 items-center justify-center gap-2 rounded-xl btn-accent text-sm font-semibold text-black transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
            >
              Start Free Trial
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
