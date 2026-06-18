import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";

export { requireAdmin } from "./require-admin";
export { updateSession } from "./proxy";
export { requireUser } from "./require-user";
export { isAdmin } from "./is-admin";

export async function createServerSupabaseClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },

        setAll() {
          // Server Components cannot write cookies.
          // Middleware handles refreshes.
        },
      },
    },
  );
}