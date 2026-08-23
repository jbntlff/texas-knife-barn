import type { Metadata } from "next";
import Image from "next/image";

import { appConfig, env } from "@tkb/config";
import { getGalleryProducts } from "@tkb/database";
import { resolveProductImageUrl } from "@tkb/ui";

export const metadata: Metadata = {
  title: `Gallery | ${appConfig.brandName}`,
};

export default async function GalleryPage() {
  const products = await getGalleryProducts();

  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Gallery</h1>

        <p className="mt-2 text-muted-foreground">
          A look at finished pieces and past custom builds.
        </p>
      </div>

      {products.length === 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="flex aspect-square items-center justify-center rounded-2xl border bg-muted/30 text-sm text-muted-foreground"
            >
              Photo coming soon
            </div>
          ))}
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => {
            const [image] = [...product.product_images].sort(
              (a, b) => a.sort_order - b.sort_order,
            );

            return (
              <a
                key={product.id}
                href={`${env.storefrontUrl}/products/${product.slug}`}
                className="group overflow-hidden rounded-2xl border transition hover:shadow-md"
              >
                {image ? (
                  <div className="relative aspect-square bg-muted/30">
                    <Image
                      src={resolveProductImageUrl(
                        image.image_url,
                      )}
                      alt={
                        image.alt_text ??
                        product.name
                      }
                      fill
                      className="object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <div className="flex aspect-square items-center justify-center bg-muted/30 text-sm text-muted-foreground">
                    Photo coming soon
                  </div>
                )}

                <div className="p-4">
                  <h2 className="font-semibold">
                    {product.name}
                  </h2>

                  {product.brands ? (
                    <p className="mt-1 text-sm text-muted-foreground">
                      {product.brands.name}
                    </p>
                  ) : null}
                </div>
              </a>
            );
          })}
        </div>
      )}
    </main>
  );
}
