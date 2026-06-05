import Link from "next/link";
import { notFound } from "next/navigation";

import { getProductBySlug } from "@tkb/database";

import { ProductGallery } from "@/components/product-gallery";
import { ProductDetail } from "@/components/product/product-detail";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

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

          <ProductDetail product={product} />
        </div>
      </div>
    </main>
  );
}