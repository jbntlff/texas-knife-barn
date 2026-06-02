import Link from "next/link";
import { getProducts } from "@tkb/database";

export default async function HomePage() {
  const products = await getProducts();

  return (
    <main>
      <h1>Texas Knife Barn</h1>

      <ul>
        {products?.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.slug}`}>
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}