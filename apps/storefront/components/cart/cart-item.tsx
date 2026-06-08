"use client";

import { useCart } from "./cart-provider";
import { formatPrice } from "@tkb/ui"

import type { CartItem as CartItemType }
  from "@/lib/cart";

type CartItemProps = {
  item: CartItemType;
};

export function CartItem({
  item,
}: CartItemProps) {
  const {
    updateQuantity,
    removeItem,
  } = useCart();

  return (
    <div className="rounded-xl border p-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="font-semibold">
            {item.productName}
          </h2>

          <p className="text-sm text-muted-foreground">
            {item.variantTitle}
          </p>

          <p className="text-sm text-muted-foreground">
            SKU: {item.sku}
          </p>
        </div>

        <button
          type="button"
          onClick={() =>
            removeItem(item.variantId)
          }
          className="text-sm text-muted-foreground hover:text-foreground"
        >
          Remove
        </button>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() =>
              updateQuantity(
                item.variantId,
                item.quantity - 1
              )
            }
            className="rounded border px-3 py-1"
          >
            −
          </button>

          <span className="min-w-8 text-center">
            {item.quantity}
          </span>

          <button
            type="button"
            onClick={() =>
              updateQuantity(
                item.variantId,
                item.quantity + 1
              )
            }
            className="rounded border px-3 py-1"
          >
            +
          </button>
        </div>

        <div className="font-medium">
          {formatPrice(
            item.price *
            item.quantity
          )}
        </div>
      </div>
    </div>
  );
}