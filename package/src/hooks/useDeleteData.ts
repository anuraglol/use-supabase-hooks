import { Props } from "@/types/useDeleteData.types";
import { PostgrestError, SupabaseClient } from "@supabase/supabase-js";
import { useState } from "react";

const useDeleteData = async (
  client: SupabaseClient,
  table: string,
  { eqs }: Props
) => {
  const [res, setRes] = useState<any[]>();
  const [error, setErr] = useState<PostgrestError>();

  const deleteData = async () => {
    const { data: res, error: err } = await client
      .from(table)
      .delete()
      .eq(`${Object.keys(eqs).map((key) => key)}`, `${Object.values(eqs)}`);

    setRes(res);
    setErr(err);
  };

  deleteData();

  return { res, error };
};

export { useDeleteData };
