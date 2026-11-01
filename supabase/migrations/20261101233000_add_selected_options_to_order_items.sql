alter table order_items
  add column selected_options jsonb not null default '[]'::jsonb;
