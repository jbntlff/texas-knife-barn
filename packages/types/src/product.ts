export interface Product {
  id: string
  slug: string
  name: string
  description: string | null
  price: number
  inventory_count: number
  is_featured: boolean
  is_active: boolean
  created_at: string
  updated_at: string
}