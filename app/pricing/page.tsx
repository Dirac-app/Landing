import type { Metadata } from "next";
import { PricingContent } from "@/components/pricing/pricing-content";

export const metadata: Metadata = {
  title: "dirac - your intelligent email",
  description:
    "Dirac Pro — AI-native email for founders. $20/month or $200/year. 7-day free trial.",
};

export default function PricingPage() {
  return <PricingContent />;
}
