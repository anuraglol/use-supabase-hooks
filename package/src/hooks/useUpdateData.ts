import { Props } from "@/types/useInsertData.types";
import { SupabaseClient } from "@supabase/supabase-js";

const useUpdateData = async (
  client: SupabaseClient,
  { table, data, eqs }: Props
) => {
  const { data: res, error } = await client
    .from(table)
    .update(data)
    .eq(...eqs);

  return { res, error };
};

export { useUpdateData };
