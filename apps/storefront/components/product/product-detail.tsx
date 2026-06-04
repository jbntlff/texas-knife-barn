"use client";

import { Specifications } from "./specifications";
import { useMemo, useState } from "react";
import { VariantSelector } from "./variant-selector";

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
  active: boolean;
  variant_options: VariantOption[];
};

type ProductAttribute = {
  id: string;
  attribute_name: string;
  attribute_value: string;
  sort_order: number;
};

type ProductDetailProps = {
  product: {
    short_description?: string | null;
    description?: string | null;

    product_attributes: ProductAttribute[];

    product_variants: ProductVariant[];
  };
};

export function ProductDetail({
  product,
}: ProductDetailProps) {
  const firstVariant = product.product_variants[0];

  const [selectedOptions, setSelectedOptions] =
    useState<Record<string, string>>(
      Object.fromEntries(
        firstVariant.variant_options.map(
          (option) => [
            option.option_name,
            option.option_value,
          ]
        )
      )
    );

  const selectedVariant = useMemo(() => {
    return (
      product.product_variants.find(
        (variant) =>
          variant.variant_options.every(
            (option) =>
              selectedOptions[
              option.option_name
              ] === option.option_value
          )
      ) ?? firstVariant
    );
  }, [
    product.product_variants,
    selectedOptions,
    firstVariant,
  ]);

  return (
    <>
      {product.short_description && (
        <p className="mt-4 text-lg text-muted-foreground">
          {product.short_description}
        </p>
      )}

      <div className="mt-6">
        <div className="flex items-center gap-3">
          <span className="text-3xl font-bold">
            ${Number(selectedVariant.price).toFixed(2)}
          </span>

          {selectedVariant.compare_at_price && (
            <span className="text-lg text-muted-foreground line-through">
              $
              {Number(
                selectedVariant.compare_at_price
              ).toFixed(2)}
            </span>
          )}
        </div>

        <p className="mt-2 text-sm text-muted-foreground">
          {selectedVariant.title}
        </p>

        <p className="text-sm text-muted-foreground">
          SKU: {selectedVariant.sku}
        </p>
      </div>

      <div className="mt-6">
        <VariantSelector
          variants={product.product_variants}
          selectedOptions={selectedOptions}
          onOptionChange={(
            optionName,
            optionValue
          ) =>
            setSelectedOptions((prev) => ({
              ...prev,
              [optionName]: optionValue,
            }))
          }
        />
      </div>

      {product.description && (
        <div className="mt-8">
          <h2 className="mb-2 text-xl font-semibold">
            Description
          </h2>

          <p className="whitespace-pre-wrap text-muted-foreground">
            {product.description}
          </p>
        </div>
      )}
      <Specifications
        attributes={product.product_attributes ?? []}
      />
    </>
  );
}