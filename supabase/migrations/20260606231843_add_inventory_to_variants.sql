alter table product_variants
add column inventory_quantity integer
not null default 0;
