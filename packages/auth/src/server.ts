import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";

import { env } from "@tkb/config";

export { requireAdmin } from "./require-admin";
export { updateSession } from "./proxy";
export { requireUser } from "./require-user";
export { isAdmin } from "./is-admin";

export async function createServerSupabaseClient() {
  const cookieStore =
    await cookies();

  return createServerClient(
    env.publicSupabaseUrl,
    env.publicSupabaseAnonKey,
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

export async function createServerActionSupabaseClient() {
  const cookieStore =
    await cookies();

  return createServerClient(
    env.publicSupabaseUrl,
    env.publicSupabaseAnonKey,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },

        setAll(cookiesToSet) {
          cookiesToSet.forEach(
            ({
              name,
              value,
              options,
            }) => {
              cookieStore.set(
                name,
                value,
                options,
              );
            },
          );
        },
      },
    },
  );
}