"use server";

import {
  revalidatePath,
} from "next/cache";

import {
  updateOrderStatus,
} from "@tkb/database";

export async function updateOrderStatusAction(
  formData: FormData,
) {
  const orderId =
    formData.get(
      "orderId",
    ) as string;

  const status =
    formData.get(
      "status",
    ) as string;

  await updateOrderStatus(
    orderId,
    status,
  );

  revalidatePath(
    `/orders/${orderId}`,
  );
}