'use client';

import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';

const stats = [
  { number: 50, label: 'مشروع منجز', suffix: '+' },
  { number: 30, label: 'عميل راضٍ', suffix: '+' },
  { number: 10, label: 'سنوات خبرة', suffix: '+' },
];

const values = [
  { 
    title: 'الإبداع',
    desc: 'نبتكر حلولاً تصميمية فريدة تتجاوز التوقعات',
  },
  { 
    title: 'الاستدامة',
    desc: 'نلتزم بتصاميم صديقة للبيئة ومستدامة',
  },
  { 
    title: 'الهوية الثقافية',
    desc: 'نحترم ونعكس الهوية السعودية في كل تصميم',
  },
  { 
    title: 'الجودة',
    desc: 'نسعى للتميز والاحترافية في كل مشروع',
  },
];

function AnimatedCounter({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isInView]);

  return <span ref={ref}>{count}</span>;
}

export default function AboutSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start center"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7], [0, 0.5, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7], [0.96, 0.98, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [60, 30, 0]);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen bg-white text-black py-24 z-10 overflow-hidden"
    >
      {/* خطوط خلفية ناعمة */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.02]">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(to right, #000 1px, transparent 1px),
              linear-gradient(to bottom, #000 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <motion.div 
        className="container mx-auto px-6 relative z-10"
        style={{ opacity, scale, y }}
      >
        {/* Hero Section - Split Layout */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-32 max-w-7xl mx-auto items-center">
          {/* الجانب الأيسر - العنوان */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              className="absolute -top-6 -right-6 w-24 h-24 border-2 border-black"
              animate={{ rotate: [0, 90, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            
            <h2 
              className="text-6xl md:text-7xl lg:text-8xl font-bold leading-none mb-8"
              style={{ fontFamily: 'Alexandria, sans-serif' }}
            >
              من نحن
            </h2>
            
            <div className="w-20 h-1 bg-black mb-8" />
            
            <p className="text-gray-500 text-lg uppercase tracking-widest">
              SADIF Consulting
            </p>
          </motion.div>

          {/* الجانب الأيمن - النص التعريفي */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-gray-50 p-10 lg:p-12">
              <div className="absolute top-0 left-0 w-4 h-4 bg-black" />
              <div className="absolute bottom-0 right-0 w-4 h-4 bg-black" />
              
              <p 
                className="text-xl lg:text-2xl text-gray-800 leading-relaxed"
                style={{ fontFamily: 'Alexandria, sans-serif' }}
              >
                نحن شركة استشارات هندسية سعودية ناشئة، مكرسة لتحويل مجالات الهندسة المعمارية والتصميم الداخلي وتصميم الحدائق في المملكة. يتكون فريقنا من مهندسين معماريين ومصممين ومستشارين ذوي خبرة، نقدم حلولاً من الطراز العالمي تمزج بين الإبداع والوظائف العملية.
              </p>
            </div>
          </motion.div>
        </div>

        {/* الإحصائيات - Diagonal Layout */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32 max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, backgroundColor: '#f9fafb' }}
                className="relative p-12 bg-white border border-gray-200 transition-all duration-300"
                style={{ 
                  transform: index === 1 ? 'translateY(20px)' : 'translateY(0)',
                }}
              >
                <div className="text-7xl font-bold mb-4 tracking-tight">
                  <AnimatedCounter end={stat.number} />
                  {stat.suffix}
                </div>
                <p 
                  className="text-gray-600 text-sm uppercase tracking-wider"
                  style={{ fontFamily: 'Alexandria, sans-serif' }}
                >
                  {stat.label}
                </p>
                
                <motion.div
                  className="absolute top-0 left-0 w-full h-1 bg-black"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* الرؤية - Full Width Offset */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32 max-w-7xl mx-auto"
        >
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <motion.div
              className="lg:col-span-4 lg:col-start-2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="sticky top-32">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-black flex items-center justify-center mb-6">
                    <div className="w-8 h-8 border-2 border-white" />
                  </div>
                </div>
                
                <div className="relative">
                  <h3 
                    className="text-5xl lg:text-6xl font-bold mb-3"
                    style={{ fontFamily: 'Alexandria, sans-serif' }}
                  >
                    رؤيتنا
                  </h3>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-2xl font-light text-gray-400 tracking-widest uppercase mb-6"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Our Vision
                  </motion.p>
                </div>
                
                <div className="w-12 h-1 bg-black" />
              </div>
            </motion.div>
            
            <motion.div
              className="lg:col-span-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gray-200" />
                <div className="relative bg-black text-white p-10 lg:p-14">
                  <p 
                    className="text-xl lg:text-2xl leading-relaxed"
                    style={{ fontFamily: 'Alexandria, sans-serif' }}
                  >
                    أن نكون الشركة الاستشارية الرائدة في المملكة العربية السعودية، والمعروفة بتقديم تصاميم معمارية، داخلية وتصاميم حدائق مبتكرة تمزج بين الإبداع والاستدامة والتمسك بالهوية الثقافية. نطمح إلى خلق مساحات تعزز حياة الأفراد وتشكّل مستقبل التصميم في المملكة.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* القيم - Masonry Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 max-w-7xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 relative"
          >
            <div className="flex items-end gap-8">
              <motion.h3 
                className="text-5xl lg:text-7xl font-bold"
                style={{ fontFamily: 'Alexandria, sans-serif' }}
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, type: "spring" }}
              >
                قيمنا
              </motion.h3>
              
              <motion.div
                className="relative overflow-hidden pb-3"
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: "auto", opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <motion.p 
                  className="text-3xl lg:text-4xl font-light text-gray-400 tracking-[0.3em] uppercase whitespace-nowrap"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  initial={{ x: -100 }}
                  whileInView={{ x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Our Values
                </motion.p>
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-black to-gray-300"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.8 }}
                />
              </motion.div>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.03,
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="group relative bg-white border-2 border-gray-200 hover:border-black p-10 transition-all duration-500 overflow-hidden"
                style={{
                  perspective: "1000px",
                  transformStyle: "preserve-3d"
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-gray-50 to-transparent opacity-0 group-hover:opacity-100"
                  initial={false}
                  transition={{ duration: 0.5 }}
                />
                
                <motion.div 
                  className="absolute top-4 right-4 text-8xl font-bold text-gray-100 select-none"
                  initial={{ scale: 0.8, rotate: -10 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {(index + 1).toString().padStart(2, '0')}
                </motion.div>
                
                <div className="relative">
                  <motion.div
                    className="w-12 h-12 mb-6 bg-black"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.15 + 0.3,
                      type: "spring"
                    }}
                    whileHover={{ rotate: 180 }}
                  >
                    <motion.div
                      className="w-full h-full flex items-center justify-center"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1
                      }}
                    >
                      <div className="w-6 h-6 border-2 border-white" />
                    </motion.div>
                  </motion.div>
                  
                  <motion.h4 
                    className="text-3xl font-bold mb-4"
                    style={{ fontFamily: 'Alexandria, sans-serif' }}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
                  >
                    {value.title}
                  </motion.h4>
                  
                  <motion.div 
                    className="h-0.5 bg-black mb-6"
                    initial={{ width: 0 }}
                    whileInView={{ width: 48 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.15 + 0.5 }}
                  />
                  
                  <motion.p 
                    className="text-gray-600 text-lg leading-relaxed"
                    style={{ fontFamily: 'Alexandria, sans-serif' }}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.6 }}
                  >
                    {value.desc}
                  </motion.p>
                </div>

                <motion.div
                  className="absolute bottom-0 left-0 w-1 bg-black"
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.15 + 0.7 }}
                />
                
                <motion.div
                  className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-black to-transparent opacity-0 group-hover:opacity-100"
                  initial={false}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-black to-transparent opacity-0 group-hover:opacity-100"
                  initial={false}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          <div className="flex justify-start lg:justify-end">
            <Link href="/about" className="group inline-block relative">
              <motion.div
                whileHover={{ x: 5, y: -5 }}
                className="relative border-2 border-black bg-black hover:bg-white text-white hover:text-black px-14 py-5 text-xl font-medium transition-all duration-300"
                style={{ fontFamily: 'Alexandria, sans-serif' }}
              >
                <span className="flex items-center gap-4">
                  اعرف المزيد عنا
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-2xl"
                  >
                    ←
                  </motion.span>
                </span>
              </motion.div>
              
              <div className="absolute inset-0 border-2 border-black translate-x-2 translate-y-2 -z-10" />
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}