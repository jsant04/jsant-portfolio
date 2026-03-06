import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jonash Santiago - Portfolio",
  description:
    "Full-stack developer specializing in Next.js, TypeScript, and React. Building fast, accessible, and visually stunning web applications.",
  keywords: [
    "Full-Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Web Developer",
    "Portfolio",
    "JavaScript",
  ],
  authors: [{ name: "JSant" }],
  creator: "JSant",
  metadataBase: new URL("https://jsant.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jsant.dev",
    title: "JSant — Full-Stack Developer",
    description:
      "Full-stack developer specializing in Next.js, TypeScript, and React. Building fast, accessible, and visually stunning web applications.",
    siteName: "JSant Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "JSant — Full-Stack Developer",
    description:
      "Full-stack developer specializing in Next.js, TypeScript, and React.",
    creator: "@jsant",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#080808] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
