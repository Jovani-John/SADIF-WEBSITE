'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { useTranslations, useLocale } from 'next-intl';

export default function HeroAboutSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });

  const t = useTranslations('HeroAbout');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-[#000000]"
      aria-labelledby="hero-about-heading"
    >
      {/* Background Pattern */}
      <motion.div style={{ y }} className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(30deg, #979188 12%, transparent 12.5%, transparent 87%, #979188 87.5%, #979188),
              linear-gradient(150deg, #979188 12%, transparent 12.5%, transparent 87%, #979188 87.5%, #979188),
              linear-gradient(30deg, #979188 12%, transparent 12.5%, transparent 87%, #979188 87.5%, #979188),
              linear-gradient(150deg, #979188 12%, transparent 12.5%, transparent 87%, #979188 87.5%, #979188)
            `,
            backgroundSize: '60px 100px',
            backgroundPosition: '0 0, 0 0, 30px 50px, 30px 50px'
          }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center px-4 sm:px-6 max-w-4xl"
      >
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="mb-6 inline-block"
        >
          <div className="w-16 h-16 border-3 border-[#979188] rotate-45 mx-auto" />
        </motion.div>

        <motion.h1
          id="hero-about-heading"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
        >
          {t('title')}
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '150px' }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="h-0.5 bg-[#979188] mx-auto mb-6"
        />

        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="text-lg sm:text-xl md:text-2xl text-[#ECE6E3] max-w-2xl mx-auto leading-relaxed"
        >
          {t('subtitle')}
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.2, type: 'spring' }}
          className="mt-8"
        >
          <a 
            href="/contact" 
            className="group relative px-6 py-3 bg-[#979188] text-white font-medium overflow-hidden inline-block rounded"
            aria-label={t('discoverBtn')}
          >
            <span className="relative z-10 flex items-center gap-1.5">
              {t('discoverBtn')}
              <FiArrowRight className={`group-hover:translate-x-0.5 transition-transform ${isRTL ? 'rotate-180' : ''}`} />
            </span>

            <motion.div
              className="absolute inset-0 bg-white"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.2 }}
            />

            <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 text-[#000000] z-20">
              {t('discoverBtn')}
              <FiArrowRight className={`${isRTL ? 'mr-1.5 rotate-180' : 'ml-1.5'}`} />
            </span>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-5 h-8 border border-[#979188] rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-0.5 h-2 bg-[#979188] rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}