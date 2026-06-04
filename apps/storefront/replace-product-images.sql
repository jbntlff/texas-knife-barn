begin;

delete from public.product_images
where product_id = :product_id;

insert into public.product_images (
  product_id,
  image_url,
  alt_text,
  sort_order
)
values
(
  :product_id,
  '/images/products/image-1.jpg',
  :alt_text,
  0
),
(
  :product_id,
  '/images/products/image-2.jpg',
  :alt_text,
  1
);

commit;
