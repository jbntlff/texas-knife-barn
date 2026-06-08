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


  const { error } =
    await supabase
      .from("products")
      .insert({
        name,
        slug,
      })

  if (error) {
    throw new Error(error.message)
  }

  revalidatePath("/products")
}
