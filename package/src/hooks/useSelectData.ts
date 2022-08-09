import { SupabaseClient } from "@supabase/supabase-js";
import { useSelectDataProps } from "@/types/useSelect.types";

const useSelectData = async (
  client: SupabaseClient,
  table: string,
  { picks, count, eqs }: useSelectDataProps
) => {
  const { data, error } = await client
    .from(table)
    .select(`${picks}`, { count: count })
    .eq(`${Object.keys(eqs).map((key) => key)}`, `${Object.values(eqs)}`);

  return { data, error };
};

export { useSelectData };
