import Sidebar
  from "../components/sidebar"

import LogoutButton
  from "../components/logout-button"

import {
  requireAdmin,
} from "@tkb/auth/server"

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const profile =
    await requireAdmin()

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
      }}
    >
      <Sidebar />

      <div
        style={{
          flex: 1,
          padding: "2rem",
        }}
      >
        <header>
          <h1>
            Texas Knife Barn Admin
          </h1>

          <p>
            Signed in as:
            {" "}
            {profile.email}
          </p>

          <LogoutButton />
        </header>

        <main>
          {children}
        </main>
      </div>
    </div>
  )
}