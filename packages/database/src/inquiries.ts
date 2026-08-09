import { createAdminClient } from "./admin-client";

export async function createInquiry({
  name,
  email,
  phone,
  message,
}: {
  name: string;
  email: string;
  phone?: string;
  message: string;
}) {
  const supabase = createAdminClient();

  const { data, error } = await supabase
    .from("inquiries")
    .insert({
      name,
      email,
      phone: phone ?? null,
      message,
    })
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function getInquiries() {
  const supabase = createAdminClient();

  const { data, error } = await supabase
    .from("inquiries")
    .select("*")
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    throw error;
  }

  return data;
}
