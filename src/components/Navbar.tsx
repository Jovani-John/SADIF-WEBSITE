'use client';

import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiGlobe } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { Link, useRouter, usePathname } from '@/i18n/routing';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const t = useTranslations('Navbar');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { name: t('projects'), href: '/projects' },
    { name: t('about'), href: '/about' },
    { name: t('contact'), href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setIsScrolled(window.scrollY > heroHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLocale = locale === 'ar' ? 'en' : 'ar';
    router.push(pathname, { locale: newLocale });
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Desktop Navigation - على الشمال */}
          <div className="hidden md:flex items-center gap-3 order-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
href={item.href as any}
                className={`${
                  isScrolled ? 'text-black border-black/30' : 'text-white border-white/30'
                } hover:bg-black/10 transition-all duration-300 text-sm font-light px-5 py-2.5 rounded-full border bg-white/5`}
                style={{ fontFamily: 'Alexandria, sans-serif' }}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Language Toggle Button */}
            <button 
              onClick={toggleLanguage}
              className={`${
                isScrolled ? 'text-black border-black/30' : 'text-white border-white/30'
              } hover:bg-black/10 transition-all duration-300 border rounded-full px-4 py-2.5 bg-white/5 flex items-center gap-2 text-sm font-light`}
              style={{ fontFamily: 'Alexandria, sans-serif' }}
              aria-label="Change Language"
            >
              <FiGlobe size={18} />
              <span>{locale === 'ar' ? 'English' : 'العربية'}</span>
            </button>
          </div>

          {/* Logo - على اليمين */}
          <Link 
            href="/" 
            className="flex flex-col items-end order-2"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className={`${
              isScrolled ? 'text-black' : 'text-white'
            } text-3xl font-bold tracking-wider hover:opacity-80 transition-all duration-300`}>
              SADIF
            </div>
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className={`${
                    isScrolled ? 'text-black' : 'text-white'
                  } transition-colors duration-300 text-right`}
                >
                  <div className="text-xs mt-0.5" style={{ fontFamily: 'Alexandria, sans-serif' }}>
                    {t('companyName')}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${
              isScrolled ? 'text-black' : 'text-white'
            } hover:opacity-70 transition-all duration-300 order-3`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col gap-4 pt-4 pb-4 border-t border-white/20 mt-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href as any}
                    className={`${
                      isScrolled ? 'text-black' : 'text-white'
                    } hover:opacity-70 transition-all duration-300 text-base`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Language Toggle in Mobile */}
                <button 
                  onClick={() => {
                    toggleLanguage();
                    setIsOpen(false);
                  }}
                  className={`${
                    isScrolled ? 'text-black' : 'text-white'
                  } hover:opacity-70 transition-all duration-300 flex items-center gap-2`}
                  style={{ fontFamily: 'Alexandria, sans-serif' }}
                  aria-label="Change Language"
                >
                  <FiGlobe size={20} />
                  <span>{locale === 'ar' ? 'English' : 'العربية'}</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}