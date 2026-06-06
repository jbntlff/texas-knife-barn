"use client";

import {
  useState,
} from "react";

import {
  useRouter,
} from "next/navigation";

import {
  useCart,
} from "@/components/cart/cart-provider";

export function CheckoutForm() {
  const router =
    useRouter();

  const {
    cart,
    clearCart,
  } = useCart();

  const [email, setEmail] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  async function handleSubmit(
    event: React.FormEvent<
      HTMLFormElement
    >,
  ) {
    event.preventDefault();

    setLoading(true);

    const response =
      await fetch(
        "/api/orders",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            email,

            items:
              cart.items.map(
                (item) => ({
                  productId:
                    item.productId,

                  variantId:
                    item.variantId,

                  sku:
                    item.sku,

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

    if (!response.ok) {
      setLoading(false);

      alert(
        "Unable to create order.",
      );

      return;
    }

    const result = await response.json();
    clearCart();

    router.push( `/orders/${result.orderId}`,);
  }

  return (
    <form
      onSubmit={
        handleSubmit
      }
      className="space-y-6"
    >
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
          onChange={(event) =>
            setEmail(
              event.target.value,
            )
          }
          className="w-full rounded-md border px-3 py-2"
          required
        />
      </div>

      <button
        type="submit"
        disabled={
          loading ||
          cart.items.length === 0
        }
        className="
          rounded-md
          bg-foreground
          px-6
          py-3
          text-background
          disabled:opacity-50
        "
      >
        {loading
          ? "Placing Order..."
          : "Place Order"}
      </button>
    </form>
  );
}