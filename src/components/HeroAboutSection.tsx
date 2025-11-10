'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FiArrowRight } from 'react-icons/fi';

export default function HeroAboutSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-[#000000]"
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
            backgroundSize: '80px 140px',
            backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px'
          }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center px-6 max-w-5xl"
      >
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: 'spring' }}
          className="mb-8 inline-block"
        >
          <div className="w-20 h-20 border-4 border-[#979188] rotate-45 mx-auto" />
        </motion.div>

        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold text-white mb-6"
        >
          SADIF
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '200px' }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="h-1 bg-[#979188] mx-auto mb-8"
        />

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-xl md:text-2xl text-[#ECE6E3] max-w-3xl mx-auto leading-relaxed"
        >
          شركة استشارات هندسية سعودية ناشئة نحول أحلامك المعمارية إلى واقع مبهر
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.4, type: 'spring' }}
          className="mt-12"
        >
          <button className="group relative px-8 py-4 bg-[#979188] text-white font-medium overflow-hidden">
            <a href="/contact" className="relative z-10 flex items-center gap-2">
              اكتشف المزيد
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>

            <motion.div
              className="absolute inset-0 bg-white"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />

            <a href="/contact" className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 text-[#000000] z-20">
              اكتشف المزيد
              <FiArrowRight className="mr-2" />
            </a>
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-[#979188] rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-3 bg-[#979188] rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}