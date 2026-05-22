import {
  createServerClient,
} from "@supabase/ssr"

import type { User }
  from "@supabase/supabase-js"

import {
  NextResponse,
  type NextRequest,
} from "next/server"

export async function updateSession(
  request: NextRequest
): Promise<{
  user: User | null
  response: NextResponse
}> {
  let response = NextResponse.next({
    request,
  })

  const supabase = createServerClient(
    process.env.SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },

        setAll(cookiesToSet) {
          cookiesToSet.forEach(
            ({ name, value }) => {
              request.cookies.set(
                name,
                value
              )
            }
          )

          response = NextResponse.next({
            request,
          })

          cookiesToSet.forEach(
            ({ name, value, options }) => {
              response.cookies.set(
                name,
                value,
                options
              )
            }
          )
        },
      },
    }
  )

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()

  console.log(
    "SUPABASE GET USER ERROR",
    error
  )

  return {
    user,
    response,
  }
}
