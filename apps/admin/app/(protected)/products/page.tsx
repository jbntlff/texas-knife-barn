import { createProduct }
  from "./actions"

export default function ProductsPage() {
  return (
    <div>
      <h2>Products</h2>

      <form action={createProduct}>
        <div>
          <input
            name="name"
            placeholder="Product Name"
            required
          />
        </div>

        <div>
          <input
            name="slug"
            placeholder="Slug"
            required
          />
        </div>

        <div>
          <input
            type="number"
            step="0.01"
            name="price"
            placeholder="Price"
            required
          />
        </div>

        <div>
          <input
            type="number"
            name="inventory_count"
            placeholder="Inventory"
            required
          />
        </div>

        <button type="submit">
          Create Product
        </button>
      </form>
    </div>
  )
}
