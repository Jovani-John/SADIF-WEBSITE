'use client';

import AchievementsSection from "@/components/AchievementsSection";
import BrandsSlider from "@/components/BrandsSlider";
import HeroAboutSection from "@/components/HeroAboutSection";
import StatsSection from "@/components/StatsSection";
import StorySection from "@/components/StorySection";
import Testimonials from "@/components/Testimonials";
import VisionMissionSection from "@/components/VisionMissionSection";


export default function AboutPage() {
  return (
    <main className="overflow-hidden">
      <HeroAboutSection />
      <StorySection />
      <AchievementsSection />
      <VisionMissionSection />
      <StatsSection />
      <BrandsSlider/>
      <Testimonials/>
    </main>
  );
}
