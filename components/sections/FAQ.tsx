import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { FaqAccordion, type FaqItem } from "@/components/ui/faq-accordion";

const faqItems: FaqItem[] = [
  {
    question: "How does Dirac store my data?",
    answer:
      "Dirac processes your email to provide summaries, priorities, and drafts. Your data is stored securely and used only to power the service — we do not sell your email content. See our Privacy Policy for full details.",
  },
  {
    question: "Is Dirac secure?",
    answer:
      "Yes. Dirac connects via OAuth — we never store your email password. Access is read-only for inbox processing, and all data is encrypted in transit and at rest.",
  },
  {
    question: "What email providers does Dirac support?",
    answer: "Dirac works with Gmail and Microsoft Outlook. Connect either account in one OAuth flow during signup.",
  },
  {
    question: "How do payment plans work?",
    answer:
      "Dirac Pro is $20/month or $200/year (save $40 annually). Both plans include a 7-day free trial. You can switch between monthly and annual billing anytime.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. Cancel from your account settings at any time. Your access continues through the end of your current billing period.",
  },
  {
    question: "Does Dirac send emails without my approval?",
    answer:
      "No. Dirac prepares drafts and suggested actions, but nothing sends until you review and tap send or apply. You stay in control of every outbound message.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Most users are up and running in under 10 minutes. Connect your inbox, let Dirac learn your voice from sent mail, and your first morning brief arrives the next day.",
  },
  {
    question: "How does Dirac learn my voice?",
    answer:
      "Dirac reads your sent mail to build a private model of your writing style, tone, and vocabulary. This model is used only to draft replies that sound like you — not a generic AI template.",
  },
  {
    question: "What happens during the free trial?",
    answer:
      "You get full access to Dirac Pro for 7 days — morning briefs, AI drafts, triage, and unified inbox.",
  },
  {
    question: "Who is Dirac for?",
    answer:
      "Dirac is built for founders, operators, and anyone whose inbox runs their business — deals, investors, customers, and team. If missing an email has real cost, Dirac is for you.",
  },
];

const titleFont = { fontFamily: "var(--font-space-grotesk)" };

export function FAQ() {
  return (
    <section className="py-24 md:py-36" id="faq">
      <div className="max-w-3xl mx-auto px-6">
        <SectionEyebrow className="mb-6">FAQ</SectionEyebrow>

        <h2
          className="text-3xl md:text-4xl font-semibold text-white leading-tight tracking-tight mb-10 md:mb-12"
          style={titleFont}
        >
          Common questions
        </h2>

        <FaqAccordion items={faqItems} />
      </div>
    </section>
  );
}
