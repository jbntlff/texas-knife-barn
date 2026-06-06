import Sidebar
  from "../components/sidebar";

import LogoutButton
  from "../components/logout-button";

import {
  requireAdmin,
} from "@tkb/auth/server";

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const profile =
    await requireAdmin();

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar email={profile.email}>
        <LogoutButton />
      </Sidebar>

      <div className="flex flex-1 flex-col">
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}