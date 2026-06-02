import { getProductBySlug } from "@tkb/database";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = await getProductBySlug(slug);

  const image = product.product_images?.[0];
  const variant = product.product_variants?.[0];

  return (
    <main>
      <h1>{product?.name}</h1>
       {image && (
        <img
          src={image.image_url}
          alt={image.alt_text}
          wdith={400}
          />
       )}
      <p>{product.short_description}</p>
      {variant && (
        <>
        <p>${variant.price}</p>
        <p>
          <s>${variant.compare_at_price}</s>
        </p>
        <p>{variant.title}</p>
        </>
      )}

    </main>
  );
}