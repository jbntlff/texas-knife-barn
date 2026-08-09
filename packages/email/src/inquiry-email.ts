import { appConfig, env } from "@tkb/config";

import { sendEmail } from "./send-email";

export type InquiryEmailInput = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

export async function sendInquiryEmail({
  name,
  email,
  phone,
  message,
}: InquiryEmailInput) {
  await sendEmail({
    to: env.inquiryRecipientEmail,
    subject:
      `New inquiry from ${name} — ${appConfig.brandName}`,
    html: `
      <div style="font-family: Arial, sans-serif; color: #111827;">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      </div>
    `,
  });
}
