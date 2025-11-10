'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

const texts = [
  'نحن نصمم المستقبل',
  'حلول إبداعية ومستدامة',
  'تمزج بين الجمال والوظيفة',
  'للهوية الثقافية السعودية',
];

export default function HeroSection() {
  const [currentText, setCurrentText] = useState(0);
  const heroPlaceholderRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroPlaceholderRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.6, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.97, 0.9]);

  // بدل ما نحرك المحتوى كله لفوق، هنخليه في النص
  // فهنا نخلي حركة الـ Y بسيطة جدًا (زي 0 → -50px)
  const translateY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const clipTop = useTransform(scrollYProgress, (v) => {
    const pct = Math.min(100, Math.round(v * 100));
    return `inset(${pct}% 0 0 0)`;
  });

  const display = useTransform(scrollYProgress, (v) => (v >= 0.995 ? 'none' : 'block'));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section ref={heroPlaceholderRef} className="h-screen relative" />

      <motion.section
        aria-hidden={false}
        style={{
          opacity,
          scale,
          WebkitClipPath: clipTop,
          clipPath: clipTop,
          display,
        }}
        className="fixed top-0 left-0 w-full h-screen flex items-center justify-center overflow-hidden z-10 pointer-events-none"
      >
        {/* خلفية الفيديو */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
        </div>

        {/* overlay غامق */}
        <motion.div style={{ opacity }} className="absolute inset-0 bg-black/40" />

        {/* المحتوى في النص بالضبط */}
        <motion.div
          style={{ opacity, y: translateY }}
          className="relative z-20 text-center px-4 max-w-6xl mx-auto pointer-events-auto flex flex-col items-center justify-center h-full"
        >
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentText}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -40, scale: 0.95 }}
              transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
              className="text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-tight mb-12"
              style={{ fontFamily: 'Alexandria, sans-serif' }}
            >
              {texts[currentText]}
            </motion.h1>
          </AnimatePresence>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Link
              href="/contact"
              className="text-white bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-sm transition-all text-base font-light px-8 py-3.5 rounded-full"
              style={{ fontFamily: 'Alexandria, sans-serif' }}
            >
              تواصل معنا
            </Link>
            <Link
              href="/projects"
              className="text-white bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-sm transition-all text-base font-light px-8 py-3.5 rounded-full"
              style={{ fontFamily: 'Alexandria, sans-serif' }}
            >
              مشاريعنا
            </Link>
          </motion.div>
        </motion.div>

        {/* تدرّج سفلي */}
        <motion.div
          style={{ opacity }}
          className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent"
        />
      </motion.section>
    </>
  );
}
