import { Props } from "@/types/usePropData.types";
import { SupabaseClient } from "@supabase/supabase-js";
import { useState } from "react";
import { Props as ReturnProps } from "@/types/returnData.types";

const useDeleteData = async (
  client: SupabaseClient,
  table: string,
  { eqs }: Props
) => {
  const [res, setData] = useState<ReturnProps>({
    res: [],
    loading: true,
    error: null,
  });

  const deleteData = async () => {
    const { data: res, error: err } = await client
      .from(table)
      .delete()
      .eq(eqs[0], eqs[1]);

    setData({
      res: res,
      loading: true,
      error: err,
    });
  };

  deleteData();

  return res;
};

export { useDeleteData };
