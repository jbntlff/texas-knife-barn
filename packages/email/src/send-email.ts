import nodemailer from "nodemailer";

const transporter =
  nodemailer.createTransport({
    host: "host.docker.internal",
    port: 54325,
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
    from:
  '"Texas Knife Barn" <orders@texasknifebarn.local>',
    to,
    subject,
    html,
  });
}