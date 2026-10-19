"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

import { createClient } from "@tkb/auth";

// Supabase's local/self-hosted auth service doesn't honor the `redirectTo`
// passed to resetPasswordForEmail (known upstream issue) and always lands
// recovery links on the site's root instead. This listens everywhere for
// the PASSWORD_RECOVERY event the client fires once it parses the link's
// session, and forwards to the page that lets the user set a new password.
export function PasswordRecoveryListener() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const supabase = createClient();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event) => {
      if (
        event === "PASSWORD_RECOVERY" &&
        pathname !== "/reset-password"
      ) {
        router.push("/reset-password");
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [router, pathname]);

  return null;
}
