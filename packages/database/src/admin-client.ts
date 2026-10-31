import { createClient } from "@supabase/supabase-js";

import { env } from "@tkb/config";

import type { Database } from "./types/database.generated";

export function createAdminClient() {
  return createClient<Database>(
    env.supabaseUrl,
    env.supabaseServiceRoleKey,
    {
      auth: {
        // Without this, auth link-generating calls made from here
        // (invite, admin-triggered password reset) default to the
        // legacy implicit flow, which GoTrue only honors by sending
        // the link to the bare site root — dropping any path like
        // /reset-password — unlike the rest of the app's @supabase/ssr
        // clients, which are PKCE by default and keep the full path.
        flowType: "pkce",
        // This client is only ever used for one-off server-side admin
        // calls, never a real user session, so there's nothing to
        // persist or refresh.
        autoRefreshToken: false,
        persistSession: false,
      },
    },
  );
}