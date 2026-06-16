import { ArrowRight } from "lucide-react";
import { SIGNUP_URL } from "@/lib/urls";

type StartTrialCtaProps = {
  id?: string;
};

export function StartTrialCta({ id }: StartTrialCtaProps) {
  return (
    <div className="flex flex-col gap-3 max-w-[440px]" id={id}>
      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href={SIGNUP_URL}
          className="inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-xl btn-primary px-8 text-sm font-semibold"
        >
          Get Started
          <ArrowRight className="h-4 w-4" />
        </a>
        <a
          href="/#product"
          className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-xl px-8 text-sm font-semibold text-white/60 hover:text-white transition-colors duration-200"
        >
          See the product
        </a>
      </div>
      <p className="text-sm text-white/30 pl-1">7-day free trial</p>
    </div>
  );
}
