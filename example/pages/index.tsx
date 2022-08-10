import { Box, Button, Input, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useEffect } from "react";
import { useSupabase, useUser, useSelectData } from "use-supabase-auth";
import { HeroText, SignIn, UserElem } from "../components";

const Home: NextPage = () => {
  const client = useSupabase(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PK!
  );

  const { user } = useUser(client);

  console.log(user);

  return (
    <Box
      minH="100vh"
      w="full"
      bgColor="#040108"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap="16"
      bgImage="url(/assets/bg.svg)"
      bgSize="cover"
      fontFamily="GT"
    >
      <HeroText />

      <SignIn />
    </Box>
  );
};

export default Home;
