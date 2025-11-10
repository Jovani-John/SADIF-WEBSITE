// page.tsx
import HeroSection from '../components/HeroSection';
import AboutPreview from '../components/AboutPreview';
import WhyChooseUs from '../components/WhyChooseUs';
import ProjectsPreview from '../components/ProjectsPreview';
import CTASection from '../components/CTASection';
import BrandsSlider from '../components/BrandsSlider';
import Testimonials from '../components/Testimonials';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutPreview />
      <WhyChooseUs />
          <ProjectsPreview />
      <CTASection />
      <BrandsSlider />
      <Testimonials />
    </main>
  );
}