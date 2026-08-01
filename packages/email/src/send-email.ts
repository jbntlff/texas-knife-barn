import nodemailer from "nodemailer";

import {
  appConfig,
  env,
} from "@tkb/config";

const transporter =
  nodemailer.createTransport({
    host: env.mailpitHost,
    port: env.mailpitPort,
    secure: false,
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
    from: `"${appConfig.brandName}" <orders@texasknifebarn.local>`,
    to,
    subject,
    html,
  });
}