"use client";

import { useActionState } from "react";

import {
  deleteVariant,
  type DeleteVariantState,
} from "./actions";

type DeleteVariantButtonProps = {
  variantId: string;
  productId: string;
  disabled?: boolean;
};

const initialState: DeleteVariantState = {
  error: null,
};

export function DeleteVariantButton({
  variantId,
  productId,
  disabled,
}: DeleteVariantButtonProps) {
  const [state, formAction, pending] =
    useActionState(
      deleteVariant,
      initialState,
    );

  return (
    <form action={formAction}>
      <input
        type="hidden"
        name="variantId"
        value={variantId}
      />
      <input
        type="hidden"
        name="productId"
        value={productId}
      />
      <button
        type="submit"
        className="rounded border px-2 py-1 text-xs text-red-600 hover:bg-muted disabled:opacity-50"
        disabled={disabled || pending}
      >
        {pending ? "Deleting..." : "Delete"}
      </button>

      {state.error && (
        <p className="mt-1 max-w-32 text-xs text-red-600">
          {state.error}
        </p>
      )}
    </form>
  );
}
