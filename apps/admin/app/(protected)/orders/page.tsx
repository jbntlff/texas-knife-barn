import Link from "next/link";

import {
  getOrders,
} from "@tkb/database";

export default async function OrdersPage() {
  const orders =
    await getOrders();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Orders
        </h1>

        <p className="text-muted-foreground">
          Manage customer orders.
        </p>
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
            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-b"
              >
                <td className="p-4">
                  <Link
                    href={`/orders/${order.id}`}
                    className="font-medium hover:underline"
                  >
                    {order.order_number}
                  </Link>
                </td>

                <td className="p-4">
                  {order.customer_email}
                </td>

                <td className="p-4">
                  {order.status}
                </td>

                <td className="p-4 text-right">
                  $
                  {Number(
                    order.grand_total,
                  ).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}