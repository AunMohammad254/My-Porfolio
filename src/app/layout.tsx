import type { Metadata } from "next";
import { Inter, Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LoadingScreen from "@/components/sections/LoadingScreen";
import CustomCursor from "@/components/ui/CustomCursor";
import { ThemeProvider } from "@/components/layout/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aun Abbas | Full Stack Web Developer",
  description:
    "Full Stack Developer specializing in Next.js, TypeScript, Supabase, and AI-integrated applications. Based in Karachi, Pakistan.",
  keywords: [
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Supabase",
    "Karachi",
  ],
  openGraph: {
    title: "Aun Abbas | Full Stack Web Developer",
    description:
      "Building scalable web apps with Next.js, AI, and Supabase.",
    url: "https://aunabbas.vercel.app",
    siteName: "Aun Abbas Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aun Abbas | Full Stack Web Developer",
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
      className={`${inter.variable} ${syne.variable} ${jetbrainsMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg"
          >
            Skip to main content
          </a>
          <CustomCursor />
          <LoadingScreen />
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
