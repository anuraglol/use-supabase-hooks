import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import { HeroText } from "../components";

const Home: NextPage = () => {
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
    </Box>
  );
};

export default Home;
