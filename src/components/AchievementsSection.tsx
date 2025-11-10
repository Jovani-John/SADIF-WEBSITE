'use client';
import { motion } from 'framer-motion';

const services = [
  {
    titleAr: "التصميم المعماري",
    titleEn: "Architectural Design",
    desc: "إنشاء تصاميم معمارية وظيفية وجمالية ومبتكرة للمباني السكنية والتجارية والعامة",
    image: "/imags/1.jpg" // حط اسم الصورة من public/images
  },
  {
    titleAr: "التصميم الداخلي",
    titleEn: "Interior Design",
    desc: "تقديم حلول تصميم داخلي تستغل المساحات بشكل مثالي، وتعزز الجماليات",
    image: "/imags/2.jpg"
  },
  {
    titleAr: "تصميم الحدائق",
    titleEn: "Landscape Design",
    desc: "تصميم المساحات الخارجية التي تتكامل بسلاسة مع البيئة، مع تعزيز الاستدامة",
    image: "/imags/3.jpg"
  }
];

export default function AchievementsSection() {
  return (
    <section className="py-20 bg-[#ECE6E3] relative overflow-hidden">
      {/* Decorative Elements تم إزالتها لأنها بقت صور */}
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 1 }}
            className="w-20 h-20 border-4 border-[#000000] rounded-full mx-auto mb-8 flex items-center justify-center"
          >
            <div className="w-10 h-10 bg-[#979188] rounded-full" />
          </motion.div>

          <h2 
            className="text-5xl md:text-6xl font-bold text-[#000000] mb-4"
            style={{ fontFamily: 'Alexandria, sans-serif' }}
          >
            إنجازاتنا
          </h2>

          <p 
            className="text-xl text-[#979188] mb-6"
            style={{ fontFamily: 'Alexandria, sans-serif' }}
          >
            Our Achievements
          </p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "150px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 bg-[#979188] mx-auto"
          />
        </motion.div>

        {/* Services Grid Layout */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, type: "spring" }}
              whileHover={{ y: -15, scale: 1.03 }}
              className="group relative"
            >
              {/* Service Card */}
              <div className="relative bg-white rounded-2xl p-6 shadow-xl border-2 border-[#ECE6E3] group-hover:border-[#979188] transition-all h-full">
                
                {/* Dot Indicator */}
                <motion.div
                  whileHover={{ scale: 1.3 }}
                  className="absolute -top-3 -right-3 w-8 h-8 bg-[#979188] rounded-full border-4 border-white shadow-lg flex items-center justify-center z-10"
                >
                  <div className="w-2 h-2 bg-white rounded-full" />
                </motion.div>

                {/* Image Placeholder بدل الخلفية البيج */}
                <div className="w-full h-40 rounded-xl mb-4 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.titleAr} 
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 
                  className="text-2xl font-bold text-[#000000] mb-2 text-center"
                  style={{ fontFamily: 'Alexandria, sans-serif' }}
                >
                  {service.titleAr}
                </h3>

                <p 
                  className="text-sm text-[#979188] mb-3 text-center font-medium"
                  style={{ fontFamily: 'Alexandria, sans-serif' }}
                >
                  {service.titleEn}
                </p>

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "60px" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.2 }}
                  className="h-0.5 bg-[#979188] mx-auto mb-3"
                />

                <p 
                  className="text-sm text-[#000000] text-center leading-relaxed"
                  style={{ fontFamily: 'Alexandria, sans-serif' }}
                >
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5 }}
          className="text-center mt-12"
        >
          <p 
            className="text-2xl text-[#000000] font-bold"
            style={{ fontFamily: 'Alexandria, sans-serif' }}
          >
            +20 مشروع منجز في كل مجال
          </p>
          <p 
            className="text-lg text-[#979188] mt-2"
            style={{ fontFamily: 'Alexandria, sans-serif' }}
          >
            Completed over 20 projects in each field
          </p>
        </motion.div>
      </div>
    </section>
  );
}
