"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { m, useReducedMotion } from "framer-motion";
import { fadeUp, VIEWPORT_ONCE } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

const phases = [
  {
    phase: "01",
    name: "STRIP",
    weeks: "Weeks 1–4",
    desc: "We identify the beliefs, patterns, and identities that have been running you without your permission. Nothing is added here. We only look, name, and release.",
    color: "#008e97",
    video: "/videos/forge-strip.webm",
  },
  {
    phase: "02",
    name: "FORGE",
    weeks: "Weeks 5–8",
    desc: "You begin to inhabit the identity that was always true of you. Not a new personality. A clearer one. We build the behaviours that flow from who you actually are.",
    color: "#007a82",
    video: "/videos/forge-forge.webm",
  },
  {
    phase: "03",
    name: "LEAD",
    weeks: "Weeks 9–12",
    desc: "You practice operating from the new identity under real conditions. Pressure, decisions, relationships. This is where the shift becomes permanent.",
    color: "#006e75",
    video: "/videos/forge-lead.webm",
  },
];

export function ForgeTimeline() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([null, null, null]);
  const [activePanel, setActivePanel] = useState(0);

  useEffect(() => {
    if (reduce) return;
    if (!sectionRef.current || !trackRef.current) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Pause all videos — scroll scrub controls playback
      videoRefs.current.forEach((v) => {
        if (v) { v.pause(); v.currentTime = 0; }
      });

      const ctx = gsap.context(() => {
        gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            pin: true,
            scrub: 1,
            end: "+=200%",
            onUpdate: (self) => {
              const p = self.progress;
              setActivePanel(p < 0.33 ? 0 : p < 0.66 ? 1 : 2);

              videoRefs.current.forEach((video, i) => {
                if (!video || !video.duration) return;
                const panelProgress = Math.max(0, Math.min(1,
                  (p - i / 3) / (1 / 3)
                ));
                video.currentTime = panelProgress * video.duration;
              });
            },
          },
        }).to(trackRef.current, { x: "-200vw", ease: "none" });
      }, sectionRef);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, [reduce]);

  return (
    <>
      {/* ── Desktop: horizontal scroll ── */}
      <div ref={sectionRef} className="relative hidden md:block" style={{ height: "300vh" }}>
        <div className="sticky top-0 h-screen overflow-hidden">
          <div ref={trackRef} className="flex h-full" style={{ width: "300vw" }}>
            {phases.map((item, i) => (
              <div
                key={item.phase}
                className="flex h-full flex-shrink-0"
                style={{ width: "100vw" }}
              >
                {/* Left — content */}
                <div
                  className="flex flex-col justify-center px-16 lg:px-24 bg-white"
                  style={{ width: "50vw" }}
                >
                  <span
                    className="block font-extrabold text-[#b3dde0] leading-none mb-2 select-none"
                    style={{ fontSize: 80 }}
                  >
                    {item.phase}
                  </span>
                  <h3
                    className="font-bold text-[#0f1f20] mb-3"
                    style={{ fontSize: 48 }}
                  >
                    {item.name}
                  </h3>
                  <p className="text-[#7a9ea1] text-sm font-semibold tracking-widest uppercase mb-6">
                    {item.weeks}
                  </p>
                  <p
                    className="text-[#3d5a5c] leading-relaxed max-w-[480px]"
                    style={{ fontSize: 18, lineHeight: 1.7 }}
                  >
                    {item.desc}
                  </p>
                </div>

                {/* Right — video */}
                <div
                  className="flex-shrink-0 overflow-hidden bg-[#e6f6f7]"
                  style={{ width: "50vw", height: "100vh" }}
                >
                  <video
                    ref={(el) => { videoRefs.current[i] = el; }}
                    src={item.video}
                    muted
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover"
                    onLoadedMetadata={(e) => {
                      (e.currentTarget as HTMLVideoElement).pause();
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Progress dots */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
            {phases.map((_, i) => (
              <div
                key={i}
                className="rounded-full transition-all duration-300"
                style={{
                  width: activePanel === i ? 10 : 8,
                  height: activePanel === i ? 10 : 8,
                  backgroundColor: activePanel === i ? "#008e97" : "#d0e8ea",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── Mobile: vertical fallback ── */}
      <div className="md:hidden space-y-8 px-6">
        {phases.map((item) => (
          <m.div
            key={item.phase}
            className="border border-[#d0e8ea] rounded-2xl overflow-hidden"
            variants={fadeUp}
            initial={reduce ? "visible" : "hidden"}
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
          >
            <video
              src={item.video}
              autoPlay
              muted
              loop
              playsInline
              className="w-full aspect-video object-cover"
            />
            <div className="p-6">
              <span
                className="block font-extrabold text-[#b3dde0] leading-none mb-1"
                style={{ fontSize: 48 }}
              >
                {item.phase}
              </span>
              <h3
                className="font-bold text-[#0f1f20] mb-1"
                style={{ fontSize: 28 }}
              >
                {item.name}
              </h3>
              <p className="text-[#7a9ea1] text-xs font-semibold tracking-widest uppercase mb-3">
                {item.weeks}
              </p>
              <p className="text-[#3d5a5c] text-sm leading-relaxed">{item.desc}</p>
            </div>
          </m.div>
        ))}
      </div>
    </>
  );
}
