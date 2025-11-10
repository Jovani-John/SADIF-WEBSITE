'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';

const brands = [
  '/imags/Alhawan.png',
  '/imags/ETTIFAQ.png',
  '/imags/JYS.png',
  '/imags/NSH.png',
  '/imags/SPC.png',
  '/imags/Alhawan.png',
  '/imags/ETTIFAQ.png',
  '/imags/JYS.png',
  '/imags/NSH.png',
  '/imags/SPC.png',
];

export default function BrandsSlider() {
  const constraintsRef = useRef(null);

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center space-y-3"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-[#000000] leading-tight"
            style={{ fontFamily: 'Alexandria, sans-serif' }}
          >
            We've worked with
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-[#979188]"
            style={{ fontFamily: 'Alexandria, sans-serif' }}
          >
            شركاء النجاح الذين وثقوا بنا - اسحب لتصفح المزيد
          </motion.p>
          
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-[#000000] to-transparent"
          />
        </motion.div>
      </div>

      {/* Draggable Slider */}
      <div className="relative w-full overflow-hidden" ref={constraintsRef}>
        <motion.div
          drag="x"
          dragConstraints={constraintsRef}
          dragElastic={0.1}
          dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
          className="flex gap-12 md:gap-20 items-center cursor-grab active:cursor-grabbing"
          style={{ width: 'max-content' }}
          whileTap={{ cursor: 'grabbing' }}
        >
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              className="flex-shrink-0 w-32 h-24 md:w-48 md:h-32 flex items-center justify-center pointer-events-none"
            >
              <img
                src={brand}
                alt={`Brand ${index + 1}`}
                className="max-w-full max-h-full object-contain transition-all duration-300"
                draggable="false"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Gradient Overlays على الجوانب */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-white via-white/50 to-transparent pointer-events-none z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-white via-white/50 to-transparent pointer-events-none z-10"></div>
      </div>

      {/* Scroll Indicator */}
      <div className="text-center mt-8">
        <motion.div
          animate={{ x: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="inline-flex items-center gap-2 text-[#979188] text-sm"
          style={{ fontFamily: 'Alexandria, sans-serif' }}
        >
          <span>← اسحب لليمين واليسار →</span>
        </motion.div>
      </div>
    </section>
  );
}