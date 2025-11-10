'use client';

import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import { useRef, useEffect } from 'react';
import Link from 'next/link';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  titleEn: string;
  subtitleEn: string;
  image: string;
  number: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  progress: MotionValue<number>;
  range: [number, number];
  totalProjects: number;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'تحويل صالة عرض إلى متحف',
    subtitle: 'متحف مرسيدس بنز',
    titleEn: 'TURN A SHOWROOM INTO A MUSEUM',
    subtitleEn: 'MERCEDES-BENZ MUSEUM',
    image: '/imags/1.jpg',
    number: '01'
  },
  {
    id: 2,
    title: 'فيلا سكنية معاصرة',
    subtitle: 'الرياض، المملكة العربية السعودية',
    titleEn: 'CONTEMPORARY RESIDENTIAL VILLA',
    subtitleEn: 'RIYADH, SAUDI ARABIA',
    image: '/imags/2.jpg',
    number: '02'
  },
  {
    id: 3,
    title: 'تصميم داخلي فاخر',
    subtitle: 'مكتب تنفيذي',
    titleEn: 'LUXURY INTERIOR DESIGN',
    subtitleEn: 'EXECUTIVE OFFICE',
    image: '/imags/3.jpg',
    number: '03'
  },
  {
    id: 4,
    title: 'تصميم حدائق مستدام',
    subtitle: 'منتجع سياحي',
    titleEn: 'SUSTAINABLE LANDSCAPE DESIGN',
    subtitleEn: 'TOURIST RESORT',
    image: '/imags/4.jpg',
    number: '04'
  },
];

