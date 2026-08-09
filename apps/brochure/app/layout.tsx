import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { appConfig, env } from "@tkb/config";

import { SiteHeader } from "@/components/site-header";

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
  title: appConfig.brandName,
  description:
    "Handcrafted knives from Texas Knife Barn — browse the gallery, learn how custom orders work, and get in touch.",
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
        <SiteHeader
          brandName={appConfig.brandName}
          storefrontUrl={env.storefrontUrl}
        />

        <div className="flex-1">
          {children}
        </div>

        <footer className="mt-16 border-t">
          <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-muted-foreground">
            © 2026 {appConfig.brandName}
          </div>
        </footer>
      </body>
    </html>
  );
}
