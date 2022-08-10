import { PostgrestError, SupabaseClient } from "@supabase/supabase-js";
import { useSelectDataProps } from "@/types/useSelect.types";
import { useState } from "react";

const useSelectData = (
  client: SupabaseClient,
  table: string,
  { picks, count, eqs }: useSelectDataProps
) => {
  const [res, setRes] = useState<any[]>();
  const [error, setErr] = useState<PostgrestError>();

  const fetchData = async () => {
    const { data, error } = await client
      .from(table)
      .select(`${picks}`, { count: count })
      .eq(`${Object.keys(eqs).map((key) => key)}`, `${Object.values(eqs)}`);

    setRes(data);
    setErr(error);
  };

  fetchData();

  return { res, error };
};

export { useSelectData };
