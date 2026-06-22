"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, m, useReducedMotion } from "framer-motion";

interface Props {
  words: string[];
  className?: string;
  interval?: number;
}

export function IdentityMorph({ words, className, interval = 2800 }: Props) {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval, reduce]);

  if (reduce) {
    return <span className={className}>{words[0]}</span>;
  }

  return (
    <span className={`relative inline-block ${className ?? ""}`} aria-live="off" aria-atomic="true">
      <AnimatePresence mode="wait">
        <m.span
          key={words[index]}
          className="inline-block"
          initial={{ opacity: 0, y: 14, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -14, filter: "blur(4px)" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {words[index]}
        </m.span>
      </AnimatePresence>
    </span>
  );
}
