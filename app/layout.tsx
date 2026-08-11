import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/providers/ThemeProvider";
import PageTransition from "./components/animations/PageTransitions";
import { TransitionProvider } from "./components/animations/TransitionProvider";
import AuthProvider from "./components/providers/AuthProvider";
import FloatingWhatsApp from "./components/common/CustomWhatsAppBtn";
import { Analytics } from '@vercel/analytics/next';


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});


export const metadata: Metadata = {
  title: {
    default: "M Hasan Khan | Full Stack Web Developer",
    template: "%s | M Hasan Khan",
  },

  description:
    "Portfolio of M Hasan Khan, a Full Stack Web Developer specializing in Next.js, React, Laravel, TypeScript, Tailwind CSS, PostgreSQL, Prisma, and modern scalable web applications.",

    verification: {
    google: "xhy8FaFs9Mls92VfLQYgxUIgJFUOHf7BMfx1Pz_KNo8",
  },

  keywords: [
    "M Hasan Khan",
    "MH Khan",
    "Full Stack Developer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Next.js developer",
    "React developer",
    "TypeScript",
    "PHP",
    "Tailwind CSS",
    "Prisma",
    "PostgreSQL",
    "Portfolio",
    "muhammad hasan portfolio",
    ],

  authors: [{ name: "M Hasan Khan" }],
  creator: "M Hasan Khan",
  publisher: "M Hasan Khan",

  metadataBase: new URL("https://mhasankhandev.vercel.app/"),

  openGraph: {
    title: "M Hasan Khan | Full Stack Web Developer",
    description:
      "Explore the portfolio of M Hasan Khan featuring modern web applications, dashboards, and full-stack projects built with Next.js, Laravel, React, TypeScript, and Prisma.",
    url: "https://mhasankhandev.vercel.app/",
    siteName: "M Hasan Khan Portfolio",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "M Hasan Khan | Full Stack Web Developer",
    description:
      "Portfolio showcasing modern full-stack web applications and development expertise.",
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        <TransitionProvider>
          <PageTransition />
          <AuthProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
              <Analytics />
              <FloatingWhatsApp />
            </ThemeProvider>
          </AuthProvider>
        </TransitionProvider>
      </body>
    </html>
  );
}