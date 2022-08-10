import { Props } from "@/types/useInsertData.types";
import { PostgrestError, SupabaseClient } from "@supabase/supabase-js";
import { useState } from "react";

const useInsertData = (
  client: SupabaseClient,
  table: string,
  { data, eqs }: Props
) => {
  const [res, setRes] = useState<any[]>();
  const [error, setErr] = useState<PostgrestError>();

  const insertData = async () => {
    const { data: response, error: err } = await client
      .from(table)
      .insert(data)
      .eq(`${Object.keys(eqs).map((key) => key)}`, `${Object.values(eqs)}`);

    setRes(response);
    setErr(err);
  };

  insertData();

  return { res, error };
};

export { useInsertData };
