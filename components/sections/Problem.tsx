import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { HighlightText } from "@/components/ui/highlight-text";
import { SiteContainer } from "@/components/ui/site-container";
import { SIGNUP_URL } from "@/lib/urls";

export function Problem() {
  return (
    <section aria-label="The problem" className="bg-white pt-24 pb-20 md:pt-32 md:pb-28">
      <SiteContainer className="max-w-3xl">
        <h2 className="font-serif text-3xl font-medium leading-[1.12] tracking-tight text-ink md:text-5xl">
          Inbox zero? Still drowning?
        </h2>

        <div className="mt-8 space-y-5 text-base leading-relaxed text-muted md:text-lg">
          <p>
            You cleared the queue. Then the next wave arrived. Labels, filters,
            and keyboard shortcuts help you move faster — they don&apos;t tell
            you what actually needs a decision.
          </p>
          <p>
            Founders don&apos;t need another client. They need an agent that
            reads overnight, prioritizes by consequence, and shows up with
            drafts ready.{" "}
            <HighlightText>That is why Dirac exists.</HighlightText>
          </p>
        </div>

        <div className="mt-10">
          <Button href={SIGNUP_URL}>
            Get started
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
          </Button>
        </div>
      </SiteContainer>
    </section>
  );
}
