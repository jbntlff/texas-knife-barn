import { createClient } from "@supabase/supabase-js";

import { env } from "@tkb/config";

import type { Database } from "./types/database.generated";

export function createAdminClient() {
  return createClient<Database>(
    env.supabaseUrl,
    env.supabaseServiceRoleKey,
  );
}