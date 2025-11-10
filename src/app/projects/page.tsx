'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FiFilter, FiX } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/data/projects';

const categories = [
  { id: 'all', nameAr: 'الكل', nameEn: 'All' },
  { id: 'architectural', nameAr: 'التصميم المعماري', nameEn: 'Architectural Design' },
  { id: 'interior', nameAr: 'التصميم الداخلي', nameEn: 'Interior Design' },
  { id: 'landscape', nameAr: 'تصميم الحدائق', nameEn: 'Landscape Design' }
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilter, setShowFilter] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Filter projects
  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.titleEn.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Create fancy layout patterns for each row (2 projects per row)
  const getProjectLayout = (index: number) => {
    const rowPatterns = [
      [{ span: 'lg:col-span-7', height: 'h-[600px]' }, { span: 'lg:col-span-5', height: 'h-[600px]' }],
      [{ span: 'lg:col-span-5', height: 'h-[550px]' }, { span: 'lg:col-span-7', height: 'h-[550px]' }],
      [{ span: 'lg:col-span-6', height: 'h-[650px]' }, { span: 'lg:col-span-6', height: 'h-[650px]' }],
      [{ span: 'lg:col-span-4', height: 'h-[500px]' }, { span: 'lg:col-span-8', height: 'h-[500px]' }],
    ];

    const rowIndex = Math.floor(index / 2);
    const positionInRow = index % 2;
    const pattern = rowPatterns[rowIndex % rowPatterns.length];
    
    return pattern[positionInRow];
  };

  return (
    <main className="min-h-screen bg-[#ECE6E3]">
      {/* Header Section */}
      <section className="pt-32 pb-16 bg-white border-b border-[#ECE6E3]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
              <h1 className="text-5xl md:text-6xl font-bold text-[#000000]" style={{ fontFamily: 'Alexandria, sans-serif' }}>
                Featured projects
              </h1>
              <motion.div initial={{ width: 0 }} animate={{ width: "120px" }} transition={{ delay: 0.3, duration: 0.6 }} className="h-1 bg-[#979188] mt-4" />
            </motion.div>

            <motion.button
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              onClick={() => setShowFilter(!showFilter)}
              className="flex items-center gap-2 px-6 py-3 bg-[#000000] text-white rounded-lg hover:bg-[#979188] transition-colors"
            >
              <FiFilter className="text-xl" />
              <span style={{ fontFamily: 'Alexandria, sans-serif' }}>FILTER</span>
            </motion.button>
          </div>

          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: showFilter ? 'auto' : 0, opacity: showFilter ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-8 p-6 bg-[#ECE6E3] rounded-2xl">
              <div className="mb-6">
                <label className="block text-sm font-medium text-[#000000] mb-2" style={{ fontFamily: 'Alexandria, sans-serif' }}>
                  البحث بالاسم / Search by Name
                </label>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="ابحث عن مشروع..."
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#979188] focus:border-[#000000] outline-none transition-colors"
                  style={{ fontFamily: 'Alexandria, sans-serif' }}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#000000] mb-3" style={{ fontFamily: 'Alexandria, sans-serif' }}>
                  التصنيف / Category
                </label>
                <div className="flex flex-wrap gap-3">
                  {categories.map((category) => (
                    <motion.button
                      key={category.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-6 py-3 rounded-lg font-medium transition-all ${
                        selectedCategory === category.id ? 'bg-[#000000] text-white' : 'bg-white text-[#000000] hover:bg-[#979188] hover:text-white'
                      }`}
                      style={{ fontFamily: 'Alexandria, sans-serif' }}
                    >
                      <div className="text-center">
                        <div>{category.nameAr}</div>
                        <div className="text-xs opacity-70">{category.nameEn}</div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {(searchTerm || selectedCategory !== 'all') && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }}
                  className="mt-4 flex items-center gap-2 text-[#979188] hover:text-[#000000] transition-colors"
                  style={{ fontFamily: 'Alexandria, sans-serif' }}
                >
                  <FiX />
                  مسح الفلاتر / Clear Filters
                </motion.button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {filteredProjects.length === 0 ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
              <p className="text-2xl text-[#979188]" style={{ fontFamily: 'Alexandria, sans-serif' }}>لا توجد مشاريع مطابقة للبحث</p>
            </motion.div>
          ) : (
            <div className="grid lg:grid-cols-12 gap-6 max-w-7xl mx-auto">
              {filteredProjects.map((project, index) => {
                const layout = getProjectLayout(index);
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={project.id}
                    initial={{ y: 50, opacity: 0, x: isEven ? -100 : 100 }}
                    whileInView={{ y: 0, opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: (index % 2) * 0.2, ease: [0.43, 0.13, 0.23, 0.96] }}
                    className={`${layout.span} col-span-12`}
                  >
                    <Link href={`/projects/${project.id}`} scroll={false}>
                      <motion.div
                        whileHover={{ y: -10, scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        className={`group relative ${layout.height} overflow-hidden cursor-pointer`}
                        style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
                      >
                        {/* Project Image */}
                        <div className="absolute inset-0">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                        </div>

                        {/* Project Info Overlay */}
                        <div className="absolute inset-0 p-8 flex flex-col justify-end">
                          <motion.div initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="mb-4">
                            <span className="inline-block px-4 py-2 bg-[#979188] text-white text-xs uppercase tracking-wider font-medium" style={{ fontFamily: 'Alexandria, sans-serif' }}>
                              {project.categoryAr}
                            </span>
                          </motion.div>

                          <motion.h3
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-[#979188] transition-colors duration-300"
                            style={{ fontFamily: 'Alexandria, sans-serif' }}
                          >
                            {project.title}
                          </motion.h3>

                          <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.35 }}
                            className="text-lg text-[#ECE6E3] mb-3"
                            style={{ fontFamily: 'Alexandria, sans-serif' }}
                          >
                            {project.titleEn}
                          </motion.p>

                          <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="flex items-center gap-4 text-sm text-[#ECE6E3]"
                            style={{ fontFamily: 'Alexandria, sans-serif' }}
                          >
                            <span>{project.city}</span>
                            <span className="w-1 h-1 bg-[#979188] rounded-full"></span>
                            <span>{project.year}</span>
                          </motion.div>

                          <motion.div initial={{ width: 0 }} whileHover={{ width: '80px' }} className="h-0.5 bg-[#979188] mt-4" />
                        </div>
                      </motion.div>
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
