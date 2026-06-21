type OrderEvent = {
  id: string;
  event_type: string;
  event_description: string | null;
  created_at: string;
};

function formatEventType(
  eventType: string,
) {
  switch (eventType) {
    case "ORDER_CREATED":
      return "Order Created";

    case "SHIPMENT_ADDED":
      return "Shipment Added";

    case "STATUS_CHANGED":
      return "Status Updated";

    default:
      return eventType;
  }
}

function formatTimestamp(
  value: string,
) {
  return new Date(value).toLocaleString(
    "en-US",
    {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
    },
  );
}

function getDotClass(
  eventType: string,
) {
  switch (eventType) {
    case "ORDER_CREATED":
      return "bg-slate-900";

    case "SHIPMENT_ADDED":
      return "bg-emerald-600";

    case "STATUS_CHANGED":
      return "bg-blue-600";

    default:
      return "bg-slate-400";
  }
}

export function OrderTimeline({
  events,
}: {
  events: OrderEvent[];
}) {
  return (
    <div className="rounded-xl border p-6">
      <h2 className="mb-6 text-xl font-semibold">
        Order Timeline
      </h2>

      {events.length === 0 ? (
        <p className="text-sm text-muted-foreground">
          No timeline events yet.
        </p>
      ) : (
        <ol className="space-y-6">
          {events.map((event, index) => {
            const isLast =
              index === events.length - 1;

            return (
              <li
                key={event.id}
                className="grid grid-cols-[24px_1fr] gap-4"
              >
                <div className="relative flex min-h-[72px] justify-center">
                  {!isLast && (
                    <div className="absolute left-1/2 top-3 bottom-[-24px] w-px -translate-x-1/2 bg-slate-300" />
                  )}

                  <div
                    className={[
                      "relative z-10 mt-1 h-3 w-3 rounded-full",
                      getDotClass(
                        event.event_type,
                      ),
                    ].join(" ")}
                  />
                </div>

                <div className="pb-1">
                  <p className="font-medium leading-5">
                    {formatEventType(
                      event.event_type,
                    )}
                  </p>

                  {event.event_description && (
                    <p className="mt-1 text-sm text-muted-foreground">
                      {event.event_description}
                    </p>
                  )}

                  <p className="mt-1 text-xs text-muted-foreground">
                    {formatTimestamp(
                      event.created_at,
                    )}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      )}
    </div>
  );
}