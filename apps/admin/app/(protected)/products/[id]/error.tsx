"use client";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ProductDetailError({
  error,
  reset,
}: ErrorProps) {
  return (
    <div className="mx-auto max-w-2xl p-8">
      <h1 className="text-xl font-semibold text-red-600">
        Something went wrong
      </h1>

      <p className="mt-2 text-muted-foreground">
        {error.message ||
          "An unexpected error occurred."}
      </p>

      <button
        type="button"
        onClick={() => reset()}
        className="mt-4 rounded-md border px-4 py-2 text-sm hover:bg-muted"
      >
        Try again
      </button>
    </div>
  );
}
