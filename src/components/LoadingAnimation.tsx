'use client';

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingAnimation({ onFinish }: { onFinish?: () => void }) {
  const [stage, setStage] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // المرحلة 1: SADIF من اليمين
    const timer1 = setTimeout(() => setStage(1), 200);
    
    // المرحلة 2: النص الإنجليزي من الشمال
    const timer2 = setTimeout(() => setStage(2), 1500);
    
    // المرحلة 3: النص العربي من اليمين
    const timer3 = setTimeout(() => setStage(3), 2800);
    
    // إنهاء اللودينج
    const timer4 = setTimeout(() => {
      setIsComplete(true);
      onFinish && onFinish();
    }, 5000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onFinish]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 flex items-center justify-center bg-white z-50 overflow-hidden"
        >


          <div className="relative z-10 flex flex-col items-center gap-4 px-4">
            {/* SADIF - من اليمين مع تأثير الحروف */}
            <div className="overflow-hidden w-full flex justify-center">
              {stage >= 1 && (
                <motion.div
                  initial={{ x: 400, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ 
                    duration: 1, 
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative"
                >
                  <h1
                    className="text-7xl md:text-9xl font-black tracking-wider text-black"
                    style={{ 
                      fontFamily: "Alexandria, system-ui, -apple-system, sans-serif",
                      direction: "ltr",
                      unicodeBidi: "bidi-override"
                    }}
                  >
                    {"SADIF".split("").map((letter, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                          delay: 0.4 + i * 0.12,
                          duration: 0.6,
                          ease: "easeOut"
                        }}
                        className="inline-block"
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </h1>
                  {/* خط تحت SADIF */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-black origin-left"
                  />
                </motion.div>
              )}
            </div>

            {/* SADIF ENGINEERING CONSULTING COMPANY - من الشمال */}
            <div className="overflow-hidden w-full flex justify-center mt-4">
              {stage >= 2 && (
                <motion.h2
                  initial={{ x: -400, opacity: 0, scale: 0.8 }}
                  animate={{ x: 0, opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 1, 
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="text-base md:text-xl font-semibold tracking-widest text-black/80 text-center uppercase"
                  style={{ 
                    fontFamily: "Alexandria, system-ui, sans-serif",
                    letterSpacing: "0.15em"
                  }}
                >
                  SADIF ENGINEERING CONSULTING COMPANY
                </motion.h2>
              )}
            </div>

            {/* شركة سديف للاستشارات الهندسية - من اليمين */}
            <div className="overflow-hidden w-full flex justify-center">
              {stage >= 3 && (
                <motion.h3
                  initial={{ x: 400, opacity: 0, scale: 0.8 }}
                  animate={{ x: 0, opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 1, 
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="text-xl md:text-3xl font-bold text-black/85 text-center"
                  style={{ 
                    fontFamily: "Alexandria, Arial, sans-serif",
                    letterSpacing: "0.02em",
                    direction: "rtl"
                  }}
                >
                  شركة سديف للاستشارات الهندسية
                </motion.h3>
              )}
            </div>

            {/* نقاط تحميل متحركة */}
            {stage >= 1 && (
              <div className="flex gap-2 mt-8">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ 
                      scale: [0, 1.2, 1],
                      opacity: [0.3, 1, 0.3]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut"
                    }}
                    className="w-3 h-3 bg-black rounded-full"
                  />
                ))}
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}