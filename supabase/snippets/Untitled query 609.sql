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
  '55555555-5555-5555-5555-555555555555',
  '/images/products/bugout-1.jpg',
  'Benchmade Bugout Open',
  0
),
(
  gen_random_uuid(),
  '55555555-5555-5555-5555-555555555555',
  '/images/products/bugout-1-closed.jpg',
  'Benchmade Bugout Closed',
  1
);