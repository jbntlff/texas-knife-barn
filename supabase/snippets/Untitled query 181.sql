select
  pv.id,
  pv.sku,
  vo.option_name,
  vo.option_value
from product_variants pv
left join variant_options vo
  on vo.variant_id = pv.id
limit 10;