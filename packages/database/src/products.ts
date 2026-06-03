
import { createAdminClient } from "./admin-client";

export async function getProducts() {
  const supabase = createAdminClient();

  const { data, error } = await supabase
    .from("products")
    .select(`
      *,
      brands (*),
      categories (*),
      product_images(*),
      product_variants(
        *,
        variant_options(*)
      )
    `)
    .eq("status", "active");

  if (error) {
    console.error(
      "SUPABASE ERROR:",
      JSON.stringify(error, null, 2)
    );
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
      product_variants (
      *,
      variant_options(*)
      ),
      product_images (*)
    `)
    .eq("slug", slug)
    .single();

  if (error) {
    console.error(
      "SUPABASE ERROR:",
      JSON.stringify(error, null, 2)
    );
    throw error;
  }

  return data;
}


export async function getProductsByBrandSlug(slug: string) {
  const supabase = createAdminClient();

  const { data, error } = await supabase
    .from("products")
    .select(`
      *,
      brands (
      id,
      name,
      slug
      ),
      categories (
      id,
      name,
      slug
      ),
      product_images (*),
      product_variants (
       *,
        variant_options(*)
      )
    `)
    .eq("status", "active")
    .eq("brands.slug", slug);

  if (error) {
    console.error(
      "SUPABASE ERROR:",
      JSON.stringify(error, null, 2)
    );
    throw error;
  }

  return data;
}


export async function getBrandBySlug(slug: string) {
  const supabase = createAdminClient();

  const { data, error } = await supabase
    .from("brands")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) {
    return null;
  }

  return data;
}

export async function getProductsByBrandId(brandId: string) {
  const supabase = createAdminClient();

  const { data, error } = await supabase
    .from("products")
    .select(`
      *,
      brands (*),
      categories (*),
      product_images (*),
      product_variants (
        *,
        variant_options(*)
      )
    `)
    .eq("status", "active")
    .eq("brand_id", brandId);

  if (error) {
    console.error(
      "SUPABASE ERROR:",
      JSON.stringify(error, null, 2)
    );
    throw error;
  }

  return data;
}


export async function getCategoryBySlug(slug: string) {
  const supabase = createAdminClient();

  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) {
    return null;
  }

  return data;
}

export async function getProductsByCategoryId(categoryId: string) {
  const supabase = createAdminClient();

  const { data, error } = await supabase
    .from("products")
    .select(`
      *,
      brands (*),
      categories (*),
      product_images (*),
      product_variants (
        *,
        variant_options(*)
      )
    `)
    .eq("status", "active")
    .eq("category_id", categoryId);

  if (error) {
    console.error(
      "SUPABASE ERROR:",
      JSON.stringify(error, null, 2)
    );

    throw error;
  }

  return data;
}