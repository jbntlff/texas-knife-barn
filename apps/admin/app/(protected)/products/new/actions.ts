"use server";

import { redirect } from "next/navigation";

import { requireAdmin }
  from "@tkb/auth/server";

import {
  createAdminClient,
} from "@tkb/database";

export async function createProduct(
  formData: FormData,
) {
  await requireAdmin();

  const name =
    formData.get("name") as string;

  const slug =
    formData.get("slug") as string;

  const status =
    formData.get("status") as string;

  const featured =
    formData.get("featured") ===
    "on";

  const supabase =
    createAdminClient();

  const {
    data,
    error,
  } = await supabase
    .from("products")
    .insert({
      name,
      slug,
      status,
      featured,
    })
    .select()
    .single();

  if (error) {
    throw error;
  }

  redirect(
    `/products/${data.id}`,
  );
}