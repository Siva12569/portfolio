import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shiva Mottu — Senior Software Engineer",
  description:
    "Senior Software Engineer with 8+ years building scalable web applications, microservices, and modern user experiences. Expert in React, Node.js, TypeScript, and cloud architectures.",
  keywords: [
    "Shiva Mottu",
    "Senior Software Engineer",
    "Full Stack Developer",
    "React Developer",
    "Node.js",
    "TypeScript",
    "Microservices",
    "Hyderabad",
    "India",
  ],
  authors: [{ name: "Shiva Mottu" }],
  creator: "Shiva Mottu",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shivamottu.dev",
    title: "Shiva Mottu — Senior Software Engineer",
    description:
      "Building scalable web applications, microservices, and modern user experiences for over 8 years.",
    siteName: "Shiva Mottu Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shiva Mottu — Senior Software Engineer",
    description:
      "Building scalable web applications, microservices, and modern user experiences for over 8 years.",
    creator: "@shivamottu",
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          <Navbar />
          <main className="relative">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
