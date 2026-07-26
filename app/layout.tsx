import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/providers/ThemeProvider";
import PageTransition from "./components/animations/PageTransitions";
import { TransitionProvider } from "./components/animations/TransitionProvider";
import AuthProvider from "./components/providers/AuthProvider";


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
    default: "MH Khan | Full Stack Developer",
    template: "%s | MH Khan",
  },
  description:
    "Full Stack Web Developer specializing in Next.js, React, Laravel, TypeScript, Tailwind CSS, and modern web applications.",
  keywords: [
    "MH Khan",
    "Full Stack Developer",
    "Next.js",
    "React",
    "Laravel",
    "TypeScript",
    "Tailwind CSS",
    "Portfolio",
  ],
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
          </ThemeProvider>
          </AuthProvider>
         </TransitionProvider>
      </body>
    </html>
  );
}