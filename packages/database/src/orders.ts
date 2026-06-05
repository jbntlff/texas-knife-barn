import { createAdminClient }
  from "./admin-client";

export type CreateOrderItem = {
  productId: string;
  variantId: string;

  sku: string;

  productName: string;
  variantTitle: string;

  quantity: number;

  unitPrice: number;
};

export type CreateOrderInput = {
  customerEmail: string;

  subtotal: number;

  taxTotal?: number;

  shippingTotal?: number;

  items: CreateOrderItem[];
};

export async function createOrder(
  input: CreateOrderInput,
) {
  const supabase =
    createAdminClient();

  const taxTotal =
    input.taxTotal ?? 0;

  const shippingTotal =
    input.shippingTotal ?? 0;

  const grandTotal =
    input.subtotal +
    taxTotal +
    shippingTotal;

  const orderNumber =
    `TKB-${Date.now()}`;

  const {
    data: order,
    error: orderError,
  } = await supabase
    .from("orders")
    .insert({
      order_number: orderNumber,

      customer_email:
        input.customerEmail,

      subtotal:
        input.subtotal,

      tax_total:
        taxTotal,

      shipping_total:
        shippingTotal,

      grand_total:
        grandTotal,
    })
    .select()
    .single();

  if (orderError) {
    throw orderError;
  }

  const orderItems =
    input.items.map((item) => ({
      order_id: order.id,

      product_id:
        item.productId,

      variant_id:
        item.variantId,

      sku: item.sku,

      product_name:
        item.productName,

      variant_title:
        item.variantTitle,

      quantity:
        item.quantity,

      unit_price:
        item.unitPrice,
    }));

  const {
    error: itemsError,
  } = await supabase
    .from("order_items")
    .insert(orderItems);

  if (itemsError) {
    throw itemsError;
  }

  return order;
}

export async function getOrder(
  orderId: string,
) {
  const supabase =
    createAdminClient();

  const { data, error } =
    await supabase
      .from("orders")
      .select(`
        *,
        order_items(*)
      `)
      .eq("id", orderId)
      .single();

  if (error) {
    throw error;
  }

  return data;
}