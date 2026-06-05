select
  product_id,
  attribute_name,
  attribute_value,
  sort_order
from product_attributes
order by product_id, sort_order;