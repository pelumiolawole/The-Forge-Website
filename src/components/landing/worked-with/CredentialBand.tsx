import { CREDENTIALS } from "@/content/credentials";

const items = [
  <>Founder, IIC Networks ({CREDENTIALS.founded})</>,
  <>
    {CREDENTIALS.professionalsTrained.toLocaleString("en-GB")}+ professionals
    trained across the UK &amp; West Africa
  </>,
  <>
    Author, <em className="italic">{CREDENTIALS.bookTitle}</em>
  </>,
  <>Creator, The Forge System</>,
];

export function CredentialBand() {
  return (
    <section className="relative z-0 py-10 md:py-12 bg-[#f4fafb] border-y border-[#d0e8ea]">
      <p className="max-w-5xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-2 md:gap-3 text-center text-sm md:text-[15px] leading-relaxed text-[#7a9ea1]">
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-3">
            {item}
            {i < items.length - 1 && (
              <span className="hidden md:inline text-[#b3dde0]" aria-hidden>
                &middot;
              </span>
            )}
          </span>
        ))}
      </p>
    </section>
  );
}
