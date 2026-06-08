import { notFound } from "next/navigation";

import { getProductById, } from "@tkb/database";
import { updateInventory, } from "./actions";
import { formatPrice } from "@tkb/ui";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductDetailPage({
  params,
}: PageProps) {
  const { id } =
    await params;

  const product =
    await getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          {product.name}
        </h1>

        <p className="text-muted-foreground">
          {product.slug}
        </p>
      </div>

      <div className="rounded-xl border p-6">
        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <div className="text-sm text-muted-foreground">
              Brand
            </div>

            <div className="font-medium">
              {product.brands?.name}
            </div>
          </div>

          <div>
            <div className="text-sm text-muted-foreground">
              Category
            </div>

            <div className="font-medium">
              {product.categories?.name}
            </div>
          </div>

          <div>
            <div className="text-sm text-muted-foreground">
              Status
            </div>

            <div className="font-medium">
              {product.status}
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-xl border">
        <div className="border-b p-4">
          <h2 className="font-semibold">
            Variants
          </h2>
        </div>

        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="p-4 text-left">
                SKU
              </th>

              <th className="p-4 text-left">
                Title
              </th>

              <th className="p-4 text-right">
                Price
              </th>

              <th className="p-4 text-right">
                Inventory
              </th>
              <th className="p-4 text-center">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {product.product_variants?.map(

              (variant) => {
                const quantity = variant.inventory?.quantity ?? 0;
                return (
                  <tr
                    key={variant.id}
                    className="border-b"
                  >
                    <td className="p-4">
                      {variant.sku}
                    </td>

                    <td className="p-4">
                      {variant.title}
                    </td>

                    <td className="p-4 text-right">
                      {formatPrice( variant.price,)}
                    </td>
                    <td className="p-4">
                      <form
                        action={updateInventory}
                        className="flex items-center justify-end gap-2"
                      >
                        <input
                          type="hidden"
                          name="variantId"
                          value={variant.id}
                        />
                        <input
                          type="hidden"
                          name="productId"
                          value={product.id}
                        />
                        <input
                          type="number"
                          name="quantity"
                          defaultValue={
                            variant.inventory
                              ?.quantity ?? 0
                          }
                          className=" w-20 rounded border px-2 py-1 text-right "
                        />
                        <button
                          type="submit"
                          className=" rounded border px-3 py-1 text-sm "
                        >
                          Save
                        </button>
                      </form>
                    </td>
                    <td className="p-4 text-center">
                      {quantity === 0 ? (
                        <span className="font-medium text-red-500">
                          Out of Stock
                        </span>
                      ) : quantity <= 5 ? (
                        <span className="font-medium text-yellow-500">
                          Low Stock
                        </span>
                      ) : (
                        <span className="font-medium text-green-600">
                          In Stock
                        </span>
                      )}
                    </td>

                  </tr>
                );
              },
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}