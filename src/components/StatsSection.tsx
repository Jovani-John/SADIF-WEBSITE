'use client';
import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';

export default function StatsSection() {
  const t = useTranslations('Stats');
  
  const stats = [
    { number: 50, key: "projects", suffix: "+" },
    { number: 30, key: "clients", suffix: "+" },
    { number: 10, key: "experience", suffix: "+" },
    { number: 100, key: "satisfaction", suffix: "%" },
  ];

  interface CounterProps {
    end: number;
    duration?: number;
  }

  const Counter = ({ end, duration = 1.5 }: CounterProps) => {
    const ref = useRef<HTMLSpanElement | null>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
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
    <section className="py-12 bg-[#ECE6E3] relative overflow-hidden" aria-labelledby="stats-heading">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, type: "spring" }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center relative group"
            >
              <div className="absolute inset-0 bg-white rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform opacity-40" />
              <div className="relative bg-white rounded-2xl p-6 shadow-md">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-3xl sm:text-4xl font-bold text-[#000000] mb-1"
                >
                  <Counter end={stat.number} />
                  {stat.suffix}
                </motion.div>

                <p className="text-[#979188] font-medium text-sm">{t(stat.key)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}