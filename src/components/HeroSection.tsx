'use client';

import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function HeroSection() {
  const t = useTranslations('Hero');
  
  const texts = useMemo(() => [
    t('text1'),
    t('text2'), 
    t('text3'),
    t('text4'),
  ], [t]);

  const [currentText, setCurrentText] = useState(0);
  const heroPlaceholderRef = useRef(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroPlaceholderRef,
    offset: ["start start", "end start"]
  });

  // Optimized transforms with less computations
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.6, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const translateY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  // Memoized text change handler
  const nextText = useCallback(() => {
    setCurrentText(prev => (prev + 1) % texts.length);
  }, [texts.length]);

  useEffect(() => {
    intervalRef.current = setInterval(nextText, 6000);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [nextText]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <>
      <section ref={heroPlaceholderRef} className="h-screen relative" />

      <motion.section
        style={{
          opacity,
          scale,
          y: translateY,
        }}
        className="fixed top-0 left-0 w-full h-screen flex items-center justify-center overflow-hidden z-10 pointer-events-none"
      >
        {/* Optimized Video with lazy loading */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
            poster="/videos/hero-poster.jpg" // Add poster for faster loading
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
        </div>

        <motion.div 
          style={{ opacity }} 
          className="absolute inset-0 bg-black/40" 
        />

        <motion.div
          style={{ opacity }}
          className="relative z-20 text-center px-4 max-w-4xl mx-auto pointer-events-auto flex flex-col items-center justify-center h-full"
        >
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentText}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.95 }}
              transition={{ 
                duration: 0.6, 
                ease: [0.25, 0.46, 0.45, 0.94] // Smoother easing
              }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-bold text-white leading-tight mb-8 md:mb-12 px-4"
              style={{ 
                fontFamily: 'Alexandria, sans-serif',
                textShadow: '0 2px 4px rgba(0,0,0,0.3)'
              }}
            >
              {texts[currentText]}
            </motion.h1>
          </AnimatePresence>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Link
              href="/contact"
              className="text-white bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-sm transition-all duration-300 text-sm sm:text-base font-medium px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:scale-105 active:scale-95 min-w-[140px] text-center"
              style={{ fontFamily: 'Alexandria, sans-serif' }}
              prefetch={true}
            >
              {t('contactBtn')}
            </Link>
            <Link
              href="/projects"
              className="text-white bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-sm transition-all duration-300 text-sm sm:text-base font-medium px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:scale-105 active:scale-95 min-w-[140px] text-center"
              style={{ fontFamily: 'Alexandria, sans-serif' }}
              prefetch={true}
            >
              {t('projectsBtn')}
            </Link>
          </motion.div>
        </motion.div>

        {/* Gradient overlay - simplified */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
      </motion.section>
    </>
  );
}