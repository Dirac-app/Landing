import { FaqAccordion, type FaqItem } from "@/components/ui/faq-accordion";
import { Pinstripe } from "@/components/ui/pinstripe";
import { SiteContainer } from "@/components/ui/site-container";

const faqItems: FaqItem[] = [
  {
    question: "Does Dirac send emails without my approval?",
    answer:
      "No. Dirac prepares drafts and suggested actions, but nothing sends until you review and tap send or apply. You stay in control of every outbound message.",
  },
  {
    question: "How does Dirac store my data?",
    answer:
      "Dirac processes your email to provide summaries, priorities, and drafts. Your data is stored securely and used only to power the service — we do not sell your email content. See our Privacy Policy for full details.",
  },
  {
    question: "Is my data used to train public models?",
    answer:
      "No. Your inbox and voice model stay private to your account. We do not use your mail to train public foundation models.",
  },
  {
    question: "What email providers does Dirac support?",
    answer:
      "Dirac works with Gmail and Microsoft Outlook. Connect either account in one OAuth flow during signup.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Most users are up and running in under 10 minutes. Connect your inbox, let Dirac learn your voice from sent mail, and your first morning brief arrives the next day.",
  },
  {
    question: "How do payment plans work?",
    answer:
      "Dirac Pro is $20/month or $200/year (save $40 annually). Both include a 7-day free trial. You can switch between monthly and annual billing anytime.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. Cancel from your account settings at any time. Your access continues through the end of your current billing period.",
  },
] as const;

export function FAQ() {
  return (
    <>
      <Pinstripe />
      <section id="faq" className="bg-white py-20 md:py-28">
        <SiteContainer className="max-w-3xl">
          <h2 className="font-serif text-3xl font-medium leading-[1.12] tracking-tight text-ink md:text-5xl">
            Answers, plain and simple.
          </h2>
          <p className="mt-4 text-base text-muted">
            The things founders ask before they turn on Dirac.
          </p>

          <div className="mt-10">
            <FaqAccordion items={[...faqItems]} />
          </div>
        </SiteContainer>
      </section>
    </>
  );
}
