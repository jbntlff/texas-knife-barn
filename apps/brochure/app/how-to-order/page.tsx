import type { Metadata } from "next";
import Link from "next/link";

import { appConfig, env } from "@tkb/config";

export const metadata: Metadata = {
  title: `How to Order | ${appConfig.brandName}`,
};

const steps = [
  {
    title: "Browse or Inquire",
    body: "Shop ready-made knives in the store, or reach out through the contact form to discuss a custom build.",
  },
  {
    title: "Consultation",
    body: "For custom builds, we'll follow up by email or phone to talk through blade style, materials, and timeline.",
  },
  {
    title: "Build & Updates",
    body: "Once details are confirmed, your knife goes into the queue and we'll keep you posted as it takes shape.",
  },
  {
    title: "Delivery",
    body: "Finished pieces are shipped out or available for local pickup, depending on your preference.",
  },
];

export default function HowToOrderPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">How to Order</h1>

        <p className="mt-2 text-muted-foreground">
          Ready-made knives ship straight from the store. Custom builds
          start with a conversation.
        </p>
      </div>

      <ol className="grid gap-6 sm:grid-cols-2">
        {steps.map((step, index) => (
          <li
            key={step.title}
            className="rounded-2xl border p-6"
          >
            <span className="text-sm text-muted-foreground">
              Step {index + 1}
            </span>

            <h2 className="mt-1 text-xl font-semibold">
              {step.title}
            </h2>

            <p className="mt-2 text-sm text-muted-foreground">
              {step.body}
            </p>
          </li>
        ))}
      </ol>

      <div className="mt-12 flex gap-4">
        <a
          href={env.storefrontUrl}
          className="rounded-md bg-foreground px-6 py-3 text-background transition hover:opacity-90"
        >
          Shop Ready-Made Knives
        </a>

        <Link
          href="/contact"
          className="rounded-md border px-6 py-3 transition hover:bg-muted"
        >
          Start a Custom Inquiry
        </Link>
      </div>
    </main>
  );
}
