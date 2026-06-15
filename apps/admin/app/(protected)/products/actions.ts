"use server";

import { revalidatePath } from "next/cache";
import { requireAdmin } from "@tkb/auth/server";
import { createAdminClient, deleteProduct } from "@tkb/database";

export async function archiveProduct(
  formData: FormData,
) {
  await requireAdmin();

  const productId =
    formData.get(
      "productId",
    ) as string;

  const supabase =
    createAdminClient();

  const { error } =
    await supabase
      .from("products")
      .update({
        status: "archived",
      })
      .eq(
        "id",
        productId,
      );

  if (error) {
    throw error;
  }

  revalidatePath(
    "/products",
  );

  revalidatePath(
    `/products/${productId}`,
  );
}

export async function restoreProduct(
  formData: FormData,
) {
  await requireAdmin();

  const productId =
    formData.get(
      "productId",
    ) as string;

  const supabase =
    createAdminClient();

  const { error } =
    await supabase
      .from("products")
      .update({
        status: "active",
      })
      .eq(
        "id",
        productId,
      );

  if (error) {
    throw error;
  }

  revalidatePath(
    "/products",
  );

  revalidatePath(
    `/products/${productId}`,
  );
}


export async function deleteProductAction(
  formData: FormData,
) {
  await requireAdmin();

  const productId =
    formData.get(
      "productId",
    ) as string;

  await deleteProduct(
    productId,
  );

  revalidatePath(
    "/products",
  );

}