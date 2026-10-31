"use client";

import { useState, useTransition } from "react";

import { Button } from "@tkb/ui";

import { sendPasswordReset } from "../actions";

type Props = {
  email: string;
};

export function SendResetButton({
  email,
}: Props) {
  const [pending, start] = useTransition();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<
    string | null
  >(null);

  return (
    <div className="flex items-center gap-3">
      <form
        action={(formData) => {
          setError(null);

          start(async () => {
            try {
              await sendPasswordReset(
                formData,
              );

              setSent(true);
            } catch {
              setError(
                "Unable to send the reset link.",
              );
            }
          });
        }}
      >
        <input
          type="hidden"
          name="email"
          value={email}
        />

        <Button
          type="submit"
          variant="ghost"
          disabled={pending}
        >
          {pending
            ? "Sending..."
            : "Send Password Reset Link"}
        </Button>
      </form>

      {sent && (
        <span className="text-sm text-green-700">
          Reset link sent to {email}.
        </span>
      )}

      {error && (
        <span className="text-sm text-red-700">
          {error}
        </span>
      )}
    </div>
  );
}