export default function ProjectsSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // إضافة smooth scroll للصفحة
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      html {
        scroll-behavior: smooth;
      }
      body {
        overscroll-behavior-y: none;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      {/* Title Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" 
            style={{
              backgroundImage: `
                linear-gradient(to right, #000 1px, transparent 1px),
                linear-gradient(to bottom, #000 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        <motion.div 
          className="container mx-auto px-6 text-center relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.p
            className="text-3xl md:text-4xl uppercase tracking-[0.3em] mb-8"
            style={{ fontFamily: 'Inter, sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            OUR PROJECTS
          </motion.p>

          <motion.h2
            className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-none"
            style={{ fontFamily: 'Alexandria, sans-serif' }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            WE SAW THE
            <br />
            OPPORTUNITY TO 
          </motion.h2>

          <motion.div
            className="mt-12"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.div
              className="w-2 h-2  mx-auto"
              animate={{ 
                scale: [1, 1.5, 1],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
              }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Projects Scroll Section */}
      <section ref={containerRef} className="relative bg-white">
        <div className="flex flex-col">
          {projects.map((project, index) => (
            <div key={project.id} className="min-h-screen relative">
              <ProjectCard
                project={project}
                index={index}
                progress={scrollYProgress}
                range={[index / projects.length, (index + 1) / projects.length]}
                totalProjects={projects.length}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function ProjectCard({ project, index, progress, range, totalProjects }: ProjectCardProps) {
  const isLast = index === totalProjects - 1;
  const isFirst = index === 0;
  const isEven = index % 2 === 0; // لتحديد اتجاه الأنيميشن

  const fadeInStart = range[0];
  const fadeInEnd = range[0] + 0.15;
  const stayStart = fadeInEnd;
  const stayEnd = range[1] - 0.15;
  const fadeOutStart = stayEnd;
  const fadeOutEnd = range[1];

  const opacity = useTransform(
    progress,
    [fadeInStart, fadeInEnd, stayStart, stayEnd, fadeOutStart, fadeOutEnd],
    [isFirst ? 1 : 0, 1, 1, 1, isLast ? 1 : 1, isLast ? 1 : 0]
  );

  const scale = useTransform(
    progress,
    [fadeInStart, fadeInEnd, stayEnd, fadeOutEnd],
    [isFirst ? 1 : 0.85, 1, 1, isLast ? 1 : 0.85]
  );

  const y = useTransform(
    progress,
    [fadeInStart, fadeInEnd, stayEnd, fadeOutEnd],
    [isFirst ? 0 : 100, 0, 0, isLast ? 0 : -100]
  );

  const smoothScale = useSpring(scale, { stiffness: 60, damping: 30 });
  const smoothY = useSpring(y, { stiffness: 60, damping: 30 });
  const smoothOpacity = useSpring(opacity, { stiffness: 60, damping: 30 });

  // دالة لتقسيم النص لكلمات بدل الحروف
  const splitText = (text: string) => {
    return text.split(' ').map((word, i) => ({
      word: word,
      index: i
    }));
  };

  return (
    <motion.div
      className="relative flex items-center justify-center p-6 md:p-12 min-h-screen"
      style={{
        opacity: smoothOpacity,
        scale: smoothScale,
        y: smoothY,
      }}
    >
      <div className="w-full max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image Side */}
          <motion.div
            className="relative aspect-[4/3] bg-gray-100 overflow-hidden"
            initial={{ opacity: 0, x: isEven ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-white">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <motion.div
              className="absolute inset-0 bg-black opacity-0 hover:opacity-10 transition-opacity duration-500"
            />
          </motion.div>

          {/* Content Side */}
          <div className="space-y-6 lg:space-y-8">
            <motion.p
              className="text-xs md:text-sm uppercase tracking-[0.3em]"
              style={{ fontFamily: 'Inter, sans-serif', color: '#979188' }}
              initial={{ opacity: 0, x: isEven ? 100 : -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {project.subtitleEn}
            </motion.p>

            <motion.h3
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight"
              style={{ fontFamily: 'Alexandria, sans-serif' }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {splitText(project.titleEn).map((item, i) => (
                <motion.span
                  key={i}
                  style={{ display: 'inline-block', marginRight: '0.3em' }}
                  variants={{
                    hidden: { opacity: 0, x: isEven ? 50 : -50 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.05 }}
                >
                  {item.word}
                </motion.span>
              ))}
            </motion.h3>

            <motion.div
              className="h-px bg-black"
              style={{ width: '80px' }}
              initial={{ width: 0, x: isEven ? 100 : -100 }}
              whileInView={{ width: '80px', x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />

            <motion.h4
              className="text-2xl md:text-3xl lg:text-4xl font-bold"
              style={{ fontFamily: 'Alexandria, sans-serif', color: '#979188', direction: 'rtl' }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {splitText(project.title).map((item, i) => (
                <motion.span
                  key={i}
                  style={{ display: 'inline-block', marginLeft: '0.3em' }}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.03 }}
                >
                  {item.word}
                </motion.span>
              ))}
            </motion.h4>

            <motion.p
              className="text-lg md:text-xl"
              style={{ fontFamily: 'Alexandria, sans-serif', color: '#979188', direction: 'rtl' }}
              initial={{ opacity: 0, x: isEven ? 100 : -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {project.subtitle}
            </motion.p>
          </div>
        </div>

        {/* Project Number & Navigation */}
        <motion.div
          className="flex items-center justify-between mt-12 lg:mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <div className="flex items-center gap-4">
            <span className="text-5xl md:text-6xl font-bold" style={{ fontFamily: 'Alexandria, sans-serif' }}>
              {project.number}
            </span>
            <span className="text-2xl md:text-3xl font-light" style={{ fontFamily: 'Alexandria, sans-serif', color: '#979188' }}>
              / 04
            </span>
          </div>

          <Link href="/projects" className="group relative">
            <motion.div
              whileHover={{ x: 5, y: -5 }}
              className="relative border-2 border-black bg-black hover:bg-white text-white hover:text-black px-8 md:px-10 py-3 md:py-4 text-base md:text-lg font-medium transition-all duration-300"
              style={{ fontFamily: 'Alexandria, sans-serif' }}
            >
              <span className="flex items-center gap-3">
                جميع المشاريع
                <span className="text-xl">←</span>
              </span>
            </motion.div>
            <div className="absolute inset-0 border-2 border-black translate-x-2 translate-y-2 -z-10" />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}