"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { m, AnimatePresence, useReducedMotion } from "framer-motion";
import NextImage from "next/image";

const banners = [
  {
    src: "/images/book/plt-banner-a.png",
    alt: "Petty Little Things — Out July 1, Golden Hour",
  },
  {
    src: "/images/book/plt-banner-b.png",
    alt: "Petty Little Things — Out July 1, Cinematic",
  },
  {
    src: "/images/book/plt-banner-c.png",
    alt: "Petty Little Things — Out July 1, Warm",
  },
];

const INTERVAL_MS = 4000;

export function BannerCarousel() {
  const reduce = useReducedMotion();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const advance = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % banners.length);
  }, []);

  const startInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(advance, INTERVAL_MS);
  }, [advance]);

  const stopInterval = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (reduce || isPaused) return;
    startInterval();
    return stopInterval;
  }, [reduce, isPaused, startInterval, stopInterval]);

  function goTo(index: number) {
    setCurrentIndex(index);
    if (!reduce && !isPaused) startInterval();
  }

  // Reduced-motion fallback: static vertical stack
  if (reduce) {
    return (
      <m.section
        className="w-full bg-[#f4fafb]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, margin: "-10%" }}
      >
        <div className="flex flex-col gap-0">
          {banners.map((banner) => (
            <div key={banner.src} className="relative w-full aspect-video">
              <NextImage
                src={banner.src}
                alt={banner.alt}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
        <CaptionBar />
      </m.section>
    );
  }

  return (
    <m.section
      className="w-full bg-[#f4fafb]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-10%" }}
    >
      {/* Carousel */}
      <div
        className="relative w-full aspect-video overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence mode="sync">
          <m.div
            key={currentIndex}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <NextImage
              src={banners[currentIndex].src}
              alt={banners[currentIndex].alt}
              fill
              sizes="100vw"
              className="object-cover"
              priority={currentIndex === 0}
            />
          </m.div>
        </AnimatePresence>

        {/* Dot indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
          {banners.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to banner ${i + 1}`}
              className="flex items-center justify-center"
              style={{ minWidth: 44, minHeight: 44 }}
            >
              <m.span
                className="block rounded-full"
                animate={{
                  width: i === currentIndex ? 24 : 8,
                  height: 8,
                  backgroundColor:
                    i === currentIndex
                      ? "#008e97"
                      : "rgba(255,255,255,0.6)",
                  borderRadius: i === currentIndex ? 4 : 9999,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </button>
          ))}
        </div>
      </div>

      <CaptionBar />
    </m.section>
  );
}

function CaptionBar() {
  return (
    <div className="w-full bg-[#f4fafb] border-t border-[#d0e8ea] px-6 py-3 flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-0">
      <span
        className="text-[#7a9ea1] text-center sm:text-left"
        style={{ fontSize: 13, letterSpacing: "0.06em" }}
      >
        Petty Little Things — Out July 1, 2026
      </span>
      <span
        className="text-[#7a9ea1] text-center sm:text-right"
        style={{ fontSize: 13, letterSpacing: "0.06em" }}
      >
        Kindle &amp; Paperback · Amazon
      </span>
    </div>
  );
}
