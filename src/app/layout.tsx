import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Leonardo Costa | Backend Software Engineer",
    template: "%s | Leonardo Costa",
  },

  description:
    "Portfólio de Leonardo Costa, desenvolvedor Backend Java com foco em Spring Boot, APIs REST, PostgreSQL, Docker e engenharia de software.",

  keywords: [
    "Leonardo Costa",
    "Backend Developer",
    "Backend Software Engineer",
    "Java Developer",
    "Java",
    "Spring Boot",
    "Spring Security",
    "PostgreSQL",
    "Docker",
    "REST API",
  ],

  authors: [
    {
      name: "Leonardo Costa",
    },
  ],

  creator: "Leonardo Costa",

  openGraph: {
    title: "Leonardo Costa | Backend Software Engineer",
    description:
      "Backend Java, Spring Boot, APIs, arquitetura e engenharia de software.",
    type: "website",
    locale: "pt_BR",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
