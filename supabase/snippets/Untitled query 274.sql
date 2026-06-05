begin;

delete from public.product_images
where product_id = '55555555-5555-5555-5555-555555555559';

insert into public.product_images (
  product_id,
  image_url,
  alt_text,
  sort_order
)
values
(
  '55555555-5555-5555-5555-555555555559',
  '/images/products/spyderco-para2-1.jpg',
  'Spyderco Paramilary 2 Open',
  0
),
(
  '55555555-5555-5555-5555-555555555559',
  '/images/products/spyderco-para2-2.jpg',
  'Spyderco Paramilary 2 Closed',
  1
);

commit;
