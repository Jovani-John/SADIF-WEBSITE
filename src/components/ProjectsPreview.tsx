'use client';

import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import { useRef, useEffect } from 'react';

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

  return (
    <div className="w-full overflow-x-hidden">
      {/* Title Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-white">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
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
          className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl uppercase tracking-widest mb-4 sm:mb-6"
            style={{ fontFamily: 'Inter, sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            OUR PROJECTS
          </motion.p>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight"
            style={{ 
              fontFamily: 'Alexandria, sans-serif',
              lineHeight: '1.2'
            }}
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
            className="mt-8 sm:mt-12"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.div
              className="w-2 h-2 mx-auto bg-black rounded-full"
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
      <section ref={containerRef} className="relative bg-white w-full">
        <div className="flex flex-col">
          {projects.map((project, index) => (
            <div key={project.id} className="min-h-screen relative w-full">
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
    </div>
  );
}

function ProjectCard({ project, index, progress, range, totalProjects }: ProjectCardProps) {
  const isLast = index === totalProjects - 1;
  const isFirst = index === 0;
  const isEven = index % 2 === 0;

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

  const splitText = (text: string) => {
    return text.split(' ').map((word, i) => ({
      word: word,
      index: i
    }));
  };

  return (
    <motion.div
      className="relative flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 min-h-screen w-full"
      style={{
        opacity: smoothOpacity,
        scale: smoothScale,
        y: smoothY,
      }}
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center ${isEven ? '' : 'lg:grid-flow-dense'}`}>
          {/* Image Side */}
          <motion.div
            className={`relative w-full aspect-[4/3] bg-gray-100 overflow-hidden ${isEven ? '' : 'lg:col-start-2'}`}
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            
            <motion.div
              className="absolute inset-0 bg-black opacity-0 hover:opacity-10 transition-opacity duration-500"
            />
          </motion.div>

          {/* Content Side */}
          <div className={`space-y-4 sm:space-y-6 ${isEven ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
            <motion.p
              className="text-xs sm:text-sm uppercase tracking-widest text-gray-500"
              style={{ fontFamily: 'Inter, sans-serif' }}
              initial={{ opacity: 0, x: isEven ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {project.subtitleEn}
            </motion.p>

            <motion.h3
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight"
              style={{ 
                fontFamily: 'Alexandria, sans-serif',
                lineHeight: '1.2'
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {splitText(project.titleEn).map((item, i) => (
                <motion.span
                  key={i}
                  className="inline-block mr-2"
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
              className="h-px bg-black w-12 sm:w-16"
              initial={{ width: 0, x: isEven ? 50 : -50 }}
              whileInView={{ width: '4rem', x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />

            <motion.h4
              className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-600"
              style={{ 
                fontFamily: 'Alexandria, sans-serif',
                direction: 'rtl',
                lineHeight: '1.4'
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {splitText(project.title).map((item, i) => (
                <motion.span
                  key={i}
                  className="inline-block ml-2"
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
              className="text-base sm:text-lg text-gray-600"
              style={{ 
                fontFamily: 'Alexandria, sans-serif',
                direction: 'rtl',
                lineHeight: '1.6'
              }}
              initial={{ opacity: 0, x: isEven ? 50 : -50 }}
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
          className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-8 sm:mt-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <div className="flex items-center gap-3">
            <span className="text-4xl sm:text-5xl md:text-6xl font-bold" style={{ fontFamily: 'Alexandria, sans-serif' }}>
              {project.number}
            </span>
            <span className="text-2xl sm:text-3xl font-light text-gray-500" style={{ fontFamily: 'Alexandria, sans-serif' }}>
              / 04
            </span>
          </div>

          <a href="/projects" className="group relative w-full sm:w-auto block">
            <motion.div
              whileHover={{ x: 3, y: -3 }}
              className="relative border-2 border-black bg-black hover:bg-white text-white hover:text-black px-8 py-3 text-base font-medium transition-all duration-300"
              style={{ fontFamily: 'Alexandria, sans-serif' }}
            >
              <span className="flex items-center justify-center gap-2">
                جميع المشاريع
                <span className="text-lg">←</span>
              </span>
            </motion.div>
            <div className="absolute inset-0 border-2 border-black translate-x-1.5 translate-y-1.5 -z-10" />
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}