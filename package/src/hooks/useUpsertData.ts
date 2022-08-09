import { Props } from "@/types/useInsertData.types";
import { SupabaseClient } from "@supabase/supabase-js";

const useUpsertData = async (
  client: SupabaseClient, table: string,
  { data, eqs }: Props
) => {
  const { data: res, error } = await client
    .from(table)
    .upsert(data)
    .eq(`${Object.keys(eqs).map((key) => key)}`, `${Object.values(eqs)}`);

  return { res, error };
};

export { useUpsertData };
