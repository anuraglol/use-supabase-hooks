import { SupabaseClient } from "@supabase/supabase-js";
import { useState } from "react";

const useReadData = async (
  client: SupabaseClient,
  table: string,
  pick: string,
  eqs?: string,
  eqVal?: string
) => {
  const [loading, setLoading] = useState(true);
  const { data, error } =
    eqs && eqVal
      ? await client.from(table).select(pick).eq(eqs, eqVal)
      : await client.from(table).select(pick);

  setLoading(false);

  return { data, loading, error };
};

export { useReadData };
