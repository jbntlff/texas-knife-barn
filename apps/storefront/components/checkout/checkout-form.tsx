"use client";

import { useState } from "react";

export function CheckoutForm() {
  const [email, setEmail] =
    useState("");

  return (
    <form className="space-y-6">
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium"
        >
          Email Address
        </label>

        <input
          id="email"
          type="email"
          value={email}
          onChange={(event) =>
            setEmail(
              event.target.value
            )
          }
          className="w-full rounded-md border px-3 py-2"
          required
        />
      </div>

      <button
        type="submit"
        className="
          rounded-md
          bg-foreground
          px-6
          py-3
          text-background
        "
      >
        Place Order
      </button>
    </form>
  );
}