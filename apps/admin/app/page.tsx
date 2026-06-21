import Image from "next/image";

import { LoginForm }
  from "@/components/auth/login-form";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6">
        <div className="grid w-full gap-12 lg:grid-cols-2">

          <div className="flex flex-col justify-center">

            <div className="mb-6">
              <img
                src="/images/tkb-logo.png"
                alt="Texas Knife Barn"
                width={250}
                height={250}
              />
            </div>

            <h1 className="mt-6 text-5xl font-bold">
              Texas Knife Barn
            </h1>

            <p className="mt-4 text-xl text-muted-foreground">
              Administration Portal
            </p>

            <p className="mt-6 max-w-lg text-muted-foreground">
              Manage products, orders,
              inventory, and customer
              fulfillment from a single
              dashboard.
            </p>

            <ul className="mt-8 space-y-3">
              <li>
                ✓ Orders
              </li>

              <li>
                ✓ Products
              </li>

              <li>
                ✓ Inventory
              </li>

              <li>
                ✓ Shipping
              </li>
            </ul>
          </div>

          <div className="flex items-center justify-center">
            <LoginForm />
          </div>

        </div>
      </div>
    </main>
  );
}