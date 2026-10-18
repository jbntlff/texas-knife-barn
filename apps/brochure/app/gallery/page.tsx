import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { appConfig, env } from "@tkb/config";
import { getGalleryProducts } from "@tkb/database";
import { resolveProductImageUrl } from "@tkb/ui";

export const metadata: Metadata = {
  title: `Gallery | ${appConfig.brandName}`,
  description:
    "Explore the Handcrafted, MidTech, and Signature Series collections from Texas Knife Outfitters.",
};

const series = [
  {
    key: "handcrafted",
    label: "Handcrafted",
    eyebrow: "The Craft",
    description:
      "Where traditional craftsmanship, distinctive materials, and individual character come together.",
    fallbackImage: "/images/milinski-lab.jpeg",
    alt: "Knife making and handcrafted knife work at a workshop",
  },
  {
    key: "midtech",
    label: "MidTech",
    eyebrow: "Precision Meets Performance",
    description:
      "Modern manufacturing combined with careful finishing and the attention to detail serious knife enthusiasts expect.",
    fallbackImage: "/images/the-craft.jpg",
    alt: "Finished knife showcasing precision craftsmanship",
  },
  {
    key: "signature_series",
    label: "Signature Series",
    eyebrow: "Made to Stand Apart",
    description:
      "Distinctive designs, premium materials, and exceptional details for knives meant to be noticed and remembered.",
    fallbackImage: "/images/the-craft.jpg",
    alt: "Distinctive premium knife with Damascus detailing",
  },
] as const;

type GalleryPageProps = {
  searchParams: Promise<{
    series?: string;
  }>;
};

export default async function GalleryPage({
  searchParams,
}: GalleryPageProps) {
  const { series: selectedSeries } = await searchParams;
  const products = await getGalleryProducts();

  const activeSeries = series.some((item) => item.key === selectedSeries)
    ? selectedSeries
    : undefined;

  const filteredProducts = activeSeries
    ? products.filter((product) => product.series === activeSeries)
    : products;

  const seriesCards = series.map((item) => {
    const product = products.find(
      (galleryProduct) => galleryProduct.series === item.key,
    );

    const [image] = product
      ? [...(product.product_images ?? [])].sort(
          (a, b) => a.sort_order - b.sort_order,
        )
      : [];

    return {
      ...item,
      imageUrl: image
        ? resolveProductImageUrl(image.image_url)
        : item.fallbackImage,
      imageAlt: image?.alt_text ?? product?.name ?? item.alt,
    };
  });

  const activeLabel =
    series.find((item) => item.key === activeSeries)?.label ?? "All Collections";

  return (
    <main className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
      <header className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">
          The Gallery
        </p>

        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          Explore the Craft
        </h1>

        <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
          Every knife has a story. Explore the craftsmanship, materials, and
          details behind the knives of {appConfig.brandName}.
        </p>
      </header>

      <section
        aria-label="Knife collections"
        className="mt-12 grid gap-6 lg:grid-cols-3"
      >
        {seriesCards.map((item) => (
          <Link
            key={item.key}
            href={`/gallery?series=${item.key}#gallery-results`}
            className="group overflow-hidden rounded-3xl border bg-background shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-muted">
              <Image
                src={item.imageUrl}
                alt={item.imageAlt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/75">
                  {item.eyebrow}
                </p>

                <h2 className="mt-1 text-2xl font-semibold">
                  {item.label}
                </h2>
              </div>
            </div>

            <div className="p-6">
              <p className="text-sm leading-6 text-muted-foreground">
                {item.description}
              </p>

              <div className="mt-5 flex items-center justify-between text-sm font-semibold">
                <span>Explore {item.label}</span>
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </section>

      <section className="mt-16 border-t pt-12" aria-labelledby="gallery-results">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              {activeSeries ? "Collection" : "Featured Gallery"}
            </p>

            <h2
              id="gallery-results"
              className="mt-2 text-2xl font-semibold tracking-tight"
            >
              {activeLabel}
            </h2>
          </div>

          {activeSeries ? (
            <Link
              href="/gallery"
              className="text-sm font-semibold text-foreground underline-offset-4 hover:underline"
            >
              View All Collections
            </Link>
          ) : null}
        </div>

        {filteredProducts.length === 0 ? (
          <div className="mt-8 rounded-2xl border bg-muted/30 px-6 py-12 text-center">
            <p className="font-medium">
              More {activeLabel.toLowerCase()} pieces are coming soon.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Check back as we continue adding knives to the gallery.
            </p>
          </div>
        ) : (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => {
              const [image] = [...(product.product_images ?? [])].sort(
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
                        src={resolveProductImageUrl(image.image_url)}
                        alt={image.alt_text ?? product.name}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition duration-300 group-hover:scale-105"
                      />
                    </div>
                  ) : (
                    <div className="flex aspect-square items-center justify-center bg-muted/30 text-sm text-muted-foreground">
                      Photo coming soon
                    </div>
                  )}

                  <div className="p-4">
                    <h3 className="font-semibold">{product.name}</h3>

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
      </section>
    </main>
  );
}
