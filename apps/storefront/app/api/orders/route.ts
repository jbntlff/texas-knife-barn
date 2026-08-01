import { NextResponse } from "next/server";

import { env } from "@tkb/config";
import {
  createOrder,
  getOrder,
  type CreateOrderItem,
} from "@tkb/database";
import {
  sendOrderConfirmationEmail,
} from "@tkb/email";

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

    if (body.items.length === 0) {
      return NextResponse.json(
        {
          success: false,
          error: "Cart is empty",
        },
        {
          status: 400,
        },
      );
    }

    const subtotal =
      body.items.reduce(
        (sum, item) =>
          sum +
          item.unitPrice *
            item.quantity,
        0,
      );

    const createdOrder =
      await createOrder({
        customerEmail:
          body.email,
        subtotal,
        items: body.items,
      });

    const order =
      await getOrder(
        createdOrder.id,
      );

    if (!order) {
      throw new Error(
        "Unable to load created order for confirmation email.",
      );
    }

    await sendOrderConfirmationEmail({
      customerEmail:
        order.customer_email,
      customerName:
        order.customer_email,
      orderNumber:
        order.order_number,
      orderUrl:
        `${env.storefrontUrl}/orders/${order.id}`,
      subtotal:
        Number(order.subtotal ?? 0),
      taxTotal:
        Number(order.tax_total ?? 0),
      shippingTotal:
        Number(
          order.shipping_total ?? 0,
        ),
      grandTotal:
        Number(order.grand_total ?? 0),
      items: order.order_items.map(
        (item) => ({
          productName:
            item.product_name,
          variantTitle:
            item.variant_title,
          quantity:
            item.quantity,
          unitPrice:
            Number(item.unit_price),
        }),
      ),
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
        error:
          "Unable to create order.",
      },
      {
        status: 500,
      },
    );
  }
}