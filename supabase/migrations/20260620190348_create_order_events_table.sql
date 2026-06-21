
create table if not exists public.order_events (
  id uuid primary key default gen_random_uuid(),

  order_id uuid not null
    references public.orders(id)
    on delete cascade,

  event_type text not null,

  event_description text,

  created_at timestamptz not null default now()
);

create index if not exists order_events_order_id_idx
  on public.order_events(order_id);

create index if not exists order_events_created_at_idx
  on public.order_events(created_at);
