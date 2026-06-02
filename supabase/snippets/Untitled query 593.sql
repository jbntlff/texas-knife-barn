select column_name
from information_schema.columns
where table_name = 'product_variants'
order by ordinal_position;