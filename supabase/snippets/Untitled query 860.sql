select
  variant_id,
  quantity,
  low_stock_threshold
from inventory
order by quantity;