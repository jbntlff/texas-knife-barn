import { ADMIN_ROLES } from "./permissions"

export function isAdmin(
  role?: string | null
) {
  if (!role) {
    return false
  }

  return ADMIN_ROLES.includes(
    role as any
  )
}
