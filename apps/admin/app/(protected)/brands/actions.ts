"use server";

import { revalidatePath } from "next/cache";

import { requireAdmin } from "@tkb/auth/server";

import { createAdminClient, } from "@tkb/database";

export async function createBrand(
  formData: FormData,
) {
  await requireAdmin();

  const name =
    formData.get(
      "name",
    ) as string;

  const slug =
    formData.get(
      "slug",
    ) as string;

  const description =
    formData.get(
      "description",
    ) as string;

  const supabase =
    createAdminClient();

  const { error } =
    await supabase
      .from("brands")
      .insert({
        name,
        slug,
        description:
          description || null,
      });

  if (error) {
    throw error;
  }

  revalidatePath(
    "/brands",
  );
}
export async function updateBrand(
  formData: FormData,
) {
  await requireAdmin();

  const brandId =
    formData.get(
      "brandId",
    ) as string;

  const name =
    formData.get(
      "name",
    ) as string;

  const slug =
    formData.get(
      "slug",
    ) as string;

  const description =
    formData.get(
      "description",
    ) as string;

  const supabase =
    createAdminClient();

  const { error } =
    await supabase
      .from("brands")
      .update({
        name,
        slug,
        description:
          description || null,
      })
      .eq("id", brandId);

  if (error) {
    throw error;
  }

  revalidatePath(
    "/brands",
  );

  revalidatePath(
    `/brands/${brandId}`,
  );
}

export async function deleteBrand(
  formData: FormData,
) {
  await requireAdmin();

  const brandId = formData.get( "brandId",) as string;

  const supabase =
    createAdminClient();

  const {
    count,
    error: countError,
  } = await supabase
    .from("products")
    .select("*", {
      count: "exact",
      head: true,
    })
    .eq(
      "brand_id",
      brandId,
    );

  if (countError) {
    throw countError;
  }

  if ((count ?? 0) > 0) {
    throw new Error(
      "Cannot delete a brand that has assigned products.",
    );
  }

  const { error } =
    await supabase
      .from("brands")
      .delete()
      .eq(
        "id",
        brandId,
      );

  if (error) {
    throw error;
  }

  revalidatePath(
    "/brands",
  );
}