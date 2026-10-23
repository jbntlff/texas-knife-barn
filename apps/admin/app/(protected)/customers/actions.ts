"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import { requireAdmin } from "@tkb/auth/server";

import { createAdminClient } from "@tkb/database";

export async function inviteCustomer(
  formData: FormData,
) {
  await requireAdmin();

  const firstName =
    (formData.get("firstName") as string)?.trim();

  const lastName =
    (formData.get("lastName") as string)?.trim();

  const email =
    (formData.get("email") as string)
      ?.trim()
      .toLowerCase();

  if (!firstName || !lastName || !email) {
    throw new Error(
      "First name, last name, and email are required.",
    );
  }

  const supabase = createAdminClient();

  const storefrontUrl =
    process.env.NEXT_PUBLIC_STOREFRONT_URL;

  const { data, error } =
    await supabase.auth.admin.inviteUserByEmail(
      email,
      storefrontUrl
        ? { redirectTo: `${storefrontUrl}/` }
        : undefined,
    );

  if (error) {
    throw error;
  }

  const user = data.user;

  if (!user) {
    throw new Error(
      "Invite did not return a user.",
    );
  }

  const { error: profileError } =
    await supabase
      .from("profiles")
      .insert({
        id: user.id,
        email,
        role: "customer",
        first_name: firstName,
        last_name: lastName,
        marketing_opt_in: false,
      });

  if (profileError) {
    throw profileError;
  }

  revalidatePath("/customers");

  redirect(`/customers/${user.id}`);
}

export async function updateCustomer(
  formData: FormData,
) {
  await requireAdmin();

  const customerId =
    formData.get("customerId") as string;

  const firstName =
    formData.get("firstName") as string;

  const lastName =
    formData.get("lastName") as string;

  const role =
    formData.get("role") as string;

  const marketingOptIn =
    formData.get("marketingOptIn") === "on";

  const supabase = createAdminClient();

  const { error } =
    await supabase
      .from("profiles")
      .update({
        first_name: firstName,
        last_name: lastName,
        role,
        marketing_opt_in: marketingOptIn,
      })
      .eq("id", customerId);

  if (error) {
    throw error;
  }

  revalidatePath("/customers");
  revalidatePath(`/customers/${customerId}`);
}

export async function deleteCustomer(
  formData: FormData,
) {
  await requireAdmin();

  const customerId =
    formData.get("customerId") as string;

  const supabase = createAdminClient();

  const { error } =
    await supabase.auth.admin.deleteUser(
      customerId,
    );

  if (error) {
    throw error;
  }

  revalidatePath("/customers");

  redirect("/customers");
}
