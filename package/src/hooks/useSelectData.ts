import { SupabaseClient } from "@supabase/supabase-js";
import { useSelectDataProps } from "@/types/useSelect.types";
import { useEffect, useState } from "react";
import { Props } from "@/types/returnData.types";

const useSelectData = (
  client: SupabaseClient,
  table: string,
  { picks, count, eqs }: useSelectDataProps
) => {
  const [data, setData] = useState<Props>({
    res: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await client
        .from(table)
        .select(`${picks}`, { count: count })
        .eq(`${Object.keys(eqs).map((key) => key)}`, `${Object.values(eqs)}`);

      setData({
        res: data,
        loading: false,
        error: error,
      });
    };

    fetchData();
  }, [client, table, picks, count, eqs]);

  return data;
};

export { useSelectData };
