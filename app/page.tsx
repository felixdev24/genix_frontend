import Image from "next/image";
import {Header} from "./components/header";
import { Hero } from "./components/hero";
import { SolutionsOverview } from "./components/sections/solution-overview";
import { WhyChooseUs } from "./components/sections/whychooseus";
import { PricingSection } from "./components/sections/pricing";
import { ContactSection } from "./components/sections/contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F0F14] text-white">
      <Header activePage="home" />
      <Hero />
      <SolutionsOverview />
      <WhyChooseUs />
      <PricingSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
  