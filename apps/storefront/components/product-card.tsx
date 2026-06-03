import Link from "next/link";

type ProductCardProps = {
  product: any;
};

export function ProductCard({ product }: ProductCardProps) {
  const image = product.product_images?.[0];
  const variant = product.product_variants?.[0];

  return (
    <Link
      href={`/products/${product.slug}`}
      className="block rounded-lg border p-4 transition hover:bg-muted/50"
    >
      {image && (
        <img
          src={image.image_url}
          alt={product.name}
          className="mb-4 aspect-square w-full rounded object-cover"
        />
      )}

      <h2 className="font-semibold">
        {product.name}
      </h2>

      {variant && (
        <p className="mt-2 text-sm text-muted-foreground">
          ${variant.price}
        </p>
      )}
    </Link>
  );
}