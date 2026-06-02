select column_name
from information_schema.columns
where table_name = 'product_images'
order by ordinal_position;