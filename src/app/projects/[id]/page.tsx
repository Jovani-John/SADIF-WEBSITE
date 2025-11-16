// src/app/projects/[id]/page.tsx
'use client';

import { use, useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowLeft, FiMapPin, FiCalendar, FiLayers, FiX } from 'react-icons/fi';
import { projects } from '@/data/projects';

interface PageProps {
  params: Promise<{ id: string }>;
}

// Skeleton Component for loading images
const ImageSkeleton = ({ className }: { className: string }) => (
  <div className={`${className} bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse rounded-2xl`} />
);

// Throttle helper function
function throttle<T extends (...args: any[]) => any>(func: T, wait: number): T {
  let timeout: NodeJS.Timeout | null = null;
  return ((...args: Parameters<T>) => {
    if (!timeout) {
      timeout = setTimeout(() => {
        func(...args);
        timeout = null;
      }, wait);
    }
  }) as T;
}

export default function ProjectDetailPage({ params }: PageProps) {
  const { id } = use(params);
  const project = projects.find((p) => p.id === id);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [visibleImages, setVisibleImages] = useState(6); // Load 6 images initially
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  if (!project) {
    notFound();
  }

  // Memoize related projects
  const relatedProjects = useMemo(() => 
    projects
      .filter(p => p.category === project.category && p.id !== project.id)
      .slice(0, 3),
    [project]
  );

  // Preload critical images (hero + first 2 gallery images)
  useEffect(() => {
    const preloadImage = (src: string, key: string) => {
      const img = new window.Image();
      img.src = src;
      img.onload = () => {
        setLoadedImages(prev => new Set(prev).add(key));
      };
      img.onerror = () => {
        console.error(`Failed to load image: ${src}`);
      };
    };

    // Preload hero image
    preloadImage(project.image, 'hero');
    
    // Preload first 2 gallery images
    project.images.slice(0, 2).forEach((img, i) => {
      preloadImage(img, `gallery-${i}`);
    });
  }, [project]);

  // Infinite scroll for gallery images
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      
      if (
        scrollPosition >= documentHeight - 1000 &&
        visibleImages < project.images.length
      ) {
        setVisibleImages(prev => Math.min(prev + 4, project.images.length));
      }
    };

    const throttledScroll = throttle(handleScroll, 200);
    window.addEventListener('scroll', throttledScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, [visibleImages, project.images.length]);

  // Handle image load callback
  const handleImageLoad = useCallback((key: string) => {
    setLoadedImages(prev => new Set(prev).add(key));
  }, []);

  // Get displayed images (lazy loaded)
  const displayedImages = useMemo(() => 
    project.images.slice(0, visibleImages),
    [project.images, visibleImages]
  );

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-[#ECE6E3] overflow-x-hidden"
    >
      {/* Hero Section with Optimized Image */}
      <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] bg-[#000000] overflow-hidden">
        <div className="absolute inset-0">
          {/* Loading Skeleton for Hero */}
          {!loadedImages.has('hero') && (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 animate-pulse" />
          )}
          
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full h-full"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className={`object-cover transition-opacity duration-500 ${
                loadedImages.has('hero') ? 'opacity-100' : 'opacity-0'
              }`}
              priority
              quality={90}
              sizes="100vw"
              onLoad={() => handleImageLoad('hero')}
            />
          </motion.div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        </div>

        {/* Back Button */}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="absolute top-20 sm:top-24 left-4 sm:left-6 md:left-8 z-10"
        >
          <Link
            href="/projects"
            scroll={false}
            className="flex items-center gap-2 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-white/10 backdrop-blur-md text-white rounded-lg hover:bg-white/20 transition-colors text-sm sm:text-base"
          >
            <FiArrowLeft className="text-lg sm:text-xl" />
            <span style={{ fontFamily: 'Alexandria, sans-serif' }}>العودة</span>
          </Link>
        </motion.div>

        {/* Project Title */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 lg:p-12 z-10">
          <div className="container mx-auto">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {/* Category Badge */}
              <span 
                className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#979188] text-white text-xs sm:text-sm rounded-full mb-3 sm:mb-4"
                style={{ fontFamily: 'Alexandria, sans-serif' }}
              >
                {project.categoryAr}
              </span>
              
              {/* Title */}
              <h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 sm:mb-4"
                style={{ fontFamily: 'Alexandria, sans-serif' }}
              >
                {project.title}
              </h1>
              
              {/* English Title */}
              <p 
                className="text-lg sm:text-xl md:text-2xl text-[#ECE6E3] mb-4 sm:mb-6"
                style={{ fontFamily: 'Alexandria, sans-serif' }}
              >
                {project.titleEn}
              </p>

              {/* Project Meta Info */}
              <div className="flex flex-wrap gap-4 sm:gap-6 text-white text-sm sm:text-base">
                <div className="flex items-center gap-2">
                  <FiMapPin className="text-[#979188]" />
                  <span style={{ fontFamily: 'Alexandria, sans-serif' }}>
                    {project.city} / {project.cityEn}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCalendar className="text-[#979188]" />
                  <span style={{ fontFamily: 'Alexandria, sans-serif' }}>{project.year}</span>
                </div>
                {project.area && (
                  <div className="flex items-center gap-2">
                    <FiLayers className="text-[#979188]" />
                    <span style={{ fontFamily: 'Alexandria, sans-serif' }}>{project.area}</span>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Details Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            
            {/* Description Card */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4 }}
              className="mb-12 sm:mb-16 md:mb-20"
            >
              <div className="flex items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="w-2 sm:w-3 h-2 sm:h-3 bg-[#979188] rounded-full" />
                <h2 
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#000000]"
                  style={{ fontFamily: 'Alexandria, sans-serif' }}
                >
                  نبذة عن المشروع
                </h2>
              </div>
              
              <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-xl">
                <p 
                  className="text-lg sm:text-xl md:text-2xl text-[#000000] mb-4 sm:mb-6 leading-relaxed"
                  style={{ fontFamily: 'Alexandria, sans-serif' }}
                >
                  {project.description}
                </p>
                <p 
                  className="text-base sm:text-lg text-[#979188] leading-relaxed"
                  style={{ fontFamily: 'Alexandria, sans-serif' }}
                >
                  {project.descriptionEn}
                </p>
              </div>
            </motion.div>

            {/* Project Info Cards */}
            {(project.details || project.client) && (
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4 }}
                className="mb-12 sm:mb-16 md:mb-20"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  {project.details && (
                    <motion.div 
                      whileHover={{ y: -3, scale: 1.01 }}
                      transition={{ duration: 0.2 }}
                      className="bg-gradient-to-br from-white to-[#ECE6E3] p-6 sm:p-8 rounded-2xl shadow-lg border-r-4 border-[#979188]"
                    >
                      <h3 
                        className="text-xl sm:text-2xl font-bold text-[#000000] mb-3 sm:mb-4"
                        style={{ fontFamily: 'Alexandria, sans-serif' }}
                      >
                        تفاصيل المشروع
                      </h3>
                      <p 
                        className="text-[#979188] mb-2 text-sm sm:text-base"
                        style={{ fontFamily: 'Alexandria, sans-serif' }}
                      >
                        {project.details}
                      </p>
                      {project.detailsEn && (
                        <p 
                          className="text-xs sm:text-sm text-[#979188]"
                          style={{ fontFamily: 'Alexandria, sans-serif' }}
                        >
                          {project.detailsEn}
                        </p>
                      )}
                    </motion.div>
                  )}

                  {project.client && (
                    <motion.div 
                      whileHover={{ y: -3, scale: 1.01 }}
                      transition={{ duration: 0.2 }}
                      className="bg-gradient-to-br from-white to-[#ECE6E3] p-6 sm:p-8 rounded-2xl shadow-lg border-r-4 border-[#979188]"
                    >
                      <h3 
                        className="text-xl sm:text-2xl font-bold text-[#000000] mb-3 sm:mb-4"
                        style={{ fontFamily: 'Alexandria, sans-serif' }}
                      >
                        العميل
                      </h3>
                      <p 
                        className="text-[#979188] text-sm sm:text-base"
                        style={{ fontFamily: 'Alexandria, sans-serif' }}
                      >
                        {project.client}
                      </p>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            )}

            {/* Image Gallery with Lazy Loading */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4 }}
              className="mb-12 sm:mb-16 md:mb-20"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="flex items-center gap-4 sm:gap-6">
                  <h2 
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#000000]"
                    style={{ fontFamily: 'Alexandria, sans-serif' }}
                  >
                    معرض الصور
                  </h2>
                  <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="w-8 h-8 sm:w-10 sm:h-10 border-4 border-[#979188] border-t-transparent rounded-full"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {displayedImages.map((img, index) => {
                  const isLarge = index % 3 === 0;
                  const isMedium = index % 3 === 1;
                  const isPriority = index < 2;
                  const imageKey = `gallery-${index}`;
                  
                  return (
                    <motion.div
                      key={`${img}-${index}`}
                      initial={{ x: index % 2 === 0 ? -30 : 30, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true, amount: 0.1, margin: "200px" }}
                      transition={{ duration: 0.4, delay: (index % 2) * 0.1 }}
                      whileHover={{ scale: 1.02, y: -5 }}
                      onClick={() => setSelectedImage(img)}
                      className={`relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl cursor-pointer
                        ${isLarge ? 'sm:col-span-2 h-[300px] sm:h-[400px] md:h-[500px]' : 
                          isMedium ? 'h-[250px] sm:h-[300px] md:h-[350px]' : 
                          'h-[280px] sm:h-[350px] md:h-[400px]'}
                      `}
                      style={{ contentVisibility: 'auto' }}
                    >
                      {/* Loading Skeleton */}
                      {!loadedImages.has(imageKey) && (
                        <ImageSkeleton className="absolute inset-0" />
                      )}

                      <Image
                        src={img}
                        alt={`${project.title} - ${index + 1}`}
                        fill
                        className={`object-cover transition-all duration-500 ${
                          loadedImages.has(imageKey) ? 'opacity-100' : 'opacity-0'
                        }`}
                        loading={isPriority ? 'eager' : 'lazy'}
                        priority={isPriority}
                        quality={isPriority ? 85 : 75}
                        sizes="(max-width: 640px) 100vw, 50vw"
                        onLoad={() => handleImageLoad(imageKey)}
                      />
                      
                      {/* Hover Overlay */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-start p-6 sm:p-8"
                      >
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          whileHover={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          className="text-white"
                        >
                          <div className="text-4xl sm:text-5xl md:text-6xl font-bold opacity-30">
                            {index + 1}
                          </div>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Load More Indicator */}
              {visibleImages < project.images.length && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center mt-8 sm:mt-12"
                >
                  <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-lg">
                    <div className="w-2 h-2 bg-[#979188] rounded-full animate-pulse" />
                    <span className="text-sm text-[#979188]" style={{ fontFamily: 'Alexandria, sans-serif' }}>
                      جاري تحميل المزيد من الصور... ({visibleImages}/{project.images.length})
                    </span>
                  </div>
                </motion.div>
              )}
            </motion.div>

          </div>
        </div>
      </section>

      {/* Related Projects Section */}
      {relatedProjects.length > 0 && (
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-[#ECE6E3]">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="mb-8 sm:mb-10 md:mb-12"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 md:gap-8">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '80px' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="h-1 bg-[#979188]"
                />
                <h2 
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#000000] whitespace-nowrap"
                  style={{ fontFamily: 'Alexandria, sans-serif' }}
                >
                  مشاريع ذات صلة
                </h2>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="hidden sm:block h-px bg-gradient-to-l from-[#979188] to-transparent flex-1"
                />
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
              {relatedProjects.map((relatedProject, index) => (
                <motion.div
                  key={relatedProject.id}
                  initial={{ y: 50, opacity: 0, scale: 0.95 }}
                  whileInView={{ y: 0, opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Link href={`/projects/${relatedProject.id}`} scroll={false} prefetch={false}>
                    <motion.div
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="group relative h-72 sm:h-80 md:h-96 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
                    >
                      <Image
                        src={relatedProject.image}
                        alt={relatedProject.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                        quality={75}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                      
                      <motion.div 
                        className="absolute inset-0 bg-[#979188]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      />
                      
                      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 transform transition-transform duration-500 group-hover:translate-y-[-10px]">
                        <motion.div
                          initial={{ width: 0 }}
                          whileHover={{ width: '50px' }}
                          className="h-1 bg-[#979188] mb-3 sm:mb-4"
                        />
                        <h3 
                          className="text-xl sm:text-2xl font-bold text-white mb-2"
                          style={{ fontFamily: 'Alexandria, sans-serif' }}
                        >
                          {relatedProject.title}
                        </h3>
                        <p 
                          className="text-xs sm:text-sm text-[#ECE6E3]"
                          style={{ fontFamily: 'Alexandria, sans-serif' }}
                        >
                          {relatedProject.city}, {relatedProject.year}
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <motion.button
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 sm:top-6 md:top-8 right-4 sm:right-6 md:right-8 w-12 h-12 sm:w-14 sm:h-14 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors z-10"
            >
              <FiX className="text-xl sm:text-2xl" />
            </motion.button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full max-w-7xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Zoomed image"
                fill
                className="object-contain rounded-xl sm:rounded-2xl"
                priority
                quality={95}
                sizes="100vw"
              />
            </motion.div>

            {/* Bottom Info */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md px-4 sm:px-6 py-2 sm:py-3 rounded-full"
            >
              <p 
                className="text-white text-xs sm:text-sm"
                style={{ fontFamily: 'Alexandria, sans-serif' }}
              >
                اضغط في أي مكان للإغلاق
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.main>
  );
}