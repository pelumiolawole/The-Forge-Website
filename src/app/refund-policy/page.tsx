import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy | Pelumi Olawole",
  description: "Refund policy for physical book orders delivered within Nigeria.",
};

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-[680px] mx-auto px-6">
        <p className="text-[#008e97] text-xs font-semibold uppercase tracking-[0.18em] mb-6">
          Legal
        </p>
        <h1
          className="font-['Fraunces'] font-bold text-[#0f1f20] mb-3 leading-tight"
          style={{ fontSize: "clamp(2rem, 5vw, 3rem)", letterSpacing: "-0.02em" }}
        >
          Refund Policy
        </h1>
        <p className="text-[#7a9ea1] text-sm mb-10">Last updated: July 1, 2026</p>

        <div className="h-px bg-[#d0e8ea] mb-10" />

        <div className="space-y-8 text-[#3d5a5c] leading-relaxed">
          <p>
            This policy applies to physical book orders placed through pelumiolawole.com
            for delivery within Nigeria.
          </p>

          <section>
            <h2 className="font-semibold text-[#0f1f20] mb-2">Eligibility</h2>
            <p>
              Refunds are available within 48 hours of purchase if your order cannot
              be fulfilled to your delivery location.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-[#0f1f20] mb-2">How to Request a Refund</h2>
            <p>
              Email{" "}
              <a
                href="mailto:coach@pelumiolawole.com"
                className="text-[#008e97] underline hover:text-[#007a82] transition-colors"
              >
                coach@pelumiolawole.com
              </a>{" "}
              with your name and the email address used at checkout. Reference your Selar order
              confirmation in your message.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-[#0f1f20] mb-2">Processing Time</h2>
            <p>
              Refunds are processed within 5–7 business days via the original payment method.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-[#0f1f20] mb-2">Delivery Fees</h2>
            <p>
              Delivery fees paid separately after your initial order are non-refundable
              once your order has been dispatched.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-[#0f1f20] mb-2">Questions</h2>
            <p>
              Contact{" "}
              <a
                href="mailto:coach@pelumiolawole.com"
                className="text-[#008e97] underline hover:text-[#007a82] transition-colors"
              >
                coach@pelumiolawole.com
              </a>{" "}
              for any questions about your order or this policy.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
