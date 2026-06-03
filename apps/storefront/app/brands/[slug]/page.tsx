
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  getBrandBySlug,
  getProductsByBrandId,
} from "@tkb/database";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BrandPage({ params }: Props) {
  const { slug } = await params;

  const brand = await getBrandBySlug(slug);
  if (!brand) {
    notFound();
  }
  const products = await getProductsByBrandId(brand.id);

  return (
    <main className="container mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          {brand.name}
        </h1>

        <p className="mt-2 text-muted-foreground">
          {products.length} products
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => {
          const image = product.product_images?.[0];
          const variant = product.product_variants?.[0]

          return (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="rounded-lg border p-4 hover:bg-muted/50"
            >
              {image && (
                <img
                  src={image.image_url}
                  alt={product.name}
                  className="mb-4 aspect-square w-full rounded object-cover"
                />
              )}

              <h2 className="font-semibold">
                {product.name}
              </h2>

              <p className="mt-2 text-sm text-muted-foreground">
                ${variant?.price}
              </p>
            </Link>
          );
        })}
      </div>
    </main>
  );
}