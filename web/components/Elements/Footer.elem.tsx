import { Flex, Text } from "@chakra-ui/react";
import { FC } from "react";
import { ArrowIcon } from "../Icons";
import { motion } from "framer-motion";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <Flex
      w="full"
      justifyContent="space-between"
      px="32"
      textColor="white"
      fontFamily="GT"
      fontSize="lg"
      pos="fixed"
      bottom="0"
      mb="8"
    >
      <motion.div
        whileHover={{
          scale: 0.99,
        }}
        transition={{
          type: "spring",
          duration: 0.25,
        }}
      >
        <Link href="https://github.com/kr-anurag/use-supabase-hooks" passHref>
          <Flex
            bg="rgba(0, 0, 0, 0.25)"
            py="2"
            px="6"
            rounded="xl"
            border="2px solid"
            borderColor="rgba(168, 85, 247, 0.3)"
            gap="1"
            align="center"
            cursor="pointer"
            as="a"
            target="_blank"
            rel="noopener"
          >
            This project is open source on
            <Text as="span" color="code.purple" fontWeight="medium">
              Github
            </Text>
            <ArrowIcon />
          </Flex>
        </Link>
      </motion.div>
      <motion.div
        whileHover={{
          scale: 0.99,
        }}
        transition={{
          type: "spring",
          duration: 0.25,
        }}
      >
        <Link href="https://anurag.tech" passHref>
          <Flex
            bg="rgba(0, 0, 0, 0.25)"
            py="2"
            px="6"
            rounded="xl"
            border="2px solid"
            borderColor="rgba(168, 85, 247, 0.3)"
            gap="1"
            align="center"
            cursor="pointer"
            as="a"
            target="_blank"
            rel="noopener"
          >
            Made with
            <Text as="span" color="code.purple" fontWeight="medium">
              💜
            </Text>
            by Anurag
            <ArrowIcon />
          </Flex>
        </Link>
      </motion.div>
    </Flex>
  );
};

export default Footer;
