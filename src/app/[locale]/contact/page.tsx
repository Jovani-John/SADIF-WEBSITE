'use client';

import React, { useState } from 'react';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { FaInstagram, FaWhatsapp, FaTiktok } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { motion, Variants } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';

// ✅ Fix Leaflet Icons
const DefaultIcon = L.Icon.Default.prototype as any;
delete DefaultIcon._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// ✅ Animations
const slideRight: Variants = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.6, 0.01, 0.05, 0.95] as any }
  }
};

const slideLeft: Variants = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.6, 0.01, 0.05, 0.95] as any }
  }
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.6, 0.01, 0.05, 0.95] as any }
  }
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const t = useTranslations('Contact');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject) {
      toast.error(t('toast.error'));
      return;
    }

    setIsLoading(true);

    try {
      // ✅ إرسال البريد الإلكتروني باستخدام Web3Forms
      const formDataToSend = new FormData();
      formDataToSend.append('access_key', '6c123e70-b648-423d-882b-da0fdfd7e8fe');
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('subject', formData.subject);
      formDataToSend.append('message', formData.message);
      
      // إعدادات إضافية
      formDataToSend.append('from_name', 'SADIF Website');
      formDataToSend.append('replyto', formData.email);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });

      const result = await response.json();

      if (result.success) {
        toast.success(t('toast.success'));
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        console.error('Web3Forms Error:', result);
        throw new Error(result.message || 'Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('فشل في إرسال الرسالة. حاول مرة أخرى.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      <ToastContainer rtl={isRTL} />

      {/* ✅ Hero Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={slideRight}
        className="relative h-64 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920)',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(236, 230, 227, 0.7)'
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-gray-800" style={{ fontFamily: 'Alexandria, sans-serif' }}>
            {t('title')}
          </h1>
        </div>
      </motion.div>

      {/* ✅ Contact Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 max-w-6xl mx-auto shadow-2xl rounded-lg overflow-hidden">

          {/* ✅ Form Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="bg-white p-12"
          >
            <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Alexandria, sans-serif' }}>
              <span className="text-gray-800">{t('heroTitle')}</span>
            </h2>

            <p className="text-gray-500 mb-8 text-sm" style={{ fontFamily: 'Alexandria, sans-serif' }}>
              {t('subtitle')}
            </p>

            <form onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-2 text-right">
                      {t('form.name')}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md text-right"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-600 mb-2 text-right">
                      {t('form.email')}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md text-right"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-2 text-right">
                      {t('form.subject')}
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md text-right"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-600 mb-2 text-right">
                      {t('form.phone')}
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md text-right"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-2 text-right">
                    {t('form.message')}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md text-right resize-none"
                  ></textarea>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className={`bg-[#C4A574] text-white px-8 py-3 rounded-md hover:bg-[#B39564] transition-colors duration-300 font-semibold cursor-pointer ${
                      isLoading ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {isLoading ? 'جاري الإرسال...' : t('form.submit')}
                  </button>
                </div>
              </div>
            </form>
          </motion.div>

          {/* ✅ Contact Info Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideLeft}
            className="bg-[#ECE6E3] p-12 flex flex-col justify-between relative"
          >
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-12 text-right">
                {t('contactInfo.title')}
              </h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4 justify-end">
                  <div className="text-right">
                    <p className="text-sm text-gray-600 mb-1">{t('contactInfo.phone')}</p>
                    <p className="text-lg font-semibold text-gray-800">
                      +966-559-033-519
                    </p>
                  </div>
                  <div className="bg-white rounded-full p-3 shadow-md">
                    <FiPhone className="w-6 h-6 text-[#C4A574]" />
                  </div>
                </div>

                <div className="flex items-start gap-4 justify-end">
                  <div className="text-right">
                    <p className="text-sm text-gray-600 mb-1">{t('contactInfo.email')}</p>
                    <p className="text-lg font-semibold text-gray-800">
                      info@sadif.sa
                    </p>
                  </div>
                  <div className="bg-white rounded-full p-3 shadow-md">
                    <FiMail className="w-6 h-6 text-[#C4A574]" />
                  </div>
                </div>

                <div className="flex items-start gap-4 justify-end">
                  <div className="text-right">
                    <p className="text-lg font-semibold text-gray-800">
                      {t('contactInfo.address')}
                    </p>
                  </div>
                  <div className="bg-white rounded-full p-3 shadow-md">
                    <FiMapPin className="w-6 h-6 text-[#C4A574]" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 justify-center mt-12">
              <a 
                href="https://www.tiktok.com/@sadif510?is_from_webapp=1&sender_device=pc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white rounded-full p-3 hover:bg-gray-100 transition"
              >
                <FaTiktok className="w-5 h-5 text-gray-700" />
              </a>

              <a 
                href="https://www.instagram.com/sadif.co/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white rounded-full p-3 hover:bg-gray-100 transition"
              >
                <FaInstagram className="w-5 h-5 text-gray-700" />
              </a>

              <a 
                className="bg-white rounded-full p-3 hover:bg-gray-100 transition"
              >
                <FaWhatsapp className="w-5 h-5 text-gray-700" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ✅ Map Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="w-full h-96"
      >
        <MapContainer
          center={[26.38422, 50.16784]}
          zoom={16}
          scrollWheelZoom={false}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          <Marker position={[26.38422, 50.16784]}>
            <Popup>{t('mapPopup')}</Popup>
          </Marker>
        </MapContainer>
      </motion.div>
    </div>
  );
}