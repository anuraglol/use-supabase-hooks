import { Props } from "@/types/usePropData.types";
import { SupabaseClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { Props as ReturnProps } from "@/types/returnData.types";

const useUpsertData = async (
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
    const upsertData = async () => {
      const { data: response, error: err } = await client
        .from(table)
        .upsert(data);

      setData({
        res: response,
        loading: true,
        error: err,
      });
    };

    upsertData();
  }, [client, table, data]);

  return res;
};

export { useUpsertData };
