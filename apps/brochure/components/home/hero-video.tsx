import Link from "next/link";

import { env } from "@tkb/config";

export function HeroVideo() {
  return (
    <section className="relative isolate min-h-[calc(100svh-4rem)] overflow-hidden bg-black">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/videos/tkb-hero-poster.jpg"
        aria-hidden="true"
      >
        <source src="/videos/tkb-hero.mp4" type="video/mp4" />
      </video>

      <div
        className="absolute inset-0 bg-black/45"
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 flex min-h-[calc(100svh-4rem)] items-center">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <div className="max-w-2xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-white/90">
              Texas Knife Barn
            </p>

            <h1 className="max-w-xl text-5xl font-semibold uppercase tracking-tight text-white sm:text-6xl lg:text-7xl">
              Forged for the field.
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-white/85 sm:text-xl">
              Handcrafted hunting knives built with purpose, premium materials,
              and Texas craftsmanship.
            </p>

            <div className="mt-9">
              <Link
                href={env.storefrontUrl}
                className="inline-flex items-center justify-center bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-white/90"
              >
                Shop Knives
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
