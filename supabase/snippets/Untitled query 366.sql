delete from public.product_images
where product_id = (
  select id
  from public.products
  where slug = 'spyderco-para-3'
);