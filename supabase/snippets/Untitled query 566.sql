select
  name,
  id
from products
where id not in (
  select distinct product_id
  from product_attributes
);