"use server";

import { createServerActionSupabaseClient } from "@tkb/auth/server";
import { env } from "@tkb/config";

export type ChangeEmailState = {
  error: string | null;
  submitted: boolean;
};

export async function changeEmailAction(
  _prevState: ChangeEmailState,
  formData: FormData,
): Promise<ChangeEmailState> {
  const newEmail =
    formData.get("email")
      ?.toString()
      .trim()
      .toLowerCase() ?? "";

  if (!newEmail) {
    return {
      error: "Email is required.",
      submitted: false,
    };
  }

  const supabase =
    await createServerActionSupabaseClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return {
      error: "You must be signed in.",
      submitted: false,
    };
  }

  if (newEmail === user.email) {
    return {
      error:
        "That's already your current email.",
      submitted: false,
    };
  }

  const { error } =
    await supabase.auth.updateUser(
      { email: newEmail },
      {
        emailRedirectTo: `${env.storefrontUrl}/`,
      },
    );

  if (error) {
    if (
      error.message
        .toLowerCase()
        .includes("already registered")
    ) {
      return {
        error:
          "An account with this email already exists.",
        submitted: false,
      };
    }

    return {
      error:
        "Unable to start the email change.",
      submitted: false,
    };
  }

  return {
    error: null,
    submitted: true,
  };
}
