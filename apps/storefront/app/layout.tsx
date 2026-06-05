import type { Metadata } from "next";
import Link from "next/link";
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
  title: "Texas Knife Barn",
  description:
    "Premium knives for everyday carry, hunting, and collection.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background">
        <header className="border-b">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <Link
              href="/"
              className="text-xl font-bold tracking-tight"
            >
              Texas Knife Barn
            </Link>

            <div className="flex items-center gap-6">
              <form
                action="/search"
                className="hidden md:flex items-center gap-2"
              >
                <input
                  type="search"
                  name="q"
                  placeholder="Search knives..."
                  className="w-64 rounded-md border px-3 py-2 text-sm"
                />

                <button
                  type="submit"
                  className="rounded-md border px-3 py-2 text-sm hover:bg-muted"
                >
                  Search
                </button>
              </form>

              <nav className="flex items-center gap-6">
                <Link href="/" className="text-sm text-muted-foreground hover:text-foreground" >
                  Home
                </Link>

                <Link href="/cart" className="text-sm text-muted-foreground hover:text-foreground" >
                  Cart
                </Link>
              </nav>
            </div>
          </div>
        </header>

        <div className="flex-1">
          {children}
        </div>

        <footer className="mt-16 border-t">
          <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-muted-foreground">
            © 2026 Texas Knife Barn
          </div>
        </footer>
      </body>
    </html>
  );
}