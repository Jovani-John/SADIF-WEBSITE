'use client';

import React, { useState } from 'react';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { FaLinkedinIn, FaInstagram, FaTwitter, FaFacebookF, FaWhatsapp, FaTiktok } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// ✅ إضافة Framer Motion
import { motion } from 'framer-motion';

// ✅ Fix Leaflet Icons - with TypeScript fix
const DefaultIcon = L.Icon.Default.prototype as any;
delete DefaultIcon._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// ✅ Animations جاهزة
const slideRight = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.6, 0.01, 0.05, 0.95] }
  }
};

const slideLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.6, 0.01, 0.05, 0.95] }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.6, 0.01, 0.05, 0.95] }
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

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject) {
      toast.error('من فضلك املأ جميع الحقول المطلوبة!');
      return;
    }

    toast.success('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً 🎉');

    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white pt-20">

      <ToastContainer rtl />

      {/* ✅ Hero Section - Title enters from right */}
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
            تواصل معنا
          </h1>
        </div>
      </motion.div>

      {/* ✅ Contact Section */}
      <div className="container mx-auto px-4 py-16">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 max-w-6xl mx-auto shadow-2xl rounded-lg overflow-hidden">

          {/* ✅ Form Section (fade-up modern entrance) */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="bg-white p-12"
          >
            <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Alexandria, sans-serif' }}>
              <span className="text-gray-800">ابقى على </span>
              <span className="text-[#C4A574]">تواصل معنا</span>
            </h2>

            <p className="text-gray-500 mb-8 text-sm" style={{ fontFamily: 'Alexandria, sans-serif' }}>
              اتصل بنا اليوم واحصل على إجابات مباني الأسعار المناسبة لتحديد الميزانيات
            </p>

            <div className="space-y-6">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <div>
                  <label className="block text-sm text-gray-600 mb-2 text-right">
                    اسمك
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md text-right"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-2 text-right">
                    بريدك الإلكتروني
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md text-right"
                  />
                </div>

              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <div>
                  <label className="block text-sm text-gray-600 mb-2 text-right">
                    الموضوع
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md text-right"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-2 text-right">
                    رقم الهاتف (اختياري)
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
                  رسالتك (اختياري)
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
                  onClick={handleSubmit}
                  className="bg-[#C4A574] text-white px-8 py-3 rounded-md hover:bg-[#B39564] transition-colors duration-300 font-semibold cursor-pointer"
                >
                  إرسال
                </button>
              </div>

            </div>
          </motion.div>

          {/* ✅ Contact Info Section (from left) */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideLeft}
            className="bg-[#ECE6E3] p-12 flex flex-col justify-between relative"
          >



            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-12 text-right">
                اتصل بنا
              </h2>

              <div className="space-y-8">

                <div className="flex items-start gap-4 justify-end">
                  <div className="text-right">
                    <p className="text-sm text-gray-600 mb-1">هاتف</p>
                    <p className="text-lg font-semibold text-gray-800">
                      966-559-033-519+
                    </p>
                  </div>
                  <div className="bg-white rounded-full p-3 shadow-md">
                    <FiPhone className="w-6 h-6 text-[#C4A574]" />
                  </div>
                </div>

                <div className="flex items-start gap-4 justify-end">
                  <div className="text-right">
                    <p className="text-sm text-gray-600 mb-1">Email</p>
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
                      اﻟﺪور اﻟﺜﺎﻣﻦ , ﺑﺮج اﻟﻐﺮﻓﺔ اﻟﺸﺮﻗﻴﺔ , اﻟﺪﻣﺎم , اﻟﻤﻤﻠﻜﺔ اﻟﻌﺮﺑﻴﺔ اﻟﺴﻌﻮدﻳﺔ
                    </p>
                  </div>
                  <div className="bg-white rounded-full p-3 shadow-md">
                    <FiMapPin className="w-6 h-6 text-[#C4A574]" />
                  </div>
                </div>

              </div>
            </div>

            <div className="flex gap-4 justify-center mt-12">
              <a className="bg-white rounded-full p-3 hover:bg-gray-100 transition">
                <FaTiktok className="w-5 h-5 text-gray-700" />
              </a>
              <a className="bg-white rounded-full p-3 hover:bg-gray-100 transition">
                <FaInstagram className="w-5 h-5 text-gray-700" />
              </a>
              <a className="bg-white rounded-full p-3 hover:bg-gray-100 transition">
                <FaWhatsapp className="w-5 h-5 text-gray-700" />
              </a>

            </div>

          </motion.div>

        </div>
      </div>

      {/* ✅ Map Section (fade-up) */}
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
            <Popup>8th floor, Asharqia Chamber Tower, Dammam, Saudi Arabia</Popup>
          </Marker>

        </MapContainer>
      </motion.div>

    </div>
  );
}