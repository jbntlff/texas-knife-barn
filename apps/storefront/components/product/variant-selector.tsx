"use client";

type VariantOption = {
  id: string;
  option_name: string;
  option_value: string;
};

type ProductVariant = {
  id: string;
  sku: string;
  title: string;
  price: number;
  compare_at_price: number | null;
  variant_options: VariantOption[];
};

type VariantSelectorProps = {
  variants: ProductVariant[];

  selectedOptions: Record<
    string,
    string
  >;

  onOptionChange: (
    optionName: string,
    optionValue: string
  ) => void;
};

export function VariantSelector({
  variants,
  selectedOptions,
  onOptionChange,
}: VariantSelectorProps) {
  const groupedOptions = new Map<
    string,
    Set<string>
  >();

  for (const variant of variants) {
    for (const option of variant.variant_options) {
      if (
        !groupedOptions.has(
          option.option_name
        )
      ) {
        groupedOptions.set(
          option.option_name,
          new Set()
        );
      }

      groupedOptions
        .get(option.option_name)!
        .add(option.option_value);
    }
  }

  return (
    <div className="space-y-4">
      {[...groupedOptions.entries()].map(
        ([optionName, values]) => (
          <div key={optionName}>
            <h3 className="mb-2 text-sm font-medium">
              {optionName}
            </h3>

            <div className="flex flex-wrap gap-2">
              {[...values].map((value) => {
                const isSelected =
                  selectedOptions[
                    optionName
                  ] === value;

                return (
                  <button
                    key={value}
                    type="button"
                    onClick={() =>
                      onOptionChange(
                        optionName,
                        value
                      )
                    }
                    className={
                      isSelected
                        ? "rounded-md border border-primary bg-muted px-3 py-2 text-sm font-medium"
                        : "rounded-md border px-3 py-2 text-sm hover:bg-muted"
                    }
                  >
                    {value}
                  </button>
                );
              })}
            </div>
          </div>
        )
      )}
    </div>
  );
}