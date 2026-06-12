import Link from "next/link";
import { ChevronRight } from "lucide-react"

import { getProducts, } from "@tkb/database";

export default async function ProductsPage() {
  const products =
    await getProducts();

  return (
    <div className="space-y-6">

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            Products
          </h1>

          <p className="text-muted-foreground">
            Manage catalog inventory.
          </p>
        </div>

        <Link
          href="/products/new"
          className=" rounded-lg border px-4 py-2 text-sm font-medium hover:bg-muted "
        >
          New Product
        </Link>
      </div>

      <div className="rounded-xl border">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="p-4 text-left">
                Product
              </th>

              <th className="p-4 text-left">
                Brand
              </th>

              <th className="p-4 text-left">
                Category
              </th>

              <th className="p-4 text-left">
                Status
              </th>
              <th className="p-4 text-right">
                Inventory
              </th>
              <th className="p-4 text-right">
                Variants
              </th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => {

              const inventory =
                product.product_variants?.reduce(
                  (total, variant) =>
                    total +
                    (variant.inventory?.quantity ?? 0),
                  0,
                ) ?? 0;

              return (
                <tr
                  key={product.id}
                  className="border-b"
                >
                  <td className="p-4">
                    <Link href={`/products/${product.id}`}
                      className="hover:underline'"
                    >

                      <div className="font-medium">
                        {product.name}
                      </div>

                      <div className="text-sm text-muted-foreground">
                        {product.slug}
                      </div>
                    </Link>
                  </td>

                  <td className="p-4">
                    {product.brands?.name}
                  </td>

                  <td className="p-4">
                    {product.categories?.name}
                  </td>

                  <td className="p-4">
                    {product.status}
                  </td>
                  <td className="p-4 text-right">
                    {inventory}
                  </td>

                  <td className="p-4 text-right">
                    {
                      product
                        .product_variants
                        ?.length
                    }
                  </td>
                </tr>
              )
            })
            }

          </tbody>
        </table>
      </div>
    </div>
  );
}