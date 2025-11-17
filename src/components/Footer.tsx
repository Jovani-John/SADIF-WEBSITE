'use client';
import { motion, Variants } from "framer-motion";
import { FaInstagram, FaTiktok, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';

const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/sadif.co/",
  tiktok: "https://www.tiktok.com/@sadif510?is_from_webapp=1&sender_device=pc",
  whatsapp: "https://wa.me/966559698683",
};

export default function Footer() {
  const t = useTranslations('Footer');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const QUICK_LINKS = [
    { name: t('links.home'), href: "/" },
    { name: t('links.about'), href: "/about" },
    { name: t('links.services'), href: "/about" },
    { name: t('links.projects'), href: "/projects" },
    { name: t('links.contact'), href: "/contact" },
  ];

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut"
      },
    },
  };

  return (
    <footer className="relative bg-[#979188] text-white overflow-hidden" role="contentinfo">
      {/* خلفيات زخرفية */}
      <div className={`absolute top-8 ${isRTL ? 'right-8' : 'left-8'} w-48 h-48 bg-white/5 rounded-full blur-2xl`} />
      <div className={`absolute bottom-8 ${isRTL ? 'left-8' : 'right-8'} w-60 h-60 bg-black/10 rounded-full blur-2xl`} />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-12"
      >
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-12 ${isRTL ? 'text-right' : 'text-left'}`}>
          {/* العمود الأول */}
          <div className={`flex flex-col ${isRTL ? 'items-end md:items-end' : 'items-start md:items-start'} ${isRTL ? 'text-right' : 'text-left'}`}>
            <motion.div
              variants={item}
              className="mb-4"
            >
              <Image
                src="/imags/logoW.png"
                alt="Sadif Construction Company Logo"
                width={280}
                height={80}
                className="max-w-[180px] md:max-w-[220px] lg:max-w-[250px] brightness-0 invert"
                priority
              />
            </motion.div>

            <motion.p
              variants={item}
              className="text-white/90 leading-relaxed mb-6 text-sm sm:text-base"
            >
              {t('vision')}
            </motion.p>

            <motion.div variants={item} className="space-y-4 w-full">
              <div className={`flex ${isRTL ? 'flex-row-reverse md:flex-row-reverse' : 'flex-row md:flex-row'} items-center ${isRTL ? 'md:items-end' : 'md:items-start'} gap-3 group`}>
                <div className="bg-white/10 p-2 rounded-lg flex-shrink-0 group-hover:bg-white/20 transition-colors">
                  <FaMapMarkerAlt className="text-white text-lg" />
                </div>
                <div>
                  <p className="font-bold text-base mb-1">{t('officeAddress')}</p>
                  <p className="text-white/90 text-sm">{t('address')}</p>
                </div>
              </div>

              <div className={`flex ${isRTL ? 'flex-row-reverse md:flex-row-reverse' : 'flex-row md:flex-row'} items-center ${isRTL ? 'md:items-end' : 'md:items-start'} gap-3 group`}>
                <div className="bg-white/10 p-2 rounded-lg flex-shrink-0 group-hover:bg-white/20 transition-colors">
                  <FaPhone className="text-white text-lg" />
                </div>
                <div>
                  <p className="font-bold text-base mb-1">{t('ourPhone')}</p>
                  <a
                    href={`tel:${t('phone')}`}
                    className="text-white/90 hover:text-white transition-colors text-sm"
                    dir="ltr"
                    aria-label={`Call us at ${t('phone')}`}
                  >
                    {t('phone')}
                  </a>
                </div>
              </div>

              <div className={`flex ${isRTL ? 'flex-row-reverse md:flex-row-reverse' : 'flex-row md:flex-row'} items-center ${isRTL ? 'md:items-end' : 'md:items-start'} gap-3 group`}>
                <div className="bg-white/10 p-2 rounded-lg flex-shrink-0 group-hover:bg-white/20 transition-colors">
                  <FaEnvelope className="text-white text-lg" />
                </div>
                <div>
                  <p className="font-bold text-base mb-1">{t('ourEmail')}</p>
                  <a
                    href={`mailto:${t('email')}`}
                    className="text-white/90 hover:text-white transition-colors text-sm"
                    dir="ltr"
                    aria-label={`Email us at ${t('email')}`}
                  >
                    {t('email')}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* العمود الثاني */}
          <motion.div
            variants={item}
            className={`flex flex-col ${isRTL ? 'items-end md:items-end' : 'items-start md:items-start'}`}
          >
            <h4 className="text-xl font-bold mb-6">{t('quickLinks')}</h4>
            <div className={`w-12 h-0.5 bg-white/30 mb-4 rounded-full ${isRTL ? 'mr-0 md:mr-0' : 'ml-0 md:ml-0'}`}></div>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`text-white/90 hover:text-white transition-all flex items-center ${isRTL ? 'justify-end md:justify-end flex-row-reverse' : 'justify-start md:justify-start'} gap-2 group text-sm sm:text-base ${isRTL ? 'hover:-translate-x-1' : 'hover:translate-x-1'}`}
                    aria-label={`Go to ${link.name}`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white/60 group-hover:bg-white group-hover:scale-125 transition-all"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* العمود الثالث */}
          <motion.div
            variants={item}
            className={`flex flex-col ${isRTL ? 'items-end md:items-end' : 'items-start md:items-start'}`}
          >
            <h4 className="text-xl font-bold mb-6">{t('contactInfo')}</h4>
            <div className={`w-12 h-0.5 bg-white/30 mb-4 rounded-full ${isRTL ? 'mr-0 md:mr-0' : 'ml-0 md:ml-0'}`}></div>
            <p className="text-white/90 mb-6 text-sm leading-relaxed max-w-md">
              {t('followUs')}
            </p>

            <div className={`flex ${isRTL ? 'justify-end md:justify-end flex-row-reverse' : 'justify-start md:justify-start'} gap-3 mb-8`}>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105 hover:-translate-y-0.5"
                aria-label="Follow us on Instagram"
              >
                <FaInstagram className="text-white text-xl" />
              </a>

              <a
                href={SOCIAL_LINKS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gradient-to-br from-black to-gray-800 flex items-center justify-center shadow-lg hover:shadow-gray-500/50 transition-all hover:scale-105 hover:-translate-y-0.5"
                aria-label="Follow us on TikTok"
              >
                <FaTiktok className="text-white text-xl" />
              </a>

              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg hover:shadow-green-500/50 transition-all hover:scale-105 hover:-translate-y-0.5"
                aria-label="Contact us on WhatsApp"
              >
                <FaWhatsapp className="text-white text-xl" />
              </a>
            </div>

            <motion.div
              variants={item}
              className={`bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all w-full max-w-sm md:max-w-none ${isRTL ? 'text-right' : 'text-left'}`}
            >
              <p className="text-base font-bold mb-2">{t('haveProject')}</p>
              <p className="text-white/90 mb-3 text-sm">
                {t('helpYou')}
              </p>
              <a
                href="/contact"
                className={`inline-flex items-center ${isRTL ? 'justify-end md:justify-end flex-row-reverse' : 'justify-start md:justify-start'} gap-1.5 bg-white text-[#979188] px-4 py-2 rounded-lg font-bold hover:bg-white/90 transition-all text-sm hover:scale-102`}
                aria-label="Contact us now"
              >
                {t('contactNow')}
                <span>{isRTL ? '←' : '→'}</span>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* الخط السفلي */}
        <motion.div
          variants={item}
          className={`mt-12 pt-6 border-t border-white/20 flex flex-col md:flex-row ${isRTL ? 'justify-between' : 'justify-between'} items-center gap-3 ${isRTL ? 'text-right' : 'text-left'} text-sm`}
        >
          <p className="text-white/90">
            {t('rights', { year: new Date().getFullYear() })}
          </p>
          <div className={`flex gap-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <a className="text-white/90 hover:text-white transition-colors text-sm">
              {t('privacy')}
            </a>
            <a className="text-white/90 hover:text-white transition-colors text-sm">
              {t('terms')}
            </a>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}