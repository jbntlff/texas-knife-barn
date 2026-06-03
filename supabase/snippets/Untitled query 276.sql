insert into variant_options (variant_id, option_name, option_value)
select id, 'Handle Color', 'Blue'
from product_variants
where sku = 'SP-DELICA4';

insert into variant_options (variant_id, option_name, option_value)
select id, 'Blade Finish', 'Satin'
from product_variants
where sku = 'SP-DELICA4';