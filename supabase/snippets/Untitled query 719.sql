select
  id,
  order_number,
  customer_email,
  grand_total,
  created_at
from orders
order by created_at desc;