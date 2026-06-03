delete from variant_options
where id in (
  select id
  from (
    select
      id,
      row_number() over (
        partition by
          variant_id,
          option_name,
          option_value
        order by created_at
      ) as rn
    from variant_options
  ) t
  where rn > 1
);