'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useState, useMemo, useCallback, useRef } from 'react';
import { FiFilter, FiX, FiImage } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/data/projects';
import { useTranslations, useLocale } from 'next-intl';

// Component for handling image loading with fallback
const ProjectImage = ({ project, isPriority, className }: { 
  project: any; 
  isPriority: boolean;
  className?: string;
}) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageError = () => {
    console.error(`Failed to load image: ${project.image}`);
    setImageError(true);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  if (imageError) {
    return (
      <div className={`${className} bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center`}>
        <div className="text-center text-gray-600">
          <FiImage className="w-12 h-12 mx-auto mb-2" />
          <p className="text-sm">Failed to load image</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {!imageLoaded && (
        <div className={`${className} bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse absolute inset-0`} />
      )}
      <Image
        src={project.image}
        alt={project.locale === 'ar' ? project.title : project.titleEn}
        fill
        className={`${className} object-cover transition-transform duration-700 group-hover:scale-110 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        loading={isPriority ? 'eager' : 'lazy'}
        priority={isPriority}
        quality={isPriority ? 85 : 75}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        onError={handleImageError}
        onLoad={handleImageLoad}
      />
    </>
  );
};

const ProjectSkeleton = () => (
  <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl animate-pulse h-80" />
);

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilter, setShowFilter] = useState(false);
  const [retryKey, setRetryKey] = useState(0); // لإعادة تحميل الصور

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const t = useTranslations('ProjectsPage');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  // تأثير parallax للخلفية
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const smoothBackgroundY = useSpring(backgroundY, {
    stiffness: 100,
    damping: 30
  });

  const categories = useMemo(() => [
    { 
      id: 'all', 
      name: isRTL ? t('categories.all.nameAr') : t('categories.all.nameEn')
    },
    { 
      id: 'architectural', 
      name: isRTL ? t('categories.architectural.nameAr') : t('categories.architectural.nameEn')
    },
    { 
      id: 'interior', 
      name: isRTL ? t('categories.interior.nameAr') : t('categories.interior.nameEn')
    },
    { 
      id: 'landscape', 
      name: isRTL ? t('categories.landscape.nameAr') : t('categories.landscape.nameEn')
    }
  ], [t, isRTL]);

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.titleEn.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  // إعادة تحميل الصور
  const retryImages = () => {
    setRetryKey(prev => prev + 1);
  };

  // توزيع البطاقات بأنماط مختلفة
  const getProjectStyle = useCallback((index: number) => {
    const styles = [
      { 
        aspect: 'aspect-[4/3]', 
        animation: { 
          initial: { x: isRTL ? 100 : -100, y: 50, rotate: -5, opacity: 0 },
          animate: { x: 0, y: 0, rotate: 0, opacity: 1 }
        }
      },
      { 
        aspect: 'aspect-[3/4]', 
        animation: { 
          initial: { x: isRTL ? -100 : 100, y: 50, rotate: 5, opacity: 0 },
          animate: { x: 0, y: 0, rotate: 0, opacity: 1 }
        }
      },
      { 
        aspect: 'aspect-[16/9]', 
        animation: { 
          initial: { y: 100, scale: 0.8, opacity: 0 },
          animate: { y: 0, scale: 1, opacity: 1 }
        }
      },
      { 
        aspect: 'aspect-[1/1]', 
        animation: { 
          initial: { x: isRTL ? 80 : -80, y: -50, rotate: -3, opacity: 0 },
          animate: { x: 0, y: 0, rotate: 0, opacity: 1 }
        }
      },
      { 
        aspect: 'aspect-[2/3]', 
        animation: { 
          initial: { x: isRTL ? -80 : 80, y: -50, rotate: 3, opacity: 0 },
          animate: { x: 0, y: 0, rotate: 0, opacity: 1 }
        }
      }
    ];
    
    return styles[index % styles.length];
  }, [isRTL]);

  return (
    <main className="min-h-screen bg-[#ECE6E3] overflow-x-hidden" ref={containerRef}>
      {/* خلفية متحركة */}
      <motion.div 
        style={{ y: smoothBackgroundY }}
        className="fixed inset-0 pointer-events-none"
      >
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#979188] rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#000000] rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#979188] rounded-full blur-3xl" />
        </div>
      </motion.div>

      {/* Header Section */}
      <section className="relative pt-20 sm:pt-24 md:pt-28 pb-8 sm:pb-10 md:pb-12 bg-white/80 backdrop-blur-sm border-b border-[#ECE6E3]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 sm:gap-4">
            <motion.div 
              initial={{ x: isRTL ? 40 : -40, opacity: 0 }} 
              animate={{ x: 0, opacity: 1 }} 
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h1 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#000000]"
                style={{ fontFamily: 'Alexandria, sans-serif' }}
              >
                {t('pageTitle')}
              </h1>
              <motion.div 
                initial={{ width: 0 }} 
                animate={{ width: "60px" }} 
                transition={{ delay: 0.3, duration: 0.4 }} 
                className={`h-0.5 bg-[#979188] mt-2 sm:mt-3 ${isRTL ? 'mr-0' : 'ml-0'}`} 
              />
            </motion.div>

            <div className="flex gap-2">
              <motion.button
                initial={{ x: isRTL ? -40 : 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                onClick={retryImages}
                className="flex items-center gap-1.5 px-3 sm:px-4 py-2 bg-[#979188] text-white rounded-lg hover:bg-[#7a756e] transition-all duration-300 hover:scale-105 text-sm"
                aria-label="Retry loading images"
              >
                <FiImage className="text-base" />
                <span style={{ fontFamily: 'Alexandria, sans-serif' }}>Retry Images</span>
              </motion.button>

              <motion.button
                initial={{ x: isRTL ? -40 : 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                onClick={() => setShowFilter(!showFilter)}
                className="flex items-center gap-1.5 px-4 sm:px-5 py-2 bg-[#000000] text-white rounded-lg hover:bg-[#979188] transition-all duration-300 hover:scale-105 text-sm"
                aria-label={t('filter.title')}
              >
                <FiFilter className="text-base sm:text-lg" />
                <span style={{ fontFamily: 'Alexandria, sans-serif' }}>{t('filter.title')}</span>
              </motion.button>
            </div>
          </div>

          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: showFilter ? 'auto' : 0, opacity: showFilter ? 1 : 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="mt-4 sm:mt-5 p-3 sm:p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-[#ECE6E3]">
              <div className="mb-3 sm:mb-4">
                <label 
                  className="block text-xs font-medium text-[#000000] mb-1.5"
                  style={{ fontFamily: 'Alexandria, sans-serif' }}
                >
                  {t('filter.searchLabel')}
                </label>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder={t('filter.searchPlaceholder')}
                  className="w-full px-3 py-2 rounded-lg border border-[#979188] focus:border-[#000000] outline-none transition-colors text-sm bg-white/50"
                  style={{ fontFamily: 'Alexandria, sans-serif' }}
                />
              </div>

              <div>
                <label 
                  className="block text-xs font-medium text-[#000000] mb-2"
                  style={{ fontFamily: 'Alexandria, sans-serif' }}
                >
                  {t('filter.categoryLabel')}
                </label>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {categories.map((category) => (
                    <motion.button
                      key={category.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-medium transition-all duration-200 text-xs sm:text-sm ${
                        selectedCategory === category.id 
                          ? 'bg-[#000000] text-white shadow-lg' 
                          : 'bg-white text-[#000000] hover:bg-[#979188] hover:text-white shadow-sm'
                      }`}
                      style={{ fontFamily: 'Alexandria, sans-serif' }}
                      aria-label={`Filter by ${category.name}`}
                    >
                      {category.name}
                    </motion.button>
                  ))}
                </div>
              </div>

              {(searchTerm || selectedCategory !== 'all') && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }}
                  className="mt-2 flex items-center gap-1.5 text-[#979188] hover:text-[#000000] transition-colors text-xs sm:text-sm"
                  style={{ fontFamily: 'Alexandria, sans-serif' }}
                >
                  <FiX size={14} />
                  {t('filter.clearFilters')}
                </motion.button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative py-8 sm:py-10 md:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          {filteredProjects.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center py-12 sm:py-16"
            >
              <p 
                className="text-lg sm:text-xl text-[#979188]"
                style={{ fontFamily: 'Alexandria, sans-serif' }}
              >
                {t('noProjects')}
              </p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
              {filteredProjects.map((project, index) => {
                const style = getProjectStyle(index);
                const isPriority = index < 6;

                return (
                  <motion.div
                    key={`${project.id}-${retryKey}`} // إضافة retryKey لإعادة التحميل
                    initial={style.animation.initial}
                    whileInView={style.animation.animate}
                    viewport={{ 
                      once: false,
                      amount: 0.2,
                      margin: "100px"
                    }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.1,
                      ease: "easeOut"
                    }}
                    whileHover={{ 
                      y: -8,
                      scale: 1.02,
                      transition: { duration: 0.3 }
                    }}
                    className="group"
                  >
                    <Link href={`/projects/${project.id}`} scroll={false} prefetch={isPriority}>
                      <div className={`relative ${style.aspect} overflow-hidden cursor-pointer rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500`}>
                        
                        {/* Project Image مع Handle للتحميل */}
                        <div className="absolute inset-0">
                          <ProjectImage 
                            project={project} 
                            isPriority={isPriority}
                            className="absolute inset-0"
                          />
                          
                          {/* Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
                          
                          {/* Shine Effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                        </div>

                        {/* Project Info Overlay */}
                        <div className="absolute inset-0 p-4 sm:p-5 md:p-6 flex flex-col justify-end">
                          
                          {/* Category Badge */}
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ delay: 0.2 }}
                            className="mb-2 sm:mb-3"
                          >
                            <span 
                              className="inline-block px-2 sm:px-3 py-1 bg-[#979188] text-white text-xs uppercase tracking-wider font-medium rounded-full shadow-lg"
                              style={{ fontFamily: 'Alexandria, sans-serif' }}
                            >
                              {isRTL ? project.categoryAr : project.categoryEn}
                            </span>
                          </motion.div>

                          {/* Project Title */}
                          <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ delay: 0.3 }}
                            className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-[#979188] transition-colors duration-300 leading-tight"
                            style={{ fontFamily: 'Alexandria, sans-serif' }}
                          >
                            {isRTL ? project.title : project.titleEn}
                          </motion.h3>

                          {/* Location */}
                          <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ delay: 0.4 }}
                            className="text-xs sm:text-sm text-[#ECE6E3] mb-2"
                            style={{ fontFamily: 'Alexandria, sans-serif' }}
                          >
                            {isRTL ? project.city : project.cityEn}
                          </motion.p>

                          {/* Project Details */}
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ delay: 0.5 }}
                            className="flex items-center gap-2 text-xs text-[#ECE6E3]"
                            style={{ fontFamily: 'Alexandria, sans-serif' }}
                          >
                            <span>{project.year}</span>
                            {project.area && (
                              <>
                                <span className="w-1 h-1 bg-[#979188] rounded-full"></span>
                                <span>{project.area}</span>
                              </>
                            )}
                          </motion.div>

                          {/* Animated Underline */}
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "40px" }}
                            viewport={{ once: false }}
                            transition={{ delay: 0.6, duration: 0.4 }}
                            className="h-0.5 bg-[#979188] mt-2 group-hover:w-16 transition-all duration-300"
                          />
                        </div>

                        {/* Hover Effect Border */}
                        <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#979188] rounded-2xl transition-all duration-500" />
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}