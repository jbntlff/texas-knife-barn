insert into variant_options (variant_id, option_name, option_value)
select id, 'Handle Color', 'Black'
from product_variants
where sku = 'SP-PARA3';

insert into variant_options (variant_id, option_name, option_value)
select id, 'Blade Finish', 'Satin'
from product_variants
where sku = 'SP-PARA3';