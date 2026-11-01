"use server";

import { redirect } from "next/navigation";

import { createInquiry } from "@tkb/database";
import { sendInquiryEmail } from "@tkb/email";

export async function submitInquiry(
  formData: FormData,
) {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    redirect("/contact?error=missing-fields");
  }

  await createInquiry({
    name,
    email,
    phone: phone || undefined,
    message,
  });

  try {
    await sendInquiryEmail({
      name,
      email,
      phone: phone || undefined,
      message,
    });
  } catch (error) {
    console.error(
      "Failed to send inquiry notification email:",
      error,
    );
  }

  redirect("/contact?success=1");
}
