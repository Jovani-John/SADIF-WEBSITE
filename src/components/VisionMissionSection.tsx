'use client';
import { motion } from 'framer-motion';
import { FiTarget, FiTrendingUp } from 'react-icons/fi';

export default function VisionMissionSection() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, #979188 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-[#000000] mb-6">
            رؤيتنا ومهمتنا
          </h2>
          <div className="w-24 h-1 bg-[#979188] mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

          {/* Vision */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#000000] to-[#979188] rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform" />
            <div className="relative bg-[#000000] text-white p-12 rounded-3xl">

              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring" }}
                className="w-16 h-16 bg-[#979188] rounded-full flex items-center justify-center mb-6"
              >
                <FiTarget className="text-3xl text-white" />
              </motion.div>

              <h3 className="text-3xl font-bold mb-6">رؤيتنا</h3>

              <p className="text-lg leading-relaxed text-[#ECE6E3]">
                أن نكون الشركة الاستشارية الرائدة في المملكة العربية السعودية…
              </p>

              <div className="absolute top-4 right-4 w-20 h-20 border-t-2 border-r-2 border-[#979188] opacity-30" />
              <div className="absolute bottom-4 left-4 w-20 h-20 border-b-2 border-l-2 border-[#979188] opacity-30" />
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#979188] to-[#ECE6E3] rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-transform" />
            <div className="relative bg-white border-2 border-[#ECE6E3] p-12 rounded-3xl">

              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring" }}
                className="w-16 h-16 bg-[#000000] rounded-full flex items-center justify-center mb-6"
              >
                <FiTrendingUp className="text-3xl text-white" />
              </motion.div>

              <h3 className="text-3xl font-bold mb-6 text-[#000000]">مهمتنا</h3>

              <p className="text-lg leading-relaxed text-[#000000]">
                تقديم حلول تصميم عالية الجودة، مبتكرة ومستدامة…
              </p>

              <div className="absolute top-4 right-4 w-20 h-20 border-t-2 border-r-2 border-[#979188] opacity-20" />
              <div className="absolute bottom-4 left-4 w-20 h-20 border-b-2 border-l-2 border-[#979188] opacity-20 " />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
