"use server";

import { revalidatePath } from "next/cache";

import { requireAdmin } from "@tkb/auth/server";

import { createAdminClient, } from "@tkb/database";

export async function updateInventory(
  formData: FormData,
) {
  await requireAdmin();

  const variantId =
    formData.get("variantId") as string;

  const productId =
    formData.get("productId") as string;

  const quantity = Number(
    formData.get("quantity"),
  );

  const supabase =
    createAdminClient();

  const { error } =
    await supabase
      .from("inventory")
      .upsert({
        variant_id: variantId,
        quantity,
      });

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath(
    `/products/${productId}`,
  );

  revalidatePath("/products");
}