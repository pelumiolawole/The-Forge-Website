"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Loader2, RotateCcw } from "lucide-react";

const JUNO_URL =
  "https://api.getjuno.com/api/v1/db/exposures/eyJfcmFpbHMiOnsiZGF0YSI6ImUyNjM1MTIxLTMyNWYtNGEwZi1iNGZhLTVkNTYxODQ0NGI2MSIsInB1ciI6InRhc2tfZGF0YWJhc2VfZXhwb3N1cmUvdGFza19kYXRhYmFzZV9leHBvc3VyZV9leGVjdXRpb24ifX0--efed42e38b0892d08279c47f243e0d38d48a6ac00c3a0102bc596dbc4a5ca341";

const SCORECARD_GROUP_ID = "epny2X";

const questions = [
  {
    id: 1,
    domain: "Morning",
    habit: "Hitting Snooze",
    text: "Hitting Snooze",
    sub: "You set an alarm. It goes off. And then you negotiate with it like you're haggling at a market.",
    options: [
      { label: "I get up when the alarm goes off. Every time.", value: 0 },
      { label: "I hit snooze once or twice some mornings.", value: 1 },
      { label: "I hit snooze multiple times. My alarm is a suggestion, not a commitment.", value: 2 },
    ],
  },
  {
    id: 2,
    domain: "Morning",
    habit: "Checking Your Phone First Thing",
    text: "Phone Before Your First Thought",
    sub: "Before you've thought a single original thought, you've downloaded everyone else's emergencies into your brain.",
    options: [
      { label: "I have a morning routine before I touch my phone.", value: 0 },
      { label: "I check my phone within 15 minutes of waking.", value: 1 },
      { label: "My phone is the first thing I reach for. I check it in bed.", value: 2 },
    ],
  },
  {
    id: 3,
    domain: "Digital",
    habit: "Doom Scrolling",
    text: "Doom Scrolling & Infinite Scroll",
    sub: "You opened Instagram for 2 minutes. Twenty minutes later you're watching a stranger make pasta. You have no idea how you got here.",
    options: [
      { label: "I set boundaries on my apps and stick to them.", value: 0 },
      { label: "I lose 20-30 minutes a day to mindless scrolling.", value: 1 },
      { label: "I scroll for an hour+ daily and feel worse after. Every time.", value: 2 },
    ],
  },
  {
    id: 4,
    domain: "Digital",
    habit: "Phantom Notifications",
    text: "Phantom Notifications",
    sub: "You felt your phone buzz. It didn't. But you checked anyway. And then you checked everything else while you were there.",
    options: [
      { label: "I check my phone when I choose to, not when it calls me.", value: 0 },
      { label: "I check my phone 10-20 times a day outside of work needs.", value: 1 },
      { label: "I can't sit through a meeting or meal without checking. It's compulsive.", value: 2 },
    ],
  },
  {
    id: 5,
    domain: "Mindset",
    habit: "Perfectionism Disguised as Standards",
    text: "Perfectionism Wearing a Blazer",
    sub: "You're not being thorough. You're hiding. Perfectionism is just fear wearing a blazer.",
    options: [
      { label: "I ship work when it's good enough and iterate later.", value: 0 },
      { label: "I delay finishing things because they 'aren't quite right yet.'", value: 1 },
      { label: "I have projects that have been 'almost done' for months.", value: 2 },
    ],
  },
  {
    id: 6,
    domain: "Mindset",
    habit: "Waiting for Motivation",
    text: "Waiting for Motivation",
    sub: "Motivation doesn't create action. Action creates motivation. You have it backwards.",
    options: [
      { label: "I start before I feel like it. Discipline over mood.", value: 0 },
      { label: "I wait until I 'feel ready' to begin important tasks.", value: 1 },
      { label: "I rarely start unless I feel motivated. So I rarely start.", value: 2 },
    ],
  },
  {
    id: 7,
    domain: "Productivity",
    habit: "Reactive Days",
    text: "Reactive Days With No Deep Work",
    sub: "Your calendar looks busy. But you haven't done one thing that actually moves the needle in weeks.",
    options: [
      { label: "I protect 2+ hours of deep work daily. Meetings don't own me.", value: 0 },
      { label: "Most of my day is meetings and emails. Deep work is rare.", value: 1 },
      { label: "I spend all day responding to other people's priorities. My goals are starving.", value: 2 },
    ],
  },
  {
    id: 8,
    domain: "Productivity",
    habit: "Task Switching",
    text: "Task Switching & Fake Productivity",
    sub: "You reorganised your to-do list. Again. The list is tidy. The work is untouched.",
    options: [
      { label: "I finish one task before starting the next. Single-tasking.", value: 0 },
      { label: "I juggle 3-5 things at once and finish none of them well.", value: 1 },
      { label: "I am always busy and always exhausted — with nothing meaningful to show for it.", value: 2 },
    ],
  },
  {
    id: 9,
    domain: "Boundaries",
    habit: "Saying Yes to Everything",
    text: "Saying Yes to Everything",
    sub: "You're not being helpful. You're being a pushover with a calendar.",
    options: [
      { label: "I say no to requests that don't align with my priorities.", value: 0 },
      { label: "I say yes more than I should and resent it later.", value: 1 },
      { label: "My calendar is full of things I agreed to but don't want to do.", value: 2 },
    ],
  },
  {
    id: 10,
    domain: "Boundaries",
    habit: "Avoiding Difficult Conversations",
    text: "Avoiding Difficult Conversations",
    sub: "You'd rather let something rot than have one uncomfortable conversation. And you wonder why the problem is still there.",
    options: [
      { label: "I address issues directly and early. No avoidance.", value: 0 },
      { label: "I delay hard conversations hoping they'll resolve themselves.", value: 1 },
      { label: "I actively avoid confrontation even when it's costing me peace, money, or respect.", value: 2 },
    ],
  },
];

