import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { Solutions } from "@/components/sections/Solutions";
import { Product } from "@/components/sections/Product";
import { SocialProof } from "@/components/sections/SocialProof";
import { WhyUs } from "@/components/sections/WhyUs";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";
import { ActDivider } from "@/components/ui/act-divider";
import { GlowDivider } from "@/components/ui/glow-divider";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="overflow-x-hidden">
        <Hero />
        <GlowDivider />

        <div className="bg-black">
          <Solutions />
          <ActDivider />
          <Product />
          <ActDivider />
          <SocialProof />
          <ActDivider />
          <WhyUs />
          <ActDivider />
          <FinalCTA />
          <ActDivider />
          <FAQ />
        </div>
      </main>
      <Footer />
    </>
  );
}
