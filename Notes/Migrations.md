#
#1. Storage bucket auto-created
2. Admin user bootstrap
3. Inventory seed consistency
4. Verify image upload after reset
5. Verify login after reset
#
#
#
#

# Storage Bucket
supabase migration new create_product_images_bucket

#then add:

insert into storage.buckets (
  id,
  name,
  public
)
values (
  'product-images',
  'product-images',
  true
)
on conflict (id) do nothing;

# Then verify:
select id, public
from storage.buckets;

# returns:
product-images | true



after supabase db reset

supabase gen types typescript \
  --local \
  > packages/database/src/types/database.generated.ts