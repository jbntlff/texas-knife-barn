alter table variant_options
add constraint variant_options_unique
unique (
  variant_id,
  option_name,
  option_value
);