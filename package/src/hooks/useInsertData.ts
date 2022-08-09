import { Props } from "@/types/useInsertData.types";
import { SupabaseClient } from "@supabase/supabase-js";

const useInsertData = async (
  client: SupabaseClient,
  table: string,
  { data, eqs }: Props
) => {
  const { data: res, error } = await client
    .from(table)
    .insert(data)
    .eq(`${Object.keys(eqs).map((key) => key)}`, `${Object.values(eqs)}`);

  return { res, error };
};

export { useInsertData };
