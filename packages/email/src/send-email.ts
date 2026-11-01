import nodemailer from "nodemailer";

import {
  appConfig,
  env,
} from "@tkb/config";

const transporter =
  nodemailer.createTransport({
    host: env.mailpitHost,
    port: env.mailpitPort,
    secure: env.mailpitPort === 465,
    auth:
      env.mailpitUser && env.mailpitPass
        ? {
            user: env.mailpitUser,
            pass: env.mailpitPass,
          }
        : undefined,
  });

export async function sendEmail({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}) {
  await transporter.sendMail({
    from: `"${appConfig.brandName}" <${env.emailFrom}>`,
    to,
    subject,
    html,
  });
}