select
  proname
from pg_proc
where proname ilike '%user%'
   or proname ilike '%profile%';