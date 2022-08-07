import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { useState } from "react";

const useSupabase = (SUPABASE_URL: string, SUPABASE_PK: string) => {
  const [supabase, setSupabase] = useState<SupabaseClient>();
  const client = createClient(SUPABASE_URL, SUPABASE_PK);

  setSupabase(client);
  return supabase;
};

export { useSupabase };
