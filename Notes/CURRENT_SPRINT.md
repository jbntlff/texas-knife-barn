
# Current Sprint






Given where Texas Knife Barn stands right now, I'd consider these items complete:

✅ Product catalog
✅ Product variants
✅ Inventory management
✅ Cart
✅ Checkout
✅ Order creation
✅ Order status updates
✅ Brand safe delete
✅ Category safe delete
✅ Product safe delete
✅ Archive/Restore workflow
✅ Order detail page

Before jumping into a major new feature, I'd finish the remaining cleanup around Orders.

### Next Step: Orders List Enhancements

The admin Orders page should become a useful operational dashboard.

I'd add:

#### 1. Item Count Column

Show:

```text
TKB-1781517765318
3 items
```

instead of only the order number.

This will immediately expose bad data like 0-item orders.

#### 2. Status Badge

Instead of:

```text
pending
paid
shipped
delivered
```

render badges:

```text
[Pending]
[Paid]
[Shipped]
[Delivered]
[Cancelled]
```

This makes scanning orders much easier.

#### 3. Customer Email

If not already visible in the orders list, add it.

#### 4. Quick Metrics

You already have:

```ts
getOrderMetrics()
```

Use it on the Orders page to display:

```text
Total Orders
Pending Orders
Revenue
Average Order Value
```

at the top.

---

### After Orders

My next major feature would be:

## Product Image Management

You already have:

* product_images table
* product galleries
* storefront display

What you likely don't have yet is a polished admin workflow:

```text
Upload image
Set primary image
Delete image
Reorder images
Remove storage file
```

This tends to pay off immediately because product maintenance becomes much easier.

---

### Suggested Sequence

1. Orders list polish (small)
2. Empty-cart guards (small)
3. Product image management (medium)
4. Order search/filtering (medium)
5. Shipping workflow (large)
6. Payment integration (large)

My recommendation is to do **Orders list polish next**, because it's a quick win and closes out the Orders feature set before moving back into catalog management.
