import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useUser, useSelectData, useSupabase } from "use-supabase-auth";

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
