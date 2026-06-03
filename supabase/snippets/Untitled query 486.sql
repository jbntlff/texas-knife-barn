insert into product_variants (
  id,
  product_id,
  sku,
  title,
  price,
  compare_at_price,
  active
)
values
(
  gen_random_uuid(),
  '55555555-5555-5555-5555-555555555556',
  'BM-940-GRN',
  'Green Aluminum Handle',
  219.99,
  249.99,
  true
),
(
  gen_random_uuid(),
  '55555555-5555-5555-5555-555555555557',
  'BM-MINI-GRIP',
  'Black Handle',
  149.99,
  169.99,
  true
),
(
  gen_random_uuid(),
  '55555555-5555-5555-5555-555555555558',
  'SP-PARA3',
  'Black G10',
  169.99,
  189.99,
  true
),
(
  gen_random_uuid(),
  '55555555-5555-5555-5555-555555555559',
  'SP-PM2',
  'Black G10',
  189.99,
  209.99,
  true
),
(
  gen_random_uuid(),
  '55555555-5555-5555-5555-555555555560',
  'SP-DELICA4',
  'Blue FRN',
  99.99,
  119.99,
  true
);