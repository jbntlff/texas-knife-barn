import Link from "next/link";

import {
  getOrderMetrics,
  getOrders,
} from "@tkb/database";

function StatCard({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) {
  return (
    <div className="rounded-xl border p-6">
      <p className="text-sm text-muted-foreground">
        {title}
      </p>

      <p className="mt-2 text-3xl font-bold">
        {value}
      </p>
    </div>
  );
}

export default async function DashboardPage() {
  const metrics =
    await getOrderMetrics();

  const orders =
    await getOrders();

  const recentOrders =
    orders.slice(0, 10);

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
          value={`$${metrics.revenue.toFixed(
            2,
          )}`}
        />

        <StatCard
          title="Average Order Value"
          value={`$${metrics.averageOrderValue.toFixed(
            2,
          )}`}
        />
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
                    className="border-b"
                  >
                    <td className="p-4">
                      <Link
                        href={`/orders/${order.id}`}
                        className="font-medium hover:underline"
                      >
                        {
                          order.order_number
                        }
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
                      $
                      {Number(
                        order.grand_total,
                      ).toFixed(2)}
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