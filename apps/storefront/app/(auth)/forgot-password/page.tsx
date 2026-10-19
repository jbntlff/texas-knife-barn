import Link from "next/link";

import { ForgotPasswordForm } from "@/components/auth/forgot-password-form";

export default function ForgotPasswordPage() {
  return (
    <div className="mx-auto max-w-md px-4 py-16">
      <div className="rounded-2xl border bg-muted p-8 shadow-sm">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight">
            Reset your password
          </h1>

          <p className="mt-2 text-sm text-muted-foreground">
            Enter your email and we&apos;ll send you a link to reset your password.
          </p>
        </div>

        <ForgotPasswordForm />

        <p className="mt-6 text-center text-sm text-muted-foreground">
          <Link
            href="/login"
            className="font-medium text-foreground hover:underline"
          >
            Back to sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
