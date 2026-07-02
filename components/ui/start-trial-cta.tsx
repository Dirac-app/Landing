import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SIGNUP_URL } from "@/lib/urls";

type StartTrialCtaProps = {
  id?: string;
  centered?: boolean;
};

export function StartTrialCta({ id, centered = false }: StartTrialCtaProps) {
  return (
    <div
      className={`flex flex-col gap-3 max-w-[440px] ${centered ? "items-center mx-auto" : ""}`}
      id={id}
    >
      <div
        className={`flex flex-col sm:flex-row gap-3 ${centered ? "sm:justify-center" : ""}`}
      >
        <Button href={SIGNUP_URL} size="md" className="w-full sm:w-auto">
          Get Started
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Button>
        <Button
          href="/#product"
          variant="secondary"
          size="md"
          className="w-full sm:w-auto"
        >
          See the product
        </Button>
      </div>
      <p className={`text-sm text-muted ${centered ? "" : "pl-1"}`}>
        7-day free trial
      </p>
    </div>
  );
}
