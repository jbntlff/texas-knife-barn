import Link from "next/link";

import {
  signUpCustomerAction,
} from "../actions";

export default function RegisterPage() {
  return (
    <div className="mx-auto max-w-md px-4 py-16">
      <div className="rounded-2xl border bg-background p-8 shadow-sm">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight">
            Create your account
          </h1>

          <p className="mt-2 text-sm text-muted-foreground">
            Save your information, track orders, and manage your Texas Knife Barn account.
          </p>
        </div>

        <form
          action={signUpCustomerAction}
          className="space-y-5"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <label
                htmlFor="firstName"
                className="text-sm font-medium"
              >
                First name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                className="w-full rounded-md border bg-background px-3 py-2 text-sm"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="lastName"
                className="text-sm font-medium"
              >
                Last name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                required
                className="w-full rounded-md border bg-background px-3 py-2 text-sm"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-medium"
            >
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-md border bg-background px-3 py-2 text-sm"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="password"
              className="text-sm font-medium"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              minLength={8}
              className="w-full rounded-md border bg-background px-3 py-2 text-sm"
            />
            <p className="text-xs text-muted-foreground">
              Use at least 8 characters.
            </p>
          </div>

          <label className="flex items-start gap-3 rounded-lg border p-4 text-sm">
            <input
              type="checkbox"
              name="marketingOptIn"
              className="mt-0.5"
            />
            <span className="text-muted-foreground">
              Email me about new arrivals, product drops, and Texas Knife Barn updates.
            </span>
          </label>

          <button
            type="submit"
            className="w-full rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background"
          >
            Create account
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-foreground hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}