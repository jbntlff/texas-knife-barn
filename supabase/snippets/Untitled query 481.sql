select
  order_id,
  product_name,
  variant_title,
  quantity,
  unit_price
from order_items
order by created_at desc;