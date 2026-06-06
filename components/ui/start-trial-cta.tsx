import { ArrowRight } from "lucide-react";
import { SIGNUP_URL } from "@/lib/urls";

type StartTrialCtaProps = {
  id?: string;
};

export function StartTrialCta({ id }: StartTrialCtaProps) {
  return (
    <div className="flex flex-col gap-3 max-w-[440px]" id={id}>
      <a
        href={SIGNUP_URL}
        className="inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-xl btn-accent px-8 text-sm font-semibold text-black transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
      >
        Get Started
        <ArrowRight className="h-4 w-4" />
      </a>
      <p className="text-sm text-white/30 pl-1">
        14-day free trial · No credit card required
      </p>
    </div>
  );
}
