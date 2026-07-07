import { Mail } from "lucide-react";

export function BulkOrders() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="bg-[#f4fafb] border border-[#d0e8ea] rounded-2xl p-8 md:p-12 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#0f1f20] mb-4 leading-tight">
            Bring Petty Little Things to your team.
          </h2>
          <p className="text-[#3d5a5c] text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-8">
            Bulk orders of 25+ copies for teams and organisations include a
            complimentary 45-minute lunch-and-learn session with Pelumi — on
            the identity patterns quietly shaping how your people perform.
          </p>
          <a
            href="mailto:coach@pelumiolawole.com?subject=Team%20order%20—%20Petty%20Little%20Things"
            className="primary-button inline-flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <Mail size={18} />
            Enquire about team orders
          </a>
        </div>
      </div>
    </section>
  );
}
