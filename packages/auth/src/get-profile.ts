import { createServerSupabaseClient } from "./server"

export async function getProfile() {
  const supabase =
    await createServerSupabaseClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return null
  }

  const { data: profile, error } =
    await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .single()


  return profile
}