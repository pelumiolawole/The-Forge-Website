import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Coach PO | The Forge System™ — Identity Coaching",
  description: "You already know what to do. So why aren't you doing it? The Forge System™ fixes the identity problem behind your performance gap.",
  keywords: ["identity coaching", "personal mastery", "self-leadership", "Coach PO", "The Forge System"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans bg-offwhite text-dark antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
