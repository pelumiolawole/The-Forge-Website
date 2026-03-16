"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Check, Loader2 } from "lucide-react";

const questions = [
  { id: 1, domain: 0, text: "You have a clear sense of who you are regardless of what others think of you.", reversed: false },
  { id: 2, domain: 0, text: "You often feel like the version of you others see is different from who you actually are.", reversed: true },
  { id: 3, domain: 0, text: "You know what you stand for when it costs you something.", reversed: false },
  { id: 4, domain: 0, text: "You change how you present yourself significantly depending on who is in the room.", reversed: true },
  { id: 5, domain: 0, text: "You feel settled in your own identity rather than performing it.", reversed: false },
  { id: 6, domain: 1, text: "You regularly start things you do not finish.", reversed: true },
  { id: 7, domain: 1, text: "You find yourself avoiding specific tasks even when you know they matter.", reversed: true },
  { id: 8, domain: 1, text: "Your behaviour under pressure reflects the person you are trying to become.", reversed: false },
  { id: 9, domain: 1, text: "You have patterns you have tried to change multiple times without lasting success.", reversed: true },
  { id: 10, domain: 1, text: "Your daily choices generally reflect your actual values.", reversed: false },
  { id: 11, domain: 2, text: "You are able to ask for what you need in your closest relationships.", reversed: false },
  { id: 12, domain: 2, text: "You find yourself becoming a different version of yourself around certain people.", reversed: true },
  { id: 13, domain: 2, text: "Your relationships tend to bring out the best version of you.", reversed: false },
  { id: 14, domain: 2, text: "You regularly sacrifice your own needs to maintain harmony with others.", reversed: true },
  { id: 15, domain: 2, text: "You attract people who reflect the identity you are building.", reversed: false },
  { id: 16, domain: 3, text: "Your physical and digital environment supports the person you are trying to become.", reversed: false },
  { id: 17, domain: 3, text: "Your surroundings make it harder, not easier, to do your best work.", reversed: true },
  { id: 18, domain: 3, text: "You have deliberately designed your environment to reinforce your identity.", reversed: false },
  { id: 19, domain: 3, text: "You spend significant time in spaces that drain rather than build you.", reversed: true },
  { id: 20, domain: 3, text: "The people and places you regularly expose yourself to push you forward.", reversed: false },
  { id: 21, domain: 4, text: "The story you tell about yourself is one you have consciously chosen.", reversed: false },
  { id: 22, domain: 4, text: "You often explain your situation in ways that position you as the victim of circumstances.", reversed: true },
  { id: 23, domain: 4, text: "You believe the next chapter of your life is genuinely available to you.", reversed: false },
  { id: 24, domain: 4, text: "Old failures or setbacks still define how you see your potential.", reversed: true },
  { id: 25, domain: 4, text: "The way you talk about yourself to others reflects the person you are becoming.", reversed: false },
];

const domainNames = ["Self-Concept", "Habits", "Relationships", "Environment", "Narrative"];

const answerLabels = [
  { value: 1, label: "Strongly Disagree" },
  { value: 2, label: "Disagree" },
  { value: 3, label: "Neutral" },
  { value: 4, label: "Agree" },
  { value: 5, label: "Strongly Agree" },
];

interface TypeResult {
  type: string;
  emailKey: string;
  description: string;
  color: string;
  image: string;
}

