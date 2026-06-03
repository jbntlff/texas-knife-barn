import { ProductCard } from "@/components/product-card";
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
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main >
  );
}