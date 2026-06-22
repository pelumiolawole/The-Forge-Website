"use client";

import { useEffect, useRef, useState } from "react";
import { m, useReducedMotion } from "framer-motion";
import { fadeUp, VIEWPORT_ONCE } from "@/lib/motion";

const parts = [
  {
    id: "part-1",
    label: "Part 1",
    title: "How to Ruin Your Day Before Breakfast",
    habits: "Habits 1–5",
    pills: ["Hitting Snooze", "Phone First Thing", "Skipping Breakfast", "Avoiding Exercise", "No Morning Intention"],
  },
  {
    id: "part-2",
    label: "Part 2",
    title: "Your Phone Owns You",
    habits: "Habits 6–14",
    pills: ["Infinite Scroll", "Phantom Notifications", "Social Comparison", "Doom Scrolling", "App Addiction"],
  },
  {
    id: "part-3a",
    label: "Part 3A",
    title: "The Problem Is in Your Head",
    habits: "Habits 15–22",
    pills: ["Perfectionism", "Overthinking", "People Pleasing", "Fixed Mindset"],
  },
  {
    id: "part-3b",
    label: "Part 3B",
    title: "The Problem Is in Your Day",
    habits: "Habits 23–40",
    pills: ["Reactive Days", "No Deep Work", "Task Switching", "Fake Productivity"],
  },
  {
    id: "part-4",
    label: "Part 4",
    title: "Being Everyone's Helper Except Your Own",
    habits: "Habits 41–45",
    pills: ["Saying Yes Always", "Rescuer Pattern", "Boundary Avoidance"],
  },
  {
    id: "part-5",
    label: "Part 5",
    title: "Small Habits, Massive Destruction",
    habits: "Habits 46–50",
    pills: ["Giving Up Early", "Zero Follow-Through", "Comfort Seeking"],
  },
  {
    id: "epilogue",
    label: "Epilogue",
    title: "The 30-Day Identity Reset",
    habits: "",
    pills: ["Daily Check-In", "Identity Tracking", "Accountability"],
  },
];

export function TableOfContents() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState("part-1");
  const [mobileTab, setMobileTab] = useState("part-1");
  const partRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    parts.forEach(({ id }) => {
      const el = partRefs.current[id];
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: "-40% 0px -40% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section className="bg-white py-20 md:py-28">
      {/* Mobile tab bar */}
      <div className="md:hidden overflow-x-auto flex gap-4 px-6 pb-6 border-b border-[#d0e8ea] mb-8">
        {parts.map((p) => (
          <button
            key={p.id}
            onClick={() => {
              setMobileTab(p.id);
              partRefs.current[p.id]?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex-shrink-0 pb-2 text-[13px] font-semibold transition-colors"
            style={{
              color: mobileTab === p.id ? "#008e97" : "#7a9ea1",
              borderBottom: mobileTab === p.id ? "2px solid #008e97" : "2px solid transparent",
            }}
          >
            {p.label}
          </button>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="lg:flex gap-0">
          {/* Sticky sidebar — desktop only */}
          <aside className="hidden md:block w-[280px] flex-shrink-0">
            <div
              className="sticky bg-[#f4fafb] border-r border-[#d0e8ea] rounded-tl-lg rounded-bl-lg px-6 py-8"
              style={{ top: 80 }}
            >
              <p className="text-[#0f1f20] text-[13px] font-bold tracking-[0.1em] uppercase mb-6">
                Contents
              </p>
              <nav className="space-y-1">
                {parts.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => partRefs.current[p.id]?.scrollIntoView({ behavior: "smooth" })}
                    className="w-full text-left px-3 py-[10px] rounded-r-lg border-l-[2px] transition-all duration-200"
                    style={{
                      borderLeftColor: active === p.id ? "#008e97" : "transparent",
                      background: active === p.id ? "#e6f6f7" : "transparent",
                    }}
                  >
                    <p className="text-[#7a9ea1] text-[11px] font-medium">{p.label}</p>
                    <p
                      className="font-medium text-[13px] leading-snug mt-0.5"
                      style={{ color: active === p.id ? "#008e97" : "#3d5a5c" }}
                    >
                      {p.title}
                    </p>
                    {p.habits && (
                      <p className="text-[#b3dde0] text-[11px] mt-0.5">{p.habits}</p>
                    )}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Scrollable content */}
          <div className="flex-1 lg:pl-12">
            {parts.map((p, idx) => (
              <m.div
                key={p.id}
                ref={(el: HTMLDivElement | null) => { partRefs.current[p.id] = el; }}
                variants={fadeUp}
                initial={reduce ? "visible" : "hidden"}
                whileInView="visible"
                viewport={VIEWPORT_ONCE}
              >
                <p className="text-[#008e97] font-bold tracking-[0.15em] uppercase mb-2" style={{ fontSize: 11 }}>
                  {p.label}
                </p>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h3 className="text-[#0f1f20] font-bold" style={{ fontSize: "1.8rem" }}>
                    {p.title}
                  </h3>
                  {p.habits && (
                    <span className="bg-[#e6f6f7] text-[#008e97] text-[12px] font-semibold rounded-full px-3 py-1">
                      {p.habits}
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap gap-2 mb-8">
                  {p.pills.map((pill) => (
                    <span
                      key={pill}
                      className="bg-[#f4fafb] border border-[#d0e8ea] text-[#3d5a5c] rounded-full px-[14px] py-[6px]"
                      style={{ fontSize: 13 }}
                    >
                      {pill}
                    </span>
                  ))}
                </div>
                {idx < parts.length - 1 && (
                  <div className="h-px bg-[#d0e8ea] mb-12" />
                )}
              </m.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
