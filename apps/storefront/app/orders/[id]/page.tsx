import { notFound } from "next/navigation";

import { getOrder, } from "@tkb/database";

import { formatPrice, } from "@tkb/ui";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function OrderPage({
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
    <main className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-4xl font-bold">
        Order Confirmation
      </h1>

      <p className="mt-2 text-muted-foreground">
        Order Number:{" "}
        {order.order_number}
      </p>

      <div className="mt-8 rounded-xl border p-6">
        <h2 className="mb-4 text-xl font-semibold">
          Items
        </h2>

        <div className="space-y-4">
          {order.order_items.map(
            (item) => (
              <div
                key={item.id}
                className="flex justify-between"
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
                  {formatPrice(
                    item.unit_price *
                      item.quantity,
                  )}
                </div>
              </div>
            ),
          )}
        </div>

        <div className="mt-6 border-t pt-6">
          <div className="flex justify-between text-lg font-semibold">
            <span>Total</span>

            <span>
              {formatPrice(
                order.grand_total,
              )}
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}