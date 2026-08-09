import type { Metadata } from "next";

import { appConfig } from "@tkb/config";

import { submitInquiry } from "./actions";

export const metadata: Metadata = {
  title: `Contact | ${appConfig.brandName}`,
};

type ContactPageProps = {
  searchParams: Promise<{
    success?: string;
    error?: string;
  }>;
};

export default async function ContactPage({
  searchParams,
}: ContactPageProps) {
  const { success, error } = await searchParams;

  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-8 max-w-2xl">
        <h1 className="text-3xl font-bold">Contact</h1>

        <p className="mt-2 text-muted-foreground">
          Have a question, or want to start a custom build inquiry? Send
          us a message and we&rsquo;ll follow up by email or phone.
        </p>
      </div>

      {success ? (
        <p className="mb-6 max-w-2xl rounded-md border border-green-300 bg-green-50 px-4 py-3 text-sm text-green-700">
          Thanks for reaching out — we&rsquo;ll be in touch soon.
        </p>
      ) : null}

      {error ? (
        <p className="mb-6 max-w-2xl rounded-md border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700">
          Please fill in your name, email, and message.
        </p>
      ) : null}

      <form
        action={submitInquiry}
        className="max-w-2xl space-y-4"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-1 w-full rounded-md border px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-md border px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium"
          >
            Phone (optional)
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="mt-1 w-full rounded-md border px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="mt-1 w-full rounded-md border px-3 py-2 text-sm"
          />
        </div>

        <button
          type="submit"
          className="rounded-md bg-foreground px-6 py-3 text-sm text-background transition hover:opacity-90"
        >
          Send Message
        </button>
      </form>
    </main>
  );
}
