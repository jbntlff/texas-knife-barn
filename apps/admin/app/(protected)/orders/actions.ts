"use server";

import {
  revalidatePath,
} from "next/cache";

import {
  updateOrderStatus,
  updateShipment,
} from "@tkb/database";

import {
  sendShipmentEmail,
  getTrackingUrl,
} from "@tkb/email";

import {
  getOrder,
} from "@tkb/database";


export async function updateOrderStatusAction(
  formData: FormData,
) {
  const orderId = formData.get( "orderId",) as string;

  const status = formData.get( "status",) as string;

  await updateOrderStatus( orderId, status,);

  revalidatePath(
    `/orders/${orderId}`,
  );
}



export async function updateShipmentAction(
  formData: FormData,
) {
  const orderId =
    formData.get("orderId") as string;

  const carrier =
    formData.get("carrier") as string;

  const trackingNumber =
    formData.get("trackingNumber") as string;

  await updateShipment(
    orderId,
    carrier,
    trackingNumber,
  );

  const order =
    await getOrder(orderId);

  if (
    order?.customer_email &&
    carrier &&
    trackingNumber
  ) {
    await sendShipmentEmail({
      customerEmail:
        order.customer_email,

      customerName:
        order.customer_email,

      orderNumber:
        order.order_number,

      carrier,

      trackingNumber,

      trackingUrl:
        getTrackingUrl(
          carrier,
          trackingNumber,
        ),
    });
  }

  revalidatePath(
    `/orders/${orderId}`,
  );
}