select
  product_id,
  count(*)
from product_attributes
group by product_id
order by product_id;