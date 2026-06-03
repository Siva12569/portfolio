"use client";

import { useState, useEffect } from "react";

export function useAnimatedCounter(
  end: number,
  duration: number = 2000,
  inView: boolean = false
): number {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(eased * end));

      if (progress >= 1) {
        setCount(end);
        clearInterval(timer);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return count;
}
