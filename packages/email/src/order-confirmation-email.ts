import { appConfig } from "@tkb/config";

import { sendEmail } from "./send-email";

type OrderConfirmationItem = {
  productName: string;
  variantTitle: string;
  quantity: number;
  unitPrice: number;
};

export type OrderConfirmationEmailInput = {
  customerEmail: string;
  customerName: string;
  orderNumber: string;
  orderUrl: string;
  subtotal: number;
  taxTotal: number;
  shippingTotal: number;
  grandTotal: number;
  items: OrderConfirmationItem[];
};

function formatPrice(
  value: number,
) {
  return new Intl.NumberFormat(
    "en-US",
    {
      style: "currency",
      currency: "USD",
    },
  ).format(value);
}

function getGreetingName(
  customerName: string,
  customerEmail: string,
) {
  const normalizedName =
    customerName.trim();

  if (
    !normalizedName ||
    normalizedName === customerEmail
  ) {
    return "there";
  }

  return normalizedName;
}

export async function sendOrderConfirmationEmail({
  customerEmail,
  customerName,
  orderNumber,
  orderUrl,
  subtotal,
  taxTotal,
  shippingTotal,
  grandTotal,
  items,
}: OrderConfirmationEmailInput) {
  const greetingName =
    getGreetingName(
      customerName,
      customerEmail,
    );

  const brandName =
    appConfig.brandName;

  const itemsHtml = items
    .map(
      (item) => `
        <tr>
          <td style="padding:12px 0; vertical-align:top;">
            <div style="font-weight:600; color:#111827;">
              ${item.productName}
            </div>
            <div style="font-size:12px; color:#6b7280; margin-top:4px;">
              ${item.variantTitle}
            </div>
          </td>
          <td
            style="
              padding:12px 0;
              text-align:center;
              vertical-align:top;
              color:#111827;
            "
          >
            ${item.quantity}
          </td>
          <td
            style="
              padding:12px 0;
              text-align:right;
              vertical-align:top;
              color:#111827;
              font-weight:500;
            "
          >
            ${formatPrice(
              item.unitPrice *
                item.quantity,
            )}
          </td>
        </tr>
      `,
    )
    .join("");

  await sendEmail({
    to: customerEmail,
    subject:
      `Your ${brandName} Order Confirmation`,
    html: `
      <div
        style="
          font-family: Arial, sans-serif;
          max-width: 600px;
          margin: 0 auto;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          overflow: hidden;
          background: #ffffff;
          color: #111827;
        "
      >
        <div
          style="
            background: #111827;
            color: white;
            text-align: center;
            padding: 28px 24px;
          "
        >
          <h1
            style="
              margin: 0;
              font-size: 28px;
              line-height: 1.2;
            "
          >
            ${brandName}
          </h1>

          <p
            style="
              margin: 10px 0 0;
              font-size: 14px;
              color: #d1d5db;
            "
          >
            Order Confirmation
          </p>
        </div>

        <div style="padding: 32px 24px;">
          <h2
            style="
              margin: 0 0 16px;
              font-size: 24px;
              line-height: 1.25;
              color: #111827;
            "
          >
            Thanks for your order
          </h2>

          <p
            style="
              margin: 0 0 16px;
              font-size: 15px;
              line-height: 1.7;
              color: #374151;
            "
          >
            Hello ${greetingName},
          </p>

          <p
            style="
              margin: 0 0 16px;
              font-size: 15px;
              line-height: 1.7;
              color: #374151;
            "
          >
            Thank you for shopping with ${brandName}.
            We’ve received your order and will begin
            processing it shortly.
          </p>

          <div
            style="
              margin: 24px 0;
              padding: 16px 18px;
              border: 1px solid #e5e7eb;
              border-radius: 10px;
              background: #f9fafb;
            "
          >
            <div
              style="
                font-size: 12px;
                font-weight: 700;
                letter-spacing: 0.04em;
                text-transform: uppercase;
                color: #6b7280;
                margin-bottom: 8px;
              "
            >
              Order Details
            </div>

            <div
              style="
                font-size: 15px;
                line-height: 1.6;
                color: #111827;
              "
            >
              <div>
                <strong>Order Number:</strong>
                ${orderNumber}
              </div>
            </div>
          </div>

          <h3
            style="
              margin: 32px 0 12px;
              font-size: 18px;
              color: #111827;
            "
          >
            Order Summary
          </h3>

          <table
            style="
              width: 100%;
              border-collapse: collapse;
              margin: 0 0 8px;
            "
          >
            <thead>
              <tr>
                <th
                  align="left"
                  style="
                    padding-bottom: 10px;
                    border-bottom: 1px solid #e5e7eb;
                    font-size: 13px;
                    color: #6b7280;
                  "
                >
                  Item
                </th>
                <th
                  align="center"
                  style="
                    padding-bottom: 10px;
                    border-bottom: 1px solid #e5e7eb;
                    font-size: 13px;
                    color: #6b7280;
                  "
                >
                  Qty
                </th>
                <th
                  align="right"
                  style="
                    padding-bottom: 10px;
                    border-bottom: 1px solid #e5e7eb;
                    font-size: 13px;
                    color: #6b7280;
                  "
                >
                  Total
                </th>
              </tr>
            </thead>

            <tbody>
              ${itemsHtml}
            </tbody>
          </table>

          <table
            style="
              width: 100%;
              border-collapse: collapse;
              margin-top: 20px;
              border-top: 1px solid #e5e7eb;
              padding-top: 12px;
            "
          >
            <tr>
              <td
                style="
                  padding: 8px 0;
                  color: #374151;
                "
              >
                Subtotal
              </td>
              <td
                align="right"
                style="
                  padding: 8px 0;
                  color: #111827;
                "
              >
                ${formatPrice(subtotal)}
              </td>
            </tr>

            <tr>
              <td
                style="
                  padding: 8px 0;
                  color: #374151;
                "
              >
                Tax
              </td>
              <td
                align="right"
                style="
                  padding: 8px 0;
                  color: #111827;
                "
              >
                ${formatPrice(taxTotal)}
              </td>
            </tr>

            <tr>
              <td
                style="
                  padding: 8px 0;
                  color: #374151;
                "
              >
                Shipping
              </td>
              <td
                align="right"
                style="
                  padding: 8px 0;
                  color: #111827;
                "
              >
                ${formatPrice(shippingTotal)}
              </td>
            </tr>

            <tr>
              <td
                style="
                  padding-top: 12px;
                  font-weight: 700;
                  color: #111827;
                "
              >
                Total
              </td>
              <td
                align="right"
                style="
                  padding-top: 12px;
                  font-weight: 700;
                  color: #111827;
                "
              >
                ${formatPrice(grandTotal)}
              </td>
            </tr>
          </table>

          <div
            style="
              margin: 32px 0 0;
              padding: 18px;
              border: 1px solid #e5e7eb;
              border-radius: 10px;
              background: #f9fafb;
            "
          >
            <h3
              style="
                margin: 0 0 10px;
                font-size: 16px;
                color: #111827;
              "
            >
              What happens next
            </h3>

            <ul
              style="
                margin: 0;
                padding-left: 18px;
                color: #374151;
                line-height: 1.7;
                font-size: 14px;
              "
            >
              <li>
                We’ll begin processing your order shortly.
              </li>
              <li>
                You’ll receive another email when your order ships with tracking information.
              </li>
              <li>
                You can review your order details any time using the link below.
              </li>
            </ul>
          </div>

          <div
            style="
              text-align: center;
              margin: 32px 0 8px;
            "
          >
            <a
              href="${orderUrl}"
              style="
                background: #111827;
                color: white;
                text-decoration: none;
                padding: 12px 24px;
                border-radius: 8px;
                display: inline-block;
                font-weight: 600;
              "
            >
              View Order
            </a>
          </div>

          <p
            style="
              margin: 32px 0 0;
              font-size: 14px;
              line-height: 1.7;
              color: #6b7280;
              border-top: 1px solid #e5e7eb;
              padding-top: 24px;
            "
          >
            Questions about your order? Reply to this email and we’ll be happy to help.
          </p>
        </div>
      </div>
    `,
  });
}