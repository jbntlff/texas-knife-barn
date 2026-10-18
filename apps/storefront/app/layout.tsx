import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import { CartProvider } from '@/components/cart/cart-provider'
import { CartLink } from "@/components/cart/cart-link"
import { AccountLink } from "@/components/auth/account-link";

import { env } from "@tkb/config";

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
  title: "Texas Knife Outfitters",
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
        <CartProvider>
          <header>
            <div className="mx-auto max-w-7xl px-6">
              <div className="flex items-center justify-between border-b py-4">
                <a
                  href={env.brochureUrl}
                  className="flex items-center gap-3"
                >
                  <Image
                    src="/images/tkb-logo.png"
                    alt="Texas Knife Outfitters"
                    width={40}
                    height={40}
                    className="h-10 w-10 shrink-0 object-contain"
                    priority
                  />

                  <span className="text-xl font-bold tracking-tight">
                    Texas Knife Outfitters
                  </span>
                </a>

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
                    <Link
                      href="/"
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      Home
                    </Link>
                    <AccountLink />
                    <CartLink />
                  </nav>

                </div>
              </div>
            </div>
          </header>

          <div className="flex-1">
            {children}
          </div>

          <footer className="mt-16">
            <div className="mx-auto max-w-7xl px-6">
              <div className="border-t py-8 text-sm text-muted-foreground">
                © 2026 Texas Knife Outfitters
              </div>
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}