import { CartPageContent }
  from "@/components/cart/cart-page-content";

export default function CartPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="mb-8 text-4xl font-bold">
        Shopping Cart
      </h1>

      <CartPageContent />
    </main>
  );
}