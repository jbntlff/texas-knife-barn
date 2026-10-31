import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { createServerActionSupabaseClient } from "@tkb/auth/server";
import { createAdminClient } from "@tkb/database";

export async function GET(request: NextRequest) {
  const code =
    request.nextUrl.searchParams.get("code");

  if (code) {
    const supabase =
      await createServerActionSupabaseClient();

    const { data, error } =
      await supabase.auth.exchangeCodeForSession(code);

    if (error) {
      console.error(
        "exchangeCodeForSession failed",
        error,
      );
    } else if (data.user?.email) {
      // Keeps profiles.email in sync once an email-change
      // confirmation completes (double_confirm_changes means
      // this is a no-op until both the old and new address have
      // confirmed, since auth.users.email only updates then).
      await createAdminClient()
        .from("profiles")
        .update({ email: data.user.email })
        .eq("id", data.user.id);
    }
  }

  return NextResponse.redirect(
    new URL("/reset-password", request.url),
  );
}
