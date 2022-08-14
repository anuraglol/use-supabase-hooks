import { Props } from "@/types/usePropData.types";
import { SupabaseClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { Props as ReturnProps } from "@/types/returnData.types";

const useInsertData = (
  client: SupabaseClient,
  table: string,
  { data }: Props
) => {
  const [res, setData] = useState<ReturnProps>({
    res: [],
    loading: true,
    error: null,
  });
  useEffect(() => {
    const insertData = async () => {
      const { data: response, error: err } = await client
        .from(table)
        .insert(data);

      setData({
        res: response,
        loading: false,
        error: err,
      });
    };

    insertData();
  }, [client, table, data]);

  return res;
};

export { useInsertData };
