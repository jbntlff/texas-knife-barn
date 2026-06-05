"use client";

import Link from "next/link";

import { useCart } from "./cart-provider";

export function CartLink() {
  const { itemCount } = useCart();

  return (
    <Link
      href="/cart"
      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
    >
      Cart

      {itemCount > 0 && (
        <span className="rounded-full border px-2 py-0.5 text-xs">
          {itemCount} items
        </span>
      )}
    </Link>
  );
}