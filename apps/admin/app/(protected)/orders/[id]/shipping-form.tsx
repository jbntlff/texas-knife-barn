"use client";

import { useTransition, } from "react";
import { updateShipmentAction, } from "../actions";

type Props = {
  orderId: string;
  carrier?: string | null;
  trackingNumber?: string | null;
};


export function ShippingForm({
  orderId,
  carrier,
  trackingNumber,
}: Props) {
  const [pending, start] =
    useTransition();

  return (
    <form
      className="space-y-4"
      action={(formData) =>
        start(async () => {
          await updateShipmentAction(
            formData,
          );
        })
      }
      key={`${carrier}-${trackingNumber}`}
    >
      <input
        type="hidden"
        name="orderId"
        value={orderId} />
      <div>
        <label className="mb-1 block text-sm font-medium"> Carrier </label>

        <select
          name="carrier"
          defaultValue={carrier ?? ""}
          className="w-full rounded border px-3 py-2"
          required
        >
          <option value=""> Select Carrier </option>
          <option value="UPS"> UPS </option>
          <option value="USPS"> USPS </option>
          <option value="FedEx"> FedEx </option>
        </select>


      </div>
      <div>
        <label className="mb-1 block text-sm font-medium"> Tracking Number </label>
        <input
          type="text"
          name="trackingNumber"
          autoComplete="off"
          required
          defaultValue={
            trackingNumber ?? ""
          }
          placeholder="1Z999..."
          className="w-full rounded border px-3 py-2"
        />
      </div>
      <button
        type="submit"
        disabled={pending}
        className="rounded border px-4 py-2"
      >
        {pending
          ? "Saving..."
          : "Save Shipment"}
      </button>
    </form>
  );
}