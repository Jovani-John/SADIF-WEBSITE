// components/ScrollToTop.tsx
'use client';

import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 group cursor-pointer"
          aria-label="Scroll to top"
        >
          {/* Outer glow circle */}
          <div className="absolute inset-0 bg-[#979188] rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
          
          {/* Main button */}
          <div className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#979188] to-[#7a756d] rounded-full shadow-2xl hover:shadow-[#979188]/50 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#979188]/40 backdrop-blur-sm">
            {/* Animated arrow */}
            <FaArrowUp className="w-5 h-5 text-white animate-bounce" />
          </div>
          
          {/* Pulse ring animation */}
          <div className="absolute inset-0 rounded-full border-2 border-[#979188] animate-ping opacity-75"></div>
        </button>
      )}
    </>
  );
}