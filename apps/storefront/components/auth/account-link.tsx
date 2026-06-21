import Link from "next/link";

import { createServerSupabaseClient } from "@tkb/auth/server";

export async function AccountLink() {
  const supabase =
    await createServerSupabaseClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return (
      <Link
        href="/login"
        className="text-sm text-muted-foreground hover:text-foreground"
      >
        Sign In
      </Link>
    );
  }

  const { data: profile, error } =
    await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .maybeSingle();

  if (error || !profile || profile.role !== "customer") {
    return (
      <Link
        href="/login"
        className="text-sm text-muted-foreground hover:text-foreground"
      >
        Sign In
      </Link>
    );
  }

  return (
    <Link
      href="/account"
      className="text-sm text-muted-foreground hover:text-foreground"
    >
      My Account
    </Link>
  );
}