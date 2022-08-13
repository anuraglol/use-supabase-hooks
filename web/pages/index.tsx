import { Box, Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import {
  HeroText,
  MainCodeBlock,
  ImportUseUser,
  ImportUseAuth,
  Footer,
} from "../components";

const Home: NextPage = () => {
  return (
    <Box
      minH="100vh"
      w="full"
      bgColor="accent.black"
      display="flex"
      flexDirection="column"
      alignItems="center"
      bgImage="url(/assets/bg.svg)"
      bgSize="cover"
      fontFamily="GT"
    >
      <HeroText />
      <Flex w="full" justifyContent="space-between" my="8" px="10">
        <ImportUseUser />

        <ImportUseAuth />
      </Flex>
      <MainCodeBlock />

      <Footer />
    </Box>
  );
};

export default Home;
