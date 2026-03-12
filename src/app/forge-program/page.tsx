"use client";

import { useState } from "react";
import Link from "next/link";

// FAQ Accordion Component
function FAQItem({ 
  question, 
  answer, 
  isOpen, 
  onClick 
}: { 
  question: string; 
  answer: string; 
  isOpen: boolean; 
  onClick: () => void;
}) {
  return (
    <div className="border-b border-[#E5E5E5]">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left"
      >
        <span className="font-serif text-lg md:text-xl text-[#0A0A0A]">{question}</span>
        <span className={`text-[#008E97] text-2xl transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
          +
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}
      >
        <p className="text-[#6B6B6B] leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function ForgeProgramPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const handleFAQClick = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const calendlyUrl = "https://calendly.com/olawolepelumisunday/30min";

  const faqs = [
    {
      question: "Is this therapy?",
      answer: "No. The Forge Program is coaching, not clinical therapy. We work on your identity, self-leadership, and behaviour patterns — not mental health diagnosis or treatment. If you are dealing with clinical depression, anxiety disorders, or trauma, I will refer you to a qualified therapist. This work is for people who are functionally fine but know they are capable of more."
    },
    {
      question: "What if I cannot afford the full amount upfront?",
      answer: "A payment plan is available on request. The programme is an investment, and I do not want money to be the only reason someone who is ready cannot join. If you are committed to the work, we will find a structure that works. Book a Discovery Call and we will discuss options."
    },
    {
      question: "How is this different from other coaching programmes?",
      answer: "Most coaching gives you strategies and accountability for doing more. The Forge works on who you are being while you do it. You do not need another productivity system. You need a different kind of person operating your life. That is what we build."
    },
    {
      question: "What time commitment is required?",
      answer: "One hour per week for our session, plus whatever time you need to complete the between-session work. Most clients find the real work happens in the ordinary moments of their week — the decisions they make differently because they are becoming a different kind of person. It is not about adding hours to your schedule. It is about changing how you show up in the hours you already have."
    },
    {
      question: "What happens after the 12 weeks?",
      answer: "You have three options. One: you are done. You have what you need and you go build. Two: you continue with monthly maintenance sessions to keep the work alive. Three: you join The Forge Alumni community for ongoing peer support. Most people choose option one or two. The goal is that by week 12, you do not need me anymore."
    },
    {
      question: "How do I know if I am ready?",
      answer: "You are ready when you are tired of your own excuses but not sure how to break the pattern. When you have read the books and tried the systems and still find yourself stuck. When you are willing to look at the parts of yourself you have been avoiding. If that resonates, book a Discovery Call. I will tell you honestly if this is the right fit."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      {/* SECTION 1 — HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A] pt-32 pb-20">
        {/* Radial gradient background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at center, rgba(0, 142, 151, 0.15) 0%, transparent 60%)'
            }}
          />
        </div>
        
        <div className="relative z-10 px-6 md:px-12 text-center max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
            This is not a coaching programme. It is a reconstruction.
          </h1>
          
          <p className="text-[#A3A3A3] text-xl md:text-2xl mb-12">
            12 weeks. One question. Who are you now, consistently?
          </p>
          
          <Link
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#C8963E] text-[#0A0A0A] px-10 py-5 rounded-full font-medium text-lg hover:bg-[#B0852E] transition-colors"
          >
            Apply for The Forge Program
          </Link>
        </div>
      </section>

      {/* SECTION 2 — THE PROBLEM */}
      <section className="px-6 md:px-12 lg:px-20 py-20 md:py-28 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto">
          <span className="text-[#008E97] text-sm font-medium tracking-widest uppercase block mb-6">
            Why most coaching fails
          </span>
          
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-12">
            You do not have a strategy problem.
          </h2>
          
          <div className="space-y-6 mb-12">
            <p className="text-[#A3A3A3] text-lg leading-relaxed">
              You have seen the people I am talking about. They have the intelligence, the resources, the network, the opportunity. Everything they need to move is already in the room. And yet they are stuck. Not stuck because they do not know what to do. Stuck because some part of them is still operating as the old version of themselves.
            </p>
            
            <p className="text-[#A3A3A3] text-lg leading-relaxed">
              The patterns that got them here are still running the show. The avoidance. The self-sabotage. The identity they built years ago that no longer fits the life they say they want. They are trying to execute a new strategy with an old self. It does not work.
            </p>
            
            <p className="text-[#A3A3A3] text-lg leading-relaxed">
              Most coaching tries to fix this with better tactics. Smarter systems. More accountability. But tactics do not change the person using them. The Forge works on the being, not just the doing. Because who you are will always outlast what you know.
            </p>
          </div>
          
          {/* Teal left-border blockquote */}
          <div className="border-l-4 border-[#008E97] pl-6 py-2">
            <p className="font-serif text-2xl md:text-3xl text-white italic">
              Most coaching fixes the doing. I work on the being.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — THE PROGRAMME */}
      <section className="px-6 md:px-12 lg:px-20 py-20 md:py-28 bg-[#F0FAFB]">
        <div className="max-w-5xl mx-auto">
          <span className="text-[#008E97] text-sm font-medium tracking-widest uppercase block mb-6">
            The Forge System™
          </span>
          
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#0A0A0A] leading-tight mb-16">
            Three phases. Twelve weeks. One identity shift.
          </h2>

          {/* Horizontal Timeline */}
          <div className="relative mb-16">
            {/* Horizontal line - desktop */}
            <div className="hidden lg:block absolute top-[1.5rem] left-0 right-0 h-px bg-[#008E97]/30" />
            
            {/* Vertical line - mobile */}
            <div className="lg:hidden absolute top-0 bottom-0 left-[1.5rem] w-px bg-[#008E97]/30" />

            <div className="grid lg:grid-cols-3 gap-12 lg:gap-8 relative">
              {/* Phase 1 - STRIP */}
              <div className="relative pl-12 lg:pl-0">
                <div className="absolute left-0 lg:left-0 top-[1.5rem] lg:top-[1.5rem] w-3 h-3 rounded-full bg-[#008E97] lg:relative lg:mb-8" />
                <div className="space-y-3">
                  <span className="text-[#008E97] text-sm font-medium">01</span>
                  <h3 className="font-serif text-3xl text-[#0A0A0A]">STRIP</h3>
                  <p className="text-[#6B6B6B] text-xs uppercase tracking-widest">Weeks 1–3</p>
                  <p className="text-[#6B6B6B] leading-relaxed">
                    Honest diagnosis. What patterns are actually running you?
                  </p>
                </div>
              </div>

              {/* Phase 2 - FORGE */}
              <div className="relative pl-12 lg:pl-0">
                <div className="absolute left-0 lg:left-0 top-[1.5rem] lg:top-[1.5rem] w-3 h-3 rounded-full bg-[#008E97] lg:relative lg:mb-8" />
                <div className="space-y-3">
                  <span className="text-[#008E97] text-sm font-medium">02</span>
                  <h3 className="font-serif text-3xl text-[#0A0A0A]">FORGE</h3>
                  <p className="text-[#6B6B6B] text-xs uppercase tracking-widest">Weeks 4–9</p>
                  <p className="text-[#6B6B6B] leading-relaxed">
                    Identity architecture. Who are you becoming?
                  </p>
                </div>
              </div>

              {/* Phase 3 - LEAD */}
              <div className="relative pl-12 lg:pl-0">
                <div className="absolute left-0 lg:left-0 top-[1.5rem] lg:top-[1.5rem] w-3 h-3 rounded-full bg-[#008E97] lg:relative lg:mb-8" />
                <div className="space-y-3">
                  <span className="text-[#008E97] text-sm font-medium">03</span>
                  <h3 className="font-serif text-3xl text-[#0A0A0A]">LEAD</h3>
                  <p className="text-[#6B6B6B] text-xs uppercase tracking-widest">Weeks 10–12</p>
                  <p className="text-[#6B6B6B] leading-relaxed">
                    Sustained self-leadership. Who are you now, every day?
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Phase descriptions */}
          <div className="space-y-6 max-w-3xl">
            <p className="text-[#6B6B6B] leading-relaxed">
              In STRIP, we strip away the stories you have been telling yourself. The ones about why you are the way you are. The justifications. The identity you have outgrown but are still clinging to. This is uncomfortable work. It is also the only work that matters.
            </p>
            
            <p className="text-[#6B6B6B] leading-relaxed">
              In FORGE, we build the new architecture. Not just goals and plans, but a fundamentally different way of seeing yourself. We install the beliefs, behaviours, and boundaries that match the person you are becoming. This is where the identity shift happens.
            </p>
            
            <p className="text-[#6B6B6B] leading-relaxed">
              In LEAD, we make it sustainable. You learn to lead yourself without needing external accountability. The new version of you becomes the default, not the exception. By week 12, you are not performing change. You are being someone different.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4 — WHO IT'S FOR */}
      <section className="px-6 md:px-12 lg:px-20 py-20 md:py-28 bg-[#0A0A0A]">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-16">
            This programme is not for everyone.
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* IS FOR */}
            <div>
              <h3 className="text-[#008E97] text-sm font-medium tracking-widest uppercase mb-8">This is for you if</h3>
              <div className="space-y-6">
                <p className="text-white leading-relaxed">
                  You are tired of your own excuses and ready to confront the parts of yourself you have been avoiding.
                </p>
                <p className="text-white leading-relaxed">
                  You have tried the systems and the strategies and you know the problem is not information. It is identity.
                </p>
                <p className="text-white leading-relaxed">
                  You are willing to do the slow, unsexy work of becoming a different kind of person, not just getting better results.
                </p>
                <p className="text-white leading-relaxed">
                  You want a coach who will tell you the truth, not just cheer you on.
                </p>
              </div>
            </div>

            {/* IS NOT FOR */}
            <div>
              <h3 className="text-[#6B6B6B] text-sm font-medium tracking-widest uppercase mb-8">This is not for you if</h3>
              <div className="space-y-6">
                <p className="text-[#6B6B6B] leading-relaxed">
                  You are looking for a quick fix or a motivational boost that fades in two weeks.
                </p>
                <p className="text-[#6B6B6B] leading-relaxed">
                  You want someone to give you a step-by-step blueprint to follow without questioning your own behaviour.
                </p>
                <p className="text-[#6B6B6B] leading-relaxed">
                  You are not willing to look at your shadow — the parts of you that show up under pressure.
                </p>
                <p className="text-[#6B6B6B] leading-relaxed">
                  You are looking for therapy or clinical support for mental health conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — WHAT'S INCLUDED */}
      <section className="px-6 md:px-12 lg:px-20 py-20 md:py-28 bg-[#F7F4EF]">
        <div className="max-w-5xl mx-auto">
          <span className="text-[#008E97] text-sm font-medium tracking-widest uppercase block mb-6">
            What you get
          </span>
          
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#0A0A0A] leading-tight mb-16">
            Everything you need to become who you say you want to be.
          </h2>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Item 1 */}
            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-[#008E97] mt-2 shrink-0" />
              <div>
                <h3 className="font-serif text-xl text-[#0A0A0A] mb-2">12 Weekly 1:1 Sessions</h3>
                <p className="text-[#6B6B6B] leading-relaxed">One hour each week, directly with me. No group calls. No templates. Just focused work on your specific identity patterns and growth edges.</p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-[#008E97] mt-2 shrink-0" />
              <div>
                <h3 className="font-serif text-xl text-[#0A0A0A] mb-2">The Identity Workbook</h3>
                <p className="text-[#6B6B6B] leading-relaxed">A structured guide for the between-session work. Exercises, reflections, and practices that make the identity shift concrete and trackable.</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-[#008E97] mt-2 shrink-0" />
              <div>
                <h3 className="font-serif text-xl text-[#0A0A0A] mb-2">WhatsApp Support</h3>
                <p className="text-[#6B6B6B] leading-relaxed">Direct access between sessions for the moments when you need clarity, accountability, or just someone to remind you who you are becoming.</p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-[#008E97] mt-2 shrink-0" />
              <div>
                <h3 className="font-serif text-xl text-[#0A0A0A] mb-2">Post-Programme Review Call</h3>
                <p className="text-[#6B6B6B] leading-relaxed">One month after we finish, we check in. What has stuck? What needs reinforcement? How do you keep this alive without me?</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — TESTIMONIALS */}
      <section className="px-6 md:px-12 lg:px-20 py-20 md:py-28 bg-[#0A0A0A]">
        <div className="max-w-5xl mx-auto">
          <span className="text-[#008E97] text-sm font-medium tracking-widest uppercase block mb-6">
            From people who have done the work
          </span>
          
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-16">
            What changes when you stop performing and start being.
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="border border-[#1A1A1A] rounded-2xl p-8">
              <p className="font-serif text-xl text-white italic mb-6 leading-relaxed">
                "I came to Pelumi thinking I needed better time management. What I actually needed was to stop believing I was the kind of person who always lets people down. That shift did more for my business than any productivity hack ever could."
              </p>
              <div>
                <p className="text-white font-medium">Sarah K.</p>
                <p className="text-[#6B6B6B] text-sm">Founder, Tech Startup</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="border border-[#1A1A1A] rounded-2xl p-8">
              <p className="font-serif text-xl text-white italic mb-6 leading-relaxed">
                "The Forge is not comfortable. You will confront things about yourself you have spent years avoiding. But on the other side of that is a version of you that does not need to force discipline. You just are that person."
              </p>
              <div>
                <p className="text-white font-medium">David M.</p>
                <p className="text-[#6B6B6B] text-sm">Executive, Financial Services</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — THE INVESTMENT */}
      <section className="px-6 md:px-12 lg:px-20 py-20 md:py-28 bg-[#0A0A0A] border-t border-[#1A1A1A]">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-[#008E97] text-sm font-medium tracking-widest uppercase block mb-6">
            The Investment
          </span>
          
          <p className="font-serif text-6xl md:text-7xl text-white mb-6">£1,997</p>
          
          <p className="text-[#A3A3A3] text-lg mb-12">
            One payment. Twelve weeks. One version of you that does not need this programme anymore.
          </p>
          
          <div className="space-y-4">
            <Link
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#C8963E] text-[#0A0A0A] px-10 py-5 rounded-full font-medium text-lg hover:bg-[#B0852E] transition-colors"
            >
              Apply Now
            </Link>
            
            <p className="text-[#6B6B6B] text-sm">
              Not sure yet? Book a free 30-min Discovery Call first.
            </p>
            
            <Link
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#008E97] text-[#008E97] px-8 py-4 rounded-full font-medium hover:bg-[#008E97] hover:text-white transition-colors"
            >
              Book a Discovery Call
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 8 — FAQ */}
      <section className="px-6 md:px-12 lg:px-20 py-20 md:py-28 bg-[#F0FAFB]">
        <div className="max-w-3xl mx-auto">
          <span className="text-[#008E97] text-sm font-medium tracking-widest uppercase block mb-6">
            Questions
          </span>
          
          <h2 className="font-serif text-3xl md:text-4xl text-[#0A0A0A] leading-tight mb-12">
            What people ask before they apply.
          </h2>

          <div className="space-y-0">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFAQ === index}
                onClick={() => handleFAQClick(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 bg-[#0A0A0A] border-t border-[#1A1A1A]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            The person you want to become is already in you.
          </h2>
          <p className="text-[#A3A3A3] text-lg mb-8">
            The Forge Program is how you clear what is in the way.
          </p>
          <Link
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#C8963E] text-[#0A0A0A] px-10 py-5 rounded-full font-medium text-lg hover:bg-[#B0852E] transition-colors"
          >
            Apply Now →
          </Link>
        </div>
      </section>
    </main>
  );
}