import { NextResponse } from "next/server";

import { createServerSupabaseClient } from "@tkb/auth/server";
import {
  createOrder,
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

    const supabase =
      await createServerSupabaseClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    let customerId: string | null =
      null;

    if (user) {
      const {
        data: profile,
        error: profileError,
      } = await supabase
        .from("profiles")
        .select("id, role")
        .eq("id", user.id)
        .maybeSingle();

      if (profileError) {
        throw profileError;
      }

      if (
        profile &&
        profile.role === "customer"
      ) {
        customerId = profile.id;
      }
    }

    const order =
      await createOrder({
        customerEmail:
          body.email,

        customerId,

        subtotal,

        items:
          body.items,
      });

    await sendOrderConfirmationEmail({
      customerEmail:
        order.customer_email,

      customerName:
        order.customer_email,

      orderNumber:
        order.order_number,

      orderUrl:
        `${process.env.NEXT_PUBLIC_STOREFRONT_URL}/orders/${order.id}`,

      subtotal:
        Number(order.subtotal),

      taxTotal:
        Number(order.tax_total),

      shippingTotal:
        Number(order.shipping_total),

      grandTotal:
        Number(order.grand_total),

      items:
        body.items.map((item) => ({
          productName:
            item.productName,

          variantTitle:
            item.variantTitle,

          quantity:
            item.quantity,

          unitPrice:
            item.unitPrice,
        })),
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