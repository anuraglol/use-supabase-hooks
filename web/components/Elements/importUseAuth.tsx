import { Flex, Text } from "@chakra-ui/react";
import { FC } from "react";
import { motion } from "framer-motion";

const ImportCode: FC = () => {
  return (
    <motion.div
      animate={{
        y: [0, 6, 0, -6, 0],
        transition: {
          delay: 1,
          repeat: Infinity,
          ease: "linear",
          duration: 2,
          type: "tween",
        },
      }}
      style={{
        rotate: "8deg",
      }}
    >
      <Flex
        bgColor="accent.glass"
        rounded="xl"
        justifyContent="center"
        alignItems="center"
        fontSize="md"
        fontFamily="fira"
        gap="3"
        border="2px solid"
        borderColor="accent.border"
        mt="6"
        textColor="white"
        px="6"
        h="10"
        mb="2"
      >
        <Text textColor="code.purple">import</Text>
        <Text textColor="code.pink">{` { useAuth } `}</Text>
        <Text textColor="code.purple">from</Text>
        <Text textColor="code.green">{` "use-supabase-hooks"`}</Text>
      </Flex>
    </motion.div>
  );
};

export default ImportCode;
