"use client";

import { useEffect, useRef, useState } from "react";

import { Pinstripe } from "@/components/ui/pinstripe";
import { SectionLabel } from "@/components/ui/section-label";
import { SiteContainer } from "@/components/ui/site-container";
import { cn } from "@/lib/utils";

type FeatureCard = {
  name: string;
  role: string;
  does: React.ReactNode[];
  hobby: string;
  iconTone: string;
};

const STAGES = ["Morning brief", "Voice drafts", "Priority triage"] as const;

/** Scroll distance (vh) allotted per stage. Lower = transitions trigger sooner. */
const STAGE_VH = 65;

const core: FeatureCard = {
  name: "Dirac",
  role: "Your AI email agent",
  does: [
    "Reads your inbox overnight",
    "Ranks what needs a decision",
    "Drafts replies in your voice",
    "Never sends without your approval",
  ],
  hobby: "Shows up before your first meeting — not during it.",
  iconTone: "bg-violet-100 text-violet-800",
};

const featuresByStage: Record<(typeof STAGES)[number], FeatureCard[]> = {
  "Morning brief": [
    {
      name: "Priorities",
      role: "What needs you today",
      does: [
        "A short list of decisions, not a dump",
        <>
          Flags{" "}
          <span className="inline-flex items-center rounded-full bg-orange-100 px-2 py-0.5 text-xs font-medium text-orange-800">
            deals & investors
          </span>
        </>,
        <>
          Parks{" "}
          <span className="inline-flex items-center rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600">
            newsletters & noise
          </span>
        </>,
      ],
      hobby: "Believes not every ping deserves a reply.",
      iconTone: "bg-rose-100 text-rose-800",
    },
    {
      name: "Summaries",
      role: "Overnight inbox report",
      does: [
        "What arrived while you slept",
        "Open loops and who is waiting",
        "Action items ready to clear",
      ],
      hobby: "Hates making you re-read a 40-message thread.",
      iconTone: "bg-sky-100 text-sky-800",
    },
  ],
  "Voice drafts": [
    {
      name: "Voice",
      role: "Writes like you, not a bot",
      does: [
        "Learns tone from your sent mail",
        "Ready-to-send replies you can edit",
        "Private to your account — not public models",
      ],
      hobby: "Trims “Just circling back” into something human.",
      iconTone: "bg-amber-100 text-amber-900",
    },
    {
      name: "Follow-ups",
      role: "Closes loops you’d forget",
      does: [
        "Nudges for stalled threads",
        "Next steps on open deals",
        "Commitments stay visible",
      ],
      hobby: "Hates leaving people on read.",
      iconTone: "bg-emerald-100 text-emerald-800",
    },
  ],
  "Priority triage": [
    {
      name: "Rank",
      role: "Consequence over recency",
      does: [
        "Deals, customers, and blockers rise",
        <>
          Tags{" "}
          <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
            needs you
          </span>
        </>,
        "Low-stakes mail waits its turn",
      ],
      hobby: "Quietly ignores “quick question” that isn’t.",
      iconTone: "bg-orange-100 text-orange-800",
    },
    {
      name: "Context",
      role: "Keeps the thread story intact",
      does: [
        "Prior replies in one view",
        "Notes open commitments",
        "Highlights who is waiting on you",
      ],
      hobby: "Remembers the email you meant to send Friday.",
      iconTone: "bg-indigo-100 text-indigo-800",
    },
  ],
};

