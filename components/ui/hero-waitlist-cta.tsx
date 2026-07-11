"use client";

import { ArrowRight, Check, Loader2 } from "lucide-react";
import { useState, type KeyboardEvent } from "react";

import { cn } from "@/lib/utils";

type Answers = {
  role: string;
  frustration: string;
  email_types: string;
  heard_from: string;
};

const EMPTY_ANSWERS: Answers = {
  role: "",
  frustration: "",
  email_types: "",
  heard_from: "",
};

const QUESTIONS: {
  key: keyof Answers;
  label: string;
  options: string[];
}[] = [
  {
    key: "role",
    label: "What best describes you?",
    options: ["Founder / CEO", "Operator / COO", "Investor", "Sales / BD", "Other"],
  },
  {
    key: "frustration",
    label: "What's your biggest email frustration?",
    options: [
      "Too much to triage every day",
      "Writing replies takes too long",
      "Missing things that matter",
      "Slow follow-through on threads",
    ],
  },
  {
    key: "email_types",
    label: "What fills your inbox most?",
    options: [
      "Deals, investors, fundraising",
      "Customers and sales",
      "Team / internal ops",
      "A mix of everything",
    ],
  },
  {
    key: "heard_from",
    label: "How did you hear about Dirac?",
    options: [
      "Instagram",
      "X / Twitter",
      "Reddit",
      "Friend or colleague",
      "Google search",
      "Product Hunt",
      "LinkedIn",
      "Other",
    ],
  },
];

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function HeroWaitlistCta() {
  const [phase, setPhase] = useState<"email" | "survey" | "done">("email");
  const [email, setEmail] = useState("");
  const [surveyStep, setSurveyStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({ ...EMPTY_ANSWERS });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const currentQuestion = QUESTIONS[surveyStep];
  const isLastQuestion = surveyStep === QUESTIONS.length - 1;
  const selectedValue = currentQuestion ? answers[currentQuestion.key] : "";

  function handleEmailKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") startSurvey();
  }

  function startSurvey() {
    if (!isValidEmail(email.trim())) {
      setErrorMsg("Enter a valid email address.");
      return;
    }
    setErrorMsg("");
    setPhase("survey");
    setSurveyStep(0);
  }

  function selectOption(key: keyof Answers, value: string) {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  }

  async function advanceOrSubmit() {
    if (!currentQuestion || !selectedValue) return;

    if (!isLastQuestion) {
      setSurveyStep((step) => step + 1);
      return;
    }

    setSubmitting(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
          role: answers.role,
          frustration: answers.frustration,
          email_types: answers.email_types,
          heard_from: answers.heard_from,
        }),
      });

      const data = (await res.json()) as {
        error?: string;
        confirmationEmailSent?: boolean;
      };

      if (res.ok) {
        setEmailSent(Boolean(data.confirmationEmailSent));
        setPhase("done");
        return;
      }

      if (res.status === 409) {
        setErrorMsg("That email is already on the waitlist.");
        return;
      }

      setErrorMsg(data.error || "Something went wrong. Please try again.");
    } catch {
      setErrorMsg("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (phase === "done") {
    return (
      <div className="waitlist-cta w-full max-w-md" id="waitlist">
        <div className="flex items-center gap-3 rounded-2xl border border-border/80 bg-white/95 px-5 py-4 shadow-[0_2px_12px_rgba(31,27,24,0.06)] backdrop-blur-sm">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-soft">
            <Check className="h-4 w-4 text-accent" aria-hidden />
          </span>
          <div className="text-left">
            <p className="text-sm font-medium text-ink">You&apos;re on the list.</p>
            <p className="text-sm text-muted">
              {emailSent
                ? `Check your inbox — a note is on its way to ${email.trim()}.`
                : "We'll be in touch soon."}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="waitlist-cta w-full max-w-md" id="waitlist">
      <div
        className={cn(
          "flex items-center gap-1 rounded-full border border-border/70 bg-white/90 p-1 pl-5 shadow-[0_2px_16px_rgba(31,27,24,0.07)] backdrop-blur-sm transition-shadow duration-300 focus-within:border-border focus-within:shadow-[0_4px_24px_rgba(31,27,24,0.1)]",
          phase === "survey" && "opacity-80",
        )}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (errorMsg) setErrorMsg("");
          }}
          onKeyDown={handleEmailKeyDown}
          placeholder="your@email.com"
          autoComplete="email"
          disabled={phase === "survey"}
          className="h-11 min-w-0 flex-1 bg-transparent text-sm text-ink outline-none placeholder:text-muted/55 disabled:cursor-default"
        />
        <button
          type="button"
          onClick={startSurvey}
          disabled={phase === "survey"}
          className="inline-flex h-11 shrink-0 items-center gap-1.5 rounded-full bg-[linear-gradient(180deg,var(--color-accent)_0%,#ee8a66_100%)] px-5 text-sm font-semibold text-white shadow-[0_2px_12px_rgba(232,113,76,0.28)] transition-all duration-200 hover:bg-accent-hover hover:bg-none disabled:opacity-60"
        >
          Join
          <ArrowRight className="h-4 w-4" aria-hidden />
        </button>
      </div>

      {errorMsg && phase === "email" ? (
        <p className="mt-2.5 text-left text-sm text-red-600/80">{errorMsg}</p>
      ) : (
        <p className="mt-3 text-sm text-muted">Join the waitlist — early access rolling out soon.</p>
      )}

      {phase === "survey" && currentQuestion ? (
        <div className="waitlist-survey-card mt-5 rounded-2xl border border-border/80 bg-white/95 p-6 text-left shadow-[0_8px_32px_rgba(31,27,24,0.08)] backdrop-blur-sm md:p-7">
          <div className="mb-6 flex items-center gap-2">
            <div className="flex gap-1.5">
              {QUESTIONS.map((_, index) => (
                <span
                  key={index}
                  className={cn(
                    "h-0.5 rounded-full transition-all duration-300",
                    index < surveyStep
                      ? "w-5 bg-ink/25"
                      : index === surveyStep
                        ? "w-6 bg-ink"
                        : "w-3 bg-border",
                  )}
                />
              ))}
            </div>
            <span className="text-xs text-muted">
              {surveyStep + 1} / {QUESTIONS.length}
            </span>
          </div>

          <p className="font-serif text-xl font-medium leading-snug text-ink md:text-[1.35rem]">
            {currentQuestion.label}
          </p>

          <div className="mt-5 flex flex-wrap gap-2.5">
            {currentQuestion.options.map((option) => {
              const selected = selectedValue === option;
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => selectOption(currentQuestion.key, option)}
                  className={cn(
                    "rounded-xl border px-4 py-2.5 text-left text-sm transition-all duration-150",
                    selected
                      ? "border-ink/15 bg-accent-soft/60 font-medium text-ink"
                      : "border-border bg-white text-muted hover:border-border hover:text-ink",
                  )}
                >
                  {option}
                </button>
              );
            })}
          </div>

          {errorMsg && (
            <p className="mt-4 text-sm text-red-600/80">{errorMsg}</p>
          )}

          <div className="mt-7 flex items-center gap-3">
            <button
              type="button"
              onClick={advanceOrSubmit}
              disabled={!selectedValue || submitting}
              className="inline-flex h-10 items-center gap-1.5 rounded-xl bg-[linear-gradient(180deg,var(--color-accent)_0%,#ee8a66_100%)] px-5 text-sm font-semibold text-white shadow-[0_2px_12px_rgba(232,113,76,0.28)] transition-all duration-200 hover:bg-accent-hover hover:bg-none disabled:pointer-events-none disabled:opacity-40"
            >
              {submitting ? (
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
              ) : isLastQuestion ? (
                <>
                  Join waitlist
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </>
              ) : (
                <>
                  Next
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </>
              )}
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
