import type { Metadata } from "next";
import {
  Fraunces,
  Geist,
  Geist_Mono,
  Inter,
  JetBrains_Mono,
  Space_Grotesk,
} from "next/font/google";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["SOFT", "WONK"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dirac — the email agent built around decisions",
  description:
    "Dirac reads your inbox overnight, surfaces what needs you, and drafts replies in your voice — so mornings start with decisions, not triage.",
  icons: {
    icon: "/dirac-logo.png",
    apple: "/dirac-logo.png",
  },
  openGraph: {
    title: "Dirac — the email agent built around decisions",
    description:
      "Wake up to a morning brief with priorities, summaries, and ready-to-send replies — written in your voice.",
    siteName: "Dirac",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-white text-ink antialiased overflow-x-hidden">
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
