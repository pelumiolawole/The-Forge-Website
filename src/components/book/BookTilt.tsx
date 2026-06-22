"use client";

import { useRef } from "react";
import { m, useMotionValue, useSpring, useReducedMotion, type Easing } from "framer-motion";
import NextImage from "next/image";

interface Props {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

const floatAnimation = {
  y: [0, -18, 0],
  rotate: [-0.5, 0.5, -0.5],
};

const floatTransition = {
  duration: 4,
  ease: "easeInOut" as Easing,
  repeat: Infinity,
  repeatType: "loop" as const,
};

const shadowAnimation = {
  boxShadow: [
    "0 20px 30px rgba(0,142,151,0.15), 0 4px 16px rgba(0,0,0,0.08)",
    "0 35px 50px rgba(0,142,151,0.08), 0 4px 16px rgba(0,0,0,0.05)",
    "0 20px 30px rgba(0,142,151,0.15), 0 4px 16px rgba(0,0,0,0.08)",
  ],
};

export function BookTilt({ src, alt, width, height, className }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const rotateXRaw = useMotionValue(0);
  const rotateYRaw = useMotionValue(0);
  const rotateX = useSpring(rotateXRaw, { stiffness: 200, damping: 20, mass: 0.5 });
  const rotateY = useSpring(rotateYRaw, { stiffness: 200, damping: 20, mass: 0.5 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduce || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    rotateYRaw.set((x - 0.5) * 18);
    rotateXRaw.set(-(y - 0.5) * 18);
    if (glareRef.current) {
      glareRef.current.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(255,255,255,0.18) 0%, transparent 60%)`;
    }
  }

  function handleMouseLeave() {
    rotateXRaw.set(0);
    rotateYRaw.set(0);
    if (glareRef.current) {
      glareRef.current.style.background = `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.18) 0%, transparent 60%)`;
    }
  }

  return (
    // Outer wrapper: continuous float + slight rotation
    <m.div
      className={className}
      animate={reduce ? undefined : floatAnimation}
      transition={reduce ? undefined : floatTransition}
    >
      {/* Inner wrapper: 3D tilt on hover */}
      <m.div
        ref={containerRef}
        className="relative"
        style={{
          perspective: "800px",
          rotateX: reduce ? 0 : rotateX,
          rotateY: reduce ? 0 : rotateY,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Cover: shadow animates in sync with float */}
        <m.div
          className="relative rounded-lg overflow-hidden"
          animate={reduce ? undefined : shadowAnimation}
          transition={reduce ? undefined : floatTransition}
          style={
            reduce
              ? { boxShadow: "0 24px 64px rgba(0,142,151,0.18), 0 4px 16px rgba(0,0,0,0.08)" }
              : undefined
          }
        >
          <NextImage
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="block w-full h-auto"
            priority
          />
          <div
            ref={glareRef}
            className="absolute inset-0 pointer-events-none rounded-lg"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.18) 0%, transparent 60%)",
            }}
          />
        </m.div>
      </m.div>
    </m.div>
  );
}
