'use client';

import { use, useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowLeft, FiMapPin, FiCalendar, FiLayers, FiX, FiPlus, FiMinus, FiImage } from 'react-icons/fi';
import { projects } from '@/data/projects';
import { useTranslations, useLocale } from 'next-intl';

interface PageProps {
  params: Promise<{ id: string }>;
}

// مكون الصورة المحسّن مع معالجة أخطاء بسيطة
const ProjectImageWithFallback = ({ 
  src, 
  alt, 
  className, 
  onLoad,
  priority = false,
  quality = 75,
  sizes = "100vw"
}: { 
  src: string; 
  alt: string; 
  className?: string;
  onLoad?: () => void;
  priority?: boolean;
  quality?: number;
  sizes?: string;
}) => {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div className={`${className} bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center`}>
        <FiImage className="w-8 h-8 text-gray-600" />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={`${className} object-cover`}
      loading={priority ? 'eager' : 'lazy'}
      priority={priority}
      quality={quality}
      sizes={sizes}
      onError={() => setImageError(true)}
      onLoad={onLoad}
    />
  );
};

// Placeholder بسيط وخفيف
const ImagePlaceholder = ({ className }: { className?: string }) => (
  <div className={`${className} absolute inset-0 bg-gray-200`}>
    <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300" />
  </div>
);

