select column_name
from information_schema.columns
where table_name = 'products'
order by ordinal_position;