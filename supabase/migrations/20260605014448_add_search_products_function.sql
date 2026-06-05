
create or replace function search_products(
  search_query text
)
returns table (
  id uuid,
  slug text,
  name text
)
language sql
stable
as $$
  select distinct
    p.id,
    p.slug,
    p.name
  from products p
  left join brands b
    on b.id = p.brand_id
  left join product_variants pv
    on pv.product_id = p.id
  where
    p.status = 'active'
    and (
      p.name ilike '%' || search_query || '%'
      or b.name ilike '%' || search_query || '%'
      or pv.sku ilike '%' || search_query || '%'
    )
  order by p.name;
$$;
