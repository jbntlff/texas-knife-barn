
create extension if not exists "pgcrypto";

create table brands (
  id uuid primary key default gen_random_uuid(),

  name text not null,
  slug text not null unique,

  created_at timestamptz not null default now()
);

create table categories (
  id uuid primary key default gen_random_uuid(),

  name text not null,
  slug text not null unique,

  created_at timestamptz not null default now()
);

create table products (
  id uuid primary key default gen_random_uuid(),

  brand_id uuid references brands(id),
  category_id uuid references categories(id),

  name text not null,
  slug text not null unique,

  short_description text,
  description text,

  status text not null default 'draft',

  featured boolean not null default false,

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table product_variants (
  id uuid primary key default gen_random_uuid(),

  product_id uuid not null references products(id) on delete cascade,

  sku text not null unique,

  title text not null,

  price numeric(10,2) not null,

  compare_at_price numeric(10,2),

  active boolean not null default true,

  created_at timestamptz not null default now()
);

create table product_images (
  id uuid primary key default gen_random_uuid(),

  product_id uuid not null references products(id) on delete cascade,

  image_url text not null,

  alt_text text,

  sort_order integer not null default 0,

  created_at timestamptz not null default now()
);

create table inventory (
  variant_id uuid primary key references product_variants(id) on delete cascade,

  quantity integer not null default 0,

  low_stock_threshold integer not null default 2,

  updated_at timestamptz not null default now()
);

