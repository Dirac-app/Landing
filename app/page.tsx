import { PageFrame } from "@/components/ui/page-frame";
import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Features } from "@/components/sections/Features";
import { Compare } from "@/components/sections/Compare";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <PageFrame>
        <Nav />
        <main className="overflow-x-clip">
          <Hero />
          <Problem />
          <HowItWorks />
          <Features />
          <Compare />
          <Pricing />
          <FAQ />
          <FinalCTA />
        </main>
      </PageFrame>
      <Footer />
    </>
  );
}
