import { Props } from "@/types/useInsertData.types";
import { SupabaseClient } from "@supabase/supabase-js";

const useInsertData = async (
  client: SupabaseClient,
  { table, data, eqs }: Props
) => {
  const { data: res, error } = await client
    .from(table)
    .insert(data)
    .eq(...eqs);

  return { res, error };
};

export { useInsertData };
