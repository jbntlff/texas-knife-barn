type ProductAttribute = {
  id: string;
  attribute_name: string;
  attribute_value: string;
  sort_order: number;
};

type SpecificationsProps = {
  attributes: ProductAttribute[];
};

export function Specifications({
  attributes,
}: SpecificationsProps) {
  if (attributes.length === 0) {
    return null;
  }

  const sortedAttributes = [...attributes].sort(
    (a, b) => a.sort_order - b.sort_order
  );

  return (
    <div className="mt-8">
      <h2 className="mb-4 text-xl font-semibold">
        Specifications
      </h2>

      <div className="overflow-hidden rounded-lg border">
        {sortedAttributes.map((attribute) => (
          <div
            key={attribute.id}
            className="grid grid-cols-2 border-b last:border-b-0"
          >
            <div className="bg-muted px-4 py-3 font-medium">
              {attribute.attribute_name}
            </div>

            <div className="px-4 py-3">
              {attribute.attribute_value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}