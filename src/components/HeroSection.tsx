'use client';

import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, LazyMotion, domAnimation, m } from 'framer-motion';
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
  const [videoLoaded, setVideoLoaded] = useState(false);
  const heroPlaceholderRef = useRef<HTMLElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: heroPlaceholderRef,
    offset: ["start start", "end start"]
  });

  // ⚡ Optimized transforms
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  const nextText = useCallback(() => {
    setCurrentText(prev => (prev + 1) % texts.length);
  }, [texts.length]);

  // ⚡ Cleanup interval
  useEffect(() => {
    intervalRef.current = setInterval(nextText, 6000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [nextText]);

  // ⚡ CRITICAL: Lazy load video
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !videoLoaded) {
            video.src = '/videos/hero.mp4';
            video.load();
            setVideoLoaded(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [videoLoaded]);

  return (
    <LazyMotion features={domAnimation} strict>
      <section ref={heroPlaceholderRef} className="h-screen relative" style={{ position: 'relative' }} />

      <m.section
        style={{ opacity, scale }}
        className="fixed top-0 left-0 w-full h-screen flex items-center justify-center overflow-hidden z-10 pointer-events-none"
      >
        {/* ⚡ CRITICAL: Optimized Video */}
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            poster="/videos/hero.mp4"
            className="w-full h-full object-cover"
            style={{ 
              willChange: videoLoaded ? 'auto' : 'transform',
              transform: 'translateZ(0)', // GPU acceleration
            }}
          >
            {/* Source added dynamically */}
          </video>
        </div>

        <div className="absolute inset-0 bg-black/40" />

        <m.div
          style={{ opacity }}
          className="relative z-20 text-center px-4 max-w-4xl mx-auto pointer-events-auto flex flex-col items-center justify-center h-full"
        >
          <AnimatePresence mode="wait">
            <m.h1
              key={currentText}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8 md:mb-12"
              style={{ 
                textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                willChange: 'transform, opacity',
              }}
            >
              {texts[currentText]}
            </m.h1>
          </AnimatePresence>

          <m.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <Link
              href="/contact"
              className="text-white bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-sm transition-all duration-300 text-sm sm:text-base font-medium px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:scale-105 active:scale-95 min-w-[140px] text-center"
              prefetch={true}
            >
              {t('contactBtn')}
            </Link>
            <Link
              href="/projects"
              className="text-white bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-sm transition-all duration-300 text-sm sm:text-base font-medium px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:scale-105 active:scale-95 min-w-[140px] text-center"
              prefetch={true}
            >
              {t('projectsBtn')}
            </Link>
          </m.div>
        </m.div>

        {/* Gradient overlay */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent" 
          style={{ pointerEvents: 'none' }}
        />
      </m.section>
    </LazyMotion>
  );
}