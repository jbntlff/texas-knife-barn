import { ResetPasswordForm } from "@/components/auth/reset-password-form";

export default function ResetPasswordPage() {
  return (
    <div className="mx-auto max-w-md px-4 py-16">
      <div className="rounded-2xl border bg-muted p-8 shadow-sm">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight">
            Set a new password
          </h1>

          <p className="mt-2 text-sm text-muted-foreground">
            Choose a new password for your Texas Knife Outfitters account.
          </p>
        </div>

        <ResetPasswordForm />
      </div>
    </div>
  );
}
