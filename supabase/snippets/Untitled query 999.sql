select
  pv.sku,
  i.quantity
from product_variants pv
left join inventory i
  on i.variant_id = pv.id;