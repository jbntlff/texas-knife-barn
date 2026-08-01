function requireEnv(
  name: string,
) {
  const value =
    process.env[name];

  if (!value) {
    throw new Error(
      `Missing required environment variable: ${name}`,
    );
  }

  return value;
}

function requireNumberEnv(
  name: string,
) {
  const value =
    requireEnv(name);

  const parsed =
    Number(value);

  if (Number.isNaN(parsed)) {
    throw new Error(
      `Environment variable ${name} must be a number.`,
    );
  }

  return parsed;
}

export const env = {
  supabaseUrl:
    requireEnv("SUPABASE_URL"),

  publicSupabaseUrl:
    requireEnv(
      "NEXT_PUBLIC_SUPABASE_URL",
    ),

  publicSupabaseAnonKey:
    requireEnv(
      "NEXT_PUBLIC_SUPABASE_ANON_KEY",
    ),

  supabaseServiceRoleKey:
    requireEnv(
      "SUPABASE_SERVICE_ROLE_KEY",
    ),

  storefrontUrl:
    requireEnv(
      "NEXT_PUBLIC_STOREFRONT_URL",
    ),

  mailpitHost:
    process.env.MAILPIT_HOST ??
    "127.0.0.1",

  mailpitPort:
    process.env.MAILPIT_PORT
      ? requireNumberEnv(
          "MAILPIT_PORT",
        )
      : 1025,
} as const;