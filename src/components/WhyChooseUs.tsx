'use client';

import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef, useMemo } from 'react';
import { useTranslations, useLocale } from 'next-intl';

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const isTitleInView = useInView(titleRef, { once: true, margin: "-50px" });
  const t = useTranslations('WhyChooseUs');
  const locale = useLocale();
  const isRTL = locale === 'ar';
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Simplified transforms for better performance
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  // Memoized reasons data
  const reasons = useMemo(() => [
    {
      title: t('reasons.vision.title'),
      titleEn: t('reasons.vision.titleEn'),
      desc: t('reasons.vision.desc'),
      icon: '✦',
    },
    {
      title: t('reasons.team.title'),
      titleEn: t('reasons.team.titleEn'),
      desc: t('reasons.team.desc'),
      icon: '◆',
    },
    {
      title: t('reasons.client.title'),
      titleEn: t('reasons.client.titleEn'),
      desc: t('reasons.client.desc'),
      icon: '●',
    },
    {
      title: t('reasons.sustainability.title'),
      titleEn: t('reasons.sustainability.titleEn'),
      desc: t('reasons.sustainability.desc'),
      icon: '■',
    },
    {
      title: t('reasons.detail.title'),
      titleEn: t('reasons.detail.titleEn'),
      desc: t('reasons.detail.desc'),
      icon: '▲',
    },
  ], [t]);

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 md:py-20 lg:py-24 overflow-hidden"
      style={{ backgroundColor: '#ece6e3' }}
      aria-labelledby="why-choose-us-heading"
    >
      {/* SEO: Section heading for screen readers */}
      <h1 id="why-choose-us-heading" className="sr-only">
        {t('title')} - {t('subtitle')}
      </h1>

      {/* Optimized Background Pattern */}
      <motion.div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{ y: backgroundY }}
        aria-hidden="true"
      >
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, #000 1px, transparent 1px),
              radial-gradient(circle at 80% 80%, #000 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px, 150px 150px',
          }}
        />
      </motion.div>

      {/* Simplified Floating Shapes */}
      <motion.div
        className={`absolute top-16 ${isRTL ? 'right-[10%]' : 'left-[10%]'} w-20 h-20 border border-gray-400 opacity-10 pointer-events-none`}
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        aria-hidden="true"
      />
      
      <motion.div
        className={`absolute bottom-24 ${isRTL ? 'left-[15%]' : 'right-[15%]'} w-16 h-16 opacity-10 pointer-events-none`}
        style={{ backgroundColor: '#979188' }}
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />

      <motion.div 
        className="container mx-auto px-4 sm:px-6 relative z-10"
        style={{ opacity }}
      >
        {/* Header - Optimized */}
        <motion.div
          ref={titleRef}
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block relative mb-6"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="absolute -inset-3 border border-gray-400 opacity-20"
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              aria-hidden="true"
            />
            <h2 
              className="text-4xl sm:text-5xl md:text-6xl font-bold relative"
              style={{ fontFamily: 'Alexandria, sans-serif' }}
            >
              {t('title')}
            </h2>
          </motion.div>

          <motion.div
            initial={{ width: 0 }}
            animate={isTitleInView ? { width: '100%' } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="h-0.5 mx-auto mb-4"
            style={{ 
              maxWidth: '200px',
              background: 'linear-gradient(to right, transparent, #000, transparent)'
            }}
            aria-hidden="true"
          />

          <motion.p
            className="text-lg md:text-xl font-light tracking-wider uppercase"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              color: '#979188'
            }}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {t('subtitle')}
          </motion.p>
        </motion.div>

        {/* Reasons Grid - Performance Optimized */}
        <div className="max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? (isRTL ? 50 : -50) : (isRTL ? -50 : 50) }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.08,
              }}
              className="mb-6 last:mb-0"
            >
              <motion.div
                className="group relative bg-white p-6 md:p-8 overflow-hidden"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
                style={{
                  clipPath: index % 2 === 0 
                    ? (isRTL ? 'polygon(2% 0, 100% 0, 100% 100%, 0 100%)' : 'polygon(0 0, 100% 0, 98% 100%, 0 100%)')
                    : (isRTL ? 'polygon(0 0, 98% 0, 100% 100%, 0 100%)' : 'polygon(2% 0, 100% 0, 100% 100%, 0 100%)')
                }}
              >
                {/* Simplified Hover Background */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-3 transition-opacity duration-300 pointer-events-none"
                  style={{ backgroundColor: '#000' }}
                  aria-hidden="true"
                />

                {/* Number & Icon - Optimized */}
                <div className={`flex items-start gap-6 mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <motion.div
                    className="relative"
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ 
                      duration: 0.4, 
                      delay: index * 0.08 + 0.1,
                    }}
                  >
                    <div 
                      className="w-14 h-14 flex items-center justify-center text-white text-xl font-bold"
                      style={{ backgroundColor: '#000' }}
                      aria-hidden="true"
                    >
                      {(index + 1).toString().padStart(2, '0')}
                    </div>
                  </motion.div>

                  {/* Simplified Large Icon */}
                  <div
                    className={`text-6xl md:text-7xl font-bold opacity-5 absolute top-2 ${isRTL ? 'left-4' : 'right-4'} pointer-events-none`}
                    aria-hidden="true"
                  >
                    {reason.icon}
                  </div>
                </div>

                {/* Content - Optimized */}
                <div className="relative">
                  <div className="grid md:grid-cols-2 gap-4 md:gap-8 items-start">
                    {/* Title */}
                    <motion.div
                      initial={{ x: isRTL ? 20 : -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: index * 0.08 + 0.2 }}
                      className={isRTL ? 'text-right' : 'text-left'}
                    >
                      <h3 
                        className="text-2xl sm:text-3xl md:text-3xl font-bold mb-2"
                        style={{ fontFamily: 'Alexandria, sans-serif' }}
                      >
                        {reason.title}
                      </h3>
                      <motion.div
                        className="h-0.5 bg-black mb-3"
                        initial={{ width: 0 }}
                        whileInView={{ width: '60px' }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: index * 0.08 + 0.3 }}
                        aria-hidden="true"
                      />
                      <p 
                        className="text-base uppercase tracking-wide"
                        style={{ 
                          fontFamily: 'Inter, sans-serif',
                          color: '#979188'
                        }}
                      >
                        {reason.titleEn}
                      </p>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                      className={`text-lg leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}
                      style={{ 
                        fontFamily: 'Alexandria, sans-serif',
                        color: '#979188'
                      }}
                      initial={{ x: isRTL ? -20 : 20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: index * 0.08 + 0.4 }}
                    >
                      {reason.desc}
                    </motion.p>
                  </div>
                </div>

                {/* Simplified Line Effect */}
                <motion.div
                  className={`absolute bottom-0 ${isRTL ? 'right-0' : 'left-0'} h-0.5 bg-black`}
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: index * 0.08 + 0.5 }}
                  aria-hidden="true"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Simplified Decorative Elements */}
        <motion.div
          className="mt-12 flex justify-center gap-3"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          aria-hidden="true"
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: i === 1 ? '#000' : '#979188' }}
              animate={{ 
                scale: i === 1 ? [1, 1.3, 1] : 1,
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                delay: i * 0.3
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}