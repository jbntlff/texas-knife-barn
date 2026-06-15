"use server";

import { revalidatePath } from "next/cache";

import { requireAdmin } from "@tkb/auth/server";

import { createAdminClient, } from "@tkb/database";

export async function createCategory(
  formData: FormData,
) {
  await requireAdmin();

  const name = formData.get( "name",) as string;

  const slug = formData.get( "slug",) as string;

  const description = formData.get( "description",) as string;

  const supabase = createAdminClient();

  const { error } =
    await supabase
      .from("categories")
      .insert({
        name,
        slug,
        description:
          description || null,
      });

  if (error) {
    throw error; }

  revalidatePath(
    "/categories",
  );
}
export async function updateCategory(
  formData: FormData,
) {
  await requireAdmin();

  const categoryId = formData.get( "categoryId",) as string;

  const name = formData.get( "name",) as string;

  const slug = formData.get( "slug",) as string;

  const description = formData.get( "description",) as string;

  const supabase = createAdminClient();

  const { error } =
    await supabase
      .from("categories")
      .update({
        name,
        slug,
        description:
          description || null,
      })
      .eq("id", categoryId);

  if (error) {
    throw error;
  }

  revalidatePath(
    "/categories",
  );

  revalidatePath(
    `/categories/${categoryId}`,
  );
}



export async function deleteCategory(
  formData: FormData,
) {
  await requireAdmin();

  const categoryId =
    formData.get( "categoryId",) as string;

  const supabase = createAdminClient();

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
      "category_id",
      categoryId,
    );

  if (countError) {
    throw countError;
  }

  if ((count ?? 0) > 0) {
    throw new Error(
      "Cannot delete a category that has assigned products.",
    );
  }

  const { error } =
    await supabase
      .from("categories")
      .delete()
      .eq(
        "id",
        categoryId,
      );

  if (error) {
    throw error;
  }

  revalidatePath(
    "/categories",
  );
}