const STORAGE_PATH_PREFIX =
  "/storage/v1/object/public/product-images/";

/**
 * Resolves a stored product image reference into a fully-qualified URL.
 *
 * Uploads store bare Supabase Storage object paths (e.g.
 * "{productId}/{filename}.jpg") instead of full URLs, so a reference never
 * goes stale when the dev machine's LAN IP changes — the URL is built from
 * whatever NEXT_PUBLIC_SUPABASE_URL currently is. Absolute URLs (http/https)
 * are passed through unchanged.
 *
 * App-relative static paths (starting with "/") are resolved against the
 * storefront's origin, since that's the only app whose public/ folder
 * actually holds the seeded product photos — rendered as-is, they'd 404 on
 * any other app (e.g. the brochure Gallery) that doesn't have the file.
 *
 * Depends only on NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_STOREFRONT_URL (not
 * @tkb/config's `env`), so it's safe to call from client components —
 * importing the full `env` object there would try to validate server-only
 * secrets in the browser.
 */
export function resolveProductImageUrl(
  imageRef: string,
) {
  if (/^https?:\/\//.test(imageRef)) {
    return imageRef;
  }

  if (imageRef.startsWith("/")) {
    const storefrontUrl =
      process.env.NEXT_PUBLIC_STOREFRONT_URL ?? "";

    return `${storefrontUrl}${imageRef}`;
  }

  const supabaseUrl =
    process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";

  return `${supabaseUrl}${STORAGE_PATH_PREFIX}${imageRef}`;
}

/**
 * Extracts the Supabase Storage object path from a stored image
 * reference, for deleting the underlying file. Returns null when the
 * reference isn't a Supabase Storage object (e.g. a local static asset),
 * meaning there's nothing to remove from storage.
 */
export function extractStorageImagePath(
  imageRef: string,
) {
  const index = imageRef.indexOf(
    STORAGE_PATH_PREFIX,
  );

  if (index !== -1) {
    return imageRef.slice(
      index + STORAGE_PATH_PREFIX.length,
    );
  }

  if (
    imageRef.startsWith("/") ||
    /^https?:\/\//.test(imageRef)
  ) {
    return null;
  }

  return imageRef;
}
