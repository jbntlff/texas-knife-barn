export function getTrackingUrl(
  carrier: string,
  trackingNumber: string,
) {
  switch (carrier) {
    case "UPS":
      return `https://www.ups.com/track?tracknum=${trackingNumber}`;

    case "USPS":
      return `https://tools.usps.com/go/TrackConfirmAction?tLabels=${trackingNumber}`;

    case "FedEx":
      return `https://www.fedex.com/fedextrack/?trknbr=${trackingNumber}`;

    default:
      return "#";
  }
}