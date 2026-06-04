select
  image_url,
  alt_text,
  sort_order
from public.product_images
where product_id = '55555555-5555-5555-5555-555555555558'
order by sort_order;