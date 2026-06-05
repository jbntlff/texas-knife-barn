import Link from "next/link";

export default function CheckoutSuccessPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <div className="rounded-xl border p-8 text-center">
        <h1 className="text-3xl font-bold">
          Order Received
        </h1>

        <p className="mt-4 text-muted-foreground">
          Thank you for your order.
        </p>

        <p className="mt-2 text-muted-foreground">
          We have received your order and will
          begin processing it shortly.
        </p>

        <Link
          href="/"
          className="
            mt-6
            inline-block
            rounded-md
            border
            px-6
            py-3
            hover:bg-muted
          "
        >
          Continue Shopping
        </Link>
      </div>
    </main>
  );
}