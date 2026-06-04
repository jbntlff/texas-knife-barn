insert into public.variant_options (
  variant_id,
  option_name,
  option_value
)
select
  id,
  'Handle Color',
  'OD Green'
from public.product_variants
where sku = 'BM-MINI-GRIP-ODG';

insert into public.variant_options (
  variant_id,
  option_name,
  option_value
)
select
  id,
  'Blade Finish',
  'Satin'
from public.product_variants
where sku = 'BM-MINI-GRIP-ODG';

insert into public.variant_options (
  variant_id,
  option_name,
  option_value
)
select
  id,
  'Handle Color',
  'Orange'
from public.product_variants
where sku = 'BM-MINI-GRIP-ORG';

insert into public.variant_options (
  variant_id,
  option_name,
  option_value
)
select
  id,
  'Blade Finish',
  'Satin'
from public.product_variants
where sku = 'BM-MINI-GRIP-ORG';