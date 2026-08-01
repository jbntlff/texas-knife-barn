import { createServerClient } from "@supabase/ssr";

import type { User } from "@supabase/supabase-js";

import {
  NextResponse,
  type NextRequest,
} from "next/server";

import { env } from "@tkb/config";

function clearSupabaseAuthCookies(
  request: NextRequest,
  response: NextResponse,
) {
  const cookies =
    request.cookies.getAll();

  for (const cookie of cookies) {
    if (cookie.name.startsWith("sb-")) {
      response.cookies.set(
        cookie.name,
        "",
        {
          path: "/",
          maxAge: 0,
        },
      );
    }
  }
}

export async function updateSession(
  request: NextRequest,
): Promise<{
  user: User | null;
  response: NextResponse;
}> {
  let response = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    env.publicSupabaseUrl,
    env.publicSupabaseAnonKey,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },

        setAll(cookiesToSet) {
          cookiesToSet.forEach(
            ({ name, value }) => {
              request.cookies.set(
                name,
                value,
              );
            },
          );

          response = NextResponse.next({
            request,
          });

          cookiesToSet.forEach(
            ({
              name,
              value,
              options,
            }) => {
              response.cookies.set(
                name,
                value,
                options,
              );
            },
          );
        },
      },
    },
  );

  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    return {
      user,
      response,
    };
  } catch (error) {
    console.error(
      "updateSession auth error",
      error,
    );

    clearSupabaseAuthCookies(
      request,
      response,
    );

    return {
      user: null,
      response,
    };
  }
}