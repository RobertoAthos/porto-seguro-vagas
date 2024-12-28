const isDev = process.env.NODE_ENV !== "development";

export const config = {
  supabaseUrl: isDev
    ? process.env.DEV_SUPABASE_URL
    : process.env.PROD_SUPABASE_URL,
  supabaseAnonKey: isDev
    ? process.env.DEV_SUPABASE_ANON_KEY
    : process.env.PROD_SUPABASE_ANON_KEY,
};