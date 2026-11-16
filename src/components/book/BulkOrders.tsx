import { Mail, Calendar } from "lucide-react";

export function BulkOrders() {
  return (
    <section id="team" className="bg-white py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="bg-[#f4fafb] border border-[#d0e8ea] rounded-2xl p-8 md:p-12 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#0f1f20] mb-4 leading-tight">
            For teams and new managers
          </h2>

          <div className="space-y-4 text-[#3d5a5c] text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-8 text-left">
            <p>
              Petty Little Things is 50 small habits that shape how people work, each with a fix small enough to try the same day. The workplace habits managers recognise first, such as micromanaging everything and saying yes to everything, are covered in Part 3.
            </p>
            <p>
              Order 25 or more copies for your team and I will run a free 45-minute lunch-and-learn, with dates from the first half of next year.
            </p>
            <p>
              Nigeria: 25 or more copies at ₦10,000 each, payment before delivery. UK and elsewhere: team pricing on request.
            </p>
          </div>

          {/* Pull quote from the foreword */}
          <blockquote className="border-l-[3px] border-[#008e97] bg-[#e6f6f7] rounded-r-lg px-6 py-5 mb-8 text-left max-w-xl mx-auto">
            <p className="text-[#0f1f20] italic" style={{ fontSize: "1.1rem", lineHeight: 1.7 }}>
              &ldquo;I knew exactly what to do.&rdquo;
            </p>
            <footer className="text-[#7a9ea1] text-[13px] leading-relaxed mt-3">
              &mdash; Kehinde Fawumi<br />
              Director, Global Product Development at Mastercard<br />
              <em>Foreword, Petty Little Things</em>
            </footer>
          </blockquote>

          <p className="text-[#7a9ea1] text-sm mb-8">
            I reply to every enquiry within two working days.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:coach@pelumiolawole.com?subject=Team%20enquiry%3A%20Petty%20Little%20Things&body=Hi%20Pelumi%2C%0D%0A%0D%0AI%27m%20enquiring%20about%20team%20copies%20of%20Petty%20Little%20Things.%0D%0A%0D%0ACompany%3A%20%0D%0A%0D%0ATeam%20size%3A%20%0D%0A%0D%0AHow%20did%20you%20find%20this%20page%3A%20%0D%0A%0D%0AThanks%2C"
              className="primary-button inline-flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <Mail size={18} />
              Request team details
            </a>
            <a
              href="https://calendly.com/olawolepelumisunday/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="ghost-button inline-flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <Calendar size={18} />
              Book a 30-minute call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
