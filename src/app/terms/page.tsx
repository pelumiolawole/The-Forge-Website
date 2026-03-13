import React from "react";
import Link from "next/link";

export default function TermsPage() {
  const lastUpdated = "March 2026";

  return (
    <main className="min-h-screen bg-[#F7F4EF]">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 pt-32 pb-20 md:pt-40 md:pb-28">

        <div className="mb-12">
          <Link href="/" className="text-[#008E97] text-sm hover:underline">
            Back to home
          </Link>
          <h1 className="font-serif text-3xl md:text-5xl text-[#0A0A0A] font-bold mt-6 mb-4 leading-tight">
            Terms and Conditions
          </h1>
          <p className="text-[#6B7280] text-sm">Last updated: {lastUpdated}</p>
        </div>

        <div className="space-y-10 text-[#4B4B4B] text-base md:text-lg leading-relaxed">

          <section>
            <h2 className="font-serif text-xl md:text-2xl text-[#0A0A0A] font-bold mb-4">About these terms</h2>
            <p>
              These terms govern your use of this website (pelumiolawole.com) and any services provided by Pelumi Olawole, trading as Coach PO / The Forge System, based in the United Kingdom. By using this website or purchasing any service, you agree to these terms.
            </p>
            <p className="mt-3">
              Contact: <a href="mailto:coach@pelumiolawole.com." className="text-[#008E97] hover:underline">coach@pelumiolawole.com.</a>
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl md:text-2xl text-[#0A0A0A] font-bold mb-4">Use of this website</h2>
            <p>
              You may use this website for lawful purposes only. You must not use it in any way that is unlawful, harmful, or fraudulent, or that infringes the rights of any third party. We reserve the right to restrict or terminate access for any user who breaches these terms.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl md:text-2xl text-[#0A0A0A] font-bold mb-4">Coaching services</h2>
            <p>
              The Forge Program and any other coaching services offered by Pelumi Olawole are personal development services. They are not a substitute for medical, psychological, or clinical therapy. If you are experiencing a clinical mental health condition, you should seek qualified professional support.
            </p>
            <p className="mt-3">
              Results from coaching vary between individuals. No specific outcomes are guaranteed. The work requires honest participation and consistent engagement from the client.
            </p>
            <p className="mt-3">
              Full programme terms, including payment, cancellation, and refund policies, will be provided in a separate client agreement prior to the commencement of any paid programme.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl md:text-2xl text-[#0A0A0A] font-bold mb-4">Digital products and downloads</h2>
            <p>
              Free digital content (including the Petty Audit report and sample chapter) is provided for personal use only. You may not redistribute, sell, or use this content commercially without written permission.
            </p>
            <p className="mt-3">
              We make reasonable efforts to ensure downloads are available and accurate. We do not guarantee uninterrupted access.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl md:text-2xl text-[#0A0A0A] font-bold mb-4">Intellectual property</h2>
            <p>
              All content on this website, including text, images, branding, and the Forge System framework, is the intellectual property of Pelumi Olawole unless otherwise stated. You may not reproduce, distribute, or create derivative works from this content without written permission.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl md:text-2xl text-[#0A0A0A] font-bold mb-4">Third-party links</h2>
            <p>
              This website contains links to third-party services including Calendly, Spotify, Apple Podcasts, and LinkedIn. We are not responsible for the content, privacy practices, or terms of those services. Use of third-party services is at your own discretion.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl md:text-2xl text-[#0A0A0A] font-bold mb-4">Limitation of liability</h2>
            <p>
              To the fullest extent permitted by law, Pelumi Olawole shall not be liable for any indirect, incidental, or consequential loss arising from your use of this website or any services provided. Nothing in these terms limits liability for death or personal injury caused by negligence, or for fraud.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl md:text-2xl text-[#0A0A0A] font-bold mb-4">Governing law</h2>
            <p>
              These terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl md:text-2xl text-[#0A0A0A] font-bold mb-4">Changes to these terms</h2>
            <p>
              We may update these terms from time to time. The date at the top of this page will reflect the latest version. Continued use of this website after changes are posted constitutes acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl md:text-2xl text-[#0A0A0A] font-bold mb-4">Contact</h2>
            <p>
              For any questions about these terms, contact us at{" "}
              <a href="mailto:coach@pelumiolawole.com." className="text-[#008E97] hover:underline">
                coach@pelumiolawole.com.
              </a>.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
