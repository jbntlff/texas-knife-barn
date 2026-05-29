
insert into brands (id, name, slug)
values
  ('11111111-1111-1111-1111-111111111111', 'Benchmade', 'benchmade'),
  ('22222222-2222-2222-2222-222222222222', 'Spyderco', 'spyderco');

insert into categories (id, name, slug)
values
  ('33333333-3333-3333-3333-333333333333', 'EDC', 'edc'),
  ('44444444-4444-4444-4444-444444444444', 'Fixed Blade', 'fixed-blade');

insert into products (
  id,
  brand_id,
  category_id,
  name,
  slug,
  short_description,
  description,
  status,
  featured
)
values (
  '55555555-5555-5555-5555-555555555555',
  '11111111-1111-1111-1111-111111111111',
  '33333333-3333-3333-3333-333333333333',
  'Benchmade Bugout',
  'benchmade-bugout',
  'Lightweight EDC folding knife',
  'The Benchmade Bugout is a lightweight everyday carry knife designed for versatility and durability.',
  'active',
  true
);

insert into product_variants (
  id,
  product_id,
  sku,
  title,
  price,
  compare_at_price,
  active
)
values (
  '66666666-6666-6666-6666-666666666666',
  '55555555-5555-5555-5555-555555555555',
  'BM-BUGOUT-BLK',
  'Black Handle / Satin Blade',
  179.99,
  199.99,
  true
);

insert into product_images (
  product_id,
  image_url,
  alt_text,
  sort_order
)
values (
  '55555555-5555-5555-5555-555555555555',
  'https://images.unsplash.com/photo-1518717758536-85ae29035b6d',
  'Benchmade Bugout',
  0
);

insert into inventory (
  variant_id,
  quantity,
  low_stock_threshold
)
values (
  '66666666-6666-6666-6666-666666666666',
  12,
  2
);

