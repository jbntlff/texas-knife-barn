export type CartItem = {
  productId: string;
  variantId: string;
  productName: string;
  variantTitle: string;
  sku: string;
  price: number;
  quantity: number;
};

export type Cart = {
  items: CartItem[];
};

export const CART_STORAGE_KEY =
  "tkb-cart";