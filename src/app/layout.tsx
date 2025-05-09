import { TempoInit } from "@/components/tempo-init";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import TranslationProvider from "@/components/TranslationProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Progress IT - Web Development & Digital Agency',
  description: 'ProgressIT is a leading web development and digital agency specializing in creative design, development, and digital marketing solutions.',
  icons: {
    icon: '/images/favicon.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Martian+Mono:wght@100..800&display=swap" rel="stylesheet" />
      </head>
      <body 
        className={inter.className}
        style={{ touchAction: 'manipulation' }}
      >
        <TranslationProvider>
          {children}
        </TranslationProvider>
        <TempoInit />
      </body>
    </html>
  );
}
