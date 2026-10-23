import Link from "next/link";
import { notFound } from "next/navigation";

import { getProductBySlug } from "@tkb/database";

import { BackLink } from "@/components/back-link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ProductGallery } from "@/components/product-gallery";
import { ProductDetail } from "@/components/product/product-detail";
import { seriesLabels } from "@/lib/series";

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




  const seriesLabel = product.series
    ? seriesLabels[product.series]
    : undefined;

  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <Breadcrumbs
        className="mb-10"
        items={[
          { label: "Home", href: "/" },
          ...(seriesLabel
            ? [
                {
                  label: seriesLabel,
                  href: `/products?series=${product.series}`,
                },
              ]
            : [{ label: "Products", href: "/products" }]),
          { label: product.name },
        ]}
      />

      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <ProductGallery
            images={product.product_images ?? []}
            productName={product.name}
          />
        </div>

        <div>
          <BackLink
            fallbackHref="/"
            fallbackLabel="Back to Products"
          />

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