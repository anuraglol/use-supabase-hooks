import { Flex, Text } from "@chakra-ui/react";
import { FC } from "react";
import { motion } from "framer-motion";

const ImportCode: FC = () => {
  return (
    <motion.div
      animate={{
        y: [0, -5, 0, 5, 0],
        transition: {
          delay: 1,
          repeat: Infinity,
          ease: "linear",
          duration: 2,
          type: "tween",
        },
      }}
      style={{
        rotate: "-5deg",
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
        mt="8"
        textColor="white"
        px="6"
        height="10"
      >
        <Text textColor="code.purple">import</Text>
        <Text textColor="code.pink">{` { useUser } `}</Text>
        <Text textColor="code.purple">from</Text>
        <Text textColor="code.green">{` "use-supabase-hooks"`}</Text>
      </Flex>
    </motion.div>
  );
};

export default ImportCode;
