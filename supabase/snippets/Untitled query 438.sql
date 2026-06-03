insert into variant_options (variant_id, option_name, option_value)
select id, 'Handle Color', 'Green'
from product_variants
where sku = 'BM-940-GRN';

insert into variant_options (variant_id, option_name, option_value)
select id, 'Blade Finish', 'Satin'
from product_variants
where sku = 'BM-940-GRN';