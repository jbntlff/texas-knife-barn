select
  variant_id,
  option_name,
  option_value,
  count(*)
from variant_options
group by
  variant_id,
  option_name,
  option_value
having count(*) > 1;