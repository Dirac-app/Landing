import {
  Bot,
  Clock,
  Inbox,
  Lock,
  Mail,
  ShieldCheck,
  Sparkles,
  Sunrise,
  type LucideIcon,
} from "lucide-react";

export type BodyPart = string | { highlight: string };

export type WhyUsSlide = {
  title: string;
  body: BodyPart[];
  icon: LucideIcon;
};

export const whyUsSlides: WhyUsSlide[] = [
  {
    title: "Not a faster inbox",
    body: [
      "Dirac handles it ",
      { highlight: "overnight" },
      ". You start as a ",
      { highlight: "decision-maker" },
      ", not an operator.",
    ],
    icon: Inbox,
  },
  {
    title: "AI that does the work",
    body: [
      "Superhuman makes you faster at triage. Dirac ",
      { highlight: "triages overnight" },
      " for you. You review and send — ",
      { highlight: "from scratch" },
      ".",
    ],
    icon: Sparkles,
  },
  {
    title: "Always on, fraction of the cost",
    body: [
      "Dirac runs ",
      { highlight: "24/7" },
      " for ",
      { highlight: "$20/month" },
      " and learns your voice in one click.",
    ],
    icon: Clock,
  },
  {
    title: "Your voice, your approval",
    body: [
      "Nothing sends without ",
      { highlight: "your tap" },
      ". Dirac drafts in your tone from your sent mail — private to you, ",
      { highlight: "no autopilot" },
      ".",
    ],
    icon: ShieldCheck,
  },
  {
    title: "Morning brief",
    body: [
      "Open ",
      { highlight: "one summary" },
      " — what matters, what's handled, what needs ",
      { highlight: "yes or no" },
      ". No scrolling through threads to figure out your day.",
    ],
    icon: Sunrise,
  },
  {
    title: "Works where you already are",
    body: [
      "Connect Gmail ",
      { highlight: "in minutes" },
      ". No new inbox to learn — Dirac sits behind the ",
      { highlight: "email you use" },
      ".",
    ],
    icon: Mail,
  },
  {
    title: "Learns how you write",
    body: [
      "Dirac reads your sent mail to match ",
      { highlight: "your tone" },
      ". Drafts ",
      { highlight: "sound like you" },
      ", not a generic assistant.",
    ],
    icon: Bot,
  },
  {
    title: "Private by default",
    body: [
      "Your mail ",
      { highlight: "stays yours" },
      ". We don't sell data or train public models on your inbox — nothing sends without ",
      { highlight: "your approval" },
      ".",
    ],
    icon: Lock,
  },
];
