import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Akarsh Pandey — AI/ML Engineer & Firmware Security Researcher",
  description:
    "Portfolio of Akarsh Pandey — B.Tech ECE student at BIET Jhansi, Project Intern at C3iHub IIT Kanpur. Specializing in AI, Machine Learning, Computer Vision, and Firmware Security.",
  keywords: [
    "Akarsh Pandey",
    "AI Engineer",
    "Machine Learning",
    "Computer Vision",
    "Firmware Security",
    "IIT Kanpur",
    "C3iHub",
    "BIET Jhansi",
    "Portfolio",
  ],
  authors: [{ name: "Akarsh Pandey", url: "https://github.com/Akarshh28" }],
  creator: "Akarsh Pandey",
  openGraph: {
    type: "website",
    title: "Akarsh Pandey — AI/ML Engineer & Firmware Security Researcher",
    description:
      "B.Tech ECE student specializing in AI, Computer Vision, and Cybersecurity. Currently a Project Intern at C3iHub, IIT Kanpur.",
    siteName: "Akarsh Pandey Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akarsh Pandey — AI/ML & Firmware Security",
    description:
      "Portfolio of Akarsh Pandey — AI, ML, Computer Vision, and Firmware Security researcher.",
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
      className={`${inter.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#070B11] text-white selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
