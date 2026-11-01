import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { env } from "@tkb/config";
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

  // Build the redirect from the known public URL rather than
  // request.url — behind the Caddy reverse proxy, the Next.js
  // standalone server doesn't reliably see the real Host header and
  // falls back to the container's own Docker hostname.
  return NextResponse.redirect(
    `${env.storefrontUrl}/reset-password`,
  );
}
