import Link from "next/link";
import { getProducts } from "@tkb/database";

export default async function HomePage() {
  const products = await getProducts();

  return (
    <main className="mx-auto max-w-7xl px-6 py-12">

      <section className="mb-16 rounded-2xl border bg-muted/30 px-8 py-16">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold tracking-tight">
            Premium Knives for Every Adventure
          </h1>

          <p className="mt-6 text-lg text-muted-foreground">
            Discover everyday carry, hunting, outdoor, and collector knives
            from trusted brands like Benchmade, Spyderco, and more.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#products"
              className="rounded-md bg-foreground px-6 py-3 text-background transition hover:opacity-90"
            >
              Shop Knives
            </a>

            <a
              href="/"
              className="rounded-md border px-6 py-3 transition hover:bg-muted"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold">
          Featured Products
        </h2>

        <p className="mt-2 text-muted-foreground">
          Hand-selected knives trusted by enthusiasts, outdoorsmen, and everyday carriers.
        </p>
      </section>



      <div id="products" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" >
        {products?.map((product) => {
          const image = product.product_images?.[0];
          const variant = product.product_variants?.[0];

          return (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="group overflow-hidden rounded-xl border bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

              <div className="relative aspect-square overflow-hidden bg-muted">
                {image ? (
                  <img
                    src={image.image_url}
                    alt={image.alt_text ?? product.name}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
                    No Image
                  </div>
                )}
              </div>

              <div className="flex flex-col p-4">
                <h2 className="font-semibold">
                  {product.name}
                </h2>
                {product.short_description && (
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                    {product.short_description}
                  </p>
                )}
                <div className="mt-3 flex gap-2">
                  <span className="rounded-full border px-2 py-1 text-xs">
                    {product.brands?.name}
                  </span>

                  <span className="rounded-full border px-2 py-1 text-xs">
                    {product.categories?.name}
                  </span>
                </div>

                {variant && (
                  <div className="mt-auto pt-4">
                    <p className="text-lg font-bold">
                      ${Number(variant.price).toFixed(2)}
                    </p>

                    {variant.compare_at_price && (
                      <p className="text-sm text-muted-foreground line-through">
                        ${Number(variant.compare_at_price).toFixed(2)}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </main >
  );
}