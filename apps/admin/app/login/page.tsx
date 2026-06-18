"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

import { createClient } from "@tkb/auth"

export default function LoginPage() {

  const router = useRouter()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  async function handleLogin(
    event: React.FormEvent
  ) {
    event.preventDefault()

    setError("")

    const supabase = createClient()
    const { error } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      })

    if (error) {
      setError(error.message)
      return
    }

    if (!error) {
      router.push("/dashboard")
      router.refresh()
    }
  }

  return (
    <div style={{ padding: 40 }} >
      <h1>Admin Login</h1>

      <form onSubmit={handleLogin}>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />
        </div>

        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />
        </div>

        <button type="submit">
          Sign In
        </button>

        {error && (
          <p>{error}</p>
        )}
      </form>
    </div>
  )
}