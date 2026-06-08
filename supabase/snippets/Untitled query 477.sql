select
  column_name,
  data_type
from information_schema.columns
where table_name = 'product_variants'
order by ordinal_position;