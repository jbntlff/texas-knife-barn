"use client"

import { useRouter } from "next/navigation"

import { createClient } from "@tkb/auth"

export default function LogoutButton() {
  const router = useRouter()

  async function handleLogout() {
    const supabase = createClient()

    await supabase.auth.signOut()

    router.push("/")
    router.refresh()
  }
  return (
    <button
      onClick={handleLogout}
      className=" rounded-lg border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted "
    >
      Logout
    </button>
  )
}