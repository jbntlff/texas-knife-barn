select
  id,
  image_url,
  alt_text,
  sort_order
from product_images
where product_id = '55555555-5555-5555-5555-555555555555'
order by sort_order;