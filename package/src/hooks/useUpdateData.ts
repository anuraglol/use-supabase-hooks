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
      .eq(eqs[0], eqs[1]);

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
