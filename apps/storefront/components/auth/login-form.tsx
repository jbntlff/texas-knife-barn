"use client";

import { useActionState } from "react";

import {
  signInCustomerAction,
  type AuthFormState,
} from "@/app/(auth)/actions";

const initialState: AuthFormState = {
  error: null,
};

export function LoginForm() {
  const [state, formAction, pending] =
    useActionState(
      signInCustomerAction,
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

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background disabled:opacity-50"
      >
        {pending
          ? "Signing in..."
          : "Sign in"}
      </button>
    </form>
  );
}