'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiAward, FiUsers, FiTrendingUp, FiTarget } from 'react-icons/fi';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';

export default function StorySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const t = useTranslations('Story');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const features = [
    { icon: FiAward, key: 'excellence' },
    { icon: FiUsers, key: 'professional' },
    { icon: FiTrendingUp, key: 'growth' },
    { icon: FiTarget, key: 'vision' },
  ];

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-[#ECE6E3] relative overflow-hidden" aria-labelledby="story-heading">
      <div className="absolute top-12 right-6 w-48 h-48 bg-[#979188] opacity-5 rounded-full blur-2xl" />
      <div className="absolute bottom-12 left-6 w-72 h-72 bg-[#000000] opacity-5 rounded-full blur-2xl" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto ${isRTL ? '' : ''}`}>

          {/* Content Side */}
          <motion.div
            initial={{ x: isRTL ? 80 : -80, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7 }}
            className={isRTL ? 'lg:order-2' : 'lg:order-1'}
          >
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "60px" } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
              className={`h-0.5 bg-[#000000] mb-4 ${isRTL ? 'mr-0' : 'ml-0'}`}
            />

            <h2 id="story-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#000000] mb-6 leading-tight">
              {t('title')}
            </h2>

            <p className="text-lg text-[#000000] mb-4 leading-relaxed">
              {t('description1')}
            </p>

            <p className="text-base text-[#979188] leading-relaxed">
              {t('description2')}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {features.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, type: "spring" }}
                  className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <item.icon className="text-xl text-[#979188]" />
                  <span className="font-medium text-[#000000] text-sm">
                    {t(`features.${item.key}`)}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ x: isRTL ? -80 : 80, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7 }}
            className={`relative ${isRTL ? 'lg:order-1' : 'lg:order-2'}`}
          >
            <div className="grid grid-cols-2 gap-3">
              {/* Large Top Image */}
              <motion.div
                whileHover={{ scale: 1.03, rotate: 1 }}
                className="col-span-2 h-48 sm:h-56 rounded-xl overflow-hidden"
              >
                <Image
                  src="/imags/1.jpg"
                  alt="About Top - Sadif Construction Projects"
                  width={600}
                  height={300}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  quality={80}
                />
              </motion.div>

              {/* Bottom Left Image */}
              <motion.div
                whileHover={{ scale: 1.03, rotate: -1 }}
                className="h-36 sm:h-40 rounded-xl overflow-hidden"
              >
                <Image
                  src="/imags/2.jpg"
                  alt="About small 1 - Sadif Construction Projects"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  quality={80}
                />
              </motion.div>

              {/* Bottom Right Image */}
              <motion.div
                whileHover={{ scale: 1.03, rotate: 1 }}
                className="h-36 sm:h-40 rounded-xl overflow-hidden"
              >
                <Image
                  src="/imags/3.jpg"
                  alt="About small 2 - Sadif Construction Projects"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  quality={80}
                />
              </motion.div>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ delay: 0.6, type: "spring" }}
              className={`absolute -top-4 ${isRTL ? '-left-4' : '-right-4'} bg-white rounded-full p-4 shadow-lg`}
            >
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-[#000000]">{t('projectsCount')}</div>
                <div className="text-xs text-[#979188]">{t('projectsText')}</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}