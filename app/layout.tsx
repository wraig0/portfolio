import type { Metadata } from "next";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

import NavBar from "@/components/nav-bar";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Tom Underwood",
  description: "About Tom Underwood",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("bg-background font-sans antialiased", fontSans.variable)} // bg-slate-100 dark:bg-slate-950 text-slate-950 dark:text-slate-300
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen grid grid-rows-main-layout gap-4 subpixel-antialiased">
            <header className="bg-background top-0 w-screen">
              <NavBar />
            </header>

            <main className="w-full">
              {children}
              <Toaster />
            </main>
            <footer className="text-zinc-400 text-center">
              &copy; Thomas Underwood {new Date().getFullYear()}
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
