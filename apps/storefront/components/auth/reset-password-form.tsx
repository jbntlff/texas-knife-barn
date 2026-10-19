"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { createClient } from "@tkb/auth";

type Status = "waiting" | "ready" | "invalid" | "saving" | "done";

export function ResetPasswordForm() {
  const router = useRouter();
  const [supabase] = useState(() => createClient());
  const [status, setStatus] = useState<Status>("waiting");
  const [error, setError] = useState<string | null>(null);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event) => {
      if (event === "PASSWORD_RECOVERY") {
        setStatus("ready");
      }
    });

    // If the recovery link was already processed before this
    // listener attached, there may already be a session.
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) {
        setStatus((current) =>
          current === "waiting" ? "ready" : current,
        );
      }
    });

    const timeout = setTimeout(() => {
      setStatus((current) =>
        current === "waiting" ? "invalid" : current,
      );
    }, 3000);

    return () => {
      subscription.unsubscribe();
      clearTimeout(timeout);
    };
  }, [supabase]);

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();
    setError(null);

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setStatus("saving");

    const { error: updateError } =
      await supabase.auth.updateUser({ password });

    if (updateError) {
      setError("Unable to update your password.");
      setStatus("ready");
      return;
    }

    setStatus("done");
    router.push("/account");
    router.refresh();
  }

  if (status === "waiting") {
    return (
      <p className="text-sm text-muted-foreground">
        Verifying your reset link...
      </p>
    );
  }

  if (status === "invalid") {
    return (
      <div className="space-y-4">
        <div className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
          This password reset link is invalid or has expired.
        </div>
        <a
          href="/forgot-password"
          className="text-sm font-medium text-foreground hover:underline"
        >
          Request a new link
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      {error && (
        <div className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
          {error}
        </div>
      )}

      <div className="space-y-2">
        <label
          htmlFor="password"
          className="text-sm font-medium"
        >
          New password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          value={password}
          onChange={(event) =>
            setPassword(event.target.value)
          }
          className="w-full rounded-md border bg-background px-3 py-2 text-sm"
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="confirmPassword"
          className="text-sm font-medium"
        >
          Confirm new password
        </label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          required
          value={confirmPassword}
          onChange={(event) =>
            setConfirmPassword(event.target.value)
          }
          className="w-full rounded-md border bg-background px-3 py-2 text-sm"
        />
      </div>

      <button
        type="submit"
        disabled={status === "saving"}
        className="w-full rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background disabled:opacity-50"
      >
        {status === "saving"
          ? "Updating..."
          : "Update password"}
      </button>
    </form>
  );
}
