insert into product_images (
  id,
  product_id,
  image_url,
  alt_text,
  sort_order
)
values
(
  gen_random_uuid(),
  '55555555-5555-5555-5555-555555555557',
  '/images/products/BM-Mini-Griptilian-1.jpg',
  'Benchmade Mini Griptilian Open',
  0
),
(
  gen_random_uuid(),
  '55555555-5555-5555-5555-555555555557',
  '/images/products/BM-Mini-Griptilian-2.jpg',
  'Benchmade Mini Griptilian Closed',
  1
);