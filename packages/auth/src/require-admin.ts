import { redirect } from "next/navigation"

import { getProfile } from "./get-profile"
import { isAdmin } from "./is-admin"

export async function requireAdmin() {
  const profile = await getProfile()

  if (!profile) {
    redirect("/")
  }

  if (!isAdmin(profile.role)) {
    redirect("/unauthorized")
  }

  return profile
}