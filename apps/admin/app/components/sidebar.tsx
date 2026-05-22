import Link from "next/link"

export default function Sidebar() {
  return (
    <aside
      style={{
        width: 220,
      }}
    >
      <nav>
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            listStyle: "none",
            padding: 0,
          }}
        >
          <li>
            <Link href="/dashboard">
              Dashboard
            </Link>
          </li>

          <li>
            <Link href="/products">
              Products
            </Link>
          </li>

          <li>
            <Link href="/orders">
              Orders
            </Link>
          </li>

          <li>
            <Link href="/customers">
              Customers
            </Link>
          </li>

          <li>
            <Link href="/settings">
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}