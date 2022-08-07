import { SupabaseClient } from "@supabase/supabase-js";
import { useSelectDataProps } from "../@types/useSelect.types";

const useSelectData = async (
  client: SupabaseClient,
  { table, picks, count }: useSelectDataProps
) => {
  const { data, error } = await client
    .from(table)
    .select(`${picks}`, { count: count });

  return { data, error };
};

export { useSelectData };
