import type { Metadata } from "next";
import { PrivacyContent } from "@/components/legal/privacy-content";

export const metadata: Metadata = {
  title: "dirac - your intelligent email",
  description: "Privacy Policy for Dirac, the AI-native email client by Nerodyn.",
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
