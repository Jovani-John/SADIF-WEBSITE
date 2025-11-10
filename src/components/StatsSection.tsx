'use client';
import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function StatsSection() {
  const stats = [
    { number: 50, label: "مشروع منجز", suffix: "+" },
    { number: 30, label: "عميل راضٍ", suffix: "+" },
    { number: 10, label: "سنوات خبرة", suffix: "+" },
    { number: 100, label: "نسبة الرضا", suffix: "%" },
  ];

  interface CounterProps {
    end: number;
    duration?: number;
  }

  const Counter = ({ end, duration = 2 }: CounterProps) => {
    const ref = useRef<HTMLSpanElement | null>(null);
    const isInView = useInView(ref, { once: true });
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isInView) return;

      let startTime: number | undefined;
      let raf: number;

      const animate = (time: number) => {
        if (!startTime) startTime = time;
        const progress = Math.min((time - startTime) / (duration * 1000), 1);

        setCount(Math.floor(progress * end));

        if (progress < 1) {
          raf = requestAnimationFrame(animate);
        }
      };

      raf = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(raf);
    }, [isInView, end, duration]);

    return <span ref={ref}>{count}</span>;
  };

  return (
    <section className="py-16 bg-[#ECE6E3] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring" }}
              whileHover={{ scale: 1.1, y: -10 }}
              className="text-center relative group"
            >
              <div className="absolute inset-0 bg-white rounded-3xl transform rotate-6 group-hover:rotate-12 transition-transform opacity-50" />
              <div className="relative bg-white rounded-3xl p-8 shadow-lg">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="text-5xl md:text-6xl font-bold text-[#000000] mb-2"
                >
                  <Counter end={stat.number} />
                  {stat.suffix}
                </motion.div>

                <p className="text-[#979188] font-medium">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
