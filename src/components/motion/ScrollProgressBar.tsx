"use client";

import { useScroll, useSpring, m, useReducedMotion } from "framer-motion";

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 180, damping: 30, restDelta: 0.001 });
  const reduce = useReducedMotion();

  if (reduce) return null;

  return (
    <m.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-[#008e97] origin-left z-50"
      style={{ scaleX }}
    />
  );
}
