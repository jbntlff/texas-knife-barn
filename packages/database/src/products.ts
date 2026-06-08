
import { createAdminClient } from "./admin-client";

export async function getProducts() {
  const supabase = createAdminClient();

  const { data, error } = await supabase
    .from("products")
    .select(`
      *,
      brands (*),
      categories (*),
      product_attributes(*),
      product_images(*),
      product_variants(
        *,
        inventory(*),
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

export async function getProductById(
  productId: string,
) {
  const supabase =
    createAdminClient();

  const { data, error } =
    await supabase
      .from("products")
      .select(`
        *,
        brands(*),
        categories(*),
        product_images(*),
        product_variants(
          *,
          inventory(*),
          variant_options(*)
        )
      `)
      .eq("id", productId)
      .single();

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
      product_attributes(*),
      product_variants (
      *,
      inventory(*),
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
      product_attributes(*),
      product_images (*),
      product_variants (
       *,
       inventory(*),
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
      product_attributes(*),
      product_images (*),
      product_variants (
        *,
        inventory(*),
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
      product_attributes(*),
      product_images (*),
      product_variants (
        *,
        inventory(*),
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

export async function updateVariantInventory(
  variantId: string,
  quantity: number,
) {
  const supabase =
    createAdminClient();

  const { error } =
    await supabase
      .from("product_variants")
      .update({
        inventory_quantity:
          quantity,
      })
      .eq("id", variantId);

  if (error) {
    throw error;
  }
}

export async function getInventoryMetrics() {
  const supabase =
    createAdminClient();

  const { data: products } =
    await supabase
      .from("products")
      .select("id");

  const { data: variants } =
    await supabase
      .from("product_variants")
      .select(`
        id,
        inventory(
          quantity,
          low_stock_threshold
        )
      `);

  const productCount =
    products?.length ?? 0;

  const variantCount =
    variants?.length ?? 0;

  const totalUnits =
    variants?.reduce(
      (total, variant) =>
        total +
        (variant.inventory
          ?.quantity ?? 0),
      0,
    ) ?? 0;

  const lowStockCount =
    variants?.filter(
      (variant) => {
        const quantity =
          variant.inventory
            ?.quantity ?? 0;

        const threshold =
          variant.inventory
            ?.low_stock_threshold ?? 2;

        return (
          quantity > 0 &&
          quantity <= threshold
        );
      },
    ).length ?? 0;


  const outOfStockCount =
    variants?.filter(
      (variant) =>
        (
          variant.inventory
            ?.quantity ?? 0
        ) === 0,
    ).length ?? 0;

  return {
    productCount,
    variantCount,
    totalUnits,
    lowStockCount,
    outOfStockCount,
  };
}

export async function getInventoryAlerts() {
  const supabase =
    createAdminClient();

  const { data, error } =
    await supabase
      .from("product_variants")
      .select(`
        *,
        products(
          id,
          name,
          slug
        ),
        inventory(
          quantity,
          low_stock_threshold
        )
      `)
      .eq("active", true);

  if (error) {
    throw error;
  }

  return (
    data?.filter((variant) => {
      const quantity =
        variant.inventory
          ?.quantity ?? 0;

      const threshold =
        variant.inventory
          ?.low_stock_threshold ?? 2;

      return (
        quantity === 0 ||
        quantity <= threshold
      );
    }) ?? []
  );
}