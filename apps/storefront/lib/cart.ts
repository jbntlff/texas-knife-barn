export type CartItemAttribute = {
  id: string;
  attribute_name: string;
  attribute_value: string;
};

export type CartItemSelectedOption = {
  optionName: string;
  optionValue: string;
};

export type CartItem = {
  productId: string;
  variantId: string;
  productName: string;
  variantTitle: string;
  sku: string;
  price: number;
  quantity: number;
  attributes?: CartItemAttribute[];
  selectedOptions?: CartItemSelectedOption[];
};

export type Cart = {
  items: CartItem[];
};

export const CART_STORAGE_KEY =
  "tkb-cart";