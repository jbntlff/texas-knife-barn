alter table orders
add column carrier text,
add column tracking_number text,
add column shipped_at timestamptz;