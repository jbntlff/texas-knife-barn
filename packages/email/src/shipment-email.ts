import { sendEmail }
  from "./send-email";

export async function sendShipmentEmail({
  customerEmail,
  customerName,
  orderNumber,
  carrier,
  trackingNumber,
  trackingUrl,
}: {
  customerEmail: string;
  customerName: string;
  orderNumber: string;
  carrier: string;
  trackingNumber: string;
  trackingUrl: string;
}) {
  await sendEmail({
    to: customerEmail,
    subject:
      "Your Texas Knife Barn Order Has Shipped",
    html: `
<div
  style="
    font-family: Arial, sans-serif;
    max-width: 600px;
    margin: 0 auto;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    overflow: hidden;
  "
>
  <div
    style="
      background: #111827;
      color: white;
      text-align: center;
      padding: 24px;
    "
  >
    <h1 style="margin:0;">
      Texas Knife Barn
    </h1>

    <p style="margin-top:8px;">
      Order Shipment Notification
    </p>
  </div>

  <div style="padding:24px;">

    <h2>
      Your Order Has Shipped
    </h2>

    <p>
      Hello ${customerName},
    </p>

    <p>
      Your order has been shipped and
      is on its way.
    </p>

    <table
      style="
        width:100%;
        border-collapse:collapse;
        margin:20px 0;
      "
    >
      <tr>
        <td><strong>Order</strong></td>
        <td>${orderNumber}</td>
      </tr>

      <tr>
        <td><strong>Carrier</strong></td>
        <td>${carrier}</td>
      </tr>

      <tr>
        <td><strong>Tracking</strong></td>
        <td>${trackingNumber}</td>
      </tr>
    </table>

    <div
      style="
        text-align:center;
        margin:32px 0;
      "
    >
      <a
        href="${trackingUrl}"
        style="
          background:#111827;
          color:white;
          text-decoration:none;
          padding:12px 24px;
          border-radius:6px;
          display:inline-block;
        "
      >
        Track Package
      </a>
    </div>

    <p>
      Thank you for shopping with
      Texas Knife Barn.
    </p>

  </div>
</div>
`,
  });
}