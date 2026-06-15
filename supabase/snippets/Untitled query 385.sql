select
  trigger_name,
  event_object_table
from information_schema.triggers
where trigger_schema = 'auth';