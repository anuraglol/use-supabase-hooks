import { Props } from "@/types/usePropData.types";
import { SupabaseClient } from "@supabase/supabase-js";
import { useState } from "react";
import { Props as ReturnProps } from "@/types/returnData.types";

const useUpdateData = (
  client: SupabaseClient,
  table: string,
  { data, eqs }: Props
) => {
  const [res, setData] = useState<ReturnProps>({
    res: [],
    loading: true,
    error: null,
  });

  const updateData = async () => {
    const { data: response, error: err } = await client
      .from(table)
      .update(data)
      .eq(`${Object.keys(eqs).map((key) => key)}`, `${Object.values(eqs)}`);

    setData({
      res: response,
      loading: true,
      error: err,
    });
  };

  updateData();

  return res;
};

export { useUpdateData };
