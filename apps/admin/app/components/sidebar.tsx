"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  ClipboardList,
  Users,
  Settings,
} from "lucide-react";

const navigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,

  },
  {
    name: "Products",
    href: "/products",
    icon: Package,

  },
  {
    name: "Orders",
    href: "/orders",
    icon: ClipboardList,

  },
  {
    name: "Customers",
    href: "/customers",
    icon: Users,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

type SidebarProps = {
  email: string;
  children?: React.ReactNode;
};

export default function Sidebar({
  email,
  children,
}: SidebarProps) {

  const pathname = usePathname();

  return (
    <aside
      className=" flex h-screen w-72 flex-col border-r bg-background " >
      <div className="border-b p-6">
        <div className="flex flex-col items-center gap-3">
          <img
            src="/images/tkb-logo.png"
            alt="Texas Knife Barn"
            className="h-24 w-24 object-contain"
          />

          <div className="text-center">
            <h1 className="text-lg font-bold">
              Texas Knife Barn
            </h1>

            <p className="text-sm text-muted-foreground">
              Admin
            </p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navigation.map((item) => {
            const active =
              pathname === item.href ||
              pathname.startsWith(
                `${item.href}/`,
              );

            const Icon = item.icon
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={[
                    "block rounded-r-lg px-4 py-3 text-sm font-medium transition-colors",
                    active
                      ? "bg-muted border-l-4 border-primary font-semibold"
                      : "hover:bg-muted",
                  ].join(" ")}
                >
                  <div className="flex items-center gap-3">
                    <Icon size={18} />
                    <span>{item.name} </span>
                  </div>

                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="border-t p-4">
        <div className="mb-3">
          <p className="truncate text-sm font-medium">
            {email}
          </p>

          <p className="text-xs text-muted-foreground">
            Administrator
          </p>
        </div>

        {children}
      </div>
    </aside>
  );
}