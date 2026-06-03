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
  '55555555-5555-5555-5555-555555555556',
  '/images/products/osborne-940-1.jpg',
  'Benchmade Osborne 940 Open',
  0
),
(
  gen_random_uuid(),
  '55555555-5555-5555-5555-555555555556',
  '/images/products/osborne-940-2.jpg',
  'Benchmade Osborne 940 Closed',
  1
);