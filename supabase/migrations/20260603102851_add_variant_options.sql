create table public.variant_options (
  id uuid not null default gen_random_uuid(),

  variant_id uuid not null,

  option_name text not null,
  option_value text not null,

  created_at timestamptz not null default now(),

  constraint variant_options_pkey
    primary key (id),

  constraint variant_options_variant_id_fkey
    foreign key (variant_id)
    references public.product_variants(id)
    on delete cascade
);

create index idx_variant_options_variant_id
on public.variant_options (variant_id);

alter table public.variant_options
add constraint variant_options_unique
unique (
  variant_id,
  option_name,
  option_value
);
