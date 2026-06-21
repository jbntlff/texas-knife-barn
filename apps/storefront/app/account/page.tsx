import Link from "next/link";
import { getOrdersByCustomerId } from "@tkb/database";
import { getCustomerProfile } from "@/lib/get-customer-profile";
import { LogoutButton } from "@/components/auth/logout-button";

function formatPrice(
  value: number | string | null,
) {
  return new Intl.NumberFormat(
    "en-US",
    {
      style: "currency",
      currency: "USD",
    },
  ).format(Number(value ?? 0));
}

function formatDate(
  value: string,
) {
  return new Date(value).toLocaleDateString(
    "en-US",
    {
      month: "short",
      day: "numeric",
      year: "numeric",
    },
  );
}

export default async function AccountPage() {
  const profile =
    await getCustomerProfile();

  const orders =
    await getOrdersByCustomerId(
      profile.id,
    );

  const fullName =
    [profile.first_name, profile.last_name]
      .filter(Boolean)
      .join(" ");

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <div className="rounded-2xl border bg-background p-8 shadow-sm">

        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-wide text-muted-foreground">
              My Account
            </p>

            <h1 className="mt-2 text-3xl font-bold tracking-tight">
              {fullName || "Customer Account"}
            </h1>

            <p className="mt-2 text-muted-foreground">
              {profile.email}
            </p>
          </div>

          <LogoutButton />
        </div>

        <div className="grid gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">
          <div className="rounded-xl border p-6">
            <h2 className="text-lg font-semibold">
              Profile
            </h2>

            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">
                  First name
                </dt>
                <dd>{profile.first_name ?? "—"}</dd>
              </div>

              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">
                  Last name
                </dt>
                <dd>{profile.last_name ?? "—"}</dd>
              </div>

              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">
                  Email
                </dt>
                <dd>{profile.email}</dd>
              </div>

              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">
                  Marketing emails
                </dt>
                <dd>
                  {profile.marketing_opt_in
                    ? "Subscribed"
                    : "Not subscribed"}
                </dd>
              </div>
            </dl>
          </div>

          <div className="rounded-xl border p-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold">
                Orders
              </h2>

              <span className="text-sm text-muted-foreground">
                {orders.length} total
              </span>
            </div>

            {orders.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                You have not placed any orders yet.
              </p>
            ) : (
              <div className="space-y-4">
                {orders.map((order) => (
                  <div
                    key={order.id}
                    className="rounded-xl border p-4"
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="font-medium">
                          {order.order_number}
                        </p>

                        <p className="text-sm text-muted-foreground">
                          Placed {formatDate(order.created_at)}
                        </p>

                        <p className="mt-1 text-sm text-muted-foreground">
                          Status: {order.status}
                        </p>
                      </div>

                      <div className="text-left sm:text-right">
                        <p className="font-medium">
                          {formatPrice(order.grand_total)}
                        </p>

                        <Link
                          href={`/orders/${order.id}`}
                          className="mt-2 inline-block text-sm underline"
                        >
                          View order
                        </Link>
                      </div>
                    </div>

                    <div className="mt-4 border-t pt-4">
                      <p className="mb-2 text-sm font-medium">
                        Items
                      </p>

                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {order.order_items.map((item) => (
                          <li
                            key={item.id}
                            className="flex justify-between gap-4"
                          >
                            <span>
                              {item.product_name}{" "}
                              <span className="text-xs">
                                ({item.variant_title})
                              </span>{" "}
                              × {item.quantity}
                            </span>

                            <span>
                              {formatPrice(
                                item.unit_price *
                                item.quantity,
                              )}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}