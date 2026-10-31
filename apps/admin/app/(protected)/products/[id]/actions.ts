"use server";
import { randomUUID } from "crypto";
import { revalidatePath } from "next/cache";

import { requireAdmin }
  from "@tkb/auth/server";

import {
  createAdminClient,
} from "@tkb/database";

import {
  extractStorageImagePath,
} from "@tkb/ui";

export async function updateInventory(
  formData: FormData,
) {
  await requireAdmin();

  const variantId = formData.get( "variantId",) as string;
  const productId = formData.get( "productId",) as string;
  const quantity = Number( formData.get( "quantity",),);
  const supabase = createAdminClient();

  const { error } =
    await supabase
      .from("inventory")
      .upsert({
        variant_id:
          variantId,
        quantity,
      });

  if (error) {
    throw error;
  }

  revalidatePath(
    `/products/${productId}`,
  );

  revalidatePath(
    "/inventory",
  );

  revalidatePath(
    "/dashboard",
  );
}

export async function updateProduct(
  formData: FormData,
) {
  await requireAdmin();

  const productId = formData.get( "productId",) as string;
  const name = formData.get( "name",) as string;
  const slug = formData.get( "slug",) as string;
  const brandId = formData.get( "brandId",) as string;
  const categoryId = formData.get( "categoryId",) as string;
  const shortDescription = formData.get( "shortDescription",) as string;
  const description = formData.get( "description",) as string;
  const status = formData.get( "status",) as string;
  const series = formData.get( "series",) as string;
  const featured = formData.get( "featured",) === "on";
  const showInGallery = formData.get( "showInGallery",) === "on";
  const supabase = createAdminClient();

  const { error } =
    await supabase
      .from("products")
      .update({
        name,
        slug,
        brand_id: brandId,
        category_id: categoryId,
        short_description:
          shortDescription,
        description,
        status,
        series:
          series || null,
        featured,
        show_in_gallery:
          showInGallery,
        updated_at:
          new Date()
            .toISOString(),
      })
      .eq(
        "id",
        productId,
      );

  if (error) {
    throw error;
  }
  revalidatePath(
    `/products/${productId}`,
  );
  revalidatePath(
    "/products",
  );
  revalidatePath(
    "/dashboard",
  );
}

export async function createVariant(
  formData: FormData,
) {
  await requireAdmin();

  const productId = formData.get("productId",) as string;
  const sku = formData.get( "sku",) as string;
  const title = formData.get( "title",) as string;
  const price = Number( formData.get( "price",),);
  const compareAtPrice = Number( formData.get( "compareAtPrice",),);
  const active = formData.get("active",) === "on";
  const lowStockThreshold = 
      Number( 
        formData.get(
          "lowStockThreshold",
        ),
      ) || 2;


  const supabase = createAdminClient();


  const {
    data: variant,
    error,
  } = await supabase
    .from("product_variants")
    .insert({
      product_id:
        productId,
      sku,
      title,
      price,
      compare_at_price:
        compareAtPrice || null,
      active,
    })
    .select()
    .single();

  if (error) {
    throw error;
  }

  const {
    error: inventoryError,
  } = await supabase
    .from("inventory")
    .insert({
      variant_id: variant.id,
      quantity: 0,
      low_stock_threshold: lowStockThreshold,
    });

  if (inventoryError) {
    throw inventoryError;
  }

  revalidatePath(
    `/products/${productId}`,
  );

  revalidatePath(
    "/products",
  );
}

// Create Variant Options

export async function createVariantOption(
  formData: FormData,
) {
  await requireAdmin();

  const productId = formData.get( "productId",) as string;
  const variantId = formData.get( "variantId",) as string;
  const optionName = formData.get( "optionName",) as string;
  const optionValue = formData.get( "optionValue",) as string;
  const supabase = createAdminClient();

  const { error } =
    await supabase
      .from("variant_options")
      .insert({
        variant_id:
          variantId,

        option_name:
          optionName,

        option_value:
          optionValue,
      });

  if (error) {
    throw error;
  }

  revalidatePath(
    `/products/${productId}`,
  );
}

