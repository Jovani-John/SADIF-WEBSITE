'use client';

import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef, useEffect, useState, useCallback, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

// Optimized counter with better performance
function AnimatedCounter({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "100px" });

  useEffect(() => {
    if (!isInView) return;
    
    const startTime = performance.now();
    let animationFrame: number;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      
      // Use easeOut for smoother animation
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easedProgress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isInView]);

  return <span ref={ref}>{count}</span>;
}

export default function AboutSection() {
  const t = useTranslations('About');
  
  // Memoized data for better performance
  const stats = useMemo(() => [
    { number: 170, label: t('stats.projects'), suffix: '+' },
    { number: 30, label: t('stats.clients'), suffix: '+' },
    { number: 10, label: t('stats.experience'), suffix: '+' },
  ], [t]);

  const values = useMemo(() => [
    { 
      title: t('values.creativity.title'),
      desc: t('values.creativity.desc'),
    },
    { 
      title: t('values.sustainability.title'),
      desc: t('values.sustainability.desc'),
    },
    { 
      title: t('values.identity.title'),
      desc: t('values.identity.desc'),
    },
    { 
      title: t('values.quality.title'),
      desc: t('values.quality.desc'),
    },
  ], [t]);

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start center"]
  });

  // Simplified transforms for better performance
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [40, 0]);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen bg-white text-black py-16 md:py-20 lg:py-24 z-10 overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* SEO-friendly background pattern */}
      <div 
        className="absolute inset-0 overflow-hidden opacity-[0.02] pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(to right, #000 1px, transparent 1px),
              linear-gradient(to bottom, #000 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <motion.div 
        className="container mx-auto px-4 sm:px-6 relative z-10"
        style={{ opacity, y }}
      >
        {/* Hero Section - Optimized for performance */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-20 lg:mb-28 max-w-6xl mx-auto items-center">
          {/* Left Side - Title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <motion.div
              className="absolute -top-4 -right-4 w-16 h-16 border border-black"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              aria-hidden="true"
            />
            
            <h1 
              id="about-heading"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold leading-tight mb-6"
              style={{ fontFamily: 'Alexandria, sans-serif' }}
            >
              {t('title')}
            </h1>
            
            <div className="w-16 h-0.5 bg-black mb-6" aria-hidden="true" />
            
            <p className="text-gray-500 text-base md:text-lg uppercase tracking-wider">
              {t('subtitle')}
            </p>
          </motion.div>

          {/* Right Side - Description */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="relative bg-gray-50 p-6 lg:p-8">
              <div className="absolute top-0 left-0 w-3 h-3 bg-black" aria-hidden="true" />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-black" aria-hidden="true" />
              
              <p 
                className="text-lg md:text-xl text-gray-800 leading-relaxed"
                style={{ fontFamily: 'Alexandria, sans-serif' }}
              >
                {t('description')}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Statistics - Optimized layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 lg:mb-28 max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, backgroundColor: '#f9fafb' }}
                className="relative p-8 bg-white border border-gray-200 transition-all duration-300"
              >
                <div className="text-5xl sm:text-6xl font-bold mb-3 tracking-tight">
                  <AnimatedCounter end={stat.number} duration={2.5} />
                  {stat.suffix}
                </div>
                <p 
                  className="text-gray-600 text-sm uppercase tracking-wider"
                  style={{ fontFamily: 'Alexandria, sans-serif' }}
                >
                  {stat.label}
                </p>
                
                <motion.div
                  className="absolute top-0 left-0 w-full h-0.5 bg-black"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  aria-hidden="true"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Vision Section - Simplified */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 lg:mb-28 max-w-6xl mx-auto"
        >
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <motion.div
              className="lg:col-span-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="lg:sticky lg:top-32">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-black flex items-center justify-center mb-4">
                    <div className="w-6 h-6 border border-white" aria-hidden="true" />
                  </div>
                </div>
                
                <div className="relative">
                  <h2 
                    className="text-3xl sm:text-4xl lg:text-4xl font-bold mb-3"
                    style={{ fontFamily: 'Alexandria, sans-serif' }}
                  >
                    {t('vision.title')}
                  </h2>
                  <motion.p
                    initial={{ opacity: 0, y: 5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg font-light text-gray-400 tracking-wider uppercase mb-4"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {t('vision.subtitle')}
                  </motion.p>
                </div>
                
                <div className="w-10 h-0.5 bg-black" aria-hidden="true" />
              </div>
            </motion.div>
            
            <motion.div
              className="lg:col-span-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="relative">
                <div className="absolute -top-3 -left-3 w-full h-full border border-gray-200" aria-hidden="true" />
                <div className="relative bg-black text-white p-6 lg:p-8">
                  <p 
                    className="text-lg md:text-xl leading-relaxed"
                    style={{ fontFamily: 'Alexandria, sans-serif' }}
                  >
                    {t('vision.description')}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Values Section - Performance optimized */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-6xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="mb-12 relative"
          >
            <div className="flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-6">
              <motion.h2 
                className="text-3xl sm:text-4xl lg:text-5xl font-bold"
                style={{ fontFamily: 'Alexandria, sans-serif' }}
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
              >
                {t('values.title')}
              </motion.h2>
              
              <motion.div
                className="relative overflow-hidden"
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: "auto", opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.p 
                  className="text-xl font-light text-gray-400 tracking-widest uppercase"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  initial={{ x: -50 }}
                  whileInView={{ x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {t('values.subtitle')}
                </motion.p>
              </motion.div>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                }}
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="group relative bg-white border border-gray-200 hover:border-black p-6 transition-all duration-300"
              >
                <motion.div 
                  className="absolute top-3 right-3 text-5xl font-bold text-gray-100 select-none pointer-events-none"
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.1 }}
                >
                  {(index + 1).toString().padStart(2, '0')}
                </motion.div>
                
                <div className="relative">
                  <motion.div
                    className="w-10 h-10 mb-4 bg-black"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ 
                      duration: 0.4, 
                      delay: index * 0.1 + 0.2,
                    }}
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-5 h-5 border border-white" aria-hidden="true" />
                    </div>
                  </motion.div>
                  
                  <motion.h3 
                    className="text-xl sm:text-2xl font-bold mb-3"
                    style={{ fontFamily: 'Alexandria, sans-serif' }}
                    initial={{ x: -10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                  >
                    {value.title}
                  </motion.h3>
                  
                  <motion.div 
                    className="h-0.5 bg-black mb-4"
                    initial={{ width: 0 }}
                    whileInView={{ width: 40 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                    aria-hidden="true"
                  />
                  
                  <motion.p 
                    className="text-gray-600 leading-relaxed"
                    style={{ fontFamily: 'Alexandria, sans-serif' }}
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
                  >
                    {value.desc}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA - Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex justify-start">
            <Link 
              href="/about" 
              className="group inline-block relative"
              aria-label={t('ctaButton')}
              prefetch={true}
            >
              <motion.div
                whileHover={{ x: 3, y: -3 }}
                className="relative border border-black bg-black hover:bg-white text-white hover:text-black px-8 py-4 text-lg font-medium transition-all duration-300"
                style={{ fontFamily: 'Alexandria, sans-serif' }}
              >
                <span className="flex items-center gap-3">
                  {t('ctaButton')}
                  <motion.span
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-xl"
                    aria-hidden="true"
                  >
                    ←
                  </motion.span>
                </span>
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}