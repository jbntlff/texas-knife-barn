import Link from "next/link";

import { getCategoriesWithCounts } from "@tkb/database";
import { createCategory, deleteCategory } from "./actions";

export default async function CategoriesPage() {
  const categories =
    await getCategoriesWithCounts();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Categories
        </h1>
        <p className="text-muted-foreground">
          Manage knife categories.
        </p>
      </div>
      <div className="rounded-xl border p-6">
        <h2 className="mb-4 text-xl font-semibold">
          Add Category
        </h2>

        <form
          action={createCategory}
          className="space-y-4"
        >
          <input
            name="name"
            placeholder="Category Name"
            className="w-full rounded border px-3 py-2"
            required
          />
          <input
            name="slug"
            placeholder="category-slug"
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
            Create Category
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
              <th className="p-4 text-right">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {categories.map(
              (category) => (
                <tr
                  key={category.id}
                  className="border-b"
                >
                  <td className="p-4">
                    <Link
                      href={`/categories/${category.id}`}
                      className="hover:underline"
                    >
                      {category.name}
                    </Link>
                  </td>

                  <td className="p-4">
                    {category.slug}
                  </td>
                  <td className="p-4 text-right">
                    {category.products?.length ?? 0}
                  </td>

                  <td className="p-4 text-center">
                    <form action={deleteCategory}>
                      <input
                        type="hidden"
                        name="categoryId"
                        value={category.id}
                      />

                      <button
                        type="submit"
                        disabled={
                          (category.products?.length ?? 0) > 0
                        }
                        className=" rounded border px-2 py-1 text-xs 
                                    disabled:cursor-not-allowed
                                    disabled:opacity-40
                                    disabled:bg-muted
                                  "
                      >
                        {(category.products?.length ?? 0) > 0
                          ? "In Use"
                          : "Delete"}
                      </button>
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