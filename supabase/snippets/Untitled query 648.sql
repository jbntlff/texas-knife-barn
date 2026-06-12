select
  id,
  alt_text,
  sort_order,
  created_at
from product_images
where product_id =
'55555555-5555-5555-5555-555555555557'
order by created_at;