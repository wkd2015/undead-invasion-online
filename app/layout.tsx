import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Geist, Geist_Mono } from "next/font/google";
import { ConditionalAnalytics } from "@/components/analytics/ConditionalAnalytics";
import { getSiteUrl } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = getSiteUrl();
const defaultTitle = "Undead Invasion Online — Free HTML5 Zombie Survival Shooter";
const defaultDescription =
  "Play Undead Invasion Online free in your browser—wave-based zombie survival with guns, traps, barricades, and permadeath runs. HTML5, no install, mobile-friendly.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | Undead Invasion Online",
  },
  description: defaultDescription,
  applicationName: "Undead Invasion Online",
  keywords: [
    "Undead Invasion Online",
    "Undead Invasion",
    "zombie survival game",
    "browser zombie shooter",
    "HTML5 survival game",
    "wave defense game",
    "play Undead Invasion unblocked",
    "free online zombie game",
  ],
  openGraph: {
    type: "website",
    url: `${siteUrl}/`,
    title: defaultTitle,
    description: defaultDescription,
    siteName: "Undead Invasion Online",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="canonical" href={`${siteUrl}/`} />
      </head>
      <body className="flex min-h-full flex-col bg-zinc-950 font-sans text-zinc-50">
        {children}
        <ConditionalAnalytics />
        <Analytics />
      </body>
    </html>
  );
}
