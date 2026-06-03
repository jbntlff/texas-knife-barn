
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/product-card";

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
        {products.map((product) => (
          <ProductCard 
            key={product.id}
            product={product}
            />
        ))}

      </div>
    </main>
  );
}