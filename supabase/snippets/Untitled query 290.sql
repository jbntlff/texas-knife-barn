select
  p.name,
  pa.attribute_name,
  pa.attribute_value
from public.product_attributes pa
join public.products p
  on p.id = pa.product_id
order by p.name, pa.sort_order;