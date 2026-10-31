"use client";

import { useActionState } from "react";

import {
  changeEmailAction,
  type ChangeEmailState,
} from "@/app/account/actions";

const initialState: ChangeEmailState = {
  error: null,
  submitted: false,
};

type Props = {
  currentEmail: string;
};

export function ChangeEmailForm({
  currentEmail,
}: Props) {
  const [state, formAction, pending] =
    useActionState(
      changeEmailAction,
      initialState,
    );

  if (state.submitted) {
    return (
      <div className="rounded-md border border-green-200 bg-green-50 px-3 py-2 text-sm text-green-700">
        Check your inbox to confirm the email
        change. You&apos;ll need to confirm
        from both your current and new email
        address before it takes effect.
      </div>
    );
  }

  return (
    <form
      action={formAction}
      className="space-y-3"
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
          New email address
        </label>

        <input
          id="email"
          name="email"
          type="email"
          required
          defaultValue={currentEmail}
          className="w-full rounded-md border bg-background px-3 py-2 text-sm"
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="cursor-pointer rounded-md border px-4 py-2 text-sm font-medium transition hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50"
      >
        {pending
          ? "Sending..."
          : "Change email"}
      </button>
    </form>
  );
}
