'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowLeft, FiArrowRight, FiMail, FiPhone } from 'react-icons/fi';
import { useTranslations, useLocale } from 'next-intl';

export default function CTASection() {
  const t = useTranslations('CTA');
  const tFooter = useTranslations('Footer');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  return (
    <section 
      className="relative min-h-screen flex items-center overflow-hidden bg-[#ece6e3]"
      aria-labelledby="cta-heading"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 items-center ${isRTL ? 'lg:grid-flow-dense' : ''}`}>
          
          {/* النص */}
          <motion.div 
            className={`relative z-10 py-12 lg:py-20 px-4 sm:px-6 lg:px-12 flex flex-col gap-y-4 ${isRTL ? 'lg:order-2' : 'lg:order-1'}`}
            initial={{ opacity: 0, x: isRTL ? 100 : -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Tag صغير */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`inline-block mb-4 ${isRTL ? 'text-right' : 'text-left'}`}
            >
              <motion.span 
                className="px-3 py-1.5 bg-[#979188] text-white text-xs rounded-full inline-block"
                style={{ fontFamily: 'Alexandria, sans-serif' }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {t('tag')}
              </motion.span>
            </motion.div>

            {/* العنوان الرئيسي */}
            <div 
              className={`mb-4 ${isRTL ? 'text-right' : 'text-left'}`}
              style={{ fontFamily: 'Alexandria, sans-serif' }}
            >
              <motion.h1
                id="cta-heading"
                initial={{ opacity: 0, x: isRTL ? 60 : -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#000000] mb-4 lg:mb-6 leading-tight break-words"
              >
                {t('title1')}
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, x: isRTL ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#000000] leading-tight"
              >
                <motion.span 
                  className="text-[#979188] mx-2 lg:mx-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {t('title2')}
                </motion.span>{' '}
                {t('title3')}
              </motion.div>
            </div>

            {/* النص الفرعي */}
            <motion.p
              initial={{ opacity: 0, x: isRTL ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className={`text-base sm:text-lg lg:text-xl text-[#979188] leading-relaxed ${isRTL ? 'text-right' : 'text-left'} mb-4`}
              style={{ fontFamily: 'Alexandria, sans-serif' }}
            >
              {t('subtitle')}
            </motion.p>

            {/* الأزرار */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className={`flex flex-col sm:flex-row gap-3 ${isRTL ? 'sm:flex-row-reverse' : ''} mb-6`}
            >
              <Link
                href="/contact"
                className="group relative overflow-hidden"
                aria-label={t('startBtn')}
              >
                <motion.div
                  className="flex items-center justify-center gap-2 bg-[#000000] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-medium relative z-10"
                  style={{ fontFamily: 'Alexandria, sans-serif' }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  {t('startBtn')}
                  <motion.div
                    animate={{ x: isRTL ? [-3, 0, -3] : [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    {isRTL ? <FiArrowLeft size={16} /> : <FiArrowRight size={16} />}
                  </motion.div>
                </motion.div>
                <motion.div
                  className="absolute inset-0 bg-[#979188] rounded-full"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
              
              <Link
                href="/projects"
                className="group"
                aria-label={t('exploreBtn')}
              >
                <motion.div
                  className="flex items-center justify-center gap-2 bg-transparent border border-[#000000] text-[#000000] px-6 py-3 sm:px-8 sm:py-4 rounded-full hover:bg-[#000000] hover:text-white transition-all duration-200 text-base sm:text-lg font-medium"
                  style={{ fontFamily: 'Alexandria, sans-serif' }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  {t('exploreBtn')}
                </motion.div>
              </Link>
            </motion.div>

            {/* معلومات التواصل */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.7 }}
              className={`flex flex-col sm:flex-row gap-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}
            >
              <motion.a 
                href={`mailto:${tFooter('email')}`}
                className={`flex items-center gap-2 text-[#979188] hover:text-[#000000] transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
                whileHover={{ x: isRTL ? -3 : 3 }}
                transition={{ duration: 0.2 }}
                aria-label={`Email: ${tFooter('email')}`}
              >
                <FiMail size={16} />
                <span 
                  className="text-sm sm:text-base" 
                  style={{ fontFamily: 'Alexandria, sans-serif' }}
                >
                  {tFooter('email')}
                </span>
              </motion.a>
              <motion.a 
                href={`tel:${tFooter('phone').replace(/\s/g, '')}`}
                className={`flex items-center gap-2 text-[#979188] hover:text-[#000000] transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
                whileHover={{ x: isRTL ? -3 : 3 }}
                transition={{ duration: 0.2 }}
                aria-label={`Phone: ${tFooter('phone')}`}
              >
                <FiPhone size={16} />
                <span 
                  className="text-sm sm:text-base" 
                  style={{ fontFamily: 'Alexandria, sans-serif' }}
                  dir="ltr"
                >
                  {tFooter('phone')}
                </span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* الصورة */}
          <motion.div 
            className={`relative h-[300px] sm:h-[400px] lg:h-screen ${isRTL ? 'lg:order-1' : 'lg:order-2'}`}
            initial={{ opacity: 0, x: isRTL ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className={`relative h-full w-full overflow-hidden ${
              isRTL 
                ? 'rounded-tr-[50px] lg:rounded-tr-[100px]' 
                : 'rounded-tl-[50px] lg:rounded-tl-[100px]'
            }`}>
              <motion.div
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full h-full"
              >
                <Image
                  src="/imags/Logo.png"
                  alt="Sadif Projects - Leading construction and development company"
                  fill
                  className="object-contain lg:object-cover"
                  priority
                  quality={85}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </motion.div>
              
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-[#000000]/40 via-transparent to-transparent"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />
            </div>

            {/* شكل ديكوري */}
            <motion.div
              className={`absolute -top-10 ${isRTL ? '-left-10' : '-right-10'} w-20 h-20 bg-[#979188] rounded-full opacity-20 blur-2xl`}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 0.2 }}
              viewport={{ once: true }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.25, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          className={`absolute bottom-0 ${isRTL ? 'right-0' : 'left-0'} w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-[#979188] rounded-full opacity-5 blur-2xl`}
          initial={{ scale: 0, x: isRTL ? 60 : -60, y: 60 }}
          whileInView={{ scale: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          animate={{
            x: isRTL ? [0, -30, 0] : [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className={`absolute top-1/4 ${isRTL ? 'left-1/4' : 'right-1/4'} w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] bg-[#000000] rounded-full opacity-3 blur-2xl`}
          initial={{ scale: 0, rotate: 0 }}
          whileInView={{ scale: 1, rotate: 180 }}
          viewport={{ once: true }}
          animate={{
            rotate: [180, 360, 180],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </section>
  );
}