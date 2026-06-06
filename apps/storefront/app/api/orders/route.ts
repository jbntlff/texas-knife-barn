import { NextResponse } from "next/server";

import {
  createOrder,
  type CreateOrderItem,
} from "@tkb/database";

type RequestBody = {
  email: string;
  items: CreateOrderItem[];
};

export async function POST(
  request: Request,
) {
  try {
    const body =
      (await request.json()) as RequestBody;

    const subtotal =
      body.items.reduce(
        (sum, item) =>
          sum +
          item.unitPrice *
            item.quantity,
        0,
      );

    const order =
      await createOrder({
        customerEmail:
          body.email,

        subtotal,

        items:
          body.items,
      });

    return NextResponse.json({
      success: true,
      orderId: order.id,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      },
    );
  }
}