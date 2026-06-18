import { createServerSupabaseClient } from "./server"

export async function getProfile() {
  const supabase =
    await createServerSupabaseClient()

  const session = await supabase.auth.getSession();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    console.log("GET_PROFILE: user is null");
    return null
  }

  const { data: profile, error } =
    await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .maybeSingle()


  if (error) {
    console.log('GET_PROFILE ERROR: got error back from select ', error)
  }
  return profile
}