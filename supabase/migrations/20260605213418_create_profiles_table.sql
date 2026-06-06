create table profiles (
  id uuid primary key
    references auth.users(id)
    on delete cascade,

  email text not null,

  role text not null
    default 'admin',

  created_at timestamptz not null
    default now()
);
