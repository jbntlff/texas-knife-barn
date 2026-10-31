"use client";

import { useActionState } from "react";

import {
  requestPasswordResetAction,
  type RequestPasswordResetState,
} from "@/app/(auth)/actions";

const initialState: RequestPasswordResetState = {
  error: null,
  submitted: false,
};

export function ForgotPasswordForm() {
  const [state, formAction, pending] =
    useActionState(
      requestPasswordResetAction,
      initialState,
    );

  if (state.submitted) {
    return (
      <div className="rounded-md border border-green-200 bg-green-50 px-3 py-2 text-sm text-green-700">
        If an account exists for that email, we&apos;ve sent a link to reset your password.
      </div>
    );
  }

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

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background disabled:opacity-50"
      >
        {pending
          ? "Sending..."
          : "Send reset link"}
      </button>
    </form>
  );
}
