"use server"

import { revalidatePath }
  from "next/cache"

import { requireAdmin }
  from "@tkb/auth/server"

import {
  createAdminClient,
} from "@tkb/database"

export async function createProduct(
  formData: FormData
) {
  await requireAdmin()

  const supabase =
    createAdminClient()

  const name =
    formData.get("name") as string

  const slug =
    formData.get("slug") as string

  const price = Number(
    formData.get("price")
  )

  const inventoryCount = Number(
    formData.get("inventory_count")
  )

  const { error } =
    await supabase
      .from("products")
      .insert({
        name,
        slug,
        price,
        inventory_count:
          inventoryCount,
      })

  if (error) {
    throw new Error(error.message)
  }

  revalidatePath("/products")
}
