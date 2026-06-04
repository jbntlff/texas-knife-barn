select
  pv.sku,
  pv.title,
  vo.option_name,
  vo.option_value
from public.product_variants pv
join public.variant_options vo
  on vo.variant_id = pv.id
where pv.product_id = '55555555-5555-5555-5555-555555555557'
order by pv.sku, vo.option_name;