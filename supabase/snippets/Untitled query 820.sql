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
  'https://images.unsplash.com/photo-1518717758536-85ae29035b6d',
  'Benchmade Osborne 940',
  0
),
(
  gen_random_uuid(),
  '55555555-5555-5555-5555-555555555557',
  'https://images.unsplash.com/photo-1518717758536-85ae29035b6d',
  'Benchmade Mini Griptilian',
  0
),
(
  gen_random_uuid(),
  '55555555-5555-5555-5555-555555555558',
  'https://images.unsplash.com/photo-1518717758536-85ae29035b6d',
  'Spyderco Para 3',
  0
),
(
  gen_random_uuid(),
  '55555555-5555-5555-5555-555555555559',
  'https://images.unsplash.com/photo-1518717758536-85ae29035b6d',
  'Spyderco PM2',
  0
),
(
  gen_random_uuid(),
  '55555555-5555-5555-5555-555555555560',
  'https://images.unsplash.com/photo-1518717758536-85ae29035b6d',
  'Spyderco Delica 4',
  0
);