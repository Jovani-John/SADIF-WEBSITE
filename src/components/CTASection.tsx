'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowLeft, FiMail, FiPhone } from 'react-icons/fi';

export default function CTASection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#ece6e3]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
          
          {/* النص - الجزء الأيسر */}
          <motion.div 
            className="relative z-10 py-20 lg:py-32 px-8 lg:px-16"
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            {/* Tag صغير */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <motion.span 
                className="px-4 py-2 bg-[#979188] text-white text-sm rounded-full inline-block"
                style={{ fontFamily: 'Alexandria, sans-serif' }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                Let's Create Together
              </motion.span>
            </motion.div>

            {/* العنوان الرئيسي */}
            <div className="mb-6" style={{ fontFamily: 'Alexandria, sans-serif', direction: 'rtl' }}>
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1, delay: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
                className="text-5xl lg:text-7xl font-bold text-[#000000] mb-4"
              >
                جاهز لتحويل
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1, delay: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
                className="text-5xl lg:text-7xl font-bold text-[#000000]"
              >
                <motion.span 
                  className="text-[#979188]"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  رؤيتك
                </motion.span>{' '}
                إلى واقع؟
              </motion.div>
            </div>

            {/* النص الفرعي */}
            <motion.p
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1, delay: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
              className="text-xl lg:text-2xl text-[#979188] mb-8 leading-relaxed"
              style={{ fontFamily: 'Alexandria, sans-serif', direction: 'rtl' }}
            >
              دعنا نحول أفكارك إلى تصاميم استثنائية تمزج بين الجمال والوظيفة والهوية الثقافية.
            </motion.p>

            {/* الأزرار */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link
                href="/contact"
                className="group relative overflow-hidden"
              >
                <motion.div
                  className="flex items-center justify-center gap-3 bg-[#000000] text-white px-8 py-4 rounded-full text-lg font-medium relative z-10"
                  style={{ fontFamily: 'Alexandria, sans-serif' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  ابدأ مشروعك الآن
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <FiArrowLeft />
                  </motion.div>
                </motion.div>
                <motion.div
                  className="absolute inset-0 bg-[#979188] rounded-full"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                />
              </Link>
              
              <Link
                href="/projects"
                className="group"
              >
                <motion.div
                  className="flex items-center justify-center gap-3 bg-transparent border-2 border-[#000000] text-[#000000] px-8 py-4 rounded-full hover:bg-[#000000] hover:text-white transition-all duration-300 text-lg font-medium"
                  style={{ fontFamily: 'Alexandria, sans-serif' }}
                  whileHover={{ scale: 1.05, borderWidth: '3px' }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  استكشف أعمالنا
                </motion.div>
              </Link>
            </motion.div>

            {/* معلومات التواصل */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 text-[#979188]"
            >
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ x: 5, color: '#000000' }}
                transition={{ duration: 0.3 }}
              >
                <FiMail size={20} />
                <span style={{ fontFamily: 'Alexandria, sans-serif' }}>info@sadif.sa</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ x: 5, color: '#000000' }}
                transition={{ duration: 0.3 }}
              >
                <FiPhone size={20} />
                <span style={{ fontFamily: 'Alexandria, sans-serif' }}>966-559-033-519+</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* الصورة - الجزء الأيمن */}
          <motion.div 
            className="relative h-[500px] lg:h-screen"
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            {/* صورة الخلفية */}
            <div className="relative h-full w-full overflow-hidden rounded-tl-[100px] lg:rounded-tl-[200px]">
              <motion.div
                initial={{ scale: 1.2 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="w-full h-full"
              >
                <motion.img
                  src="/imags/Logo.png"
                  alt="Sadif Projects"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              </motion.div>
              
              {/* Overlay */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-[#000000]/60 via-transparent to-transparent"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              
              {/* نص على الصورة */}
              <div className="absolute bottom-10 left-10 right-10">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.9, delay: 0.7 }}
                  className="text-white"
                >
                  <p 
                    className="text-lg mb-2"
                    style={{ fontFamily: 'Alexandria, sans-serif' }}
                  >
                  </p>
                  <h3 
                    className="text-3xl lg:text-4xl font-bold"
                    style={{ fontFamily: 'Alexandria, sans-serif' }}
                  >
                  </h3>
                </motion.div>
              </div>
            </div>

            {/* شكل ديكوري */}
            <motion.div
              className="absolute -top-20 -right-20 w-40 h-40 bg-[#979188] rounded-full opacity-20 blur-3xl"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 0.2 }}
              viewport={{ once: false }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 4,
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
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#979188] rounded-full opacity-5 blur-3xl"
          initial={{ scale: 0, x: -100, y: 100 }}
          whileInView={{ scale: 1, x: 0, y: 0 }}
          viewport={{ once: false }}
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-[#000000] rounded-full opacity-3 blur-3xl"
          initial={{ scale: 0, rotate: 0 }}
          whileInView={{ scale: 1, rotate: 180 }}
          viewport={{ once: false }}
          animate={{
            rotate: [180, 360, 180],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </section>
  );
}