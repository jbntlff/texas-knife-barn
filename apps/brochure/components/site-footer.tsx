"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/gallery", label: "Gallery" },
  { href: "/how-to-order", label: "How to Order" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

type Friend = {
  name: string;
  detail?: string;
  href?: string;
};

const friends: Friend[] = [
  {
    name: "Bill Poor",
    detail: "Flatland Forge — Tuscola, TX",
  },
  {
    name: "Silent Hunter Armory",
    href: "https://www.silenthunterarmory.com",
  },
  {
    name: "Phenix Knives",
    href: "https://www.phenixknives.com",
  },
  {
    name: "Texas Knife Makers Guild",
    href: "https://www.texasknifemakersguild.com",
  },
  {
    name: "Milinski Knives",
    href: "https://www.mrknives.com",
  },
  {
    name: "Baker Forge & Tool",
    href: "https://bakerforge.com",
  },
  {
    name: "Brodbeck Ironworks",
    href: "https://brodbeckironworks.com",
  },
];

export function SiteFooter({
  brandName,
  storefrontUrl,
}: {
  brandName: string;
  storefrontUrl: string;
}) {
  const pathname = usePathname();
  const showFriends = pathname === "/";

  return (
    <footer className="mt-16 border-t">
      {showFriends ? (
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="rounded-2xl border bg-muted p-8 shadow-sm">
            <h2 className="text-center text-xl font-semibold">
              Friends of {brandName}
            </h2>

            <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {friends.map((friend) => {
                const content = (
                  <>
                    <span className="font-medium text-foreground">
                      {friend.name}
                    </span>

                    {friend.detail ? (
                      <span className="mt-1 block text-sm text-muted-foreground">
                        {friend.detail}
                      </span>
                    ) : null}
                  </>
                );

                return (
                  <li key={friend.name} className="text-sm">
                    {friend.href ? (
                      <a
                        href={friend.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {content}
                      </a>
                    ) : (
                      <div>{content}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      ) : null}

      <div className="border-t px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 text-sm text-muted-foreground sm:flex-row sm:justify-between">
          <div>© 2026 {brandName}</div>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}

            <a
              href={`${storefrontUrl}/search`}
              className="hover:text-foreground"
            >
              Search
            </a>

            <a
              href={storefrontUrl}
              className="hover:text-foreground"
            >
              Shop
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
