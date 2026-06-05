begin;

delete from public.product_images
where product_id = '55555555-5555-5555-5555-555555555558';

insert into public.product_images (
  product_id,
  image_url,
  alt_text,
  sort_order
)
values
(
  '55555555-5555-5555-5555-555555555558',
  '/images/products/spyderco-para-3-1.jpg',
  'Spyderco Paramilary 3 Open',
  0
),
(
  '55555555-5555-5555-5555-555555555558',
  '/images/products/spyderco-para-3-2.jpg',
  'Spyderco Paramilary 3 Closed',
  1
),
(
  '55555555-5555-5555-5555-555555555558',
  '/images/products/spyderco-para-3-3.jpg',
  'Spyderco Paramilary 3 Closed',
  2
);

commit;
