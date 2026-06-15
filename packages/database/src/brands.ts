import { createAdminClient }
  from "./admin-client";

export async function getBrands() {
  const supabase =
    createAdminClient();

  const { data, error } =
    await supabase
      .from("brands")
      .select("*")
      .order("name");

  if (error) {
    throw error;
  }

  return data;
}

export async function getBrandById(
  brandId: string,
) {
  const supabase =
    createAdminClient();

  const { data, error } =
    await supabase
      .from("brands")
      .select("*")
      .eq("id", brandId)
      .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function getBrandsWithCounts() {
  const supabase =
    createAdminClient();

  const { data, error } =
    await supabase
      .from("brands")
      .select(`
        *,
        products (
          id
        )
      `)
      .order("name");

  if (error) {
    throw error;
  }

  return data;
}