import Link from "next/link";

import { getBrandsWithCounts } from "@tkb/database";
import { createBrand, deleteBrand } from "./actions";
import { Button } from "@tkb/ui";

export default async function BrandsPage() {
  const brands =
    await getBrandsWithCounts();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Brands
        </h1>
        <p className="text-muted-foreground">
          Manage knife brands.
        </p>
      </div>
      <div className="rounded-xl border p-6">
        <h2 className="mb-4 text-xl font-semibold">
          Add Brand
        </h2>

        <form
          action={createBrand}
          className="space-y-4"
        >
          <input
            name="name"
            placeholder="Brand Name"
            className="w-full rounded border px-3 py-2"
            required
          />
          <input
            name="slug"
            placeholder="brand-slug"
            className=" w-full rounded border px-3 py-2"
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            rows={4}
            className="w-full rounded border px-3 py-2"
          />
          <button
            type="submit"
            className="rounded border px-4 py-2 md:col-span-3"
          >
            Create Brand
          </button>
        </form>
      </div>
      <div className="rounded-xl border">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="p-4 text-left">
                Name
              </th>
              <th className="p-4 text-left">
                Slug
              </th>
              <th className="p-4 text-right">
                Products
              </th>
              <th className="p-4 text-center">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {brands.map(
              (brand) => (
                <tr
                  key={brand.id}
                  className="border-b"
                >
                  <td className="p-4">
                    <Link
                      href={`/brands/${brand.id}`}
                      className="hover:underline"
                    >
                      {brand.name}
                    </Link>
                  </td>

                  <td className="p-4">
                    {brand.slug}
                  </td>
                  <td className="p-4 text-right">
                    {brand.products?.length ?? 0}
                  </td>
                  <td className="p-4 text-center">
                    <form action={deleteBrand}>
                      <input
                        type="hidden"
                        name="brandId"
                        value={brand.id}
                      />

                      <Button
                        type="submit"
                        variant="danger"
                        disabled={
                          (brand.products?.length ?? 0) > 0
                        }
                      >
                        {(brand.products?.length ?? 0) > 0
                          ? "In Use"
                          : "Delete"}
                      </Button>

                    </form>
                  </td>

                </tr>
              ),
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}