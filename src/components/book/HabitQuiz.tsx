"use client";

import { useState } from "react";
import { m, useReducedMotion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { VIEWPORT_ONCE } from "@/lib/motion";

const habits = [
  { num: "01", name: "Hitting Snooze", roast: "You're teaching yourself that your commitments are optional — before 6am." },
  { num: "02", name: "Checking Your Phone First Thing", roast: "Before you've thought a single original thought, you've downloaded everyone else's emergencies into your brain." },
  { num: "03", name: "Endless Research Mode", roast: "You've read 47 articles, watched 23 videos, and joined 14 groups. You have enough information to begin. You just refuse to." },
  { num: "04", name: "Waiting for Motivation", roast: "Motivation doesn't create action. Action creates motivation. You have it backwards." },
  { num: "05", name: "Perfectionism Disguised as Standards", roast: "You're not being thorough. You're hiding. Perfectionism is just fear wearing a blazer." },
  { num: "06", name: "Saying Yes to Everything", roast: "You're not being helpful. You're being a pushover with a calendar." },
  { num: "07", name: "Comparing Your Progress to Others", roast: "You're measuring your chapter three against someone else's chapter twenty. It's not a fair fight and you set it up yourself." },
  { num: "08", name: "Making To-Do Lists You Never Use", roast: "The list is tidy. The work is untouched. You reorganised the deck chairs." },
  { num: "09", name: "Overcomplicating Simple Tasks", roast: "You need to send an email. It should take 5 minutes. It has now taken 45. It's an email. Not the Gettysburg Address." },
  { num: "10", name: "Avoiding Difficult Conversations", roast: "You'd rather let something rot than have one uncomfortable conversation. And you wonder why the problem is still there." },
];

export function HabitQuiz() {
  const reduce = useReducedMotion();
  const [recognised, setRecognised] = useState<Set<number>>(new Set());

  function toggle(i: number) {
    setRecognised((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  }

  return (
    <section className="bg-[#f4fafb] py-20 md:py-28">
      <div className="max-w-[600px] mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-[#0f1f20] font-extrabold mb-3" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}>
            Which of these do you recognise?
          </h2>
          <p className="text-[#7a9ea1]">Be honest. No one is watching.</p>
        </div>

        {/* Counter */}
        <div className="text-center mb-8">
          <m.p
            key={recognised.size}
            className="text-[#008e97] font-bold text-lg"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            You&rsquo;ve recognised {recognised.size} so far
          </m.p>
        </div>

        {/* Cards */}
        <div className="space-y-4">
          {habits.map((habit, i) => {
            const active = recognised.has(i);
            return (
              <m.button
                key={i}
                onClick={() => toggle(i)}
                className="w-full text-left rounded-[10px] border px-8 py-7 flex items-start gap-5 cursor-pointer transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#008e97]"
                style={{
                  background: active ? "#e6f6f7" : "#ffffff",
                  borderColor: active ? "#008e97" : "#d0e8ea",
                  borderLeftWidth: active ? 4 : 1,
                }}
                variants={{
                  hidden: { opacity: 0, scale: 0.97 },
                  visible: (idx: number) => ({
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.4, delay: idx * 0.08 },
                  }),
                }}
                custom={i}
                initial={reduce ? "visible" : "hidden"}
                whileInView="visible"
                viewport={VIEWPORT_ONCE}
              >
                {/* Content */}
                <div className="flex-1">
                  <p className="text-[#b3dde0] font-semibold tracking-[0.1em] uppercase mb-1" style={{ fontSize: 11 }}>
                    Habit #{habit.num}
                  </p>
                  <p className={`font-bold mb-2 text-[1.2rem] ${active ? "text-[#0f1f20]" : "text-[#0f1f20]"}`}>
                    {habit.name}
                  </p>
                  <p className="text-[#3d5a5c] leading-relaxed" style={{ fontSize: "1rem" }}>
                    {habit.roast}
                  </p>
                </div>
                {/* Checkbox */}
                <div
                  className="mt-1 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-200"
                  style={{
                    border: active ? "none" : "2px solid #d0e8ea",
                    background: active ? "#008e97" : "transparent",
                  }}
                >
                  {active && <Check size={13} className="text-white" strokeWidth={3} />}
                </div>
              </m.button>
            );
          })}
        </div>

        {/* Summary box — appears after selections */}
        <AnimatePresence>
          {recognised.size > 0 && (
            <m.div
              className="mt-10 bg-[#008e97] text-white rounded-[10px] px-8 py-7"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
            >
              <p className="font-bold text-xl mb-1">
                You recognised {recognised.size} out of 10.
              </p>
              <p className="text-white/80 mb-6">
                There are 40 more in the book.
              </p>
              <a
                href="https://www.amazon.co.uk/dp/B0H4J1NYBY"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 border-[1.5px] border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-sm"
              >
                Get the full list
                <ArrowRight size={15} />
              </a>
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
