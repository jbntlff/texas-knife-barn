import Link from "next/link";

import {
  getInventoryAlerts,
  getInventoryMetrics,
} from "@tkb/database";

export default async function InventoryPage() {

  const alerts = await getInventoryAlerts();
  const metrics = await getInventoryMetrics();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Inventory Alerts
        </h1>

        <p className="text-muted-foreground">
          Low stock and out of stock
          variants.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-5">
        <div className="rounded-xl border p-4">
          <div className="text-sm text-muted-foreground">
            Products
          </div>

          <div className="text-2xl font-bold">
            {metrics.productCount}
          </div>
        </div>

        <div className="rounded-xl border p-4">
          <div className="text-sm text-muted-foreground">
            Variants
          </div>

          <div className="text-2xl font-bold">
            {metrics.variantCount}
          </div>
        </div>

        <div className="rounded-xl border p-4">
          <div className="text-sm text-muted-foreground">
            Units
          </div>

          <div className="text-2xl font-bold">
            {metrics.totalUnits}
          </div>
        </div>

        <div className="rounded-xl border p-4">
          <div className="text-sm text-muted-foreground">
            Low Stock
          </div>

          <div className="text-2xl font-bold text-yellow-600">
            {metrics.lowStockCount}
          </div>
        </div>

        <div className="rounded-xl border p-4">
          <div className="text-sm text-muted-foreground">
            Out Of Stock
          </div>

          <div className="text-2xl font-bold text-red-600">
            {metrics.outOfStockCount}
          </div>
        </div>
      </div>

      {alerts.length === 0 ? (
        <div className="rounded-xl border p-8 text-center">
          <p className="text-muted-foreground">
            No inventory alerts.
          </p>
        </div>
      ) : (
        <div className="rounded-xl border">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="p-4 text-left">
                  Product
                </th>
                <th className="p-4 text-left">
                  SKU
                </th>
                <th className="p-4 text-left">
                  Variant
                </th>
                <th className="p-4 text-right">
                  Quantity
                </th>
                <th className="p-4 text-center">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {alerts.map(
                (variant) => {
                  const quantity =
                    variant.inventory
                      ?.quantity ?? 0;

                  return (
                    <tr
                      key={variant.id}
                      className="border-b"
                    >
                      <td className="p-4">
                        <Link
                          href={`/products/${variant.product_id}`}
                          className="font-medium hover:underline"
                        >
                          {variant.products?.name}
                        </Link>
                      </td>
                      <td className="p-4">
                        {variant.sku}
                      </td>
                      <td className="p-4">
                        {variant.title}
                      </td>
                      <td className="p-4 text-right">
                        {quantity}
                      </td>
                      <td className="p-4 text-center">
                        {quantity === 0 ? (
                          <span className="font-medium text-red-500">
                            Out of Stock
                          </span>
                        ) : (
                          <span className="font-medium text-yellow-500">
                            Low Stock
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
      )}

    </div>
  );
}