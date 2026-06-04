import type { Metadata } from "next";
import { TermsContent } from "@/components/legal/terms-content";

export const metadata: Metadata = {
  title: "dirac - your intelligent email",
  description: "Terms of Service for Dirac, the AI-native email client by Nerodyn.",
};

export default function TermsPage() {
  return <TermsContent />;
}
