"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

const brochureUrl =
  process.env.NEXT_PUBLIC_BROCHURE_URL ?? "";

type BackLinkProps = {
  fallbackHref: string;
  fallbackLabel: string;
};

// Sends the user back to wherever they actually came from (the brochure
// Gallery, the storefront's own product grid, search results, ...) using
// browser history, instead of always landing on a fixed page. Falls back
// to fallbackHref/fallbackLabel when there's no useful referrer (e.g. the
// product page was opened directly in a new tab).
//
// The referrer-derived label/behavior is applied via a ref instead of
// state, since it only ever needs to run once after mount (document.referrer
// never changes) and doing it as state would trigger an extra render.
export function BackLink({
  fallbackHref,
  fallbackLabel,
}: BackLinkProps) {
  const router = useRouter();

  const linkRef =
    useRef<HTMLAnchorElement>(null);

  const canGoBackRef = useRef(false);

  useEffect(() => {
    const referrer = document.referrer;

    if (!referrer || !linkRef.current) {
      return;
    }

    canGoBackRef.current = true;

    const label =
      brochureUrl &&
      referrer.startsWith(
        `${brochureUrl}/gallery`,
      )
        ? "Back to Gallery"
        : "Back";

    linkRef.current.textContent =
      `← ${label}`;
  }, []);

  return (
    <a
      ref={linkRef}
      href={fallbackHref}
      onClick={(event) => {
        if (!canGoBackRef.current) {
          return;
        }

        event.preventDefault();
        router.back();
      }}
      className="text-sm text-muted-foreground hover:text-foreground"
    >
      ← {fallbackLabel}
    </a>
  );
}
