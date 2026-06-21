import Link from "next/link";

import { LoginForm } from "@/components/auth/login-form";

export default function LoginPage() {
  return (
    <div className="mx-auto max-w-md px-4 py-16">
      <div className="rounded-2xl border bg-background p-8 shadow-sm">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight">
            Sign in
          </h1>

          <p className="mt-2 text-sm text-muted-foreground">
            Access your orders and manage your Texas Knife Barn account.
          </p>
        </div>

        <LoginForm />

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="font-medium text-foreground hover:underline"
          >
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}