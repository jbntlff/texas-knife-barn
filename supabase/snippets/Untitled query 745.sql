begin;

delete from public.product_images
where product_id = (
  select id
  from public.products
  where slug = 'spyderco-para-3'
);

insert into public.product_images (
  product_id,
  image_url,
  alt_text,
  sort_order
)
select
  p.id,
  v.image_url,
  'Spyderco Para 3',
  v.sort_order
from public.products p
cross join (
  values
    ('spyderco-para-3-1.jpg', 1),
    ('spyderco-para-3-2.jpg', 2)
) as v(image_url, sort_order)
where p.slug = 'spyderco-para-3';

commit;