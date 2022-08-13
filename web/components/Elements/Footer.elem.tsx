import { Flex, Text } from "@chakra-ui/react";
import { FC } from "react";

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
      <Flex
        bg="rgba(0, 0, 0, 0.25)"
        py="2"
        px="6"
        rounded="xl"
        border="2px solid"
        borderColor="rgba(168, 85, 247, 0.3)"
        gap="1"
      >
        This project is open source on
        <Text as="span" color="code.purple" fontWeight="medium">
          Github
        </Text>
      </Flex>

      <Flex
        bg="rgba(0, 0, 0, 0.25)"
        py="2"
        px="6"
        rounded="xl"
        border="2px solid"
        borderColor="rgba(168, 85, 247, 0.3)"
        gap="1"
      >
        Made with
        <Text as="span" color="code.purple" fontWeight="medium">
          💜
        </Text>
        by Anurag
      </Flex>
    </Flex>
  );
};

export default Footer;
