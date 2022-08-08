import { SupabaseClient } from "@supabase/supabase-js";
import { useSelectDataProps } from "@/types/useSelect.types";

const useSelectData = async (
  client: SupabaseClient,
  { table, picks, count, eqs }: useSelectDataProps
) => {
  const { data, error } = await client
    .from(table)
    .select(`${picks}`, { count: count })
    .eq(`${eqs[0]}`, `${eqs[1]}`);

  return { data, error };
};

export { useSelectData };
