"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { useCart } from "@/components/cart/cart-provider";

type CheckoutFormProps = {
  initialEmail?: string;
};

function formatPrice(
  value: number,
) {
  return new Intl.NumberFormat(
    "en-US",
    {
      style: "currency",
      currency: "USD",
    },
  ).format(value);
}

export function CheckoutForm({
  initialEmail = "",
}: CheckoutFormProps) {
  const router = useRouter();

  const { cart, clearCart } =
    useCart();

  const [email, setEmail] =
    useState(initialEmail);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState<string | null>(null);

  const subtotal =
    cart.items.reduce(
      (sum, item) =>
        sum +
        item.price *
          item.quantity,
      0,
    );

  const taxTotal = 0;
  const shippingTotal = 0;
  const grandTotal =
    subtotal +
    taxTotal +
    shippingTotal;

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    const trimmedEmail =
      email.trim();

    if (!trimmedEmail) {
      setError(
        "Email address is required.",
      );
      return;
    }

    if (cart.items.length === 0) {
      setError(
        "Your cart is empty.",
      );
      return;
    }

    setError(null);
    setLoading(true);

    try {
      const response = await fetch(
        "/api/orders",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            email: trimmedEmail,
            items: cart.items.map(
              (item) => ({
                productId:
                  item.productId,
                variantId:
                  item.variantId,
                sku: item.sku,
                productName:
                  item.productName,
                variantTitle:
                  item.variantTitle,
                quantity:
                  item.quantity,
                unitPrice:
                  item.price,
              }),
            ),
          }),
        },
      );

      const result =
        await response.json();

      if (!response.ok) {
        setError(
          result?.error ??
            "Unable to create your order. Please try again.",
        );
        setLoading(false);
        return;
      }

      clearCart();

      router.push(
        `/orders/${result.orderId}`,
      );
    } catch (error) {
      console.error(error);

      setError(
        "Something went wrong while placing your order. Please try again.",
      );
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {error && (
        <div className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium"
        >
          Email Address
        </label>

        <input
          id="email"
          type="email"
          value={email}
          onChange={(event) => {
            setEmail(
              event.target.value,
            );

            if (error) {
              setError(null);
            }
          }}
          className="w-full rounded-md border px-3 py-2"
          required
        />
      </div>

      <div className="rounded-2xl border bg-background p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">
            Order Summary
          </h2>

          <span className="text-sm text-muted-foreground">
            {cart.items.length} item
            {cart.items.length === 1
              ? ""
              : "s"}
          </span>
        </div>

        {cart.items.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            Your cart is empty.
          </p>
        ) : (
          <>
            <div className="space-y-4">
              {cart.items.map((item) => (
                <div
                  key={item.variantId}
                  className="flex items-start justify-between gap-4 border-b pb-4 last:border-b-0 last:pb-0"
                >
                  <div className="min-w-0">
                    <p className="font-medium">
                      {item.productName}
                    </p>

                    <p className="text-sm text-muted-foreground">
                      {item.variantTitle}
                    </p>

                    <p className="mt-1 text-sm text-muted-foreground">
                      Qty: {item.quantity}
                    </p>
                  </div>

                  <div className="text-right font-medium">
                    {formatPrice(
                      item.price *
                        item.quantity,
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-3 border-t pt-6 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">
                  Subtotal
                </span>
                <span>
                  {formatPrice(
                    subtotal,
                  )}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-muted-foreground">
                  Tax
                </span>
                <span>
                  {formatPrice(
                    taxTotal,
                  )}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-muted-foreground">
                  Shipping
                </span>
                <span>
                  {formatPrice(
                    shippingTotal,
                  )}
                </span>
              </div>

              <div className="flex justify-between border-t pt-3 text-base font-semibold">
                <span>Total</span>
                <span>
                  {formatPrice(
                    grandTotal,
                  )}
                </span>
              </div>
            </div>
          </>
        )}
      </div>

      <button
        type="submit"
        disabled={
          loading ||
          cart.items.length === 0
        }
        className="rounded-md bg-foreground px-6 py-3 text-background disabled:opacity-50"
      >
        {loading
          ? "Placing Order..."
          : "Place Order"}
      </button>
    </form>
  );
}