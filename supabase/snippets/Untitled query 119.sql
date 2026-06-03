select
    tc.constraint_name,
    tc.table_name,
    kcu.column_name,
    ccu.table_name as foreign_table_name,
    ccu.column_name as foreign_column_name
from information_schema.table_constraints tc
join information_schema.key_column_usage kcu
    on tc.constraint_name = kcu.constraint_name
join information_schema.constraint_column_usage ccu
    on ccu.constraint_name = tc.constraint_name
where tc.constraint_type = 'FOREIGN KEY'
and tc.table_name = 'variant_options';