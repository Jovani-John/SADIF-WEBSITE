'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiAward, FiUsers, FiTrendingUp, FiTarget } from 'react-icons/fi';

export default function StorySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-[#ECE6E3] relative overflow-hidden">
      <div className="absolute top-20 right-10 w-64 h-64 bg-[#979188] opacity-5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#000000] opacity-5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">

          {/* Right Content */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "80px" } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="h-1 bg-[#000000] mb-6"
            />

            <h2 className="text-5xl md:text-6xl font-bold text-[#000000] mb-8 leading-tight">
              قصتنا
            </h2>

            <p className="text-xl text-[#000000] mb-6 leading-relaxed">
              نحن شركة استشارات هندسية سعودية ناشئة…
            </p>

            <p className="text-lg text-[#979188] leading-relaxed">
              يتكون فريقنا من مهندسين معماريين ومصممين…
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">
              {[
                { icon: FiAward, text: "تميز في التصميم" },
                { icon: FiUsers, text: "فريق محترف" },
                { icon: FiTrendingUp, text: "نمو مستدام" },
                { icon: FiTarget, text: "رؤية واضحة" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
                  className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <item.icon className="text-2xl text-[#979188]" />
                  <span className="font-medium text-[#000000]">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ✅ Left Image Grid — NOW USING IMAGES instead of colored blocks */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >

            <div className="grid grid-cols-2 gap-4">

              {/* Large Top Image */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="col-span-2 h-64 rounded-2xl overflow-hidden"
              >
                <img
                  src="/imags/1.jpg"
                  alt="About Top"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Bottom Left Image */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: -2 }}
                className="h-48 rounded-2xl overflow-hidden"
              >
                <img
                  src="/imags/2.jpg"
                  alt="About small 1"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Bottom Right Image */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="h-48 rounded-2xl overflow-hidden"
              >
                <img
                  src="/imags/3.jpg"
                  alt="About small 2"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ delay: 0.8, type: "spring" }}
              className="absolute -top-6 -right-6 bg-white rounded-full p-6 shadow-xl"
            >
              <div className="text-center">
                <div className="text-4xl font-bold text-[#000000]">+20</div>
                <div className="text-sm text-[#979188]">مشروع</div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
