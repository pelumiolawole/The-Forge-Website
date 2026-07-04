import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { ScrollProgressBar } from "@/components/motion/ScrollProgressBar";
import { ConditionalNav, ConditionalFooter } from "@/components/layout/ConditionalChrome";

const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["opsz"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Coach PO | Identity Coach & Author",
  description: "Transform your leadership from the inside out. Executive coaching, the FORGE methodology, and practical tools for growth-driven professionals.",
  keywords: ["leadership coaching", "executive coach", "personal development", "FORGE methodology", "Pelumi Olawole"],
  authors: [{ name: "Pelumi Olawole" }],
  openGraph: {
    title: "Coach PO | Identity Coach & Author",
    description: "Transform your leadership from the inside out.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="antialiased">
        <MotionProvider>
          <ScrollProgressBar />
          <ConditionalNav />
          {children}
          <ConditionalFooter />
        </MotionProvider>
        <Analytics />
      </body>
    </html>
  );
}
