select
  pv.sku,
  vo.option_name,
  vo.option_value
from product_variants pv
join variant_options vo
  on vo.variant_id = pv.id
order by pv.sku, vo.option_name;