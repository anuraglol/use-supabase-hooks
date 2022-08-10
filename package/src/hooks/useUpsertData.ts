import { Props } from "@/types/usePropData.types";
import { SupabaseClient } from "@supabase/supabase-js";
import { useState } from "react";
import { Props as ReturnProps } from "@/types/returnData.types";

const useUpsertData = async (
  client: SupabaseClient,
  table: string,
  { data, eqs }: Props
) => {
  const [res, setData] = useState<ReturnProps>({
    res: [],
    loading: true,
    error: null,
  });

  const upsertData = async () => {
    const { data: response, error: err } = await client
      .from(table)
      .upsert(data)
      .eq(`${Object.keys(eqs).map((key) => key)}`, `${Object.values(eqs)}`);

    setData({
      res: response,
      loading: true,
      error: err,
    });
  };

  upsertData();

  return res;
};

export { useUpsertData };
