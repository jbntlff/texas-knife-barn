select
  sku,
  title
from public.product_variants
where product_id = '55555555-5555-5555-5555-555555555557'
order by sku;