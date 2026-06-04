insert into public.product_images (
  product_id,
  image_url,
  alt_text,
  sort_order
)
select
  p.id,
  'spyderco-para-3-1.jpg',
  'Spyderco Para 3',
  1
from public.products p
where p.slug = 'spyderco-para-3';

insert into public.product_images (
  product_id,
  image_url,
  alt_text,
  sort_order
)
select
  p.id,
  'spyderco-para-3-2.jpg',
  'Spyderco Para 3',
  2
from public.products p
where p.slug = 'spyderco-para-3';