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

  if (input.items.length === 0) {
    throw new Error(
      "Cannot create an order with no items.",
    );
  }

  const supabase = createAdminClient();

  const taxTotal = input.taxTotal ?? 0;
  const shippingTotal = input.shippingTotal ?? 0;
  const grandTotal = input.subtotal + taxTotal + shippingTotal;
  const orderNumber = `TKB-${Date.now()}`;

  const {
    data: order,
    error: orderError,
  } = await supabase
    .from("orders")
    .insert({
      order_number: orderNumber,
      customer_email: input.customerEmail,
      subtotal: input.subtotal,
      tax_total: taxTotal,
      shipping_total: shippingTotal,
      grand_total: grandTotal,
    })
    .select()
    .single();

  if (orderError) {
    throw orderError;
  }

  const orderItems =
    input.items.map((item) => ({
      order_id: order.id,
      product_id: item.productId,
      variant_id: item.variantId,
      sku: item.sku,
      product_name: item.productName,
      variant_title: item.variantTitle,
      quantity: item.quantity,
      unit_price: item.unitPrice,
    }));

  const {
    error: itemsError,
  } = await supabase
    .from("order_items")
    .insert(orderItems);


  if (itemsError) {
    throw itemsError;
  }

  for (const item of input.items) {
    const {
      data: inventory,
      error: inventoryError,
    } = await supabase
      .from("inventory")
      .select("quantity")
      .eq(
        "variant_id",
        item.variantId,
      )
      .maybeSingle();

    if (inventoryError) {
      throw inventoryError;
    }

    const currentQuantity =
      inventory?.quantity ?? 0;

    const newQuantity =
      Math.max(
        0,
        currentQuantity -
        item.quantity,
      );

    const {
      error: updateError,
    } = await supabase
      .from("inventory")
      .upsert({
        variant_id:
          item.variantId,

        quantity:
          newQuantity,
      });

    if (updateError) {
      throw updateError;
    }
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
      .maybeSingle();

  if (error) {
    throw error;
  }

  return data;
}

export async function getOrders(
  search?: string,
  status?: string,
) {
  const supabase = createAdminClient();

  let query = supabase
    .from("orders")
    .select("*");

  if (status) {
    query = query.eq("status",status,);
  }
  
  if (search) {
    query = query.or(
      [
      `order_number.ilike.%${search}%`,
      `customer_email.ilike.%${search}%`,
      ].join(","),
    );
  }

  const { data, error } =
  await query.order(
    "created_at",
    {
      ascending: false,
    },
  );

  if (error) {
    throw error;
  }

  return data;
}

export async function updateOrderStatus(
  orderId: string,
  status: string,
) {
  const supabase =
    createAdminClient();

  if (status === "shipped") {
    const order = await getOrder(orderId)
    if (!order?.carrier || !order.tracking_number) {
      throw new Error(
        "Carrier and tracking number are required before marking an order as shipped",
      )
    }
  }
  const { error } =
    await supabase
      .from("orders")
      .update({
        status,
      })
      .eq("id", orderId);

  if (error) {
    throw error;
  }
}

export async function getOrderMetrics() {
  const orders =
    await getOrders();

  const totalOrders =
    orders.length;

  const pendingOrders =
    orders.filter(
      (order) =>
        order.status ===
        "pending",
    ).length;

  const revenue =
    orders.reduce(
      (sum, order) =>
        sum +
        Number(
          order.grand_total,
        ),
      0,
    );

  const averageOrderValue =
    totalOrders === 0
      ? 0
      : revenue /
      totalOrders;

  return {
    totalOrders,
    pendingOrders,
    revenue,
    averageOrderValue,
  };
}

export async function updateShipment(
  orderId: string,
  carrier: string,
  trackingNumber: string,
) {
  const supabase =
    createAdminClient();

  const { error } =
    await supabase
      .from("orders")
      .update({
        carrier,
        tracking_number:
          trackingNumber,
        shipped_at:
          new Date()
            .toISOString(),
        status: "shipped",
      })
      .eq(
        "id",
        orderId,
      );

  if (error) {
    throw error;
  }
}