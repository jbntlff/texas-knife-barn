
delete from public.product_attributes
where product_id = '55555555-5555-5555-5555-555555555560';

insert into public.product_attributes (
  product_id,
  attribute_name,
  attribute_value,
  sort_order
)
values
('55555555-5555-5555-5555-555555555560','Blade Length','3.10"',0),
('55555555-5555-5555-5555-555555555560','Blade Steel','Damascus GorGon',1),
('55555555-5555-5555-5555-555555555560','Handle Material','Mamoth Tusk/Titanium',2),
('55555555-5555-5555-5555-555555555560','Weight','2.90 oz',3),
('55555555-5555-5555-5555-555555555560','Lock Type','Liner Lock',4),
('55555555-5555-5555-5555-555555555560','Country','USA',5);
