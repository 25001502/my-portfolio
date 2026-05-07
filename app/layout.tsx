import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";



export const metadata: Metadata = {
  title: "Thandululo Nengovhela - Full Stack Developer",
  description:
    "Full Stack Developer specializing in React, Next.js, React + Vite,",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html data-theme="black" lang="en">
      <head>
        <meta
          name="google-adsense-account"
          content="ca-pub-3715807718346094"
        />
      </head>
      <body>
        {children}
        <Script
          id="adsense-init"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3715807718346094"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
