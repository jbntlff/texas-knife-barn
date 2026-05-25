import { cookies } from "next/headers"

import { createServerClient } from "@supabase/ssr"

export { requireAdmin } from "./require-admin"
export { updateSession } from "./proxy"

export { requireUser } from "./require-user"
export { isAdmin } from "./is-admin"


export async function createServerSupabaseClient() {
  const cookieStore = await cookies()

  return createServerClient(
    process.env.SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },

        set(
          name: string,
          value: string,
          options: any
        ) {
          cookieStore.set({
            name,
            value,
            ...options,
          })
        },

        remove(
          name: string,
          options: any
        ) {
          cookieStore.set({
            name,
            value: "",
            ...options,
          })
        },
      },
    }
  )
}
