'use client';
import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';

const services = [
  {
    key: 'architecture',
    image: "/imags/Projects/architectural/ALHAWN/4.jpg"
  },
  {
    key: 'interior',
    image: "/imags/Projects/InteriorDesign/BKGCC/2.jpg"
  },
  {
    key: 'landscape', 
    image: "/imags/Projects/Landscape/Elbabaten/1.jpg"
  }
];

export default function AchievementsSection() {
  const t = useTranslations('Achievements');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  return (
    <section className="py-12 sm:py-16 bg-[#ECE6E3] relative overflow-hidden" aria-labelledby="achievements-heading">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-8 sm:mb-10"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 0.8 }}
            className="w-16 h-16 border-3 border-[#000000] rounded-full mx-auto mb-6 flex items-center justify-center"
          >
            <div className="w-8 h-8 bg-[#979188] rounded-full" />
          </motion.div>

          <h2 
            id="achievements-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#000000] mb-3"
          >
            {t('title')}
          </h2>

          <p 
            className="text-lg text-[#979188] mb-4"
          >
            {t('subtitle')}
          </p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="h-0.5 bg-[#979188] mx-auto"
          />
        </motion.div>

        {/* Services Grid Layout */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, type: "spring" }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              {/* Service Card */}
              <div className="relative bg-white rounded-xl p-4 sm:p-5 shadow-lg border border-[#ECE6E3] group-hover:border-[#979188] transition-all h-full">
                
                {/* Dot Indicator */}
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className={`absolute -top-2 ${isRTL ? '-left-2' : '-right-2'} w-6 h-6 bg-[#979188] rounded-full border-2 border-white shadow-md flex items-center justify-center z-10`}
                >
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                </motion.div>

                {/* Image */}
                <div className="w-full h-32 rounded-lg mb-3 overflow-hidden">
                  <Image 
                    src={service.image} 
                    alt={t(`services.${service.key}.titleAr`)} 
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    quality={75}
                  />
                </div>

                <h3 
                  className="text-xl font-bold text-[#000000] mb-1.5 text-center"
                >
                  {t(`services.${service.key}.titleAr`)}
                </h3>

                <p 
                  className="text-xs text-[#979188] mb-2 text-center font-medium"
                >
                  {t(`services.${service.key}.titleEn`)}
                </p>

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "50px" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.15 }}
                  className="h-0.5 bg-[#979188] mx-auto mb-2"
                />

                <p 
                  className="text-xs text-[#000000] text-center leading-relaxed"
                >
                  {t(`services.${service.key}.desc`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
          className="text-center mt-8 sm:mt-10"
        >
          <p 
            className="text-xl text-[#000000] font-bold"
          >
            {t('completedProjects')}
          </p>
          <p 
            className="text-base text-[#979188] mt-1"
          >
            {t('completedProjectsEn')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}