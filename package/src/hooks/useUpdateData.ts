import { Props } from "@/types/useInsertData.types";
import { PostgrestError, SupabaseClient } from "@supabase/supabase-js";
import { useState } from "react";

const useUpdateData = (
  client: SupabaseClient,
  table: string,
  { data, eqs }: Props
) => {
  const [res, setRes] = useState<any[]>();
  const [error, setErr] = useState<PostgrestError>();

  const updateData = async () => {
    const { data: response, error: err } = await client
      .from(table)
      .update(data)
      .eq(`${Object.keys(eqs).map((key) => key)}`, `${Object.values(eqs)}`);

    setRes(response);
    setErr(error);
  };

  updateData();

  return { res, error };
};

export { useUpdateData };
