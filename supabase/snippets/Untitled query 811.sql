select
    conname,
    pg_get_constraintdef(c.oid)
from pg_constraint c
join pg_class t
    on t.oid = c.conrelid
where t.relname in (
    'product_variants',
    'product_images',
    'inventory'
);