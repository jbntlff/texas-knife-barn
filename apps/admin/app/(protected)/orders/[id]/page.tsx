import { notFound } from "next/navigation";
import { StatusForm, } from "./status-form";
import { getOrder, } from "@tkb/database";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function OrderDetailPage({
  params,
}: PageProps) {
  const { id } =
    await params;

  const order =
    await getOrder(id);

  if (!order) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          {order.order_number}
        </h1>

        <p className="text-muted-foreground">
          {order.customer_email}
        </p>

        <p className="text-sm text-muted-foreground">
          Created{" "}
          {new Date(
            order.created_at,
          ).toLocaleString()}
        </p>
      </div>

      <div className="rounded-xl border p-6">
        <h2 className="mb-4 text-xl font-semibold">
          Order Summary
        </h2>

        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Status</span>

            <StatusForm
              orderId={order.id}
              currentStatus={ order.status }
            />
          </div>

          <div className="flex justify-between">
            <span>Subtotal</span>

            <span>
              $
              {Number(
                order.subtotal,
              ).toFixed(2)}
            </span>
          </div>

          <div className="flex justify-between">
            <span>Tax</span>

            <span>
              $
              {Number(
                order.tax_total,
              ).toFixed(2)}
            </span>
          </div>

          <div className="flex justify-between">
            <span>Shipping</span>

            <span>
              $
              {Number(
                order.shipping_total,
              ).toFixed(2)}
            </span>
          </div>

          <div className="flex justify-between border-t pt-2 font-semibold">
            <span>Total</span>

            <span>
              $
              {Number(
                order.grand_total,
              ).toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      <div className="rounded-xl border p-6">
        <h2 className="mb-4 text-xl font-semibold">
          Items
        </h2>

        <div className="space-y-4">
          {order.order_items.map(
            (item) => (
              <div
                key={item.id}
                className="flex justify-between border-b pb-4"
              >
                <div>
                  <div className="font-medium">
                    {
                      item.product_name
                    }
                  </div>

                  <div className="text-sm text-muted-foreground">
                    {
                      item.variant_title
                    }
                  </div>

                  <div className="text-sm text-muted-foreground">
                    Qty:{" "}
                    {
                      item.quantity
                    }
                  </div>
                </div>

                <div>
                  $
                  {(
                    Number(
                      item.unit_price,
                    ) *
                    item.quantity
                  ).toFixed(2)}
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  )
}