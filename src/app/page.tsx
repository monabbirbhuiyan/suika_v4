import FeatureSection from "@/components/landing/feature-section";
import HeroSection from "@/components/landing/hero-section";
import { UseCasesSection } from "@/components/landing/use-cases-section";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="min-h-screen">
        {/* Navbar */}
        <main suppressHydrationWarning>
          <HeroSection />
          <FeatureSection />
          <UseCasesSection />
        </main>
      </div>
    </>
  );
}
