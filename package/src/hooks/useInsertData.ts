import { Props } from "@/types/usePropData.types";
import { SupabaseClient } from "@supabase/supabase-js";
import { useState } from "react";
import { Props as ReturnProps } from "@/types/returnData.types";

const useInsertData = (
  client: SupabaseClient,
  table: string,
  { data, eqs }: Props
) => {
  const [res, setData] = useState<ReturnProps>({
    res: [],
    loading: true,
    error: null,
  });

  const insertData = async () => {
    const { data: response, error: err } = await client
      .from(table)
      .insert(data)
      .eq(`${Object.keys(eqs).map((key) => key)}`, `${Object.values(eqs)}`);

    setData({
      res: response,
      loading: false,
      error: err,
    });
  };

  insertData();

  return res;
};

export { useInsertData };
