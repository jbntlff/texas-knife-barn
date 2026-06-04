create table public.product_attributes (
  id uuid not null default gen_random_uuid(),

  product_id uuid not null,

  attribute_name text not null,
  attribute_value text not null,

  sort_order integer not null default 0,

  created_at timestamptz not null default now(),

  constraint product_attributes_pkey
    primary key (id),

  constraint product_attributes_product_id_fkey
    foreign key (product_id)
    references public.products(id)
    on delete cascade
);

create index idx_product_attributes_product_id
on public.product_attributes(product_id);

create unique index idx_product_attributes_unique
on public.product_attributes(
  product_id,
  attribute_name
);
