'use client';

import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';

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
  '/imags/TKAF.png',
];

export default function BrandsSlider() {
  const locale = useLocale();

  // الترجمات
  const translations = {
    ar: {
      title: "شركاء النجاح",
      subtitle: "الشركات والمؤسسات التي وثقت بنا",
      scrollHint: "← التمرير التلقائي ←"
    },
    en: {
      title: "We've Worked With",
      subtitle: "Trusted Partners Who Believed In Us",
      scrollHint: "← Auto Scrolling →"
    }
  };

  const t = translations[locale as keyof typeof translations] || translations.ar;

  // مضاعفة البراندات للحصول على حركة سلسة لا نهائية
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
            {t.title}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-[#979188]"
            style={{ fontFamily: 'Alexandria, sans-serif' }}
          >
            {t.subtitle}
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

      {/* Auto-Scrolling Slider */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-8 md:gap-20 items-center"
          animate={{
            x: locale === 'ar' ? [0, 1920] : [0, -1920], // عكس الاتجاه للعربي
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40, // 40 ثانية للدورة الكاملة
              ease: "linear",
            },
          }}
          style={{
            width: 'max-content',
          }}
        >
          {duplicatedBrands.map((brand, index) => (
            <motion.div
              key={index}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              className="flex-shrink-0 w-28 h-20 md:w-48 md:h-32 flex items-center justify-center"
            >
              <img
                src={brand}
                alt={`Brand ${(index % brands.length) + 1}`}
                className="max-w-full max-h-full object-contain transition-all duration-300 will-change-transform pointer-events-none select-none"
                draggable="false"
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-40 bg-gradient-to-r from-white via-white/70 to-transparent pointer-events-none z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-40 bg-gradient-to-l from-white via-white/70 to-transparent pointer-events-none z-10"></div>
      </div>

      {/* Scroll Indicator */}
      <div className="text-center mt-8">
        <motion.div
          animate={{ 
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 2,
            ease: "easeInOut"
          }}
          className="inline-flex items-center gap-2 text-[#979188] text-sm"
          style={{ fontFamily: 'Alexandria, sans-serif' }}
        >
          <span>{t.scrollHint}</span>
        </motion.div>
      </div>
    </section>
  );
}