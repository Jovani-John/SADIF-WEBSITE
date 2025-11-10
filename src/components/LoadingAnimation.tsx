// components/LoadingAnimation.tsx
'use client';

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const name = "SADIF";

export default function LoadingAnimation({ onFinish }: { onFinish?: () => void }) {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);
  const [forward, setForward] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayed(name.slice(0, index + 1));

      if (forward) {
        if (index === name.length - 1) {
          setForward(false);
        } else {
          setIndex(index + 1);
        }
      } else {
        if (index === 0) {
          setForward(true);
        } else {
          setIndex(index - 1);
        }
      }
    }, 150); // سرعة كتابة/مسح الحروف أسرع من قبل

    return () => clearInterval(interval);
  }, [index, forward]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onFinish && onFinish();
    }, 2000); // مدة الظهور الكاملة 2 ثانية
    return () => clearTimeout(timeout);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <AnimatePresence>
        <motion.h1
          key={displayed}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.15 }}
          className="text-6xl md:text-8xl font-extrabold tracking-wide text-gray-900 font-sans"
        >
          {displayed}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
}
