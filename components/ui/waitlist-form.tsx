"use client";

import { useState, KeyboardEvent } from "react";
import { ArrowRight, ArrowLeft, Loader2, Check } from "lucide-react";

type Answers = {
  role: string;
  inbox_role: string;
  frustration: string;
  email_types: string;
  cost_of_miss: string;
  messaging_apps: string;
};

const EMPTY: Answers = {
  role: "",
  inbox_role: "",
  frustration: "",
  email_types: "",
  cost_of_miss: "",
  messaging_apps: "",
};

type Question = {
  key: keyof Answers;
  label: string;
  options: string[];
};

const QUESTIONS: Question[] = [
  {
    key: "role",
    label: "What best describes you?",
    options: ["Founder / CEO", "Operator / COO", "Investor", "Sales / BD", "Other"],
  },
  {
    key: "inbox_role",
    label: "How central is email to your work?",
    options: [
      "It runs my business",
      "Very important, hard to keep up",
      "Manageable but noisy",
      "Mostly internal / low stakes",
    ],
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
    key: "cost_of_miss",
    label: "What's the real cost when you miss an email?",
    options: [
      "Lost deals or revenue",
      "Damaged relationships",
      "Slipped deadlines",
      "Usually not much",
    ],
  },
  {
    key: "messaging_apps",
    label: "What else do you use for work comms?",
    options: ["Slack", "WhatsApp", "Telegram", "Mostly email only"],
  },
];

const TOTAL_STEPS = QUESTIONS.length + 1; // email + questions

export function WaitlistForm() {
  const [step, setStep] = useState<number>(0); // 0 = email, 1..n = questions, n+1 = done
  const [email, setEmail] = useState("");
  const [answers, setAnswers] = useState<Answers>({ ...EMPTY });
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const currentQuestion = step >= 1 && step <= QUESTIONS.length ? QUESTIONS[step - 1] : null;
  const isLastQuestion = step === QUESTIONS.length;

  function handleEmailKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") advanceFromEmail();
  }

  function advanceFromEmail() {
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMsg("Enter a valid email address.");
      return;
    }
    setErrorMsg("");
    setStep(1);
  }

  function selectOption(key: keyof Answers, value: string) {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  }

  async function advanceOrSubmit() {
    if (!currentQuestion) return;
    if (!answers[currentQuestion.key]) return; // must select something

    if (isLastQuestion) {
      await submit();
    } else {
      setStep((s) => s + 1);
    }
  }

  async function submit() {
    setSubmitStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, ...answers }),
      });
      const data = await res.json();
      if (res.ok) {
        setStep(TOTAL_STEPS); // done
      } else if (res.status === 409) {
        setSubmitStatus("error");
        setErrorMsg("That email is already on the waitlist.");
      } else {
        setSubmitStatus("error");
        setErrorMsg(data.error || "Something went wrong. Try again.");
      }
    } catch {
      setSubmitStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
    if (submitStatus !== "idle") setSubmitStatus("idle");
  }

  // Done state
  if (step === TOTAL_STEPS) {
    return (
      <div className="flex flex-col gap-4 max-w-[440px]">
        <div className="flex items-center gap-3 rounded-xl accent-border-subtle bg-accent/8 px-5 py-4" style={{ ["--accent-fill" as string]: "rgba(249, 115, 22, 0.08)" }}>
          <div className="flex items-center justify-center w-5 h-5 rounded-full bg-accent/20 shrink-0">
            <Check className="h-3 w-3 text-accent-light" />
          </div>
          <span className="text-accent-light text-sm font-medium">
            You&apos;re on the list. We&apos;ll be in touch.
          </span>
        </div>
      </div>
    );
  }

  // Email step
  if (step === 0) {
    return (
      <div className="flex flex-col gap-3 max-w-[440px]" id="waitlist">
        <div className="flex flex-col sm:flex-row gap-3">
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
            className="flex-1 h-12 rounded-xl border border-white/10 bg-white/4 px-4 text-sm text-white placeholder:text-white/25 outline-none focus:border-white/20 focus:bg-white/6 transition-all duration-200"
          />
          <a
            href="/pricing"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl btn-accent px-6 text-sm font-semibold text-black transition-all duration-200 hover:opacity-90 active:scale-[0.98] whitespace-nowrap"
          >
            Get Started
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        {errorMsg && <p className="text-sm text-red-400/80 pl-1">{errorMsg}</p>}
        <a
          href="#demo"
          className="inline-flex items-center gap-1.5 text-sm text-white/30 hover:text-white/55 transition-colors duration-200 pl-1 mt-1 w-fit"
        >
          or see a demo
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    );
  }

  // MCQ steps
  if (!currentQuestion) return null;

  const selectedValue = answers[currentQuestion.key];
  const canAdvance = !!selectedValue;

  return (
    <div className="flex flex-col gap-6 max-w-[500px]" id="waitlist">
      {/* Progress */}
      <div className="flex items-center gap-2">
        <div className="flex gap-1.5">
          {QUESTIONS.map((_, i) => (
            <div
              key={i}
              className="h-0.5 rounded-full transition-all duration-300"
              style={{
                width: i < step - 1 ? 20 : i === step - 1 ? 20 : 12,
                background:
                  i < step - 1
                    ? "var(--accent-progress-done)"
                    : i === step - 1
                    ? "var(--color-accent)"
                    : "rgba(255,255,255,0.12)",
              }}
            />
          ))}
        </div>
        <span className="text-xs text-white/25 ml-1">
          {step} / {QUESTIONS.length}
        </span>
      </div>

      {/* Question */}
      <div>
        <p
          className="text-lg font-semibold text-white leading-snug mb-5"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          {currentQuestion.label}
        </p>

        <div className="flex flex-wrap gap-2.5">
          {currentQuestion.options.map((opt) => {
            const selected = selectedValue === opt;
            return (
              <button
                key={opt}
                onClick={() => selectOption(currentQuestion.key, opt)}
                className="rounded-xl border px-4 py-2.5 text-sm transition-all duration-150 text-left"
                style={{
                  borderColor: selected ? "#ffffff" : "rgba(255,255,255,0.10)",
                  background: selected ? "#ffffff" : "rgba(255,255,255,0.03)",
                  color: selected ? "#000000" : "rgba(255,255,255,0.60)",
                  fontWeight: selected ? 600 : 400,
                }}
              >
                {opt}
              </button>
            );
          })}
        </div>
      </div>

      {/* Nav */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => setStep((s) => s - 1)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 text-white/40 hover:text-white/70 hover:border-white/20 transition-all duration-150"
          aria-label="Go back"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>

        <button
          onClick={advanceOrSubmit}
          disabled={!canAdvance || submitStatus === "loading"}
          className="inline-flex h-9 items-center gap-2 rounded-xl btn-accent px-5 text-sm font-semibold text-black transition-all duration-150 hover:opacity-90 active:scale-[0.98] disabled:opacity-30"
        >
          {submitStatus === "loading" ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : isLastQuestion ? (
            <>
              Join the Waitlist
              <ArrowRight className="h-4 w-4" />
            </>
          ) : (
            <>
              Next
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>

        {submitStatus === "error" && (
          <p className="text-xs text-red-400/80">{errorMsg}</p>
        )}
      </div>
    </div>
  );
}
