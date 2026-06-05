select
  p.name,
  pi.image_url
from product_images pi
join products p
  on p.id = pi.product_id
order by p.name, pi.sort_order;