const types: Record<string, TypeResult> = {
  overthinker: {
    type: "The Overthinker",
    emailKey: "overthinker",
    description: "You are intelligent, capable, and you know it. The problem is that your mind has become a prison built entirely out of possibility. You can see every angle, anticipate every obstacle, and construct every contingency. Which is exactly why nothing moves. The analysis is not the work. It is the avoidance of the work.",
    color: "#008E97",
    image: "/images/type-overthinker.png",
  },
  performer: {
    type: "The Performer",
    emailKey: "performer",
    description: "You are extraordinary at showing up for others. In every room, every relationship, every role, you deliver. The gap no one sees is between that version of you and the one that exists when the audience is gone. You have become so good at being what others need that you have lost reliable access to what you actually are.",
    color: "#C8963E",
    image: "/images/type-performer.png",
  },
  avoider: {
    type: "The Avoider",
    emailKey: "avoider",
    description: "Your calendar is full. Your to-do list is long. You are always in motion. And somehow the things that would actually change your life keep getting pushed to next week. This is not a time management problem. Busyness is your most sophisticated defence mechanism. You are not lazy. You are hiding in plain sight.",
    color: "#008E97",
    image: "/images/type-avoider.png",
  },
  drifter: {
    type: "The Drifter",
    emailKey: "drifter",
    description: "You are capable. People around you know it. You probably know it too. And yet something keeps you from fully committing to a direction and holding it. The issue is not effort or intelligence. It is that you have not yet built an identity strong enough to keep you anchored when the motivation fades. Potential without direction is just noise.",
    color: "#C8963E",
    image: "/images/type-drifter.png",
  },
};

function getIdentityType(domainScores: number[]): TypeResult {
  const indexed = domainScores.map((score, i) => ({ score, i }));
  const sorted = [...indexed].sort((a, b) => a.score - b.score);
  const lowest = sorted[0].i;
  const secondLowest = sorted[1].i;
  const weakPair = new Set([lowest, secondLowest]);

  if (weakPair.has(1) && domainScores[0] >= 15) return types.overthinker;
  if (weakPair.has(0) && weakPair.has(2)) return types.performer;
  if (weakPair.has(1) && weakPair.has(4)) return types.avoider;
  if (weakPair.has(0) && weakPair.has(4)) return types.drifter;
  if (lowest === 0 || lowest === 4) return types.drifter;
  if (lowest === 1) return types.avoider;
  if (lowest === 2) return types.performer;
  return types.overthinker;
}

function calculateResults(answers: Record<number, number>) {
  const domainScores = [0, 0, 0, 0, 0];
  const domainCounts = [0, 0, 0, 0, 0];

  questions.forEach((q) => {
    const raw = answers[q.id] ?? 3;
    const score = q.reversed ? 6 - raw : raw;
    domainScores[q.domain] += score;
    domainCounts[q.domain]++;
  });

  const scaled = domainScores.map((s, i) =>
    Math.round((s / (domainCounts[i] * 5)) * 25)
  );
  const total = scaled.reduce((a, b) => a + b, 0);
  const typeResult = getIdentityType(scaled);

  return { domainScores: scaled, total, typeResult };
}

type Stage = "intro" | "quiz" | "analysing" | "results" | "capture" | "done";

