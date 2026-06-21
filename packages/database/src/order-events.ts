import { createAdminClient } from "./admin-client";

export async function createOrderEvent(
  orderId: string,
  eventType: string,
  eventDescription?: string,
) {
  const supabase = createAdminClient();

  const { error } = await supabase
    .from("order_events")
    .insert({
      order_id: orderId,
      event_type: eventType,
      event_description: eventDescription ?? null,
    });

  if (error) {
    throw error;
  }
}

export async function getOrderEvents(
  orderId: string,
) {
  const supabase = createAdminClient();

  const { data, error } = await supabase
    .from("order_events")
    .select("*")
    .eq("order_id", orderId)
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    throw error;
  }

  return data;
}