import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";



export const metadata: Metadata = {
  title: "Thandululo Nengovhela - Full Stack Developer | Portfolio",
  description:
    "Full Stack Developer specializing in React, Next.js, React + Vite, TypeScript, Firebase. View my interactive projects and demos.",
  keywords: ["Thandululo Nengovhela", "Full Stack Developer", "React", "Next.js", "TypeScript", "Firebase", "Portfolio"],
  authors: [{ name: "Thandululo Nengovhela" }],
  creator: "Thandululo Nengovhela",
  publisher: "Thandululo Nengovhela",
  metadataBase: new URL("https://nengovhela.me"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: "AkasQuCC23SSq1WgizXpgoa97INNcuCaJDC3P_tv3vo",
  },
  openGraph: {
    title: "Thandululo Nengovhela - Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, React + Vite, TypeScript, Firebase. View my interactive projects and demos.",
    url: "https://nengovhela.me",
    siteName: "Thandululo Nengovhela Portfolio",
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Thandululo Nengovhela - Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, React + Vite, TypeScript, Firebase. View my interactive projects and demos.",
  },
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
