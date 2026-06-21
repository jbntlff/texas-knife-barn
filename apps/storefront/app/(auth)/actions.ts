"use server";

import { redirect } from "next/navigation";

import { createServerActionSupabaseClient } from "@tkb/auth/server";
import { createAdminClient } from "@tkb/database";

export type AuthFormState = {
  error: string | null;
};

export async function signUpCustomerAction(
  formData: FormData,
) {
  const firstName =
    formData.get("firstName")?.toString().trim() ?? "";

  const lastName =
    formData.get("lastName")?.toString().trim() ?? "";

  const email =
    formData.get("email")?.toString().trim() ?? "";

  const password =
    formData.get("password")?.toString() ?? "";

  const marketingOptIn =
    formData.get("marketingOptIn") === "on";

  if (
    !firstName ||
    !lastName ||
    !email ||
    !password
  ) {
    throw new Error(
      "First name, last name, email, and password are required.",
    );
  }

  const supabase =
    await createServerActionSupabaseClient();

  const {
    data,
    error,
  } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    throw error;
  }

  const user = data.user;

  if (!user) {
    throw new Error(
      "Signup did not return a user.",
    );
  }

  const adminSupabase =
    createAdminClient();

  const { error: profileError } =
    await adminSupabase
      .from("profiles")
      .insert({
        id: user.id,
        email,
        role: "customer",
        first_name: firstName,
        last_name: lastName,
        marketing_opt_in:
          marketingOptIn,
      });

  if (profileError) {
    throw profileError;
  }

  redirect("/account");
}

export async function signInCustomerAction(
  _prevState: AuthFormState,
  formData: FormData,
): Promise<AuthFormState> {
  const email =
    formData.get("email")?.toString().trim() ?? "";

  const password =
    formData.get("password")?.toString() ?? "";

  if (!email || !password) {
    return {
      error:
        "Email and password are required.",
    };
  }

  const supabase =
    await createServerActionSupabaseClient();

  const {
    data,
    error,
  } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return {
      error:
        "Invalid email or password.",
    };
  }

  const user = data.user;

  if (!user) {
    return {
      error:
        "Login did not return a user.",
    };
  }

  const { data: profile, error: profileError } =
    await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .maybeSingle();

  if (profileError) {
    await supabase.auth.signOut();

    return {
      error:
        "Unable to load your account profile.",
    };
  }

  if (!profile || profile.role !== "customer") {
    await supabase.auth.signOut();

    return {
      error:
        "This account is not a Texas Knife Barn customer account.",
    };
  }

  redirect("/account");
}

export async function signOutCustomerAction() {
  const supabase =
    await createServerActionSupabaseClient();

  const { error } =
    await supabase.auth.signOut();

  if (error) {
    throw error;
  }

  redirect("/login");
}