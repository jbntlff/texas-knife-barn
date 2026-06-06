insert into profiles (
  id,
  email,
  role
)
select
  id,
  email,
  'admin'
from auth.users
where email = 'joel@texasknifebarn.com';