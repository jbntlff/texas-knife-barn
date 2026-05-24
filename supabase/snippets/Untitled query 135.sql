
create table public.profiles (
  id uuid primary key references auth.users(id),
  email text not null,
  role text not null default 'customer',
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);
