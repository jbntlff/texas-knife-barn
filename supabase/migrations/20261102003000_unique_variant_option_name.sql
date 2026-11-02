-- A variant should only ever have one value per option name (e.g. one
-- "Blade Color"). Nothing previously stopped the admin from adding a
-- second, conflicting value for an option already set on a variant.
delete from variant_options a
using variant_options b
where a.variant_id = b.variant_id
  and a.option_name = b.option_name
  and a.id > b.id;

alter table variant_options
  add constraint variant_options_variant_id_option_name_key
  unique (variant_id, option_name);
