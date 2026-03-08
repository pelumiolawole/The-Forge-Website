import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pelumi Olawole | Leadership Coach & Author",
  description: "Transform your leadership from the inside out. Executive coaching, the FORGE methodology, and practical tools for growth-driven professionals.",
  keywords: ["leadership coaching", "executive coach", "personal development", "FORGE methodology", "Pelumi Olawole"],
  authors: [{ name: "Pelumi Olawole" }],
  openGraph: {
    title: "Pelumi Olawole | Leadership Coach & Author",
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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
