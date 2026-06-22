"use client";

import { m, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { fadeUp, VIEWPORT_ONCE } from "@/lib/motion";

interface Props {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
}

export function RevealOnScroll({ children, className, variants = fadeUp, delay = 0 }: Props) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <m.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
      variants={variants}
      custom={delay}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </m.div>
  );
}