export default function ProjectDetailPage({ params }: PageProps) {
  const { id } = use(params);
  const project = projects.find((p) => p.id === id);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showAllImages, setShowAllImages] = useState(false);

  const t = useTranslations('ProjectDetail');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  if (!project) {
    notFound();
  }

  const relatedProjects = useMemo(() => 
    projects
      .filter(p => p.category === project.category && p.id !== project.id)
      .slice(0, 3),
    [project]
  );

  // عدد الصور المعروضة في البداية
  const initialImagesToShow = 6;

  // الصور المعروضة
  const displayedImages = useMemo(() => {
    return showAllImages ? project.images : project.images.slice(0, initialImagesToShow);
  }, [project.images, showAllImages]);

  const hasMoreImages = project.images.length > initialImagesToShow;
  const remainingImages = project.images.length - initialImagesToShow;

  // التحكم في عرض الصور
  const handleShowMore = () => {
    setShowAllImages(true);
  };

  const handleShowLess = () => {
    setShowAllImages(false);
    // التمرير إلى قسم المعرض
    setTimeout(() => {
      document.getElementById('gallery-section')?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);
  };

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-[#ECE6E3] overflow-x-hidden"
    >
      {/* Hero Section */}
      <section className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] bg-[#000000] overflow-hidden">
        <div className="absolute inset-0">
          <ImagePlaceholder />
          
          <motion.div
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full h-full"
          >
            <ProjectImageWithFallback
              src={project.image}
              alt={isRTL ? project.title : project.titleEn}
              priority={true}
              quality={85}
              sizes="100vw"
            />
          </motion.div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        </div>

        {/* Back Button */}
        <motion.div
          initial={{ x: isRTL ? 20 : -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className={`absolute top-16 sm:top-20 ${isRTL ? 'right-3 sm:right-4 md:right-6' : 'left-3 sm:left-4 md:left-6'} z-10`}
        >
          <Link
            href="/projects"
            scroll={false}
            className="flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-md text-white rounded-lg hover:bg-white/20 transition-colors text-xs sm:text-sm"
            aria-label={t('back')}
          >
            <FiArrowLeft className={`text-base sm:text-lg ${isRTL ? 'rotate-180' : ''}`} />
            <span style={{ fontFamily: 'Alexandria, sans-serif' }}>{t('back')}</span>
          </Link>
        </motion.div>

        {/* Project Title */}
        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6 lg:p-8 z-10">
          <div className="container mx-auto">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span 
                className="inline-block px-2 sm:px-3 py-1 bg-[#979188] text-white text-xs rounded-full mb-2 sm:mb-3"
                style={{ fontFamily: 'Alexandria, sans-serif' }}
              >
                {isRTL ? project.categoryAr : project.categoryEn}
              </span>
              
              <h1 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3"
                style={{ fontFamily: 'Alexandria, sans-serif' }}
              >
                {isRTL ? project.title : project.titleEn}
              </h1>
              
              <p 
                className="text-base sm:text-lg md:text-xl text-[#ECE6E3] mb-3 sm:mb-4"
                style={{ fontFamily: 'Alexandria, sans-serif' }}
              >
                {isRTL ? project.city : project.cityEn}
              </p>

              <div className="flex flex-wrap gap-2 sm:gap-3 text-white text-xs sm:text-sm">
                <div className="flex items-center gap-1.5">
                  <FiMapPin className="text-[#979188]" size={14} />
                  <span style={{ fontFamily: 'Alexandria, sans-serif' }}>
                    {isRTL ? project.city : project.cityEn}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <FiCalendar className="text-[#979188]" size={14} />
                  <span style={{ fontFamily: 'Alexandria, sans-serif' }}>{project.year}</span>
                </div>
                {project.area && (
                  <div className="flex items-center gap-1.5">
                    <FiLayers className="text-[#979188]" size={14} />
                    <span style={{ fontFamily: 'Alexandria, sans-serif' }}>{project.area}</span>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Details Section */}
      <section className="py-8 sm:py-10 md:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            
            {/* Description Card */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4 }}
              className="mb-8 sm:mb-10 md:mb-12"
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#979188] rounded-full" />
                <h2 
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#000000]"
                  style={{ fontFamily: 'Alexandria, sans-serif' }}
                >
                  {t('description')}
                </h2>
              </div>
              
              <div className="bg-white p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-lg">
                <p 
                  className="text-base sm:text-lg md:text-xl text-[#000000] mb-3 sm:mb-4 leading-relaxed"
                  style={{ fontFamily: 'Alexandria, sans-serif' }}
                >
                  {isRTL ? project.description : project.descriptionEn}
                </p>
                {project.details && (
                  <p 
                    className="text-sm sm:text-base text-[#979188] leading-relaxed"
                    style={{ fontFamily: 'Alexandria, sans-serif' }}
                  >
                    {isRTL ? project.details : project.detailsEn}
                  </p>
                )}
              </div>
            </motion.div>

            {/* Project Info Cards */}
            {(project.details || project.client) && (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4 }}
                className="mb-8 sm:mb-10 md:mb-12"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                  {project.details && (
                    <motion.div 
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                      className="bg-gradient-to-br from-white to-[#ECE6E3] p-4 sm:p-5 rounded-xl shadow-md border-r-2 border-[#979188]"
                    >
                      <h3 
                        className="text-lg sm:text-xl font-bold text-[#000000] mb-2 sm:mb-3"
                        style={{ fontFamily: 'Alexandria, sans-serif' }}
                      >
                        {t('projectDetails')}
                      </h3>
                      <p 
                        className="text-[#979188] text-xs sm:text-sm leading-relaxed"
                        style={{ fontFamily: 'Alexandria, sans-serif' }}
                      >
                        {isRTL ? project.details : project.detailsEn}
                      </p>
                    </motion.div>
                  )}

                  {project.client && (
                    <motion.div 
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                      className="bg-gradient-to-br from-white to-[#ECE6E3] p-4 sm:p-5 rounded-xl shadow-md border-r-2 border-[#979188]"
                    >
                      <h3 
                        className="text-lg sm:text-xl font-bold text-[#000000] mb-2 sm:mb-3"
                        style={{ fontFamily: 'Alexandria, sans-serif' }}
                      >
                        {t('client')}
                      </h3>
                      <p 
                        className="text-[#979188] text-xs sm:text-sm"
                        style={{ fontFamily: 'Alexandria, sans-serif' }}
                      >
                        {project.client}
                      </p>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            )}

            {/* Image Gallery */}
            <motion.div
              id="gallery-section"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4 }}
              className="mb-8 sm:mb-10 md:mb-12"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 mb-4 sm:mb-5">
                <div className="flex items-center gap-3 sm:gap-4">
                  <h2 
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#000000]"
                    style={{ fontFamily: 'Alexandria, sans-serif' }}
                  >
                    {t('gallery')}
                  </h2>
                </div>

                {/* Images Counter */}
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-full shadow-md">
                  <span 
                    className="text-xs text-[#979188]"
                    style={{ fontFamily: 'Alexandria, sans-serif' }}
                  >
                    {isRTL ? 
                      `${project.images.length} صورة` : 
                      `${project.images.length} images`
                    }
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {displayedImages.map((img, index) => {
                  const isLarge = index % 3 === 0;
                  const isMedium = index % 3 === 1;
                  const isPriority = index < 2; // فقط أول صورتين priority
                  
                  return (
                    <motion.div
                      key={`gallery-${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.1, margin: "50px" }}
                      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
                      whileHover={{ scale: 1.02, y: -4 }}
                      onClick={() => setSelectedImage(img)}
                      className={`relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg cursor-pointer
                        ${isLarge ? 'sm:col-span-2 h-[250px] sm:h-[300px] md:h-[400px]' : 
                          isMedium ? 'h-[200px] sm:h-[250px] md:h-[300px]' : 
                          'h-[220px] sm:h-[280px] md:h-[350px]'}
                      `}
                    >
                      <ImagePlaceholder />

                      <ProjectImageWithFallback
                        src={img}
                        alt={`${isRTL ? project.title : project.titleEn} - ${index + 1}`}
                        priority={isPriority}
                        quality={isPriority ? 80 : 70}
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                      
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end justify-start p-4 sm:p-5"
                      >
                        <motion.div
                          initial={{ y: 10, opacity: 0 }}
                          whileHover={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.2 }}
                          className="text-white"
                        >
                          <div className="text-2xl sm:text-3xl md:text-4xl font-bold opacity-30">
                            {index + 1}
                          </div>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Show More/Less Buttons */}
              {hasMoreImages && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-center mt-6 sm:mt-8"
                >
                  {!showAllImages ? (
                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleShowMore}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#979188] text-white rounded-full shadow-lg hover:bg-[#7a756e] transition-all text-sm"
                      style={{ fontFamily: 'Alexandria, sans-serif' }}
                    >
                      <FiPlus className="text-base" />
                      <span className="text-sm font-medium">
                        {isRTL ? 
                          `عرض ${remainingImages} صورة إضافية` : 
                          `Show ${remainingImages} More Images`
                        }
                      </span>
                    </motion.button>
                  ) : (
                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleShowLess}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#979188] border-2 border-[#979188] rounded-full shadow-lg hover:bg-gray-50 transition-all text-sm"
                      style={{ fontFamily: 'Alexandria, sans-serif' }}
                    >
                      <FiMinus className="text-base" />
                      <span className="text-sm font-medium">
                        {isRTL ? 'عرض أقل' : 'Show Less'}
                      </span>
                    </motion.button>
                  )}
                </motion.div>
              )}
            </motion.div>

          </div>
        </div>
      </section>

      {/* Related Projects Section */}
      {relatedProjects.length > 0 && (
        <section className="py-8 sm:py-10 md:py-12 bg-gradient-to-b from-white to-[#ECE6E3]">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="mb-6 sm:mb-8"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 md:gap-5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '60px' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="h-0.5 bg-[#979188]"
                />
                <h2 
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#000000] whitespace-nowrap"
                  style={{ fontFamily: 'Alexandria, sans-serif' }}
                >
                  {t('relatedProjects')}
                </h2>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="hidden sm:block h-px bg-gradient-to-l from-[#979188] to-transparent flex-1"
                />
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 max-w-5xl mx-auto">
              {relatedProjects.map((relatedProject, index) => (
                <motion.div
                  key={relatedProject.id}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Link href={`/projects/${relatedProject.id}`} scroll={false}>
                    <motion.div
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="group relative h-60 sm:h-64 md:h-72 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                    >
                      <ImagePlaceholder />
                      
                      <ProjectImageWithFallback
                        src={relatedProject.image}
                        alt={isRTL ? relatedProject.title : relatedProject.titleEn}
                        quality={70}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                      
                      <motion.div 
                        className="absolute inset-0 bg-[#979188]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                      
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 transform transition-transform duration-300 group-hover:translate-y-[-8px]">
                        <motion.div
                          initial={{ width: 0 }}
                          whileHover={{ width: '40px' }}
                          className="h-0.5 bg-[#979188] mb-2 sm:mb-3"
                        />
                        <h3 
                          className="text-lg sm:text-xl font-bold text-white mb-1"
                          style={{ fontFamily: 'Alexandria, sans-serif' }}
                        >
                          {isRTL ? relatedProject.title : relatedProject.titleEn}
                        </h3>
                        <p 
                          className="text-xs sm:text-sm text-[#ECE6E3]"
                          style={{ fontFamily: 'Alexandria, sans-serif' }}
                        >
                          {isRTL ? relatedProject.city : relatedProject.cityEn}, {relatedProject.year}
                        </p>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Image Zoom Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-3"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 90 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedImage(null)}
              className={`absolute top-3 sm:top-4 md:top-5 ${isRTL ? 'left-3 sm:left-4 md:left-5' : 'right-3 sm:right-4 md:right-5'} w-10 h-10 sm:w-11 sm:h-11 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors z-10`}
              aria-label={t('closeModal')}
            >
              <FiX className="text-lg sm:text-xl" />
            </motion.button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full max-w-6xl max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <ProjectImageWithFallback
                src={selectedImage}
                alt="Zoomed project image"
                className="object-contain rounded-lg sm:rounded-xl"
                priority={true}
                quality={90}
                sizes="100vw"
              />
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="absolute bottom-3 sm:bottom-4 md:bottom-5 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md px-3 sm:px-4 py-1.5 rounded-full"
            >
              <p 
                className="text-white text-xs sm:text-sm"
                style={{ fontFamily: 'Alexandria, sans-serif' }}
              >
                {t('closeModal')}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.main>
  );
}