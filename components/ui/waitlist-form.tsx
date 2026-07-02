"use client";

import { ArrowRight, ArrowLeft, Loader2, Check } from "lucide-react";
import { useState, KeyboardEvent } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SIGNUP_URL } from "@/lib/urls";

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

const TOTAL_STEPS = QUESTIONS.length + 1;

export function WaitlistForm() {
  const [step, setStep] = useState<number>(0);
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
    if (!answers[currentQuestion.key]) return;

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
        setStep(TOTAL_STEPS);
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

  if (step === TOTAL_STEPS) {
    return (
      <div className="flex flex-col gap-4 max-w-[440px]">
        <div className="panel-card flex items-center gap-3 px-5 py-4">
          <div className="flex items-center justify-center w-5 h-5 rounded-full bg-canvas shrink-0">
            <Check className="h-3 w-3 text-ink" />
          </div>
          <span className="text-sm font-medium text-ink">
            You&apos;re on the list. We&apos;ll be in touch.
          </span>
        </div>
      </div>
    );
  }

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
            className="flex-1 h-12 rounded-xl border border-border bg-panel px-4 text-sm text-ink placeholder:text-muted/60 outline-none focus:ring-1 focus:ring-border transition-all duration-200"
          />
          <Button href={SIGNUP_URL} size="md" className="whitespace-nowrap">
            Get Started
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Button>
        </div>
        {errorMsg && <p className="text-sm text-red-600/80 pl-1">{errorMsg}</p>}
        <Button href="#demo" variant="link" className="pl-1 mt-1 w-fit">
          or see a demo
          <ArrowRight className="h-3.5 w-3.5" aria-hidden />
        </Button>
      </div>
    );
  }

  if (!currentQuestion) return null;

  const selectedValue = answers[currentQuestion.key];
  const canAdvance = !!selectedValue;

  return (
    <div className="flex flex-col gap-6 max-w-[500px] panel-card p-6 md:p-7" id="waitlist">
      <div className="flex items-center gap-2">
        <div className="flex gap-1.5">
          {QUESTIONS.map((_, i) => (
            <div
              key={i}
              className={cn(
                "h-0.5 rounded-full transition-all duration-300",
                i < step - 1 ? "w-5 bg-ink/30" : i === step - 1 ? "w-5 bg-ink" : "w-3 bg-border",
              )}
            />
          ))}
        </div>
        <span className="text-xs text-muted ml-1">
          {step} / {QUESTIONS.length}
        </span>
      </div>

      <div>
        <p className="font-serif text-lg font-medium text-ink leading-snug mb-5">
          {currentQuestion.label}
        </p>

        <div className="flex flex-wrap gap-2.5">
          {currentQuestion.options.map((opt) => {
            const selected = selectedValue === opt;
            return (
              <button
                key={opt}
                type="button"
                onClick={() => selectOption(currentQuestion.key, opt)}
                className={cn(
                  "rounded-xl border px-4 py-2.5 text-sm transition-all duration-150 text-left",
                  selected
                    ? "border-ink/20 bg-canvas text-ink font-medium"
                    : "border-border bg-panel text-muted hover:text-ink",
                )}
              >
                {opt}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button
          variant="secondary"
          size="sm"
          onClick={() => setStep((s) => s - 1)}
          className="w-9 px-0"
          aria-label="Go back"
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>

        <Button
          onClick={advanceOrSubmit}
          disabled={!canAdvance || submitStatus === "loading"}
          size="sm"
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
        </Button>

        {submitStatus === "error" && (
          <p className="text-xs text-red-600/80">{errorMsg}</p>
        )}
      </div>
    </div>
  );
}
