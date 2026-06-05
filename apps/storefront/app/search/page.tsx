import type { Metadata } from "next";

import { ProductCard } from "@/components/product-card";

import { getSearchProducts } from "@tkb/database";

export const metadata: Metadata = {
  title: "Search | Texas Knife Barn",
};

type SearchPageProps = {
  searchParams: Promise<{
    q?: string;
  }>;
};

export default async function SearchPage({
  searchParams,
}: SearchPageProps) {
  const { q = "" } = await searchParams;

  const products = await getSearchProducts(q);

  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Search 
        </h1>

        {q ? (
          <p className="mt-2 text-muted-foreground">
            {products.length} result
            {products.length === 1 ? "" : "s"}
            {" "} for "{q}"
          </p>
        ) : (
          <p className="mt-2 text-muted-foreground">
            Enter a search term to find products.
          </p>
        )}
      </div>

      {products.length === 0 ? (
        <div className="rounded-xl border p-8 text-center">
          <div className="space-y-3">
            <p className="font-medium">
              {q
                ? <>No products found for "{q}".</>
                : <>Use the search box above to find knives by brand, model, or SKU.</>
              }
            </p>

            {q && (
              <ul className="list-disc pl-5 text-sm text-muted-foreground text-left inline-block">
                <li>Check your spelling</li>
                <li>Search by brand name</li>
                <li>Search by model number or SKU</li>
              </ul>
            )}
          </div>
        </div>

      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      )}
    </main>
  );
}