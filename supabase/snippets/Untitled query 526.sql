insert into variant_options (variant_id, option_name, option_value)
select id, 'Handle Color', 'Black'
from product_variants
where sku = 'BM-BUGOUT-BLK';

insert into variant_options (variant_id, option_name, option_value)
select id, 'Blade Finish', 'Black DLC'
from product_variants
where sku = 'BM-BUGOUT-BLK';