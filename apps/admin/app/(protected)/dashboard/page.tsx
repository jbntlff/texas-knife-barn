import Link from "next/link";

import {
  getOrderMetrics,
  getOrders,
  getInventoryMetrics,
  getInventoryAlerts,
} from "@tkb/database";
import { formatPrice } from "@tkb/ui";


function StatCard({
  title,
  value,
  href,
}: {
  title: string;
  value: string | number;
  href?: string;
}) {
  const content = (
    <div
      className={[
        "rounded-xl border p-6",
        href
          ? "cursor-pointer transition-colors hover:bg-muted/50"
          : "",
      ].join(" ")}
    >
      <p className="text-sm text-muted-foreground">
        {title}
      </p>

      <p className="mt-2 text-3xl font-bold">
        {value}
      </p>
    </div>
  );

  if (!href) {
    return content;
  }

  return (
    <Link href={href}>
      {content}
    </Link>
  );
}

export default async function DashboardPage() {

  const metrics = await getOrderMetrics();
  const inventoryMetrics = await getInventoryMetrics();
  const inventoryAlerts = await getInventoryAlerts();
  const orders = await getOrders();
  const recentOrders = orders.slice(0, 10);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="text-muted-foreground">
          Texas Knife Barn Admin
        </p>
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="mb-4 text-xl font-semibold">
            Orders
          </h2>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-6">
            <StatCard
              title="Total Orders"
              value={metrics.totalOrders}
            />

            <StatCard
              title="Pending Orders"
              value={metrics.pendingOrders}
            />

            <StatCard
              title="Revenue"
              value={formatPrice(metrics.revenue)}
            />

            <StatCard
              title="Average Order Value"
              value={formatPrice(metrics.averageOrderValue)}
            />
            <StatCard
              title="Low Stock"
              value={inventoryMetrics.lowStockCount}
            />

            <StatCard
              title="Out Of Stock"
              value={inventoryMetrics.outOfStockCount}
            />
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-xl font-semibold">
            Inventory
          </h2>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            <StatCard
              title="Products"
              value={
                inventoryMetrics.productCount
              }
              href="/products"
            />

            <StatCard
              title="Variants"
              value={
                inventoryMetrics.variantCount
              }
              href="/inventory"
            />

            <StatCard
              title="Inventory Units"
              value={
                inventoryMetrics.totalUnits
              }
              href="/inventory"
            />

            <StatCard
              title="Low Stock"
              value={
                inventoryMetrics.lowStockCount
              }
              href="/inventory"
            />
            <StatCard
              title="Out of Stock"
              value={
                inventoryMetrics.outOfStockCount
              }
              href="/inventory"
            />
          </div>
        </div>
      </div>


      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">
            Recent Orders
          </h2>

          <Link
            href="/orders"
            className="text-sm underline"
          >
            View All
          </Link>
        </div>

        <div className="rounded-xl border">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="p-4 text-left">
                  Order
                </th>

                <th className="p-4 text-left">
                  Customer
                </th>

                <th className="p-4 text-left">
                  Status
                </th>

                <th className="p-4 text-right">
                  Total
                </th>
              </tr>
            </thead>

            <tbody>
              {recentOrders.map(
                (order) => (
                  <tr
                    key={order.id}
                    className="border-b transition-colors hover:bg-muted/50"
                  >

                    <td className="p-4">
                      <Link
                        href={`/orders/${order.id}`}
                        className="block font-medium hover:underline"
                      >
                        {order.order_number}
                      </Link>
                    </td>

                    <td className="p-4">
                      {
                        order.customer_email
                      }
                    </td>

                    <td className="p-4">
                      {
                        order.status
                      }
                    </td>

                    <td className="p-4 text-right">
                      {formatPrice(order.grand_total)}
                    </td>
                  </tr>
                ),
              )}

            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Inventory Alerts
        </h2>

        <div className="rounded-xl border">
          {inventoryAlerts.length === 0 ? (
            <div className="p-4 text-sm text-muted-foreground">
              No inventory alerts.
            </div>
          ) : (
            <div className="divide-y">
              {inventoryAlerts.map(
                (variant) => {
                  const quantity =
                    variant.inventory
                      ?.quantity ?? 0;
                  const threshold = variant.inventory ?.low_stock_threshold ?? 2;
                  const outOfStock = quantity === 0;

                  return (
                    <Link
                      key={variant.id}
                      href={`/products/${variant.products?.id}`}
                      className="flex items-center justify-between p-4 hover:bg-muted"
                    >
                      <div>
                        <div className="font-medium">
                          { variant.products ?.name }
                        </div>

                        <div className="text-sm text-muted-foreground">
                          { variant.title }
                        </div>
                      </div>
                      <div className="text-right">
                        <div
                          className={
                            outOfStock
                              ? "font-medium text-red-500"
                              : "font-medium text-yellow-500"
                          }
                        >
                          {outOfStock
                            ? "Out of Stock"
                            : "Low Stock"}
                        </div>

                        <div className="text-sm text-muted-foreground">
                          Qty: {
                            quantity
                          }
                          {" / "}
                          Threshold: {
                            threshold
                          }
                        </div>
                      </div>
                    </Link>
                  );
                },
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}