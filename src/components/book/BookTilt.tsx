"use client";

import { useRef } from "react";
import { m, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import NextImage from "next/image";

interface Props {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

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
    <m.div
      ref={containerRef}
      className={`relative ${className ?? ""}`}
      style={{ perspective: "800px", rotateX: reduce ? 0 : rotateX, rotateY: reduce ? 0 : rotateY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative rounded-lg overflow-hidden shadow-[0_24px_64px_rgba(0,142,151,0.18),0_4px_16px_rgba(0,0,0,0.08)]">
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
            background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.18) 0%, transparent 60%)",
          }}
        />
      </div>
    </m.div>
  );
}
