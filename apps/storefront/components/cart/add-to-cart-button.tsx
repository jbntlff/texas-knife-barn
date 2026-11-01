"use client";

import { useState } from "react";

import { useCart } from "./cart-provider";
import type {
  CartItemAttribute,
  CartItemSelectedOption,
} from "@/lib/cart";

type AddToCartButtonProps = {
  productId: string;
  variantId: string;
  productName: string;
  variantTitle: string;
  sku: string;
  price: number;
  attributes?: CartItemAttribute[];
  selectedOptions?: CartItemSelectedOption[];
};

export function AddToCartButton({
  productId,
  variantId,
  productName,
  variantTitle,
  sku,
  price,
  attributes,
  selectedOptions,
}: AddToCartButtonProps) {
  const { addItem } = useCart();

  const [added, setAdded] =
    useState(false);

  function handleClick() {
    addItem({
      productId,
      variantId,
      productName,
      variantTitle,
      sku,
      price,
      attributes,
      selectedOptions,
    });

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1500);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className=" w-full rounded-md bg-foreground px-6 py-3 text-background transition hover:opacity-90 "
    >
      {added
        ? "Added to Cart ✓"
        : "Add to Cart"}
    </button>
  );
}