select
  attribute_name,
  attribute_value
from public.product_attributes
where product_id = '55555555-5555-5555-5555-555555555557'
order by sort_order;