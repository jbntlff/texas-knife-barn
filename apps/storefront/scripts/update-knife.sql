
begin;

delete from public.product_images
where product_id = '55555555-5555-5555-5555-555555555560';

insert into public.product_images (
  product_id,
  image_url,
  alt_text,
  sort_order
)
values
(
  '55555555-5555-5555-5555-555555555560',
  '/images/products/paratropper-elegante.jpg',
  'Milinski Paratropper Elegante Open',
  0
);

commit;
