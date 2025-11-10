'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import HeroSection from './HeroSection';
import AboutSection from './AboutPreview'; // غيّر هنا لو اسم الملف عندك AboutPreview

export default function HomeSections() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Hero transformations
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  // About transformations
  const aboutOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const aboutY = useTransform(scrollYProgress, [0, 0.5], ['100vh', '0vh']);
  const aboutScale = useTransform(scrollYProgress, [0, 0.5], [1.05, 1]);

  return (
    <div ref={containerRef} className="relative h-[200vh]">
      {/* Hero Section - Fixed and fades out */}
      <motion.div
        className="sticky top-0 h-screen w-full overflow-hidden"
        style={{
          opacity: heroOpacity,
          scale: heroScale,
          y: heroY,
        }}
      >
        <HeroSection />
      </motion.div>

      {/* About Section - Slides up from behind */}
      <motion.div
        className="absolute top-0 left-0 w-full h-screen overflow-hidden"
        style={{
          opacity: aboutOpacity,
          y: aboutY,
          scale: aboutScale,
        }}
      >
        <AboutSection />
      </motion.div>
    </div>
  );
}