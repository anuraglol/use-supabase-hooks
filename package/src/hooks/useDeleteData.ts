import { Props } from "@/types/useDeleteData.types";
import { SupabaseClient } from "@supabase/supabase-js";

const useDeleteData = async (client: SupabaseClient, { table, eqs }: Props) => {
  const { data, error } = await client
    .from(table)
    .delete()
    .eq(...eqs);

  return { data, error };
};

export { useDeleteData };
