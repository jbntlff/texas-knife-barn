import { redirect } from "next/navigation";

import { createServerSupabaseClient } from "@tkb/auth/server";

export async function getCustomerProfile() {
  const supabase =
    await createServerSupabaseClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: profile, error } =
    await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .maybeSingle();

  if (error) {
    throw error;
  }

  if (!profile || profile.role !== "customer") {
    redirect("/login");
  }

  return profile;
}