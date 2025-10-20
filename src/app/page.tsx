'use client';
import { BenefitsSection } from "@/components/sections/benefits-Section";
import { ClosingCta } from "@/components/sections/closing-cta";
import { FeatureSection } from "@/components/sections/featuresSection";
import { FirstCta } from "@/components/sections/first-cta";
import { HeroSection } from "@/components/sections/hero-section";
import { TestimonySection } from "@/components/sections/testimonySection";

export default function Home() {
  return (
   <>
    <HeroSection /> 
    <BenefitsSection/>
    <FirstCta/>
    <FeatureSection/>
    <TestimonySection/>
    <ClosingCta/>
   </>
  );
}
