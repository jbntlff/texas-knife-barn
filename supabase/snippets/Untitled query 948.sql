select table_name
from information_schema.tables
where table_schema = 'public'
  and table_name = 'product_attributes';