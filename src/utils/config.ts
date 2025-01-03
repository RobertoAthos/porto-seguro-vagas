const isDev = process.env.NODE_ENV !== "development";

export const config = {
  supabaseUrl: isDev
    ? process.env.NEXT_PUBLIC_DEV_SUPABASE_URL
    : process.env.NEXT_PUBLIC_PROD_SUPABASE_URL,
  supabaseAnonKey: isDev
    ? process.env.NEXT_PUBLIC_DEV_SUPABASE_ANON_KEY
    : process.env.NEXT_PUBLIC_PROD_SUPABASE_ANON_KEY,
};