export async function createProductAttribute(
  formData: FormData,
) {
  await requireAdmin();

  const productId = formData.get( "productId",) as string;
  const attributeName = formData.get( "attributeName",) as string;
  const attributeValue = formData.get( "attributeValue",) as string;
  const supabase = createAdminClient();

  const {
    data: existingAttributes,
    error: existingAttributesError,
  } = await supabase
    .from("product_attributes")
    .select("sort_order")
    .eq("product_id", productId);

  if (existingAttributesError) {
    throw existingAttributesError;
  }

  const nextSortOrder =
    existingAttributes?.length
      ? Math.max(
        ...existingAttributes.map(
          (attribute) => attribute.sort_order,
        ),
      ) + 1
      : 0;

  const { error } =
    await supabase
      .from("product_attributes")
      .insert({
        product_id:
          productId,

        attribute_name:
          attributeName,

        attribute_value:
          attributeValue,

        sort_order:
          nextSortOrder,
      });

  if (error) {
    throw error;
  }

  revalidatePath(
    `/products/${productId}`,
  );
}

export async function deleteProductAttribute(
  formData: FormData,
) {
  await requireAdmin();

  const attributeId =
    formData.get(
      "attributeId",
    ) as string;

  const productId =
    formData.get(
      "productId",
    ) as string;

  const supabase =
    createAdminClient();

  const { error } =
    await supabase
      .from("product_attributes")
      .delete()
      .eq("id", attributeId);

  if (error) {
    throw error;
  }

  revalidatePath(
    `/products/${productId}`,
  );
}

// Delete Variant Option
export async function deleteVariantOption(
  formData: FormData,
) {
  await requireAdmin();

  const optionId =
    formData.get(
      "optionId",
    ) as string;

  const productId =
    formData.get(
      "productId",
    ) as string;

  const supabase =
    createAdminClient();

  const { error } =
    await supabase
      .from("variant_options")
      .delete()
      .eq("id", optionId);

  if (error) {
    throw error;
  }

  revalidatePath(
    `/products/${productId}`,
  );
}

export async function uploadProductImage(
  formData: FormData,
) {
  await requireAdmin();

  const productId =
    formData.get(
      "productId",
    ) as string;

  const altText =
    formData.get(
      "altText",
    ) as string;

  const file =
    formData.get(
      "image",
    ) as File;

  if (!file || file.size === 0) {
    throw new Error(
      "No image uploaded",
    );
  }

  const supabase =
    createAdminClient();

  const extension =
    file.name
      .split(".")
      .pop();

  const fileName =
    `${randomUUID()}.${extension}`;

  const storagePath =
    `${productId}/${fileName}`;

  const arrayBuffer =
    await file.arrayBuffer();

  const {
    error: uploadError,
  } = await supabase.storage
    .from("product-images")
    .upload(
      storagePath,
      Buffer.from(
        arrayBuffer,
      ),
      {
        contentType:
          file.type,
        upsert: false,
      },
    );


  if (uploadError) {
    console.error(
      "IMAGE UPLOAD ERROR:",
      JSON.stringify(
        uploadError,
        null,
        2,
      ),
    );

    throw uploadError;
  }

  /*
  if (uploadError) {
    throw uploadError;
  }
   */

  const {
    data: existingImages,
    error: existingImagesError,
  } = await supabase
    .from("product_images")
    .select("sort_order")
    .eq(
      "product_id",
      productId,
    );

  if (existingImagesError) {
    throw existingImagesError;
  }

  const nextSortOrder =
    existingImages?.length
      ? Math.max(
        ...existingImages.map(
          (image) =>
            image.sort_order,
        ),
      ) + 1
      : 0;

  console.log(
    "EXISTING IMAGES:",
    existingImages,
  );

  console.log(
    "NEXT SORT ORDER:",
    nextSortOrder,
  );
  const {
    error: imageError,
  } = await supabase
    .from("product_images")
    .insert({
      product_id:
        productId,

      image_url:
        storagePath,

      alt_text:
        altText || null,

      sort_order:
        nextSortOrder,
    });

  if (imageError) {
    console.error(
      "IMAGE INSERT ERROR",
    );

    console.error(
      "CODE:",
      imageError.code,
    );

    console.error(
      "MESSAGE:",
      imageError.message,
    );

    console.error(
      "DETAILS:",
      imageError.details,
    );

    console.error(
      "HINT:",
      imageError.hint,
    );

    throw imageError;
  }
  /*
  if (imageError) {
    console.error(
      "IMAGE INSERT ERROR:",
      JSON.stringify(
        imageError,
        null,
        2,
      ),
    );

    throw imageError;
  }
  */
  revalidatePath(
    `/products/${productId}`,
  );
}



