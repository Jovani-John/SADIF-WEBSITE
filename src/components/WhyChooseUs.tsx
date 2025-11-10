'use client';

import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';

const reasons = [
  {
    title: 'رؤية إبداعية',
    titleEn: 'Creative Vision',
    desc: 'نحن نمزج بين الحس الفني والحلول العملية لخلق مساحات تجمع بين الجمال والوظيفة',
    icon: '✦',
  },
  {
    title: 'فريق متخصص',
    titleEn: 'Expert Team',
    desc: 'يتكون فريقنا من مهندسين معماريين ومصممين داخليين وخبراء في تصميم الحدائق ذوي خبرة واسعة',
    icon: '◆',
  },
  {
    title: 'منهج يركز على العميل',
    titleEn: 'Client-Centric',
    desc: 'نعمل عن كثب مع كل عميل لتخصيص تصاميمنا لتلبية احتياجاته وأهدافه الفريدة',
    icon: '●',
  },
  {
    title: 'الاستدامة',
    titleEn: 'Sustainability',
    desc: 'تصاميمنا تعطي الأولوية للاستدامة البيئية، باستخدام مواد صديقة للبيئة وحلول موفرة للطاقة',
    icon: '■',
  },
  {
    title: 'الاهتمام بالتفاصيل',
    titleEn: 'Attention to Detail',
    desc: 'نحن نهتم بكل جانب من جوانب التصميم، مما يضمن أن كل مشروع يتجاوز التوقعات',
    icon: '▲',
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section 
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
      style={{ backgroundColor: '#ece6e3' }}
    >
      {/* Animated Background Pattern */}
      <motion.div 
        className="absolute inset-0 opacity-[0.03]"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, #000 2px, transparent 2px),
              radial-gradient(circle at 80% 80%, #000 2px, transparent 2px),
              radial-gradient(circle at 40% 20%, #000 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px, 150px 150px, 80px 80px',
          }}
        />
      </motion.div>

      {/* Floating Geometric Shapes */}
      <motion.div
        className="absolute top-20 left-[10%] w-32 h-32 border-2 opacity-10"
        style={{ borderColor: '#979188' }}
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity,
          ease: "linear" 
        }}
      />
      
      <motion.div
        className="absolute bottom-32 right-[15%] w-24 h-24 opacity-10"
        style={{ backgroundColor: '#979188' }}
        animate={{ 
          rotate: [0, -360],
          y: [0, -30, 0]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />

      <motion.div 
        className="container mx-auto px-6 relative z-10"
        style={{ opacity }}
      >
        {/* Header */}
        <motion.div
          ref={titleRef}
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block relative mb-8"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="absolute -inset-4 border-2 border-black opacity-20"
              animate={{ 
                rotate: [0, 90, 180, 270, 360],
              }}
              transition={{ 
                duration: 20, 
                repeat: Infinity,
                ease: "linear" 
              }}
            />
            <h2 
              className="text-6xl md:text-7xl lg:text-8xl font-bold relative"
              style={{ fontFamily: 'Alexandria, sans-serif' }}
            >
              لماذا تختارنا
            </h2>
          </motion.div>

          <motion.div
            initial={{ width: 0 }}
            animate={isTitleInView ? { width: '100%' } : {}}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="h-px mx-auto mb-6"
            style={{ 
              maxWidth: '300px',
              background: 'linear-gradient(to right, transparent, #000, transparent)'
            }}
          />

          <motion.p
            className="text-2xl md:text-3xl font-light tracking-[0.3em] uppercase"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              color: '#979188'
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Why Choose Us
          </motion.p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="max-w-7xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 50
              }}
              className="mb-8 last:mb-0"
            >
              <motion.div
                className="group relative bg-white p-8 md:p-12 overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                style={{
                  clipPath: index % 2 === 0 
                    ? 'polygon(0 0, 100% 0, 98% 100%, 0 100%)'
                    : 'polygon(2% 0, 100% 0, 100% 100%, 0 100%)'
                }}
              >
                {/* Animated Background on Hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-5"
                  style={{ backgroundColor: '#000' }}
                  transition={{ duration: 0.3 }}
                />

                {/* Number & Icon */}
                <div className="flex items-start gap-8 mb-6">
                  <motion.div
                    className="relative"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.1 + 0.2,
                      type: "spring"
                    }}
                  >
                    <div 
                      className="w-20 h-20 flex items-center justify-center text-white text-3xl font-bold"
                      style={{ backgroundColor: '#000' }}
                    >
                      {(index + 1).toString().padStart(2, '0')}
                    </div>
                    <motion.div
                      className="absolute -bottom-2 -right-2 w-20 h-20 border-2"
                      style={{ borderColor: '#979188' }}
                      animate={{ 
                        rotate: [0, 90, 180, 270, 360],
                      }}
                      transition={{ 
                        duration: 10, 
                        repeat: Infinity,
                        ease: "linear",
                        delay: index * 0.5
                      }}
                    />
                  </motion.div>

                  {/* Large Icon */}
                  <motion.div
                    className="text-8xl md:text-9xl font-bold opacity-5 absolute top-4 right-8"
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 0.05 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                  >
                    {reason.icon}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="relative">
                  <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-start">
                    {/* Arabic Title */}
                    <motion.div
                      initial={{ x: -30, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                    >
                      <h3 
                        className="text-4xl md:text-5xl font-bold mb-3"
                        style={{ fontFamily: 'Alexandria, sans-serif' }}
                      >
                        {reason.title}
                      </h3>
                      <motion.div
                        className="h-1 bg-black mb-4"
                        initial={{ width: 0 }}
                        whileInView={{ width: '80px' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }}
                      />
                      <p 
                        className="text-lg uppercase tracking-widest"
                        style={{ 
                          fontFamily: 'Inter, sans-serif',
                          color: '#979188'
                        }}
                      >
                        {reason.titleEn}
                      </p>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                      className="text-xl leading-relaxed"
                      style={{ 
                        fontFamily: 'Alexandria, sans-serif',
                        color: '#979188'
                      }}
                      initial={{ x: 30, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.6 }}
                    >
                      {reason.desc}
                    </motion.p>
                  </div>
                </div>

                {/* Hover Line Effect */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-black"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.7 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Decorative Elements */}
        <motion.div
          className="mt-20 flex justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="w-3 h-3"
              style={{ backgroundColor: i === 2 ? '#000' : '#979188' }}
              animate={{ 
                scale: i === 2 ? [1, 1.5, 1] : 1,
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
} 