alter table profiles
  alter column role set default 'customer';

alter table profiles
  add column first_name text,
  add column last_name text,
  add column marketing_opt_in boolean not null default false;

alter table orders
  add column customer_id uuid
    references auth.users(id)
    on delete set null;
