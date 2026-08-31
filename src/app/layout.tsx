import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { ScrollProgressBar } from "@/components/motion/ScrollProgressBar";
import { ConditionalNav, ConditionalFooter } from "@/components/layout/ConditionalChrome";

export const metadata: Metadata = {
  metadataBase: new URL("https://pelumiolawole.com"),
  title: {
    default: "Pelumi Olawole | Identity-First Leadership",
    template: "%s | Pelumi Olawole",
  },
  description:
    "Author of Petty Little Things and creator of The Forge System. Identity-first leadership development for professionals stepping into strategic authority.",
  authors: [{ name: "Pelumi Olawole" }],
  openGraph: {
    siteName: "Pelumi Olawole",
    title: "Pelumi Olawole | Identity-First Leadership",
    description:
      "Author of Petty Little Things and creator of The Forge System. Identity-first leadership development for professionals stepping into strategic authority.",
    type: "website",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "The Forge System",
  url: "https://pelumiolawole.com",
  logo: "https://pelumiolawole.com/images/logo-main.png",
  founder: {
    "@type": "Person",
    name: "Pelumi Olawole",
    sameAs: "https://www.linkedin.com/in/pelumiolawole/",
  },
  sameAs: ["https://www.linkedin.com/in/pelumiolawole/"],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="antialiased">
        <MotionProvider>
          <ScrollProgressBar />
          <ConditionalNav />
          {children}
          <ConditionalFooter />
        </MotionProvider>
        <Analytics />
        <Script
          id="sender-net"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function (s, e, n, d, er) {
              s['Sender'] = er;
              s[er] = s[er] || function () {
                (s[er].q = s[er].q || []).push(arguments)
              }, s[er].l = 1 * new Date();
              s[er].on = function(event, callback) {
                s[er].listeners = s[er].listeners || {};
                (s[er].listeners[event] = s[er].listeners[event] || []).push(callback);
              };
              var a = e.createElement(n),
                  m = e.getElementsByTagName(n)[0];
              a.async = 1;
              a.src = d;
              m.parentNode.insertBefore(a, m)
            })(window, document, 'script', 'https://cdn.sender.net/accounts_resources/universal.js', 'sender');
            sender('1a4433641a7813')`,
          }}
        />
      </body>
    </html>
  );
}
