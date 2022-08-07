import { createClient, SupabaseClient } from "@supabase/supabase-js";

const useSupabase = (SUPABASE_URL: string, SUPABASE_PK: string) => {
  const client = createClient(SUPABASE_URL, SUPABASE_PK);

  return client as SupabaseClient;
};

export { useSupabase };
