import { createAdminClient }
  from "./admin-client";

export async function getCategories() {
  const supabase =
    createAdminClient();

  const { data, error } =
    await supabase
      .from("categories")
      .select("*")
      .order("name");

  if (error) {
    throw error;
  }

  return data;
}


export async function getCategoryById(
  categoryId: string,
) {
  const supabase =
    createAdminClient();

  const { data, error } =
    await supabase
      .from("categories")
      .select("*")
      .eq("id", categoryId)
      .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function getCategoriesWithCounts() {
  const supabase =
    createAdminClient();

  const { data, error } =
    await supabase
      .from("categories")
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