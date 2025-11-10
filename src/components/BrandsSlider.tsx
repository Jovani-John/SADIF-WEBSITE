'use client';

import { motion } from 'framer-motion';

const brands = [
  '/imags/Alhawan.png',
  '/imags/ETTIFAQ.png',
  '/imags/JYS.png',
  '/imags/NSH.png',
  '/imags/SPC.png',
];

export default function BrandsSlider() {
  // كرر البراندات 3 مرات لضمان استمرارية السلايدر
  const duplicatedBrands = [...brands, ...brands, ...brands];

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
            شركاء النجاح الذين وثقوا بنا
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

      {/* Infinite Slider */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-20 items-center"
          animate={{ 
            x: [0, -(brands.length * (192 + 80))]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 30,
              ease: 'linear',
            },
          }}
          style={{ width: 'max-content' }}
        >
          {duplicatedBrands.map((brand, index) => (
            <motion.div
              key={index}
              whileHover={{ 
                scale: 1.1,
                transition: { duration: 0.3 }
              }}
              className="flex-shrink-0 w-48 h-32 flex items-center justify-center"
            >
              <img
                src={brand}
                alt={`Brand ${index + 1}`}
                className="max-w-full max-h-full object-contain transition-all duration-300"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Gradient Overlays على الجوانب */}
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-white via-white/50 to-transparent pointer-events-none z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-white via-white/50 to-transparent pointer-events-none z-10"></div>
      </div>
    </section>
  );
}