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
    name: "Texas Knifemakers' Guild",
    href: "https://www.texasknifemakersguild.com",
  },
  {
    name: "Milinski Knives",
    href: "https://www.mrknives.com",
  },
  {
    name: "Brodbeck Ironworks",
    href: "https://brodbeckironworks.com",
  },
];

function FriendCard({ friend }: { friend: Friend }) {
  const content = (
    <div className="flex items-start justify-between gap-4 p-5">
      <div>
        <h3 className="text-base font-semibold tracking-tight text-foreground">
          {friend.name}
        </h3>
        {friend.detail ? (
          <p className="mt-1 text-sm leading-6 text-muted-foreground">
            {friend.detail}
          </p>
        ) : null}

        {friend.href ? (
          <p className="mt-3 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground transition-colors group-hover:text-foreground">
            Visit Website
          </p>
        ) : null}
      </div>

      {friend.href ? (
        <span
          aria-hidden="true"
          className="shrink-0 text-lg text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-foreground"
        >
          →
        </span>
      ) : null}
    </div>
  );

  if (friend.href) {
    return (
      <a
        href={friend.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group block overflow-hidden rounded-2xl border bg-background shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="group block overflow-hidden rounded-2xl border bg-background shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      {content}
    </div>
  );
}

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
    <footer className="mt-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="border-t" />
      </div>

      {showFriends ? (
        <section className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              Our Community
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Friends &amp; Makers
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
              The people and makers behind the craft. Texas Knife Outfitters is proud
              to know and support fellow craftsmen, organizations, and businesses
              that share our appreciation for quality knives and the traditions
              behind them.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {friends.map((friend) => (
              <FriendCard key={friend.name} friend={friend} />
            ))}
          </div>
        </section>
      ) : null}

      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-4 border-t py-8 text-sm text-muted-foreground sm:flex-row sm:justify-between">
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

            <a href={`${storefrontUrl}/search`} className="hover:text-foreground">
              Search
            </a>

            <a href={storefrontUrl} className="hover:text-foreground">
              Shop
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