function Card({ card }: { card: FeatureCard }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-border bg-white p-5">
      <div className="flex items-start gap-3">
        <div
          className={cn(
            "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-sm font-semibold",
            card.iconTone,
          )}
        >
          {card.name[0]}
        </div>
        <div className="min-w-0">
          <h3 className="text-sm font-semibold text-ink">{card.name}</h3>
          <p className="text-xs text-muted">{card.role}</p>
        </div>
      </div>

      <div className="mt-4 flex-1">
        <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-muted">
          What does it do?
        </p>
        <ul className="mt-2.5 space-y-2">
          {card.does.map((item, i) => (
            <li key={i} className="flex gap-2 text-xs leading-snug text-ink/80 md:text-sm">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ink/40" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 border-t border-border pt-3">
        <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-muted">
          In practice
        </p>
        <p className="mt-1.5 text-xs text-muted md:text-sm">{card.hobby}</p>
      </div>
    </article>
  );
}

function stageOpacity(index: number, stageProgress: number) {
  return Math.max(0, 1 - Math.abs(stageProgress - index));
}

function stageTransform(index: number, stageProgress: number) {
  const opacity = stageOpacity(index, stageProgress);
  const direction = index - stageProgress;
  const offset = direction * 14 * (1 - opacity);
  return `translate3d(0, ${offset}px, 0)`;
}

export function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(0);
  const targetProgressRef = useRef(0);
  const [stageProgress, setStageProgress] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    let rafLoop = 0;

    const readTarget = () => {
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      if (total <= 0) {
        targetProgressRef.current = 0;
        return;
      }
      const progress = Math.min(Math.max(-rect.top / total, 0), 1);
      targetProgressRef.current = progress * STAGES.length;
    };

    const tick = () => {
      const target = targetProgressRef.current;
      const current = progressRef.current;
      const delta = target - current;

      if (Math.abs(delta) < 0.001) {
        progressRef.current = target;
        setStageProgress(target);
        rafLoop = 0;
        return;
      }

      const next = current + delta * 0.14;
      progressRef.current = next;
      setStageProgress(next);
      rafLoop = requestAnimationFrame(tick);
    };

    const startTick = () => {
      if (!rafLoop) rafLoop = requestAnimationFrame(tick);
    };

    const onScroll = () => {
      readTarget();
      startTick();
    };

    readTarget();
    setStageProgress(targetProgressRef.current);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafLoop) cancelAnimationFrame(rafLoop);
    };
  }, []);

  const activeIndex = Math.min(
    STAGES.length - 1,
    Math.max(0, Math.round(stageProgress)),
  );

  const goToStage = (index: number) => {
    const el = sectionRef.current;
    if (!el) return;
    const total = el.offsetHeight - window.innerHeight;
    if (total <= 0) return;
    const targetY = el.offsetTop + (index / STAGES.length) * total + 4;
    window.scrollTo({ top: targetY, behavior: "smooth" });
  };

  return (
    <>
      <Pinstripe />
      <section
        ref={sectionRef}
        id="product"
        className="relative bg-white"
        style={{ height: `${STAGES.length * STAGE_VH}vh` }}
      >
        <div className="sticky top-0 flex h-screen flex-col overflow-hidden pt-24 pb-8 md:pt-28">
          <SiteContainer className="flex h-full flex-col">
            <SectionLabel>Features</SectionLabel>
            <h2 className="mt-3 max-w-2xl font-serif text-2xl font-medium leading-[1.15] tracking-tight text-ink md:text-4xl">
              One agent. Every inbox job that matters.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted md:text-base">
              Brief, drafts, and triage share the same context — so the story
              stays consistent from overnight read to send.
            </p>

            <div className="mt-8 flex flex-col gap-4 border-b border-border pb-4 md:flex-row md:items-end md:justify-between">
              <p className="max-w-sm text-sm leading-relaxed text-muted">
                Dirac is the core — each lane to the right is a job it runs on
                your inbox, not a separate tool to manage.
              </p>

              <div className="flex gap-6">
                {STAGES.map((stage, i) => (
                  <button
                    key={stage}
                    type="button"
                    onClick={() => goToStage(i)}
                    className={cn(
                      "pb-1 text-sm font-medium transition-[color,border-color] duration-300 ease-out",
                      i === activeIndex
                        ? "border-b-2 border-ink text-ink"
                        : "border-b-2 border-transparent text-muted hover:text-ink",
                    )}
                  >
                    {stage}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-1 flex-col items-stretch gap-4 lg:flex-row lg:items-stretch">
              <div className="lg:w-[min(100%,17rem)] lg:shrink-0">
                <Card card={core} />
              </div>

              <div className="flex items-center justify-center py-1 lg:px-2" aria-hidden>
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-sm font-medium text-muted">
                  +
                </span>
              </div>

              <div className="relative min-w-0 flex-1">
                <div
                  className="grid gap-4 sm:grid-cols-2 invisible pointer-events-none"
                  aria-hidden
                >
                  {featuresByStage[STAGES[activeIndex]].map((card) => (
                    <Card key={`sizer-${card.name}`} card={card} />
                  ))}
                </div>

                {STAGES.map((stage, i) => {
                  const opacity = stageOpacity(i, stageProgress);
                  const visible = opacity > 0.02;

                  return (
                    <div
                      key={stage}
                      aria-hidden={opacity < 0.5}
                      className={cn(
                        "features-stage-layer grid gap-4 sm:grid-cols-2",
                        visible ? "absolute inset-0" : "pointer-events-none absolute inset-0",
                      )}
                      style={{
                        opacity,
                        transform: stageTransform(i, stageProgress),
                        pointerEvents: opacity > 0.6 ? "auto" : "none",
                        zIndex: opacity > 0.5 ? 2 : 1,
                      }}
                    >
                      {featuresByStage[stage].map((card) => (
                        <Card key={card.name} card={card} />
                      ))}
                    </div>
                  );
                })}
              </div>
            </div>
          </SiteContainer>
        </div>
      </section>
    </>
  );
}
