
import { createClient } from "@supabase/supabase-js";
import type { Database } from "./types/database";

export function createAdminClient() {
  console.log("URL:", process.env.SUPABASE_URL);
  console.log(
    "SERVICE_ROLE:",
    process.env.SUPABASE_SERVICE_ROLE_KEY ? "present" : "missing"
  );
  return createClient<Database>(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
  );
}
