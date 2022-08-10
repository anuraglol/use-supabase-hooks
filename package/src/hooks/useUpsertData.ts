import { Props } from "@/types/useInsertData.types";
import { PostgrestError, SupabaseClient } from "@supabase/supabase-js";
import { useState } from "react";

const useUpsertData = async (
  client: SupabaseClient,
  table: string,
  { data, eqs }: Props
) => {
  const [res, setRes] = useState<any[]>();
  const [error, setErr] = useState<PostgrestError>();

  const upsertData = async () => {
    const { data: response, error: err } = await client
      .from(table)
      .upsert(data)
      .eq(`${Object.keys(eqs).map((key) => key)}`, `${Object.values(eqs)}`);

    setRes(response);
    setErr(err);
  };

  upsertData();

  return { res, error };
};

export { useUpsertData };
