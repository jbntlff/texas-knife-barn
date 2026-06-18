"use server";

import {
  revalidatePath,
} from "next/cache";

import {
  updateOrderStatus,
  updateShipment,
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
  const orderId = formData.get( "orderId",) as string;
  const carrier = formData.get("carrier",) as string;
  const trackingNumber = formData.get("trackingNumber",) as string;

  await updateShipment(
    orderId,
    carrier,
    trackingNumber
  );

  revalidatePath(
    `/orders/${orderId}`,
  );

}