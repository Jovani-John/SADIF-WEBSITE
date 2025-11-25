"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";

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
  isMobile: boolean;
  isPreloaded?: boolean;
}

export default function ProjectsSection() {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState<Set<number>>(new Set());
  const t = useTranslations("ProjectsSection");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const projects: Project[] = [
    {
      id: 1,
      title: t("items.project1.title"),
      subtitle: t("items.project1.subtitle"),
      titleEn: t("items.project1.titleEn"),
      subtitleEn: t("items.project1.subtitleEn"),
      image: "/imags/Projects/architectural/ShoppingMallTobouk/1.jpg",
      number: "01",
    },
    {
      id: 2,
      title: t("items.project2.title"),
      subtitle: t("items.project2.subtitle"),
      titleEn: t("items.project2.titleEn"),
      subtitleEn: t("items.project2.subtitleEn"),
      image: "/imags/Projects/InteriorDesign/GYM/1.jpg",
      number: "02",
    },
    {
      id: 3,
      title: t("items.project3.title"),
      subtitle: t("items.project3.subtitle"),
      titleEn: t("items.project3.titleEn"),
      subtitleEn: t("items.project3.subtitleEn"),
      image: "/imags/Projects/InteriorDesign/BKGCC/1.jpg",
      number: "03",
    },
    {
      id: 4,
      title: t("items.project4.title"),
      subtitle: t("items.project4.subtitle"),
      titleEn: t("items.project4.titleEn"),
      subtitleEn: t("items.project4.subtitleEn"),
      image: "/imags/Projects/architectural/Signage/1.jpg",
      number: "04",
    },
  ];

  // تحسين الأداء باستخدام debounce لل resize
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkMobile, 100);
    };

    checkMobile();
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  // تحسين تحميل الصور
  useEffect(() => {
    const preloadImages = () => {
      projects.slice(0, 2).forEach((project) => {
        if (!imagesLoaded.has(project.id)) {
          const img = new Image();
          img.src = project.image;
          img.onload = () => {
            setImagesLoaded(prev => new Set(prev).add(project.id));
          };
        }
      });
    };
    
    preloadImages();
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // تقسيم النص للعربي والإنجليزي
  const getTitleLines = () => {
    const fullTitle = t("title");

    if (isRTL) {
      const words = fullTitle.split(" ");
      const firstLine = words.slice(0, 2).join(" ");
      const secondLine = words.slice(2).join(" ");
      return { firstLine, secondLine };
    } else {
      const words = fullTitle.split(" ");
      const midPoint = Math.ceil(words.length / 2);
      const firstLine = words.slice(0, midPoint).join(" ");
      const secondLine = words.slice(midPoint).join(" ");
      return { firstLine, secondLine };
    }
  };

  const { firstLine, secondLine } = getTitleLines();

  return (
    <div className="w-full overflow-x-hidden">
      {/* Title Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-white">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, #000 1px, transparent 1px),
                linear-gradient(to bottom, #000 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <motion.div
          className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-xs sm:text-sm md:text-3xl uppercase tracking-[0.2em] mb-3 sm:mb-4 lg:mb-6 font-medium text-[#979188]"
            style={{ fontFamily: "Inter, sans-serif" }}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {t("subtitle")}
          </motion.p>

          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-black leading-tight mb-4 sm:mb-6 lg:mb-8"
            style={{
              fontFamily: "Alexandria, sans-serif",
              lineHeight: "1.1",
              fontWeight: "900",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="block mb-1 sm:mb-2 lg:mb-3">{firstLine}</span>
            <span className="block">{secondLine}</span>
          </motion.h2>

          <motion.div
            className="mt-6 sm:mt-8"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >

          </motion.div>
        </motion.div>
      </section>

      {/* Projects Scroll Section */}
      <section
        ref={containerRef}
        className="relative bg-white w-full"
        style={{
          overflow: "hidden",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <style jsx>{`
          section::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        <div className="flex flex-col">
          {projects.map((project, index) => (
            <div key={project.id} className="min-h-screen relative w-full">
              <ProjectCard
                project={project}
                index={index}
                progress={scrollYProgress}
                range={[index / projects.length, (index + 1) / projects.length]}
                totalProjects={projects.length}
                isMobile={isMobile}
                isPreloaded={imagesLoaded.has(project.id)}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function ProjectCard({
  project,
  index,
  progress,
  range,
  totalProjects,
  isMobile,
  isPreloaded = false,
}: ProjectCardProps) {
  const [imageLoaded, setImageLoaded] = useState(isPreloaded);
  const t = useTranslations("ProjectsSection");
  const locale = useLocale();
  const isRTL = locale === "ar";
  const isLast = index === totalProjects - 1;
  const isFirst = index === 0;
  const isEven = index % 2 === 0;

  const fadeInStart = range[0];
  const fadeInEnd = range[0] + (isMobile ? 0.1 : 0.15);
  const stayStart = fadeInEnd;
  const stayEnd = range[1] - (isMobile ? 0.1 : 0.15);
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
    isMobile ? [1, 1, 1, 1] : [isFirst ? 1 : 0.85, 1, 1, isLast ? 1 : 0.85]
  );

  const y = useTransform(
    progress,
    [fadeInStart, fadeInEnd, stayEnd, fadeOutEnd],
    isMobile ? [0, 0, 0, 0] : [isFirst ? 0 : 100, 0, 0, isLast ? 0 : -100]
  );

  const smoothScale = useSpring(scale, {
    stiffness: isMobile ? 100 : 60,
    damping: isMobile ? 40 : 30,
  });
  const smoothY = useSpring(y, {
    stiffness: isMobile ? 100 : 60,
    damping: isMobile ? 40 : 30,
  });
  const smoothOpacity = useSpring(opacity, {
    stiffness: isMobile ? 100 : 60,
    damping: isMobile ? 40 : 30,
  });

  // تحديد ترتيب الصورة والنص بناءً على اللغة ورقم المشروع
  const getGridOrder = () => {
    if (isRTL) {
      return isEven ? "lg:grid-flow-dense" : "";
    } else {
      return isEven ? "" : "lg:grid-flow-dense";
    }
  };

  const getImageOrder = () => {
    if (isRTL) {
      return isEven ? "lg:col-start-2" : "lg:col-start-1";
    } else {
      return isEven ? "lg:col-start-1" : "lg:col-start-2";
    }
  };

  const getContentOrder = () => {
    if (isRTL) {
      return isEven ? "lg:col-start-1 lg:row-start-1" : "lg:col-start-2";
    } else {
      return isEven ? "lg:col-start-2" : "lg:col-start-1 lg:row-start-1";
    }
  };

  const getTextAlignment = () => {
    if (isRTL) {
      return isEven ? "text-right" : "text-right";
    } else {
      return isEven ? "text-left" : "text-left";
    }
  };

  const getAnimationDirection = (isContent: boolean = false) => {
    if (isMobile) return 0;

    if (isRTL) {
      if (isEven) {
        return isContent ? -50 : 50;
      } else {
        return isContent ? 50 : -50;
      }
    } else {
      if (isEven) {
        return isContent ? 50 : -50;
      } else {
        return isContent ? -50 : 50;
      }
    }
  };

  return (
    <motion.div
      className="relative flex items-center justify-center px-4 sm:px-6 lg:px-8 py-6 sm:py-10 min-h-screen w-full"
      style={{
        opacity: smoothOpacity,
        scale: smoothScale,
        y: smoothY,
      }}
    >
      <div className="w-full max-w-7xl mx-auto">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 xl:gap-12 items-center ${getGridOrder()}`}
        >
          {/* Image Side */}
          <motion.div
            className={`relative w-full aspect-[4/3] bg-gray-100 overflow-hidden ${getImageOrder()}`}
            initial={{ opacity: 0, x: getAnimationDirection(false) }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2, margin: "-50px" }}
            transition={{ duration: isMobile ? 0.4 : 0.6, ease: "easeOut" }}
          >
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse" />
            )}

            <img
              src={project.image}
              alt={isRTL ? project.title : project.titleEn}
              className={`w-full h-full object-cover transition-opacity duration-300 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
              loading={index < 2 ? "eager" : "lazy"}
              decoding="async"
              onLoad={() => setImageLoaded(true)}
              style={{
                contentVisibility: "auto",
              }}
            />

            <motion.div className="absolute inset-0 bg-black opacity-0 hover:opacity-10 transition-opacity duration-300" />
          </motion.div>

          {/* Content Side */}
          <div
            className={`space-y-3 sm:space-y-4 ${getContentOrder()} ${getTextAlignment()}`}
          >
            <motion.p
              className="text-2xl uppercase tracking-wider text-gray-500"
              style={{ fontFamily: "Inter, sans-serif" }}
              initial={{ opacity: 0, x: getAnimationDirection(true) }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2, margin: "-50px" }}
              transition={{ duration: isMobile ? 0.3 : 0.5, delay: 0.1 }}
            >
              {isRTL ? project.subtitle : project.subtitleEn}
            </motion.p>

            <motion.h3
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black leading-tight"
              style={{
                fontFamily: "Alexandria, sans-serif",
                lineHeight: "1.2",
              }}
              initial={{ opacity: 0, x: getAnimationDirection(true) }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2, margin: "-50px" }}
              transition={{ duration: isMobile ? 0.3 : 0.5, delay: 0.2 }}
            >
              {isRTL ? project.title : project.titleEn}
            </motion.h3>

            <motion.div
              className={`h-px bg-black w-10 sm:w-12 ${
                isRTL ? "mr-0" : "ml-0"
              }`}
              initial={{ width: 0, x: getAnimationDirection(true) }}
              whileInView={{ width: "3rem", x: 0 }}
              viewport={{ once: true, amount: 0.2, margin: "-50px" }}
              transition={{ duration: isMobile ? 0.4 : 0.6, delay: 0.3 }}
            />

            {isRTL && (
              <>
                <motion.h4
                  className="text-lg sm:text-xl md:text-2xl font-bold text-gray-600"
                  style={{
                    fontFamily: "Alexandria, sans-serif",
                    lineHeight: "1.4",
                  }}
                  initial={{ opacity: 0, y: isMobile ? 0 : 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2, margin: "-50px" }}
                  transition={{ duration: isMobile ? 0.3 : 0.5, delay: 0.4 }}
                >
                  {project.titleEn}
                </motion.h4>

                <motion.p
                  className="text-sm sm:text-base text-gray-600"
                  style={{
                    fontFamily: "Alexandria, sans-serif",
                    lineHeight: "1.5",
                  }}
                  initial={{ opacity: 0, x: getAnimationDirection(true) }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2, margin: "-50px" }}
                  transition={{ duration: isMobile ? 0.3 : 0.5, delay: 0.5 }}
                >
                  {project.subtitleEn}
                </motion.p>
              </>
            )}
          </div>
        </div>

        {/* Project Number & Navigation */}
        <motion.div
          className={`flex flex-col sm:flex-row items-center ${
            isRTL ? "justify-between" : "justify-between"
          } gap-4 mt-6 sm:mt-8`}
          initial={{ opacity: 0, y: isMobile ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2, margin: "-50px" }}
          transition={{ duration: isMobile ? 0.3 : 0.5, delay: 0.6 }}
        >
          <div
            className={`flex items-center gap-2 ${
              isRTL ? "flex-row-reverse" : ""
            }`}
          >
            <span
              className="text-2xl sm:text-3xl md:text-4xl font-bold"
              style={{ fontFamily: "Alexandria, sans-serif" }}
            >
              {project.number}
            </span>
            <span
              className="text-xl sm:text-2xl font-light text-gray-500"
              style={{ fontFamily: "Alexandria, sans-serif" }}
            >
              / 04
            </span>
          </div>

          <a 
            href="/projects" 
            className="group relative w-full sm:w-auto block"
            aria-label={t("allProjects")}
          >
            <motion.div
              whileHover={{ x: isRTL ? -2 : 2, y: -2 }}
              className="relative border border-black bg-black hover:bg-white text-white hover:text-black px-6 py-2 text-sm font-medium transition-all duration-200"
              style={{ fontFamily: "Alexandria, sans-serif" }}
            >
              <span className="flex items-center justify-center gap-1">
                {t("allProjects")}
                <span className="text-base">{isRTL ? "←" : "→"}</span>
              </span>
            </motion.div>
            <div className="absolute inset-0 border border-black translate-x-1 translate-y-1 -z-10" />
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}