import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { Scenario } from "@/components/sections/Scenario";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Comparison } from "@/components/sections/Comparison";
import { FounderNote } from "@/components/sections/FounderNote";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";
import { GlowDivider } from "@/components/ui/glow-divider";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <GlowDivider />
        <div className="bg-black">
          <Scenario />
          <Features />
          <HowItWorks />
          <Comparison />
          <FounderNote />
          <FinalCTA />
        </div>
      </main>
      <Footer />
    </>
  );
}
