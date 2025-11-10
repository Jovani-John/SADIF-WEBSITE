'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { IoChevronForward, IoChevronBack } from 'react-icons/io5';
import { BiMessageRoundedDetail } from 'react-icons/bi';

const testimonials = [
  {
    id: 1,
    projectName: 'استشاره ف اختيار المواد والالوان',
    image: 'ScreenShoot/1.jpg',
    alt: 'محادثة واتساب - استشاره ف اختيار المواد والالوان'
  },
  {
    id: 2,
    projectName: 'تصميم داخلي',
    image: 'ScreenShoot/2.jpg',
    alt: 'محادثة واتساب - تصميم داخلي'
  },
  {
    id: 3,
    projectName: 'استشارات هندسية',
    image: 'ScreenShoot/3.jpg',
    alt: 'محادثة واتساب - استشارات هندسية'
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const autoScrollRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (!isDragging) {
      autoScrollRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => autoScrollRef.current && clearInterval(autoScrollRef.current);
  }, [currentIndex, isDragging]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9
    })
  };

  const scrollReveal = {
    hidden: { opacity: 0, y: 40, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen bg-[#ECE6E3] py-12 sm:py-16 lg:py-20 px-4 overflow-hidden font-['Alexandria']">

      <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-40 sm:w-72 h-40 sm:h-72 bg-[#979188]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-48 sm:w-96 h-48 sm:h-96 bg-[#979188]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">

        <motion.div
          variants={scrollReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-8 sm:mb-12 lg:mb-16"
        >
          <div className="flex flex-col items-center text-center gap-4 sm:gap-6 mb-6">

            <motion.div
              variants={scrollReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-[#000000] to-[#979188] p-4 sm:p-5 lg:p-6 rounded-2xl sm:rounded-3xl shadow-2xl">
                <BiMessageRoundedDetail className="text-3xl sm:text-4xl lg:text-5xl text-white" />
              </div>

              <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-br from-[#000000] to-[#979188] rounded-2xl sm:rounded-3xl blur-xl -z-10"
              />
            </motion.div>

            <div className="w-full px-2">
              <motion.h1
                variants={scrollReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#000000] leading-tight mb-3"
              >
                Client Testimonials
              </motion.h1>

              <motion.div
                variants={scrollReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-center justify-center gap-2 sm:gap-3"
              >
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "60px" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="h-0.5 sm:h-1 bg-gradient-to-r from-[#000000] to-[#979188] rounded-full"
                />
                <span className="text-xs sm:text-sm lg:text-base text-[#979188] font-medium">Real Voices, Real Trust</span>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "60px" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="h-0.5 sm:h-1 bg-gradient-to-l from-[#000000] to-[#979188] rounded-full"
                />
              </motion.div>
            </div>
          </div>

          <motion.div
            variants={scrollReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center px-4"
          >
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#979188] max-w-2xl mx-auto leading-relaxed">
              آراء حقيقية من عملائنا تعكس{' '}
              <span className="font-semibold text-[#000000]">جودة خدماتنا والتزامنا بالتميز</span>
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={scrollReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative mt-6 sm:mt-8 lg:mt-12"
        >

          <button
            onClick={prevSlide}
            onMouseEnter={() => setIsDragging(true)}
            onMouseLeave={() => setIsDragging(false)}
            className="absolute right-2 sm:right-4 lg:right-[-60px] top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-2 sm:p-3 lg:p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 group backdrop-blur-sm"
            aria-label="السابق"
          >
            <IoChevronForward className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#000000] group-hover:text-[#979188] transition-colors" />
          </button>

          <button
            onClick={nextSlide}
            onMouseEnter={() => setIsDragging(true)}
            onMouseLeave={() => setIsDragging(false)}
            className="absolute left-2 sm:left-4 lg:left-[-60px] top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-2 sm:p-3 lg:p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 group backdrop-blur-sm"
            aria-label="التالي"
          >
            <IoChevronBack className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#000000] group-hover:text-[#979188] transition-colors" />
          </button>

          <div className="relative h-[450px] sm:h-[550px] md:h-[600px] lg:h-[650px] perspective-1000">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 },
                  scale: { duration: 0.4 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragStart={() => setIsDragging(true)}
                onDragEnd={(e, { offset, velocity }) => {
                  setIsDragging(false);
                  const swipe = Math.abs(offset.x) * velocity.x;
                  if (swipe < -5000) nextSlide();
                  if (swipe > 5000) prevSlide();
                }}
                className="absolute inset-0 flex items-center justify-center cursor-grab active:cursor-grabbing px-2 sm:px-4"
              >
                <div className="relative max-w-2xl w-full mx-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="absolute -top-4 sm:-top-6 left-1/2 -translate-x-1/2 z-10 w-[90%] sm:w-auto"
                  >
                    <div className="bg-gradient-to-r from-[#000000] to-[#979188] text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 rounded-full shadow-xl text-xs sm:text-sm lg:text-base font-semibold text-center">
                      {testimonials[currentIndex].projectName}
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-3 sm:p-4 lg:p-6 xl:p-8 overflow-hidden mt-2 sm:mt-0"
                  >
                    <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].alt}
                        className="w-full h-auto object-contain max-h-[350px] sm:max-h-[450px] lg:max-h-[500px]"
                        loading="lazy"
                      />
                      
                      <div className="absolute top-2 sm:top-3 lg:top-4 left-2 sm:left-3 lg:left-4 bg-green-500 text-white px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 rounded-full text-[10px] sm:text-xs lg:text-sm font-semibold flex items-center gap-1 sm:gap-2 shadow-lg">
                        <span className="text-xs sm:text-sm lg:text-base">✓</span>
                        <span>محادثة حقيقية</span>
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
            className="flex justify-center gap-2 sm:gap-3 mt-6 sm:mt-8 lg:mt-12"
          >
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                onMouseEnter={() => setIsDragging(true)}
                onMouseLeave={() => setIsDragging(false)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-8 sm:w-10 lg:w-12 h-2 sm:h-2.5 lg:h-3 bg-gradient-to-r from-[#000000] to-[#979188]'
                    : 'w-2 sm:w-2.5 lg:w-3 h-2 sm:h-2.5 lg:h-3 bg-[#979188]/30 hover:bg-[#979188]/50'
                }`}
              />
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={scrollReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16 lg:mt-20 px-4"
        >
          <div className="relative inline-block">
            <motion.div
              animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-r from-[#000000]/10 to-[#979188]/10 rounded-2xl blur-xl"
            />
            <p className="relative text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#979188] italic max-w-4xl mx-auto leading-relaxed px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
              "آراء عملائنا تعكس ثقتهم في جودة خدماتنا والتزامنا بتحقيق أحلامهم الهندسية"
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
