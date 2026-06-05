"use client";

import Link from "next/link";
import { CartItem } from "./cart-item";
import { useCart } from "./cart-provider";
import { formatPrice } from "@/lib/format-price"

const continueShoppingHref = "/";

export function CartPageContent() {
  const {
    cart,
    clearCart,
  } = useCart();

  const subtotal =
    cart.items.reduce(
      (sum, item) =>
        sum +
        item.price *
        item.quantity,
      0
    );

  if (
    cart.items.length === 0
  ) {
    return (
      <div className="rounded-xl border p-8 text-center">
        <p className="font-medium">
          Your cart is empty.
        </p>

        <p className="mt-2 text-sm text-muted-foreground">
          Add some knives to get started.
        </p>
        <Link
          href={continueShoppingHref}
          className=" mt-4 inline-block rounded-md border px-4 py-2 hover:bg-muted "
        >
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
      <div className="space-y-4">
        {cart.items.map((item) => (
          <CartItem
            key={item.variantId}
            item={item}
          />
        ))}
      </div>

      <aside className="rounded-xl border p-6 h-fit">
        <h2 className="text-lg font-semibold">
          Order Summary
        </h2>

        <div className="mt-4 flex justify-between">
          <span>Subtotal</span>

          <span className="font-medium">
            {formatPrice(subtotal)}
          </span>
        </div>

        <Link
          href="/checkout"
          className=" mt-6 block w-full rounded-md bg-foreground px-4 py-3 text-center text-background "
        >
          Checkout
        </Link>

        <Link
          href={continueShoppingHref}
          className=" mt-3 block w-full rounded-md border px-4 py-3 text-center hover:bg-muted "
        >
          Continue Shopping
        </Link>

        <button
          type="button"
          onClick={clearCart}
          className=" mt-3 w-full rounded-md border px-4 py-3 "
        >
          Clear Cart
        </button>
      </aside>
    </div>
  );
}