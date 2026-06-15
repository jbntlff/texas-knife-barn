select
  conname,
  pg_get_constraintdef(oid)
from pg_constraint
where conrelid =
  'variant_options'::regclass;