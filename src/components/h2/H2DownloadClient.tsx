"use client";

import { useEffect } from "react";
import { Download } from "lucide-react";

const PDF_PATH = "/PDFs/H2_Blueprint_2026.pdf";

export function H2DownloadClient() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = PDF_PATH;
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#0f1f20] flex items-center justify-center px-6">
      {/* Dot grid */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #008e97 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.08,
        }}
      />
      {/* Ambient glow */}
      <div className="fixed top-0 right-0 w-[500px] h-[400px] bg-[#008e97] rounded-full blur-[160px] opacity-10 pointer-events-none" />

      <div className="relative z-10 text-center max-w-md mx-auto">
        {/* Coach PO wordmark */}
        <p className="text-[#008e97] text-xs font-semibold uppercase tracking-[0.18em] mb-10">
          Coach PO
        </p>

        {/* Animated download icon */}
        <div className="w-16 h-16 mx-auto mb-8 rounded-full bg-[#008e97]/10 border border-[#008e97]/20 flex items-center justify-center">
          <Download className="w-7 h-7 text-[#008e97] animate-bounce" />
        </div>

        <div className="w-10 h-[2px] bg-[#008e97] mx-auto mb-8" />

        <h1
          className="font-['Fraunces'] font-black text-white mb-4 leading-[1.1]"
          style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", letterSpacing: "-0.02em" }}
        >
          Your download is starting.
        </h1>

        <p className="text-[#b3dde0] text-base leading-relaxed mb-10">
          The H2 Blueprint is on its way to your device.
        </p>

        <a
          href={PDF_PATH}
          download
          className="inline-flex items-center gap-2 text-sm text-[#7a9ea1] hover:text-[#008e97] underline underline-offset-4 transition-colors"
        >
          <Download size={14} />
          Click here if your download didn&apos;t start
        </a>
      </div>
    </div>
  );
}
