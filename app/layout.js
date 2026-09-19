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

export const metadata = {
  title: "Solved Engineering | Plumbing, Painting, Flooring & Renovation",
  description:
    "Solved Engineering delivers plumbing, painting, flooring, epoxy pointing, electrical, cleaning and renovation services under one accountable team. Free site survey and fixed-price quotation.",
  keywords: [
    "Solved Engineering",
    "plumbing service",
    "painting contractor",
    "flooring",
    "epoxy pointing",
    "electrical works",
    "renovation contractor",
    "cleaning service",
  ],
  openGraph: {
    title: "Solved Engineering | One team for every repair and renovation",
    description:
      "Plumbing, painting, flooring, epoxy pointing, electrical, cleaning and renovation — surveyed, priced and delivered by one accountable crew.",
    type: "website",
    locale: "en_US",
    siteName: "Solved Engineering",
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#1E293B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      {/* pb-20 keeps the fixed mobile action bar from covering the footer. */}
      <body className="flex min-h-full flex-col bg-canvas font-sans text-brand pb-20 md:pb-0">
        {children}
      </body>
    </html>
  );
}
