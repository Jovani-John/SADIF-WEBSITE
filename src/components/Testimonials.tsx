'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { IoChevronForward, IoChevronBack } from 'react-icons/io5';
import { BiMessageRoundedDetail } from 'react-icons/bi';
import { FaQuoteLeft } from 'react-icons/fa';
import { useTranslations, useLocale } from 'next-intl';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);
  const t = useTranslations('Testimonials');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const testimonials = [
    {
      id: 1,
      service: t('projects.project1'),
      testimonial: t('testimonials.testimonial1'),
      rating: 5
    },
    {
      id: 2,
      service: t('projects.project2'),
      testimonial: t('testimonials.testimonial2'),
      rating: 5
    },
    {
      id: 3,
      service: t('projects.project3'),
      testimonial: t('testimonials.testimonial3'),
      rating: 5
    }
  ];

  useEffect(() => {
    if (!isDragging) {
      autoScrollRef.current = setInterval(() => {
        nextSlide();
      }, 6000);
    }
    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [currentIndex, isDragging]);

  const nextSlide = () => {
    setDirection(isRTL ? -1 : 1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(isRTL ? 1 : -1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? (isRTL ? -1 : 1) : (isRTL ? 1 : -1));
    setCurrentIndex(index);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 200 : -200,
      opacity: 0,
      scale: 0.95
    })
  };

  const scrollReveal = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1
    }
  };

  return (
    <section className="relative min-h-screen bg-[#ECE6E3] py-8 sm:py-12 lg:py-16 px-4 overflow-hidden" aria-labelledby="testimonials-heading">
      {/* Background decorations */}
      <div className={`absolute top-8 sm:top-16 ${isRTL ? 'right-4 sm:right-8' : 'left-4 sm:left-8'} w-32 sm:w-60 h-32 sm:h-60 bg-[#979188]/5 rounded-full blur-2xl`} />
      <div className={`absolute bottom-8 sm:bottom-16 ${isRTL ? 'left-4 sm:left-8' : 'right-4 sm:right-8'} w-40 sm:w-80 h-40 sm:h-80 bg-[#979188]/5 rounded-full blur-2xl`} />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          variants={scrollReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-6 sm:mb-8 lg:mb-12"
        >
          <div className="flex flex-col items-center text-center gap-3 sm:gap-4 mb-4">
            <motion.div
              variants={scrollReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-[#000000] to-[#979188] p-3 sm:p-4 lg:p-5 rounded-xl sm:rounded-2xl shadow-xl">
                <BiMessageRoundedDetail className="text-2xl sm:text-3xl lg:text-4xl text-white" />
              </div>
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-br from-[#000000] to-[#979188] rounded-xl sm:rounded-2xl blur-lg -z-10"
              />
            </motion.div>

            <div className="w-full px-2">
              <motion.h1
                id="testimonials-heading"
                variants={scrollReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#000000] leading-tight mb-2"
              >
                {t('title')}
              </motion.h1>

              <motion.div
                variants={scrollReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-center justify-center gap-1 sm:gap-2"
              >
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "40px" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="h-0.5 bg-gradient-to-r from-[#000000] to-[#979188] rounded-full"
                />
                <span className="text-xs sm:text-sm text-[#979188] font-medium">{t('subtitle')}</span>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "40px" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="h-0.5 bg-gradient-to-l from-[#000000] to-[#979188] rounded-full"
                />
              </motion.div>
            </div>
          </div>

          <motion.div
            variants={scrollReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`text-center px-4 ${isRTL ? 'text-right' : 'text-left'}`}
          >
            <p className="text-sm sm:text-base text-[#979188] max-w-2xl mx-auto leading-relaxed">
              {t('description')}{' '}
              <span className="font-semibold text-[#000000]">{t('quality')}</span>
            </p>
          </motion.div>
        </motion.div>

        {/* Carousel Section */}
        <motion.div
          variants={scrollReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative mt-4 sm:mt-6 lg:mt-8"
        >
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            onMouseEnter={() => setIsDragging(true)}
            onMouseLeave={() => setIsDragging(false)}
            className={`absolute ${isRTL ? 'left-2 sm:left-3 lg:left-[-50px]' : 'right-2 sm:right-3 lg:right-[-50px]'} top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-1.5 sm:p-2 lg:p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-105 group backdrop-blur-sm`}
            aria-label={isRTL ? 'التالي' : 'Next'}
          >
            {isRTL ? (
              <IoChevronBack className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-[#000000] group-hover:text-[#979188] transition-colors" />
            ) : (
              <IoChevronForward className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-[#000000] group-hover:text-[#979188] transition-colors" />
            )}
          </button>

          <button
            onClick={nextSlide}
            onMouseEnter={() => setIsDragging(true)}
            onMouseLeave={() => setIsDragging(false)}
            className={`absolute ${isRTL ? 'right-2 sm:right-3 lg:right-[-50px]' : 'left-2 sm:left-3 lg:left-[-50px]'} top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-1.5 sm:p-2 lg:p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-105 group backdrop-blur-sm`}
            aria-label={isRTL ? 'السابق' : 'Previous'}
          >
            {isRTL ? (
              <IoChevronForward className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-[#000000] group-hover:text-[#979188] transition-colors" />
            ) : (
              <IoChevronBack className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-[#000000] group-hover:text-[#979188] transition-colors" />
            )}
          </button>

          {/* Testimonials Cards */}
          <div className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[450px]">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 250, damping: 25 },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.3 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.1}
                onDragStart={() => setIsDragging(true)}
                onDragEnd={(e, { offset, velocity }) => {
                  setIsDragging(false);
                  const swipe = Math.abs(offset.x) * velocity.x;
                  if (swipe < -3000) nextSlide();
                  if (swipe > 3000) prevSlide();
                }}
                className="absolute inset-0 flex items-center justify-center cursor-grab active:cursor-grabbing px-2 sm:px-3"
              >
                <div className="relative max-w-3xl w-full mx-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                  >
                    {/* Main Card */}
                    <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 overflow-hidden border border-gray-100">
                      {/* Quote Icons */}
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className={`absolute top-4 ${isRTL ? 'right-4' : 'left-4'} text-[#979188]/20`}
                      >
                        <FaQuoteLeft className="text-3xl sm:text-4xl lg:text-5xl" />
                      </motion.div>
                      
                      <motion.div
                        initial={{ scale: 0, rotate: 180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className={`absolute bottom-4 ${isRTL ? 'left-4' : 'right-4'} text-[#979188]/20`}
                      >
                        <FaQuoteLeft className="text-3xl sm:text-4xl lg:text-5xl rotate-180" />
                      </motion.div>

                      {/* Service Badge */}
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex justify-center mb-6"
                      >
                        <div className="bg-gradient-to-r from-[#000000] to-[#979188] text-white px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 rounded-full shadow-lg text-xs sm:text-sm font-semibold inline-flex items-center gap-2">
                          <span className="text-base sm:text-lg">✓</span>
                          <span>{testimonials[currentIndex].service}</span>
                        </div>
                      </motion.div>

                      {/* Testimonial Text */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="relative z-10 text-center mb-6 px-8 sm:px-12"
                      >
                        <p className="text-lg sm:text-xl lg:text-2xl font-medium text-[#000000] leading-relaxed mb-4">
                          {testimonials[currentIndex].testimonial}
                        </p>
                      </motion.div>

                      {/* Rating Stars */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="flex justify-center gap-1 mb-4"
                      >
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.6 + (i * 0.1) }}
                            className="text-yellow-500 text-xl sm:text-2xl"
                          >
                            ★
                          </motion.span>
                        ))}
                      </motion.div>

                      {/* Client Badge */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className="flex justify-center items-center gap-2"
                      >
                        <div className="bg-green-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold flex items-center gap-1.5 shadow-md">
                          <span className="text-sm sm:text-base">✓</span>
                          <span>{t('realChat')}</span>
                        </div>
                      </motion.div>

                      {/* Decorative Elements */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-[#979188]/5 to-transparent rounded-full blur-3xl -z-10" />
                    </div>

                    {/* Shadow Effect */}
                    <motion.div
                      animate={{ scale: [1, 1.02, 1], opacity: [0.3, 0.5, 0.3] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-0 bg-gradient-to-br from-[#000000]/5 to-[#979188]/5 rounded-2xl sm:rounded-3xl blur-xl -z-10"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Navigation */}
          <motion.div
            variants={scrollReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8 lg:mt-10"
          >
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                onMouseEnter={() => setIsDragging(true)}
                onMouseLeave={() => setIsDragging(false)}
                className={`transition-all duration-200 rounded-full ${
                  index === currentIndex
                    ? 'w-6 sm:w-8 lg:w-10 h-1.5 sm:h-2 bg-gradient-to-r from-[#000000] to-[#979188]'
                    : 'w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#979188]/30 hover:bg-[#979188]/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Bottom Quote */}
        <motion.div
          variants={scrollReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={`text-center mt-8 sm:mt-12 lg:mt-16 px-4 ${isRTL ? 'text-right' : 'text-left'}`}
        >
          <div className="relative inline-block">
            <motion.div
              animate={{ scale: [1, 1.02, 1], opacity: [0.3, 0.4, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-r from-[#000000]/10 to-[#979188]/10 rounded-xl blur-lg"
            />
            <p className="relative text-sm sm:text-base text-[#979188] italic max-w-3xl mx-auto leading-relaxed px-3 sm:px-4 lg:px-6 py-3 sm:py-4">
              "{t('quote')}"
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}