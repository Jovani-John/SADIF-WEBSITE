'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';

const brands = [
  { src: '/imags/Alhawan.png', alt: 'Alhawan Company' },
  { src: '/imags/ETTIFAQ.png', alt: 'ETTIFAQ Company' },
  { src: '/imags/JYS.png', alt: 'JYS Company' },
  { src: '/imags/NSH.png', alt: 'NSH Company' },
  { src: '/imags/SPC.png', alt: 'SPC Company' },
  { src: '/imags/Alhawan.png', alt: 'Alhawan Company' },
  { src: '/imags/ETTIFAQ.png', alt: 'ETTIFAQ Company' },
  { src: '/imags/JYS.png', alt: 'JYS Company' },
  { src: '/imags/NSH.png', alt: 'NSH Company' },
  { src: '/imags/SPC.png', alt: 'SPC Company' },
];

export default function BrandsSlider() {
  const constraintsRef = useRef(null);
  const x = useMotionValue(0);
  const t = useTranslations('Brands');
  const locale = useLocale();
  const isRTL = locale === 'ar';
  
  const springX = useSpring(x, {
    stiffness: 120,
    damping: 30,
    mass: 0.8
  });

  return (
    <section 
      className="py-12 sm:py-16 bg-white overflow-hidden"
      aria-labelledby="brands-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 mb-8 sm:mb-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center space-y-2"
        >
          <motion.h2
            id="brands-heading"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#000000] leading-tight"
            style={{ fontFamily: 'Alexandria, sans-serif' }}
          >
            {t('title')}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-[#979188] max-w-2xl mx-auto"
            style={{ fontFamily: 'Alexandria, sans-serif' }}
          >
            {t('subtitle')}
          </motion.p>
          
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-0.5 w-16 sm:w-20 mx-auto bg-gradient-to-r from-transparent via-[#000000] to-transparent"
          />
        </motion.div>
      </div>

      {/* Draggable Slider */}
      <div 
        className="relative w-full overflow-hidden" 
        ref={constraintsRef}
        role="region"
        aria-label="Brands carousel"
      >
        <motion.div
          drag="x"
          dragConstraints={constraintsRef}
          dragElastic={0.1}
          dragMomentum={true}
          dragTransition={{ 
            power: 0.1,
            timeConstant: 150,
            bounceStiffness: 80,
            bounceDamping: 15
          }}
          style={{ 
            x: springX,
            width: 'max-content',
            touchAction: 'pan-y'
          }}
          className="flex gap-8 sm:gap-12 md:gap-16 items-center cursor-grab active:cursor-grabbing select-none"
          whileTap={{ cursor: 'grabbing' }}
        >
          {brands.map((brand, index) => (
            <motion.div
              key={`${brand.alt}-${index}`}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.2 }
              }}
              className="flex-shrink-0 w-20 h-16 sm:w-28 sm:h-20 md:w-36 md:h-24 flex items-center justify-center"
            >
              <Image
                src={brand.src}
                alt={brand.alt}
                width={144}
                height={96}
                className="max-w-full max-h-full object-contain transition-all duration-200"
                draggable="false"
                loading={index < 5 ? "eager" : "lazy"}
                quality={75}
                sizes="(max-width: 640px) 80px, (max-width: 768px) 112px, 144px"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Gradient Overlays على الجوانب */}
        <div 
          className={`absolute ${isRTL ? 'right-0' : 'left-0'} top-0 bottom-0 w-12 sm:w-16 md:w-24 bg-gradient-to-${isRTL ? 'l' : 'r'} from-white via-white/80 to-transparent pointer-events-none z-10`}
          aria-hidden="true"
        />
        <div 
          className={`absolute ${isRTL ? 'left-0' : 'right-0'} top-0 bottom-0 w-12 sm:w-16 md:w-24 bg-gradient-to-${isRTL ? 'r' : 'l'} from-white via-white/80 to-transparent pointer-events-none z-10`}
          aria-hidden="true"
        />
      </div>

      {/* Scroll Indicator */}
      <div className="text-center mt-6 sm:mt-8">
        <motion.div
          animate={{ x: isRTL ? [-8, 0, -8] : [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="inline-flex items-center gap-1 sm:gap-2 text-[#979188] text-xs sm:text-sm"
          style={{ fontFamily: 'Alexandria, sans-serif' }}
          aria-label={t('scrollHint')}
        >
          <span>{t('scrollHint')}</span>
        </motion.div>
      </div>
    </section>
  );
}