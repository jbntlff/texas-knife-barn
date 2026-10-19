import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { createServerActionSupabaseClient } from "@tkb/auth/server";

export async function GET(request: NextRequest) {
  const code =
    request.nextUrl.searchParams.get("code");

  if (code) {
    const supabase =
      await createServerActionSupabaseClient();

    const { error } =
      await supabase.auth.exchangeCodeForSession(code);

    if (error) {
      console.error(
        "exchangeCodeForSession failed",
        error,
      );
    }
  }

  return NextResponse.redirect(
    new URL("/reset-password", request.url),
  );
}
