
create table if not exists public.inquiries (
  id uuid primary key default gen_random_uuid(),

  name text not null,
  email text not null,
  phone text,
  message text not null,

  status text not null default 'new',

  created_at timestamptz not null default now()
);

create index if not exists inquiries_created_at_idx
  on public.inquiries(created_at);
