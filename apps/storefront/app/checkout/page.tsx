import { CheckoutForm }
  from "@/components/checkout/checkout-form";

export default function CheckoutPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="mb-8 text-4xl font-bold">
        Checkout
      </h1>

      <CheckoutForm />
    </main>
  );
}