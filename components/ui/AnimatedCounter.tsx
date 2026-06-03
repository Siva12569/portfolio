"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  label: string;
  icon?: React.ReactNode;
}

export function AnimatedCounter({
  end,
  duration = 2000,
  suffix = "",
  prefix = "",
  label,
  icon,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  useEffect(() => {
    if (!inView) return;

    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));

      if (progress >= 1) {
        setCount(end);
        clearInterval(timer);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card p-6 text-center hover:shadow-lg transition-shadow duration-300"
    >
      {icon && (
        <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-brand-500/10 to-accent-500/10 flex items-center justify-center text-brand-500">
          {icon}
        </div>
      )}
      <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">
        {prefix}
        {count}
        {suffix}
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{label}</p>
    </motion.div>
  );
}
