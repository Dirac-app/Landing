import { PageFrame } from "@/components/ui/page-frame";
import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { Solutions } from "@/components/sections/Solutions";
import { Product } from "@/components/sections/Product";
import { SocialProof } from "@/components/sections/SocialProof";
import { WhyUs } from "@/components/sections/WhyUs";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <PageFrame>
        <Nav />
        <main className="overflow-x-hidden">
          <Hero />
          <Solutions />
          <Product />
          <SocialProof />
          <WhyUs />
          <FinalCTA />
          <FAQ />
        </main>
      </PageFrame>
      <Footer />
    </>
  );
}
