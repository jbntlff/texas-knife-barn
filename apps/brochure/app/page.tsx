import Link from "next/link";

import { appConfig } from "@tkb/config";

import { HeroVideo } from "@/components/home/hero-video";

export default function HomePage() {
  return (
    <>
      <HeroVideo />

      <main className="mx-auto max-w-7xl px-6 py-12">
        <section className="grid gap-8 sm:grid-cols-3">
          <Link
            href="/gallery"
            className="rounded-2xl border p-6 transition hover:bg-muted/30"
          >
            <h2 className="text-xl font-semibold">Gallery</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              See finished pieces and past custom builds.
            </p>
          </Link>

          <Link
            href="/about"
            className="rounded-2xl border p-6 transition hover:bg-muted/30"
          >
            <h2 className="text-xl font-semibold">About</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Learn the story behind {appConfig.brandName}.
            </p>
          </Link>

          <Link
            href="/contact"
            className="rounded-2xl border p-6 transition hover:bg-muted/30"
          >
            <h2 className="text-xl font-semibold">Contact</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Ask a question or start a custom build inquiry.
            </p>
          </Link>
        </section>
      </main>
    </>
  );
}
