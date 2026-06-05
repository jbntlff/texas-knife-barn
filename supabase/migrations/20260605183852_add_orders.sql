
create table orders (
  id uuid primary key default gen_random_uuid(),

  order_number text not null unique,

  status text not null default 'pending',

  customer_email text not null,

  subtotal numeric(10,2) not null,

  tax_total numeric(10,2) not null default 0,

  shipping_total numeric(10,2) not null default 0,

  grand_total numeric(10,2) not null,

  created_at timestamptz not null default now()
);

create table order_items (
  id uuid primary key default gen_random_uuid(),

  order_id uuid not null
    references orders(id)
    on delete cascade,

  product_id uuid not null
    references products(id),

  variant_id uuid not null
    references product_variants(id),

  sku text not null,

  product_name text not null,

  variant_title text not null,

  quantity integer not null
    check (quantity > 0),

  unit_price numeric(10,2) not null
    check (unit_price >= 0),

  created_at timestamptz not null default now()
);

create index idx_order_items_order_id
  on order_items(order_id);

create index idx_orders_created_at
  on orders(created_at desc);

