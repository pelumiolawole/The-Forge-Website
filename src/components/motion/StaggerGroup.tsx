"use client";

import { m, useReducedMotion } from "framer-motion";
import { staggerContainer, staggerItem, VIEWPORT_ONCE } from "@/lib/motion";
import type { Variants } from "framer-motion";

interface GroupProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

interface ItemProps {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
}

export function StaggerGroup({ children, className, as = "div" }: GroupProps) {
  const reduce = useReducedMotion();
  const Tag = as as keyof JSX.IntrinsicElements;

  if (reduce) {
    return <Tag className={className}>{children}</Tag>;
  }

  const MotionTag = (m as unknown as Record<string, React.ElementType>)[as] ?? m.div;

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
      variants={staggerContainer}
    >
      {children}
    </MotionTag>
  );
}

export function StaggerItem({ children, className, variants = staggerItem }: ItemProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <m.div className={className} variants={variants}>
      {children}
    </m.div>
  );
}
