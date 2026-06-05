import type { ComponentProps } from "react";

type SearchFormProps = {
  defaultValue?: string;
} & ComponentProps<"form">;

export function SearchForm({
  defaultValue = "",
  ...props
}: SearchFormProps) {
  return (
    <form
      action="/search"
      className="flex items-center gap-2"
      {...props}
    >
      <input
        type="search"
        name="q"
        defaultValue={defaultValue}
        placeholder="Search knives..."
        className="
          w-64
          rounded-md
          border
          px-3
          py-2
          text-sm
        "
      />

      <button
        type="submit"
        className="
          rounded-md
          border
          px-3
          py-2
          text-sm
          hover:bg-muted
        "
      >
        Search
      </button>
    </form>
  );
}