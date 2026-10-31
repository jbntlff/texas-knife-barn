"use client";

import { useTransition } from "react";

import { Button } from "@tkb/ui";

import { deleteCustomer } from "../actions";

type Props = {
  customerId: string;
};

export function DeleteCustomerButton({
  customerId,
}: Props) {
  const [pending, start] = useTransition();

  return (
    <form
      action={(formData) => {
        if (
          !window.confirm(
            "Delete this customer's account? This permanently removes their login and cannot be undone.",
          )
        ) {
          return;
        }

        start(async () => {
          await deleteCustomer(formData);
        });
      }}
    >
      <input
        type="hidden"
        name="customerId"
        value={customerId}
      />

      <Button
        type="submit"
        variant="danger"
        disabled={pending}
      >
        {pending
          ? "Deleting..."
          : "Delete Account"}
      </Button>
    </form>
  );
}
