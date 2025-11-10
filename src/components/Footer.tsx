'use client';
import { motion } from "framer-motion";
import { FaInstagram, FaTiktok, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const COMPANY_INFO = {
  name: "سديف",
  address: "اﻟﺪور اﻟﺜﺎﻣﻦ , ﺑﺮج اﻟﻐﺮﻓﺔ اﻟﺸﺮﻗﻴﺔ , اﻟﺪﻣﺎم , اﻟﻤﻤﻠﻜﺔ اﻟﻌﺮﺑﻴﺔ اﻟﺴﻌﻮدﻳﺔ",
  phone: "+966-559-033-519",
  email: "info@sadif.sa",
  vision:
    "ﻧﺤﻦ ﺷﺮﻛﺔ اﺳﺘﺸﺎرات ﻫﻨﺪﺳﻴﺔ ﺳﻌﻮدﻳﺔ ﻧﺎﺷﺌﺔ، ﻣﻜﺮﺳﺔ ﻟﺘﺤﻮﻳﻞ ﻣﺠﺎﻻت اﻟﻬﻨﺪﺳﺔ اﻟﻤﻌﻤﺎرﻳﺔ واﻟﺘﺼﻤﻴﻢ اﻟﺪاﺧﻠﻲ وﺗﺼﻤﻴﻢ اﻟﺤﺪاﺋﻖ ﻓﻲ اﻟﻤﻤﻠﻜﺔ. ﻳﺘﻜﻮن ﻓﺮﻳﻘﻨﺎ ﻣﻦ ﻣﻬﻨﺪﺳﻴﻦ ﻣﻌﻤﺎرﻳﻴﻦ وﻣﺼﻤﻤﻴﻦ وﻣﺴﺘﺸﺎرﻳﻦ ذوي ﺧﺒﺮة، وﻫﺪﻓﻨﺎ ﻫﻮ ﺗﻘﺪﻳﻢ ﺣﻠﻮل ﻣﻦ اﻟﻄﺮاز اﻟﻌﺎﻟﻤﻲ ﺗﻤﺰج ﺑﻴﻦ اﻹﺑﺪاع واﻟﻮﻇﺎﺋﻒ اﻟﻌﻤﻠﻴﺔ. ﻧﺤﻦ ﻧﺮﻛﺰ ﻋﻠﻰ ﺗﻘﺪﻳﻢ ﺗﺼﺎﻣﻴﻢ ﺟﻤﺎﻟﻴﺔ وﻣﺴﺘﺪاﻣﺔ ﺗﻠﺒﻲ اﺣﺘﻴﺎﺟﺎت ﻋﻤﻼﺋﻨﺎ اﻟﻔﺮﻳﺪة، ﻣﻊ ﺿﻤﺎن أن ﻳﻌﻜﺲ ﻛﻞ ﻣﺸﺮوع ﺗﻮازﻧًﺎ ﻣﺜﺎﻟﻴًﺎ ﺑﻴﻦ ﻣﺒﺎدئ اﻟﺘﺼﻤﻴﻢ اﻟﺤﺪﻳﺜﺔ وﻣﻼءﻣﺘﻬﺎ اﻟﺜﻘﺎﻓﻴﺔ",
};

const SOCIAL_LINKS = {
  instagram: "https://instagram.com",
  tiktok: "https://tiktok.com",
  whatsapp: "https://wa.me/966559698683",
};

const QUICK_LINKS = [
  { name: "الرئيسية", href: "/" },
  { name: "من نحن", href: "/about" },
  { name: "خدماتنا", href: "/services" },
  { name: "مشاريعنا", href: "/projects" },
  { name: "المدونة", href: "/blog" },
  { name: "اتصل بنا", href: "/contact" },
];

export default function Footer() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.4 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <footer className="relative bg-[#979188] text-white overflow-hidden font-['Alexandria']">
      {/* خلفيات زخرفية */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-black/10 rounded-full blur-3xl" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto px-6 py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center md:text-start">
          {/* العمود الأول */}
          <div className="flex flex-col items-center md:items-start">
            <motion.img
              variants={item}
              src="/imags/logoW.png"
              alt="Logo"
              className="w-auto h-auto max-w-[220px] md:max-w-[280px] lg:max-w-[320px] mb-6 brightness-0 invert"
              style={{
                objectFit: 'contain',
              }}
            />

            <motion.p
              variants={item}
              className="text-white/90 leading-relaxed mb-8 text-base"
            >
              {COMPANY_INFO.vision}
            </motion.p>

            <motion.div variants={item} className="space-y-5">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 group">
                <div className="bg-white/10 p-3 rounded-lg flex-shrink-0 group-hover:bg-white/20 transition-colors">
                  <FaMapMarkerAlt className="text-white text-xl" />
                </div>
                <div>
                  <p className="font-bold text-lg mb-1">عنوان مكتبنا</p>
                  <p className="text-white/90 text-base">{COMPANY_INFO.address}</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 group">
                <div className="bg-white/10 p-3 rounded-lg flex-shrink-0 group-hover:bg-white/20 transition-colors">
                  <FaPhone className="text-white text-xl" />
                </div>
                <div>
                  <p className="font-bold text-lg mb-1">هاتفنا</p>
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="text-white/90 hover:text-white transition-colors text-base"
                    dir="ltr"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 group">
                <div className="bg-white/10 p-3 rounded-lg flex-shrink-0 group-hover:bg-white/20 transition-colors">
                  <FaEnvelope className="text-white text-xl" />
                </div>
                <div>
                  <p className="font-bold text-lg mb-1">بريد إلكتروني</p>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-white/90 hover:text-white transition-colors text-base"
                    dir="ltr"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* العمود الثاني */}
          <motion.div
            variants={item}
            className="flex flex-col items-center md:items-start"
          >
            <h4 className="text-2xl font-bold mb-8">روابط مفيدة</h4>
            <div className="w-16 h-1 bg-white/30 mb-6 rounded-full mx-auto md:mx-0"></div>
            <ul className="space-y-4">
              {QUICK_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/90 hover:text-white transition-all flex items-center justify-center md:justify-start gap-3 group text-base hover:translate-x-1"
                  >
                    <span className="w-2 h-2 rounded-full bg-white/60 group-hover:bg-white group-hover:scale-150 transition-all"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* العمود الثالث */}
          <motion.div
            variants={item}
            className="flex flex-col items-center md:items-start"
          >
            <h4 className="text-2xl font-bold mb-8">معلومات للتواصل</h4>
            <div className="w-16 h-1 bg-white/30 mb-6 rounded-full mx-auto md:mx-0"></div>
            <p className="text-white/90 mb-8 text-base leading-relaxed max-w-md">
              تابعنا على منصات التواصل الاجتماعي للبقاء على اطلاع بأحدث مشاريعنا وخدماتنا
            </p>

            <div className="flex justify-center md:justify-start gap-5 mb-10">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center shadow-xl hover:shadow-purple-500/50 transition-all hover:scale-110 hover:-translate-y-1"
                aria-label="Instagram"
              >
                <FaInstagram className="text-white text-2xl" />
              </a>

              <a
                href={SOCIAL_LINKS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-gradient-to-br from-black to-gray-800 flex items-center justify-center shadow-xl hover:shadow-gray-500/50 transition-all hover:scale-110 hover:-translate-y-1"
                aria-label="TikTok"
              >
                <FaTiktok className="text-white text-2xl" />
              </a>

              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-xl hover:shadow-green-500/50 transition-all hover:scale-110 hover:-translate-y-1"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="text-white text-2xl" />
              </a>
            </div>

            <motion.div
              variants={item}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all w-full max-w-sm md:max-w-none text-center md:text-start"
            >
              <p className="text-lg font-bold mb-3">هل لديك مشروع؟</p>
              <p className="text-white/90 mb-4 text-base">
                نحن هنا لمساعدتك في تحقيق رؤيتك
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center md:justify-start gap-2 bg-white text-[#979188] px-6 py-3 rounded-lg font-bold hover:bg-white/90 transition-all text-base hover:scale-105"
              >
                تواصل معنا الآن
                <span>←</span>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* الخط السفلي */}
        <motion.div
          variants={item}
          className="mt-16 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-start text-base"
        >
          <p className="text-white/90">
            © {new Date().getFullYear()} مؤسسة سديف. جميع الحقوق محفوظة.
          </p>
          <div className="flex gap-8">
            <a href="/privacy" className="text-white/90 hover:text-white transition-colors">
              سياسة الخصوصية
            </a>
            <a href="/terms" className="text-white/90 hover:text-white transition-colors">
              الشروط والأحكام
            </a>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
