'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { IoChevronForward, IoChevronBack } from 'react-icons/io5';
import { BiMessageRoundedDetail } from 'react-icons/bi';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';

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
      projectName: t('projects.project1'),
      image: '/ScreenShoot/1.jpg',
      alt: t('projects.project1')
    },
    {
      id: 2,
      projectName: t('projects.project2'),
      image: '/ScreenShoot/2.jpg',
      alt: t('projects.project2')
    },
    {
      id: 3,
      projectName: t('projects.project3'),
      image: '/ScreenShoot/3.jpg',
      alt: t('projects.project3')
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

      <div className={`absolute top-8 sm:top-16 ${isRTL ? 'right-4 sm:right-8' : 'left-4 sm:left-8'} w-32 sm:w-60 h-32 sm:h-60 bg-[#979188]/5 rounded-full blur-2xl`} />
      <div className={`absolute bottom-8 sm:bottom-16 ${isRTL ? 'left-4 sm:left-8' : 'right-4 sm:right-8'} w-40 sm:w-80 h-40 sm:h-80 bg-[#979188]/5 rounded-full blur-2xl`} />

      <div className="max-w-6xl mx-auto relative z-10">

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

        <motion.div
          variants={scrollReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative mt-4 sm:mt-6 lg:mt-8"
        >

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

          <div className="relative h-[350px] sm:h-[450px] md:h-[500px] lg:h-[550px]">
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
                <div className="relative max-w-xl w-full mx-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 z-10 w-[85%] sm:w-auto"
                  >
                    <div className="bg-gradient-to-r from-[#000000] to-[#979188] text-white px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 lg:py-2.5 rounded-full shadow-lg text-xs sm:text-sm font-semibold text-center">
                      {testimonials[currentIndex].projectName}
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-2 sm:p-3 lg:p-4 xl:p-5 overflow-hidden mt-1 sm:mt-0"
                  >
                    <div className="relative rounded-lg sm:rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
                      <Image
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].alt}
                        width={600}
                        height={400}
                        className="w-full h-auto object-contain max-h-[250px] sm:max-h-[350px] lg:max-h-[400px]"
                        loading="lazy"
                        quality={80}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 60vw"
                      />
                      
                      <div className={`absolute top-1.5 sm:top-2 lg:top-2.5 ${isRTL ? 'right-1.5 sm:right-2 lg:right-2.5' : 'left-1.5 sm:left-2 lg:left-2.5'} bg-green-500 text-white px-1.5 sm:px-2 lg:px-2.5 py-0.5 sm:py-1 lg:py-1 rounded-full text-[9px] sm:text-xs font-semibold flex items-center gap-0.5 sm:gap-1 shadow-md`}>
                        <span className="text-xs sm:text-sm">✓</span>
                        <span>{t('realChat')}</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.div
            variants={scrollReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-6 lg:mt-8"
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