const domainShifts: Record<string, { shift: string; action: string }> = {
  Morning: {
    shift: "From 'I need more sleep' to 'I honour my commitments, starting with the first one.'",
    action: "Set one alarm. Place your phone across the room. Get up on the first ring — tomorrow.",
  },
  Digital: {
    shift: "From 'I need to stay connected' to 'I control my attention. My phone does not control me.'",
    action: "Delete one app you scroll mindlessly for 7 days. Not forever. Just 7 days.",
  },
  Mindset: {
    shift: "From 'I need to feel ready' to 'I act my way into feeling ready, not the other way around.'",
    action: "Start the task you've been avoiding for 5 minutes today. Set a timer. Begin badly.",
  },
  Productivity: {
    shift: "From 'I am busy' to 'I am focused. Busy is a choice. Focused is a discipline.'",
    action: "Block 90 minutes tomorrow for your most important task. No email. No Slack. No excuses.",
  },
  Boundaries: {
    shift: "From 'I don't want to disappoint people' to 'My yes means nothing if my no means nothing.'",
    action: "Say no to one request this week — politely, firmly, and without over-explaining.",
  },
};

type View = "hero" | "quiz" | "gate" | "results";

interface Answer {
  questionId: number;
  value: number;
}

interface Results {
  score: number;
  bucket: string;
  domain: string;
  shift: string;
  action: string;
  topHabits: { habit: string; domain: string }[];
}

