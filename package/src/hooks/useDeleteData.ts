import { Props } from "@/types/useDeleteData.types";
import { SupabaseClient } from "@supabase/supabase-js";

const useDeleteData = async (
  client: SupabaseClient,
  table: string,
  { eqs }: Props
) => {
  const { data, error } = await client
    .from(table)
    .delete()
    .eq(`${Object.keys(eqs).map((key) => key)}`, `${Object.values(eqs)}`);

  return { data, error };
};

export { useDeleteData };