export async function deleteProductImage(
  formData: FormData,
) {
  await requireAdmin();

  const imageId =
    formData.get(
      "imageId",
    ) as string;

  const productId =
    formData.get(
      "productId",
    ) as string;

  const imageUrl =
    formData.get(
      "imageUrl",
    ) as string;

  const supabase =
    createAdminClient();

  const storagePath =
    extractStorageImagePath(imageUrl);

  if (storagePath) {
    const {
      error: storageError,
    } = await supabase.storage
      .from("product-images")
      .remove([
        storagePath,
      ]);

    if (storageError) {
      throw storageError;
    }
  }

  const {
    error: imageError,
  } = await supabase
    .from("product_images")
    .delete()
    .eq("id", imageId);

  if (imageError) {
    throw imageError;
  }

  revalidatePath(
    `/products/${productId}`,
  );
}

export async function moveImageUp(
  formData: FormData,
) {
  await requireAdmin();

  const imageId =
    formData.get(
      "imageId",
    ) as string;

  const productId =
    formData.get(
      "productId",
    ) as string;

  const supabase =
    createAdminClient();

  const {
    data: current,
  } = await supabase
    .from("product_images")
    .select("*")
    .eq("id", imageId)
    .single();

  if (!current) {
    return;
  }

  const {
    data: previous,
  } = await supabase
    .from("product_images")
    .select("*")
    .eq(
      "product_id",
      current.product_id,
    )
    .lt(
      "sort_order",
      current.sort_order,
    )
    .order(
      "sort_order",
      {
        ascending: false,
      },
    )
    .limit(1)
    .maybeSingle();

  if (!previous) {
    return;
  }

  await supabase
    .from("product_images")
    .update({
      sort_order:
        previous.sort_order,
    })
    .eq("id", current.id);

  await supabase
    .from("product_images")
    .update({
      sort_order:
        current.sort_order,
    })
    .eq("id", previous.id);

  revalidatePath(
    `/products/${productId}`,
  );
}


export async function moveImageDown(
  formData: FormData,
) {
  await requireAdmin();

  const imageId =
    formData.get(
      "imageId",
    ) as string;

  const productId =
    formData.get(
      "productId",
    ) as string;

  const supabase =
    createAdminClient();

  const {
    data: current,
  } = await supabase
    .from("product_images")
    .select("*")
    .eq("id", imageId)
    .single();

  if (!current) {
    return;
  }

  const {
    data: next,
  } = await supabase
    .from("product_images")
    .select("*")
    .eq(
      "product_id",
      current.product_id,
    )
    .gt(
      "sort_order",
      current.sort_order,
    )
    .order(
      "sort_order",
      {
        ascending: true,
      },
    )
    .limit(1)
    .maybeSingle();

  if (!next) {
    return;
  }

  await supabase
    .from("product_images")
    .update({
      sort_order:
        next.sort_order,
    })
    .eq("id", current.id);

  await supabase
    .from("product_images")
    .update({
      sort_order:
        current.sort_order,
    })
    .eq("id", next.id);

  revalidatePath(
    `/products/${productId}`,
  );
}
export async function deleteVariant(
  formData: FormData,
) {
  await requireAdmin();

  const variantId =
    formData.get(
      "variantId",
    ) as string;

  const productId =
    formData.get(
      "productId",
    ) as string;

  const supabase =
    createAdminClient();

  const {
    error: optionsError,
  } = await supabase
    .from("variant_options")
    .delete()
    .eq(
      "variant_id",
      variantId,
    );

  if (optionsError) {
    throw optionsError;
  }

  const {
    error: inventoryError,
  } = await supabase
    .from("inventory")
    .delete()
    .eq(
      "variant_id",
      variantId,
    );

  if (inventoryError) {
    throw inventoryError;
  }

  const {
    error: variantError,
  } = await supabase
    .from("product_variants")
    .delete()
    .eq(
      "id",
      variantId,
    );

  if (variantError) {
    throw variantError;
  }

  revalidatePath(
    `/products/${productId}`,
  );

  revalidatePath(
    "/products",
  );
}