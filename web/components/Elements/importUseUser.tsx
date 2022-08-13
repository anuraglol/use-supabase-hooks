import { Flex, Text } from "@chakra-ui/react";
import { FC } from "react";
import { motion } from "framer-motion";

const ImportCode: FC = () => {
  return (
    <Flex
      bgColor="#07070899"
      rounded="xl"
      justifyContent="center"
      alignItems="center"
      fontSize="md"
      fontFamily="fira"
      gap="3"
      border="2px solid #700BF04F"
      mt="8"
      textColor="white"
      px="6"
      height="10"
      transform="rotate(-5deg)"
      as={motion.div}
    >
      <Text textColor="code.purple">import</Text>
      <Text textColor="code.pink">{` { useUser } `}</Text>
      <Text textColor="code.purple">from</Text>
      <Text textColor="code.green">{` "use-supabase-hooks"`}</Text>
    </Flex>
  );
};

export default ImportCode;
