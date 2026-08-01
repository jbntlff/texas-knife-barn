"use client";

import { useActionState } from "react";

import {
  signUpCustomerAction,
  type AuthFormState,
} from "@/app/(auth)/actions";

const initialState: AuthFormState = {
  error: null,
};

export function RegisterForm() {
  const [state, formAction, pending] =
    useActionState(
      signUpCustomerAction,
      initialState,
    );

  return (
    <form
      action={formAction}
      className="space-y-5"
    >
      {state.error && (
        <div className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
          {state.error}
        </div>
      )}

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
          className="w-full rounded-md border bg-background px-3 py-2 text-sm"
        />
      </div>

      <label className="flex items-start gap-3 text-sm text-muted-foreground">
        <input
          type="checkbox"
          name="marketingOptIn"
          className="mt-1"
        />
        <span>
          Email me about new arrivals, promotions, and product updates.
        </span>
      </label>

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background disabled:opacity-50"
      >
        {pending
          ? "Creating account..."
          : "Create account"}
      </button>
    </form>
  );
}