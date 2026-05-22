"use client"

import { useRouter } from "next/navigation"

import { createClient } from "@tkb/auth"

export default function LogoutButton() {
  const router = useRouter()

  async function handleLogout() {
    const supabase = createClient()

    console.log('logging out...')
    await supabase.auth.signOut()

    router.push("/login")
    router.refresh()
  }

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  )
}