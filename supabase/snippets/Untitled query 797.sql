select
  o.id,
  o.order_number,
  o.customer_email,
  o.created_at,
  count(oi.id) as item_count
from orders o
left join order_items oi
  on oi.order_id = o.id
group by
  o.id,
  o.order_number,
  o.customer_email,
  o.created_at
having count(oi.id) = 0
order by o.created_at desc;