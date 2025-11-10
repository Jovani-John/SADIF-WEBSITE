// src/app/projects/[id]/page.tsx
'use client';

import { use, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { notFound, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowLeft, FiMapPin, FiCalendar, FiLayers, FiX } from 'react-icons/fi';
import { projects } from '@/data/projects';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ProjectDetailPage({ params }: PageProps) {
  const router = useRouter();
  const { id } = use(params);
  const project = projects.find((p) => p.id === id);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!project) {
    notFound();
  }

  // Get related projects (same category, excluding current)
  const relatedProjects = projects
    .filter(p => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-[#ECE6E3]"
    >
      {/* Hero Section with Shared Element Transition */}
      <section className="relative h-[70vh] bg-[#000000] overflow-hidden">
        {/* Animated Image Container */}
        <motion.div 
          layoutId={`project-image-${project.id}`}
          className="absolute inset-0"
          transition={{
            duration: 0.6,
            ease: [0.43, 0.13, 0.23, 0.96]
          }}
          style={{
            transformStyle: 'preserve-3d',
            perspective: '1000px'
          }}
        >
          <motion.div
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ 
              duration: 0.8,
              ease: [0.43, 0.13, 0.23, 0.96],
              delay: 0.2
            }}
            className="w-full h-full"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
          
          {/* Overlay with shared animation */}
          <motion.div 
            layoutId={`project-overlay-${project.id}`}
            initial={{ opacity: 0.6 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" 
          />
        </motion.div>

        {/* Back Button */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="absolute top-24 left-8 z-10"
        >
          <Link
            href="/projects"
            scroll={false}
            className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md text-white rounded-lg hover:bg-white/20 transition-colors"
          >
            <FiArrowLeft className="text-xl" />
            <span style={{ fontFamily: 'Alexandria, sans-serif' }}>العودة</span>
          </Link>
        </motion.div>

        {/* Project Title with Shared Elements */}
        <div className="absolute bottom-0 left-0 right-0 p-12 z-10">
          <div className="container mx-auto">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Category Badge with Shared Transition */}
              <motion.span 
                layoutId={`project-category-${project.id}`}
                className="inline-block px-4 py-2 bg-[#979188] text-white text-sm rounded-full mb-4"
                style={{ fontFamily: 'Alexandria, sans-serif' }}
                transition={{
                  duration: 0.5,
                  ease: [0.43, 0.13, 0.23, 0.96]
                }}
              >
                {project.categoryAr}
              </motion.span>
              
              {/* Title with Shared Transition */}
              <motion.h1 
                layoutId={`project-title-${project.id}`}
                className="text-5xl md:text-7xl font-bold text-white mb-4"
                style={{ fontFamily: 'Alexandria, sans-serif' }}
                transition={{
                  duration: 0.6,
                  ease: [0.43, 0.13, 0.23, 0.96]
                }}
              >
                {project.title}
              </motion.h1>
              
              <motion.p 
                layoutId={`project-title-en-${project.id}`}
                className="text-2xl text-[#ECE6E3] mb-6"
                style={{ fontFamily: 'Alexandria, sans-serif' }}
                transition={{
                  duration: 0.6,
                  ease: [0.43, 0.13, 0.23, 0.96]
                }}
              >
                {project.titleEn}
              </motion.p>

              {/* Project Meta Info */}
              <motion.div 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap gap-6 text-white"
              >
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
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Description with Modern Design */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20 relative"
            >
              <div className="flex items-center gap-6 mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="w-3 h-3 bg-[#979188] rounded-full"
                />
                <h2 
                  className="text-5xl font-bold text-[#000000]"
                  style={{ fontFamily: 'Alexandria, sans-serif' }}
                >
                  نبذة عن المشروع
                </h2>
              </div>
              
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute right-0 top-16 w-full h-px bg-gradient-to-l from-[#979188] to-transparent"
                style={{ transformOrigin: 'right' }}
              />
              
              <div className="mt-8 bg-white p-10 rounded-3xl shadow-xl">
                <p 
                  className="text-2xl text-[#000000] mb-6 leading-relaxed"
                  style={{ fontFamily: 'Alexandria, sans-serif' }}
                >
                  {project.description}
                </p>
                <p 
                  className="text-lg text-[#979188] leading-relaxed"
                  style={{ fontFamily: 'Alexandria, sans-serif' }}
                >
                  {project.descriptionEn}
                </p>
              </div>
            </motion.div>

            {/* Project Info Cards */}
            {(project.details || project.client) && (
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-20"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  {project.details && (
                    <motion.div 
                      whileHover={{ y: -5, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="bg-gradient-to-br from-white to-[#ECE6E3] p-8 rounded-2xl shadow-lg border-r-4 border-[#979188]"
                    >
                      <h3 
                        className="text-2xl font-bold text-[#000000] mb-4"
                        style={{ fontFamily: 'Alexandria, sans-serif' }}
                      >
                        تفاصيل المشروع
                      </h3>
                      <p 
                        className="text-[#979188] mb-2"
                        style={{ fontFamily: 'Alexandria, sans-serif' }}
                      >
                        {project.details}
                      </p>
                      {project.detailsEn && (
                        <p 
                          className="text-sm text-[#979188]"
                          style={{ fontFamily: 'Alexandria, sans-serif' }}
                        >
                          {project.detailsEn}
                        </p>
                      )}
                    </motion.div>
                  )}

                  {project.client && (
                    <motion.div 
                      whileHover={{ y: -5, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="bg-gradient-to-br from-white to-[#ECE6E3] p-8 rounded-2xl shadow-lg border-r-4 border-[#979188]"
                    >
                      <h3 
                        className="text-2xl font-bold text-[#000000] mb-4"
                        style={{ fontFamily: 'Alexandria, sans-serif' }}
                      >
                        العميل
                      </h3>
                      <p 
                        className="text-[#979188]"
                        style={{ fontFamily: 'Alexandria, sans-serif' }}
                      >
                        {project.client}
                      </p>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            )}

            {/* Image Gallery with Modern Design */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-6">
                  <h2 
                    className="text-5xl font-bold text-[#000000]"
                    style={{ fontFamily: 'Alexandria, sans-serif' }}
                  >
                    معرض الصور
                  </h2>
                  <motion.div
                    initial={{ rotate: 0 }}
                    whileInView={{ rotate: 360 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="w-12 h-12 border-4 border-[#979188] border-t-transparent rounded-full"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {project.images.map((img, index) => {
                  // تحديد حجم كل صورة بشكل مختلف
                  const isLarge = index % 3 === 0;
                  const isMedium = index % 3 === 1;
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ 
                        x: index % 2 === 0 ? -100 : 100, 
                        opacity: 0 
                      }}
                      whileInView={{ 
                        x: 0, 
                        opacity: 1 
                      }}
                      viewport={{ once: false, amount: 0.3 }}
                      transition={{ 
                        duration: 0.8,
                        delay: (index % 2) * 0.2,
                        ease: [0.43, 0.13, 0.23, 0.96]
                      }}
                      whileHover={{ 
                        scale: 1.03,
                        rotateY: 3,
                        z: 50
                      }}
                      onClick={() => setSelectedImage(img)}
                      className={`relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer
                        ${isLarge ? 'col-span-2 h-[500px]' : isMedium ? 'h-[350px]' : 'h-[400px]'}
                      `}
                      style={{
                        transformStyle: 'preserve-3d',
                        perspective: '1000px'
                      }}
                    >
                      <Image
                        src={img}
                        alt={`${project.title} - ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-700"
                      />
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-start p-8"
                      >
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          whileHover={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          className="text-white"
                        >
                          <div className="text-6xl font-bold opacity-20">{index + 1}</div>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Projects with Modern Design */}
      {relatedProjects.length > 0 && (
        <section className="py-20 bg-gradient-to-b from-white to-[#ECE6E3]">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="flex items-center gap-8 mb-8">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '120px' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="h-1 bg-[#979188]"
                />
                <h2 
                  className="text-5xl font-bold text-[#000000] whitespace-nowrap"
                  style={{ fontFamily: 'Alexandria, sans-serif' }}
                >
                  مشاريع ذات صلة
                </h2>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="h-px bg-gradient-to-l from-[#979188] to-transparent flex-1"
                />
              </div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {relatedProjects.map((relatedProject, index) => (
                <motion.div
                  key={relatedProject.id}
                  initial={{ y: 80, opacity: 0, scale: 0.9 }}
                  whileInView={{ y: 0, opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.15, 
                    duration: 0.7,
                    ease: [0.43, 0.13, 0.23, 0.96]
                  }}
                >
                  <Link href={`/projects/${relatedProject.id}`} scroll={false}>
                    <motion.div
                      whileHover={{ y: -15, scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      className="group relative h-96 rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
                    >
                      <Image
                        src={relatedProject.image}
                        alt={relatedProject.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-120"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                      
                      <motion.div 
                        className="absolute inset-0 bg-[#979188]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      />
                      
                      <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-500 group-hover:translate-y-[-10px]">
                        <motion.div
                          initial={{ width: 0 }}
                          whileHover={{ width: '60px' }}
                          className="h-1 bg-[#979188] mb-4"
                        />
                        <h3 
                          className="text-2xl font-bold text-white mb-2"
                          style={{ fontFamily: 'Alexandria, sans-serif' }}
                        >
                          {relatedProject.title}
                        </h3>
                        <p 
                          className="text-sm text-[#ECE6E3]"
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
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <motion.button
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              onClick={() => setSelectedImage(null)}
              className="absolute top-8 right-8 w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors z-10"
            >
              <FiX className="text-2xl" />
            </motion.button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0, rotateY: -90 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.5, opacity: 0, rotateY: 90 }}
              transition={{ 
                duration: 0.6,
                ease: [0.43, 0.13, 0.23, 0.96]
              }}
              className="relative w-full h-full max-w-7xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
            >
              <Image
                src={selectedImage}
                alt="Zoomed image"
                fill
                className="object-contain rounded-2xl"
                priority
              />
            </motion.div>

            {/* Bottom Info */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full"
            >
              <p 
                className="text-white text-sm"
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