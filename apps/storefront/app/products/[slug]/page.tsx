// Product Detail Page.
//
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug } from "@tkb/database";
import { ProductGallery } from "@/components/product-gallery";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;

  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const variant = product.product_variants?.[0];

  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <ProductGallery
            images={product.product_images ?? []}
            productName={product.name}
          />
        </div>

        <div>
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            ← Back to Products
          </Link>
          <h1 className="text-4xl font-bold">
            {product.name}
          </h1>

          <div className="mt-4 space-y-1 text-sm text-muted-foreground">
            <div className="mt-4 flex gap-2">
              {product.brands && (
                <Link
                  href={`/brands/${product.brands.slug}`}
                  className="rounded-full border px-3 py-1 text-sm hover:bg-muted"
                >
                  {product.brands.name}
                </Link>

              )}

              {product.categories && (
                <Link
                  href={`/categories/${product.categories.slug}`}
                  className="rounded-full border px-3 py-1 text-sm hover:bg-muted"
                >
                  {product.categories.name}
                </Link>
              )}


            </div>
          </div>

          {product.short_description && (
            <p className="mt-4 text-lg text-muted-foreground">
              {product.short_description}
            </p>
          )}

          {variant && (
            <div className="mt-6">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold">
                  ${Number(variant.price).toFixed(2)}
                </span>

                {variant.compare_at_price && (
                  <span className="text-lg text-muted-foreground line-through">
                    ${Number(variant.compare_at_price).toFixed(2)}
                  </span>
                )}
              </div>

              <p className="mt-2 text-sm text-muted-foreground">
                {variant.title}
              </p>

              <p className="text-sm text-muted-foreground">
                SKU: {variant.sku}
              </p>
            </div>
          )}

          {product.description && (
            <div className="mt-8">
              <h2 className="mb-2 text-xl font-semibold">
                Description
              </h2>

              <p className="whitespace-pre-wrap text-muted-foreground">
                {product.description}
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}