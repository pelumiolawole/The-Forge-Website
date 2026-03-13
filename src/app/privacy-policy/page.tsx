import React from "react";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  const lastUpdated = "March 2026";

  return (
    <main className="min-h-screen bg-[#F7F4EF]">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 pt-32 pb-20 md:pt-40 md:pb-28">

        <div className="mb-12">
          <Link href="/" className="text-[#008E97] text-sm hover:underline">
            Back to home
          </Link>
          <h1 className="font-serif text-3xl md:text-5xl text-[#0A0A0A] font-bold mt-6 mb-4 leading-tight">
            Privacy Policy
          </h1>
          <p className="text-[#6B7280] text-sm">Last updated: {lastUpdated}</p>
        </div>

        <div className="prose-custom space-y-10 text-[#4B4B4B] text-base md:text-lg leading-relaxed">

          <section>
            <h2 className="font-serif text-xl md:text-2xl text-[#0A0A0A] font-bold mb-4">Who we are</h2>
            <p>
              This website is operated by Pelumi Olawole, trading as Coach PO / The Forge System, based in the United Kingdom. References to "we", "us", or "our" in this policy refer to Pelumi Olawole.
            </p>
            <p className="mt-3">
              Contact: <a href="mailto:coach@pelumiolawole.com" className="text-[#008E97] hover:underline">coach@pelumiolawole.com</a>
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl md:text-2xl text-[#0A0A0A] font-bold mb-4">What data we collect</h2>
            <p>We collect personal data in the following circumstances:</p>
            <ul className="mt-3 space-y-2 list-none">
              {[
                "When you subscribe to the email list via the Petty Audit, book waitlist, or sample chapter download — we collect your email address.",
                "When you complete the Petty Audit — we collect your questionnaire responses and email address.",
                "When you book a Discovery Call via Calendly — Calendly collects your name, email, and any information you provide. Calendly has its own privacy policy.",
                "When you visit this website — standard analytics data may be collected (see Cookies section below).",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-[#008E97] flex-shrink-0 mt-1">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl md:text-2xl text-[#0A0A0A] font-bold mb-4">How we use your data</h2>
            <p>We use your data for the following purposes:</p>
            <ul className="mt-3 space-y-2 list-none">
              {[
                "To send you the content you requested (sample chapter, audit results, waitlist updates).",
                "To send you email communications about The Forge System, Petty Little Things, and related content. You can unsubscribe at any time.",
                "To contact you about coaching programmes or services you have expressed interest in.",
                "To improve this website and understand how it is being used.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-[#008E97] flex-shrink-0 mt-1">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4">
              We do not sell your data. We do not share it with third parties for their own marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl md:text-2xl text-[#0A0A0A] font-bold mb-4">Legal basis for processing (UK GDPR)</h2>
            <p>
              Where you have submitted your email address voluntarily to receive content or updates, we process your data on the basis of your consent. You may withdraw consent at any time by clicking the unsubscribe link in any email.
            </p>
            <p className="mt-3">
              Where processing is necessary to fulfil a service you have requested (such as delivering a booked coaching session), we process your data on the basis of contractual necessity.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl md:text-2xl text-[#0A0A0A] font-bold mb-4">Third-party services</h2>
            <p>We use the following third-party tools to operate this website and business:</p>
            <ul className="mt-3 space-y-2 list-none">
              {[
                "Sender.net — email marketing. Your email address is stored on Sender's servers. Sender's privacy policy applies.",
                "Calendly — appointment scheduling. Calendly's privacy policy applies.",
                "Vercel — website hosting. Vercel's privacy policy applies.",
                "Typeform — audit form processing. Typeform's privacy policy applies.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-[#008E97] flex-shrink-0 mt-1">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl md:text-2xl text-[#0A0A0A] font-bold mb-4">Cookies</h2>
            <p>
              This website may use cookies for analytics purposes. These are used to understand how visitors use the site and to improve the experience. No personally identifiable information is collected through cookies without your consent.
            </p>
            <p className="mt-3">
              You can control or disable cookies through your browser settings at any time.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl md:text-2xl text-[#0A0A0A] font-bold mb-4">How long we keep your data</h2>
            <p>
              We retain email subscriber data for as long as you remain subscribed. When you unsubscribe, your email is removed from active sending lists. You may request full deletion at any time by contacting us.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl md:text-2xl text-[#0A0A0A] font-bold mb-4">Your rights</h2>
            <p>Under UK GDPR you have the right to:</p>
            <ul className="mt-3 space-y-2 list-none">
              {[
                "Access the personal data we hold about you.",
                "Correct any inaccurate data we hold.",
                "Request deletion of your data.",
                "Withdraw consent for processing at any time.",
                "Lodge a complaint with the Information Commissioner's Office (ICO) at ico.org.uk.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-[#008E97] flex-shrink-0 mt-1">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4">
              To exercise any of these rights, contact us at{" "}
              <a href="mailto:coach@pelumiolawole.com" className="text-[#008E97] hover:underline">
                coach@pelumiolawole.com
              </a>.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl md:text-2xl text-[#0A0A0A] font-bold mb-4">Changes to this policy</h2>
            <p>
              We may update this policy from time to time. When we do, we will update the date at the top of this page. Continued use of this website after changes are posted constitutes your acceptance of the revised policy.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}

