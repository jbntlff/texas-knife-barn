select
  p.name,
  count(*) as attribute_count
from public.product_attributes pa
join public.products p
  on p.id = pa.product_id
group by p.name
order by p.name;