export default function PettyAuditPage() {
  const [stage, setStage] = useState<Stage>("intro");
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [selected, setSelected] = useState<number | null>(null);
  const [results, setResults] = useState<ReturnType<typeof calculateResults> | null>(null);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const progress = Math.round((currentQ / questions.length) * 100);
  const q = questions[currentQ];

  function handleAnswer(value: number) {
    setSelected(value);
    setTimeout(() => {
      const newAnswers = { ...answers, [q.id]: value };
      setAnswers(newAnswers);
      setSelected(null);

      if (currentQ + 1 < questions.length) {
        setCurrentQ(currentQ + 1);
      } else {
        setStage("analysing");
        setTimeout(() => {
          const r = calculateResults(newAnswers);
          setResults(r);
          setStage("results");
        }, 2000);
      }
    }, 350);
  }

  function handleBack() {
    if (currentQ > 0) {
      setCurrentQ(currentQ - 1);
      setSelected(null);
    }
  }

  async function handleEmailSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!results) return;
    setSubmitting(true);
    setSubmitError(false);

    try {
      const res = await fetch("/api/audit-report", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          firstName: firstName || undefined,
          identityType: results.typeResult.type,
          emailKey: results.typeResult.emailKey,
          domainScores: results.domainScores,
          total: results.total,
        }),
      });

      if (!res.ok) throw new Error("Failed");
      setStage("done");
    } catch {
      setSubmitError(true);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="bg-[#0A0A0A] text-white min-h-screen">

      {/* INTRO */}
      {stage === "intro" && (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 60%, rgba(0,142,151,0.10) 0%, transparent 70%)" }} />
          <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center pt-32 pb-20">
            <p className="section-label mb-6">Free Diagnostic Tool</p>
            <h1 className="font-serif font-black mb-8 leading-tight" style={{ fontSize: "clamp(2.2rem, 6vw, 4.5rem)" }}>
              Find out which 3 habits are quietly
              <br /><span className="text-[#008E97]">costing you the most.</span>
            </h1>
            <p className="text-white/70 text-base md:text-xl max-w-2xl mx-auto mb-4 font-light leading-relaxed">
              25 questions. 5 identity domains. One honest result. You will see exactly which patterns are running your life and what they say about the identity underneath them.
            </p>
            <p className="text-[#C8963E] font-medium mb-10 text-sm md:text-base">Takes 5 minutes. The clarity lasts longer.</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-2xl mx-auto">
              {Object.values(types).map((t) => (
                <div key={t.type} className="relative h-28 rounded-xl overflow-hidden">
                  <Image src={t.image} alt={t.type} fill className="object-cover" sizes="200px" />
                  <div className="absolute inset-0 bg-black/50 flex items-end p-3">
                    <p className="text-white text-xs font-semibold leading-tight">{t.type}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setStage("quiz")}
              className="gold-button inline-flex items-center justify-center gap-2 w-full sm:w-auto text-base px-10 py-4"
            >
              Start the Audit
              <ArrowRight size={18} />
            </button>
            <p className="text-white/30 text-sm mt-4">Free. No signup required to start.</p>
          </div>
        </section>
      )}

      {/* QUIZ */}
      {stage === "quiz" && (
        <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 pt-32">
          <div className="w-full max-w-2xl mx-auto">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white/40 text-xs">Question {currentQ + 1} of {questions.length}</span>
                <span className="text-[#008E97] text-xs font-medium">{domainNames[q.domain]}</span>
              </div>
              <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-[#008E97] rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
              </div>
            </div>

            <div className="bg-[#111111] border border-white/8 rounded-2xl p-8 md:p-12 mb-6">
              <p className="text-white/50 text-xs font-semibold tracking-widest uppercase mb-6">{domainNames[q.domain]}</p>
              <h2 className="font-serif text-xl md:text-2xl text-white leading-snug mb-10">{q.text}</h2>

              <div className="space-y-3">
                {answerLabels.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => handleAnswer(opt.value)}
                    className={`w-full flex items-center gap-4 px-5 py-4 rounded-xl border text-left transition-all duration-200 ${
                      selected === opt.value
                        ? "bg-[#008E97] border-[#008E97] text-white"
                        : answers[q.id] === opt.value
                        ? "bg-[#008E97]/20 border-[#008E97]/50 text-white"
                        : "bg-white/3 border-white/10 text-white/70 hover:border-[#008E97]/50 hover:text-white"
                    }`}
                  >
                    <span className={`w-8 h-8 rounded-full border flex-shrink-0 flex items-center justify-center text-xs font-bold transition-all ${
                      selected === opt.value || answers[q.id] === opt.value
                        ? "border-white bg-white text-[#008E97]"
                        : "border-white/20 text-white/40"
                    }`}>
                      {opt.value}
                    </span>
                    <span className="text-sm md:text-base">{opt.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {currentQ > 0 && (
              <button onClick={handleBack} className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 text-sm transition-colors">
                <ArrowLeft size={14} />
                Previous question
              </button>
            )}
          </div>
        </section>
      )}

      {/* ANALYSING */}
      {stage === "analysing" && (
        <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
          <div className="w-20 h-20 rounded-full border-2 border-[#008E97]/20 flex items-center justify-center mb-8">
            <Loader2 className="w-8 h-8 text-[#008E97] animate-spin" />
          </div>
          <p className="section-label mb-4">Processing</p>
          <h2 className="font-serif text-2xl md:text-3xl text-white mb-4">Analysing your responses...</h2>
          <p className="text-white/50 text-base max-w-sm">Calculating your identity profile across all five domains.</p>
        </section>
      )}

      {/* RESULTS */}
      {stage === "results" && results && (
        <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 pt-32">
          <div className="w-full max-w-2xl mx-auto">
            <p className="section-label text-center mb-6">Your Identity Type</p>

            <div className="bg-[#111111] border border-white/8 rounded-2xl overflow-hidden mb-6">
              <div className="relative h-52">
                <Image src={results.typeResult.image} alt={results.typeResult.type} fill className="object-cover" sizes="672px" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: results.typeResult.color }} />
                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-white">{results.typeResult.type}</h2>
                  </div>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-white/75 text-base md:text-lg leading-relaxed">{results.typeResult.description}</p>
              </div>
            </div>

            <div className="bg-[#111111] border border-white/8 rounded-2xl p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <p className="text-white/60 text-sm font-medium">Your 5 Domain Scores</p>
                <span className="text-[#008E97] text-xs font-semibold">Full breakdown in your email</span>
              </div>
              <div className="space-y-3 blur-sm select-none pointer-events-none">
                {domainNames.map((name, i) => (
                  <div key={name}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-white/60 text-xs">{name}</span>
                      <span className="text-white/40 text-xs">{results.domainScores[i]}/25</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: `${(results.domainScores[i] / 25) * 100}%`, backgroundColor: results.typeResult.color }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => setStage("capture")}
              className="gold-button inline-flex items-center justify-center gap-2 w-full text-base py-4"
            >
              Get Your Full Breakdown
              <ArrowRight size={18} />
            </button>
            <p className="text-white/30 text-xs text-center mt-3">Your detailed report, top 3 blockers, and next steps sent to your inbox.</p>
          </div>
        </section>
      )}

      {/* EMAIL CAPTURE */}
      {stage === "capture" && results && (
        <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 pt-32">
          <div className="w-full max-w-md mx-auto">
            <p className="section-label text-center mb-4">Almost there</p>
            <h2 className="font-serif text-2xl md:text-3xl text-white text-center mb-3">
              Where should we send your full report?
            </h2>
            <p className="text-white/50 text-sm text-center mb-8">
              Your full breakdown includes domain scores, top 3 identity-level blockers, and a specific next step.
            </p>

            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First name (optional)"
                className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#008E97] transition-colors"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#008E97] transition-colors"
              />
              {submitError && (
                <p className="text-red-400 text-sm text-center">Something went wrong. Please try again.</p>
              )}
              <button
                type="submit"
                disabled={submitting}
                className="w-full gold-button inline-flex items-center justify-center gap-2 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? (
                  <><Loader2 size={18} className="animate-spin" />Sending your report...</>
                ) : (
                  <>Send My Full Report<ArrowRight size={18} /></>
                )}
              </button>
            </form>
            <p className="text-white/20 text-xs text-center mt-4">No spam. Unsubscribe anytime.</p>
          </div>
        </section>
      )}

      {/* DONE */}
      {stage === "done" && results && (
        <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center">
          <div className="w-20 h-20 rounded-full bg-[#008E97]/15 flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-[#008E97]" />
          </div>
          <p className="section-label mb-4">Report Sent</p>
          <h2 className="font-serif text-2xl md:text-3xl text-white mb-4">Check your inbox.</h2>
          <p className="text-white/60 text-base max-w-md mx-auto mb-10">
            Your full Petty Audit breakdown is on its way. If it does not arrive within a few minutes, check your spam folder.
          </p>

          <div className="bg-[#111111] border border-white/8 rounded-2xl overflow-hidden w-full max-w-xs mx-auto mb-10">
            <div className="relative w-full h-48">
              <Image
                src={results.typeResult.image}
                alt={results.typeResult.type}
                fill
                className="object-cover"
                sizes="320px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Your result</p>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: results.typeResult.color }} />
                  <p className="text-white font-serif text-lg font-bold">{results.typeResult.type}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book" className="gold-button inline-flex items-center justify-center gap-2 w-full sm:w-auto">
              Get Petty Little Things<ArrowRight size={18} />
            </Link>
            <Link href="/forge-program" className="inline-flex items-center justify-center gap-2 px-6 py-4 border-2 border-white/10 rounded-lg text-white/70 font-semibold hover:border-[#008E97] hover:text-white transition-all w-full sm:w-auto text-sm">
              Learn about The Forge Program
            </Link>
          </div>
        </section>
      )}

    </main>
  );
}
