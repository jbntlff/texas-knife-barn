
import { createAdminClient } from "./admin-client";

export async function getProducts() {
  const supabase = createAdminClient();

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("status", "active");

  if (error) {
    throw error;
  }

  return data;
}

export async function getProductBySlug(slug: string) {
  const supabase = createAdminClient();

  const { data, error } = await supabase
    .from("products")
    .select(`
      *,
      brands (*),
      categories (*),
      product_variants (*),
      product_images (*)
    `)
    .eq("slug", slug)
    .single();

  if (error) {
    throw error;
  }

  return data;
}