export function ScorecardClient() {
  const [view, setView] = useState<View>("hero");
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [results, setResults] = useState<Results | null>(null);

  const progress = Math.round(((currentQ + 1) / questions.length) * 100);
  const q = questions[currentQ];

  function selectAnswer(value: number) {
    const newAnswers = [...answers, { questionId: q.id, value }];
    setAnswers(newAnswers);
    if (currentQ + 1 < questions.length) {
      setCurrentQ(currentQ + 1);
    } else {
      setView("gate");
    }
  }

  async function handleEmailSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);

    const score = answers.reduce((sum, a) => sum + a.value, 0);
    const maxScore = questions.length * 2;
    const scorePct = Math.round((score / maxScore) * 100);

    const domainScores: Record<string, number> = {};
    questions.forEach((question, i) => {
      domainScores[question.domain] = (domainScores[question.domain] ?? 0) + answers[i].value;
    });
    const dominantDomain = Object.keys(domainScores).reduce((a, b) =>
      domainScores[a] > domainScores[b] ? a : b
    );

    let bucket = "Low";
    if (scorePct >= 40 && scorePct < 70) bucket = "Moderate";
    if (scorePct >= 70) bucket = "High";

    const shift = domainShifts[dominantDomain] ?? domainShifts.Mindset;

    const topHabits = answers
      .map((a, i) => ({ ...a, habit: questions[i].habit, domain: questions[i].domain }))
      .sort((x, y) => y.value - x.value)
      .slice(0, 3);

    const computed: Results = {
      score: scorePct,
      bucket,
      domain: dominantDomain,
      shift: shift.shift,
      action: shift.action,
      topHabits,
    };

    setResults(computed);

    await Promise.allSettled([
      fetch(JUNO_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: firstName || "Anonymous",
          email,
          score: scorePct,
          dominant_domain: dominantDomain,
          answers: JSON.stringify(answers),
          result_bucket: bucket,
          source: "petty_habit_scorecard",
          submitted_at: new Date().toISOString().slice(0, 10),
        }),
      }),
      fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          firstName: firstName || undefined,
          groupId: SCORECARD_GROUP_ID,
          fields: {
            score: scorePct,
            dominant_domain: dominantDomain,
            result_bucket: bucket,
            id_shift_statement: shift.shift,
            daily_action: shift.action,
          },
        }),
      }),
    ]);

    setSubmitting(false);
    setView("results");
  }

  function reset() {
    setView("hero");
    setCurrentQ(0);
    setAnswers([]);
    setEmail("");
    setFirstName("");
    setResults(null);
  }

  // HERO
  if (view === "hero") {
    return (
      <section className="max-w-3xl mx-auto px-6 pt-32 pb-16 text-center">
        <p className="text-[#008e97] text-sm font-semibold uppercase tracking-widest mb-4">2-Minute Self-Audit</p>
        <h1
          className="font-serif font-bold leading-tight mb-6 text-[#0f1f20]"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
        >
          Which petty habits are quietly ruining your life?
        </h1>
        <p className="text-[#3d5a5c] text-lg leading-relaxed max-w-xl mx-auto mb-8">
          You are not lazy. You are not undisciplined. There is a gap between who you know you are and how you are
          actually living. This scorecard exposes the 10 habits running your life — so you can fix them.
        </p>
        <button
          onClick={() => setView("quiz")}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-[#008e97] text-white text-lg font-semibold hover:bg-[#007a82] transition-colors"
        >
          Start the Audit <ArrowRight size={20} />
        </button>
        <p className="text-sm mt-4 text-[#7a9ea1]">
          Based on <em>Petty Little Things</em> — 50 Habits Quietly Ruining Your Life
        </p>
      </section>
    );
  }

  // QUIZ
  if (view === "quiz") {
    return (
      <section className="max-w-2xl mx-auto px-6 pt-32 pb-20">
        <div className="mb-8">
          <div className="flex justify-between text-sm font-medium mb-2 text-[#0f1f20]">
            <span>Question {currentQ + 1} of {questions.length}</span>
            <span className="text-[#008e97]">{progress}%</span>
          </div>
          <div className="h-2 bg-[#e5f0f1] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#008e97] rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div>
          <p className="text-[#7a9ea1] text-xs font-semibold uppercase tracking-widest mb-2">{q.domain}</p>
          <h2 className="font-serif text-2xl md:text-3xl text-[#0f1f20] font-bold mb-3">{q.text}</h2>
          <p className="text-[#3d5a5c] text-base mb-8 leading-relaxed">{q.sub}</p>

          <div className="space-y-3">
            {q.options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => selectAnswer(opt.value)}
                className="w-full text-left px-6 py-4 rounded-xl border-2 border-[#e5f0f1] text-[#3d5a5c] font-medium hover:border-[#008e97] hover:bg-[#f0f9fa] transition-all duration-200 text-base"
              >
                <span className="font-bold text-[#008e97] mr-2">{String.fromCharCode(65 + idx)}.</span>
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // EMAIL GATE
  if (view === "gate") {
    return (
      <section className="max-w-xl mx-auto px-6 pt-32 pb-20">
        <div className="text-center mb-8">
          <h2 className="font-serif text-3xl font-bold text-[#0f1f20] mb-3">Your results are ready.</h2>
          <p className="text-[#3d5a5c] text-lg leading-relaxed">
            Enter your email to unlock your personalised Petty Habit Scorecard, your dominant sabotage domain, and the
            one identity shift that changes everything.
          </p>
        </div>

        <form onSubmit={handleEmailSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="your@email.com"
            className="w-full px-5 py-4 rounded-xl border-2 border-[#e5f0f1] text-[#0f1f20] text-lg placeholder:text-[#b3dde0] focus:border-[#008e97] focus:outline-none transition-colors"
          />
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Your first name (optional)"
            className="w-full px-5 py-3 rounded-xl border-2 border-[#e5f0f1] text-[#0f1f20] text-base placeholder:text-[#b3dde0] focus:border-[#008e97] focus:outline-none transition-colors"
          />
          <button
            type="submit"
            disabled={submitting}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-[#008e97] text-white text-lg font-semibold hover:bg-[#007a82] disabled:opacity-60 transition-colors"
          >
            {submitting ? (
              <><Loader2 size={20} className="animate-spin" /> Processing…</>
            ) : (
              <>Reveal My Results <ArrowRight size={20} /></>
            )}
          </button>
          <p className="text-sm text-center text-[#7a9ea1]">No spam. Unsubscribe anytime. Your audit stays private.</p>
        </form>

        <p className="text-center mt-6">
          <Link href="/book" className="text-sm font-medium underline text-[#008e97]">
            Rather not share your email? Read the first chapter free instead.
          </Link>
        </p>
      </section>
    );
  }

  // RESULTS
  if (view === "results" && results) {
    const scoreLabel =
      results.bucket === "Low"
        ? "Your habits are mostly working for you."
        : results.bucket === "Moderate"
        ? "Some petty habits are quietly holding you back."
        : "Your habits are actively sabotaging your growth.";

    return (
      <section className="max-w-3xl mx-auto px-6 pt-32 pb-20">
        {/* Score */}
        <div className="text-center mb-10">
          <p className="text-[#008e97] text-sm font-semibold uppercase tracking-widest mb-3">Your Petty Habit Score</p>
          <div
            className="font-serif font-bold mb-2 text-[#0f1f20]"
            style={{ fontSize: "clamp(4rem, 12vw, 7rem)" }}
          >
            {results.score}
          </div>
          <p className="text-[#3d5a5c] text-lg mb-3">{scoreLabel}</p>
          <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold bg-[#e5f0f1] text-[#008e97]">
            Dominant Domain: {results.domain}
          </span>
        </div>

        {/* Top 3 saboteurs */}
        <div className="rounded-2xl p-8 mb-8 bg-[#f6fbfb] border border-[#e5f0f1]">
          <h3 className="font-serif text-xl font-bold text-[#0f1f20] mb-4">Your Top 3 Saboteurs</h3>
          <ul className="space-y-3">
            {results.topHabits.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 w-2 h-2 rounded-full bg-[#008e97] flex-shrink-0" />
                <div>
                  <p className="font-semibold text-[#0f1f20]">{item.habit}</p>
                  <p className="text-sm text-[#7a9ea1]">{item.domain} sabotage</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Identity Shift */}
        <div className="rounded-2xl p-8 mb-8 bg-[#0f1f20] text-white">
          <h3 className="font-serif text-xl font-bold mb-3">Your Identity Shift</h3>
          <p className="text-lg mb-4 opacity-90">{results.shift}</p>
          <div className="border-t border-white/20 pt-4">
            <p className="text-sm uppercase tracking-widest opacity-60 mb-1">Non-Negotiable Daily Action</p>
            <p className="text-lg font-semibold">{results.action}</p>
          </div>
        </div>

        {/* Book CTA */}
        <div className="rounded-2xl p-8 mb-8 text-center bg-[#f6fbfb] border border-[#e5f0f1]">
          <h3 className="font-serif text-2xl font-bold text-[#0f1f20] mb-3">
            This audit diagnosed 10 habits. The book fixes all 50.
          </h3>
          <p className="text-[#3d5a5c] text-base mb-6 max-w-lg mx-auto">
            Petty Little Things gives you the 5-1-1 Identity Shift Method for every habit — 5 exposing questions, 1
            identity statement, and 1 daily action that proves you have changed.
          </p>
          <a
            href="https://www.amazon.co.uk/dp/B0H4J1NYBY?utm_source=scorecard&utm_medium=landing&utm_campaign=petty_habit_audit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-[#008e97] text-white text-lg font-semibold hover:bg-[#007a82] transition-colors"
          >
            Get Petty Little Things on Amazon <ArrowRight size={20} />
          </a>
          <p className="text-sm mt-3 text-[#7a9ea1]">Kindle available now. Paperback from July 1.</p>
        </div>

        {/* Coaching CTA */}
        <div className="rounded-2xl p-8 mb-8 text-center border-2 border-[#008e97]">
          <h3 className="font-serif text-2xl font-bold text-[#0f1f20] mb-3">Want to go deeper than a quiz?</h3>
          <p className="text-[#3d5a5c] text-base mb-6 max-w-lg mx-auto">
            The Forge Program is a 12-week identity reset for growth-driven professionals who are done with
            surface-level advice. Or book a free 30-minute discovery call to unpack where your biggest gap actually
            lives.
          </p>
          <a
            href="https://calendly.com/olawolepelumisunday/30min?utm_source=scorecard&utm_medium=landing&utm_campaign=petty_habit_audit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-[#0f1f20] text-white text-lg font-semibold hover:bg-[#1a3335] transition-colors"
          >
            Book a Discovery Call <ArrowRight size={20} />
          </a>
          <p className="text-sm mt-3 text-[#7a9ea1]">5,000+ people trained across 2 continents.</p>
        </div>

        <div className="text-center">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 text-sm font-medium text-[#008e97] hover:text-[#007a82] transition-colors"
          >
            <RotateCcw size={14} />
            Retake the Audit
          </button>
        </div>
      </section>
    );
  }

  return null;
}
