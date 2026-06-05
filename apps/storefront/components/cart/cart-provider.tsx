"use client";

import {
  createContext,
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
}: {
  children: React.ReactNode;
}) {
  const [cart, setCart] =
    useState<Cart>({
      items: [],
    });

  useEffect(() => {
    const stored =
      localStorage.getItem(
        CART_STORAGE_KEY
      );

    if (!stored) {
      return;
    }

    try {
      setCart(JSON.parse(stored));
    } catch {
      console.error(
        "Failed to parse cart"
      );
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      CART_STORAGE_KEY,
      JSON.stringify(cart)
    );
  }, [cart]);

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