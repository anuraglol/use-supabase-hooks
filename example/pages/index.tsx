import { Box } from "@chakra-ui/react";
import { SupabaseClient } from "@supabase/supabase-js";
import type { NextPage } from "next";
import { useUser, useReadData, useSupabase } from "use-supabase-auth";
import { supabase } from "../utils/supabase";

const Home: NextPage = () => {
  const client = useSupabase(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PK!
  );

  const { user, loading } = useUser(client);
  console.log(user);

  return <Box minH="100vh" w="full" bg="#010101"></Box>;
};

export default Home;
