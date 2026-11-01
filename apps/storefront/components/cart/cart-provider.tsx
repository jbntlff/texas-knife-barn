"use client";

import {
  createContext,
  startTransition,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  Cart,
  CartItem,
  CART_STORAGE_KEY,
} from "@/lib/cart";

type CartContextValue = {
  cart: Cart;

  addItem: (
    item: Omit<CartItem, "quantity">
  ) => void;

  removeItem: (
    variantId: string
  ) => void;

  updateQuantity: (
    variantId: string,
    quantity: number
  ) => void;

  clearCart: () => void;

  itemCount: number;
};

const CartContext =
  createContext<CartContextValue | null>(
    null
  );

export function CartProvider({
  children,
  userId = null,
}: {
  children: React.ReactNode;
  userId?: string | null;
}) {
  const [cart, setCart] =
    useState<Cart>({
      items: [],
    });

  const storageKey =
    userId
      ? `${CART_STORAGE_KEY}:${userId}`
      : `${CART_STORAGE_KEY}:guest`;

  // Each account (and signed-out "guest") gets its own cart, keyed by
  // userId, so a different customer's leftover cart doesn't bleed into
  // whoever is currently signed in on this browser.
  useEffect(() => {
    const stored =
      localStorage.getItem(
        storageKey
      );

    if (!stored) {
      startTransition(() => {
        setCart({ items: [] });
      });
      return;
    }

    try {
      const parsed = JSON.parse(stored);

      startTransition(() => {
        setCart(parsed);
      });
    } catch {
      console.error(
        "Failed to parse cart"
      );
    }
  }, [storageKey]);

  useEffect(() => {
    localStorage.setItem(
      storageKey,
      JSON.stringify(cart)
    );
  }, [storageKey, cart]);

  function addItem(
    item: Omit<CartItem, "quantity">
  ) {
    setCart((current) => {
      const existing =
        current.items.find(
          (cartItem) =>
            cartItem.variantId ===
            item.variantId
        );

      if (existing) {
        return {
          items:
            current.items.map(
              (cartItem) =>
                cartItem.variantId ===
                item.variantId
                  ? {
                      ...cartItem,
                      quantity:
                        cartItem.quantity +
                        1,
                    }
                  : cartItem
            ),
        };
      }

      return {
        items: [
          ...current.items,
          {
            ...item,
            quantity: 1,
          },
        ],
      };
    });
  }

  function removeItem(
    variantId: string
  ) {
    setCart((current) => ({
      items:
        current.items.filter(
          (item) =>
            item.variantId !==
            variantId
        ),
    }));
  }

  function updateQuantity(
    variantId: string,
    quantity: number
  ) {
    if (quantity <= 0) {
      removeItem(variantId);
      return;
    }

    setCart((current) => ({
      items:
        current.items.map((item) =>
          item.variantId === variantId
            ? {
                ...item,
                quantity,
              }
            : item
        ),
    }));
  }

  function clearCart() {
    setCart({
      items: [],
    });
  }

  const itemCount =
    cart.items.reduce(
      (sum, item) =>
        sum + item.quantity,
      0
    );

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        itemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context =
    useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider"
    );
  }

  return context;
}