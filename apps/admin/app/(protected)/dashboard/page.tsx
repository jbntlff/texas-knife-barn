import Link from "next/link";

import {
  getInventoryMetrics,
  getOrderMetrics,
  getOrders,
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
  const orders = await getOrders();
  const inventoryMetrics = await getInventoryMetrics();
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

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
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
                        { order.order_number }
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
    </div>
  );
}