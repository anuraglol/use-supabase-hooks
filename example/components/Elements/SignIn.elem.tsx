import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { FC } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FiTwitter } from "react-icons/fi";
import { TbBrandGoogle } from "react-icons/tb";

const SignIn: FC = () => {
  return (
    <Flex
      bgColor="#07070899"
      px="10"
      py="12"
      rounded="lg"
      border="3px solid #BD8AFF9C"
      w="xl"
      direction="column"
      gap="4"
      alignItems="center"
    >
      <Input
        bg="#040108"
        h="12"
        w="lg"
        rounded="xl"
        border="2px solid #fff"
        outline="none"
        placeholder="eddiemunson@st.com"
        _placeholder={{ fontSize: "lg" }}
      />

      <Button
        bgColor="#A855F7"
        _hover={{}}
        _active={{}}
        _focus={{}}
        textColor="white"
        fontWeight="500"
        w="40"
        display="flex"
        alignItems="center"
        gap="2"
        fontSize="17px"
      >
        <MdOutlineEmail size={22} />
        Continue
      </Button>

      <Text fontSize="2xl" fontWeight="700" textColor="white">
        OR
      </Text>

      <Button
        bgColor="#A855F7"
        _hover={{}}
        _active={{}}
        _focus={{}}
        textColor="white"
        fontWeight="500"
        w="72"
        display="flex"
        alignItems="center"
        gap="2"
        fontSize="17px"
      >
        <TbBrandGoogle size={23} />
        Continue with Google
      </Button>

      <Button
        bgColor="#A855F7"
        _hover={{}}
        _active={{}}
        _focus={{}}
        textColor="white"
        fontWeight="500"
        w="72"
        display="flex"
        alignItems="center"
        gap="2"
        fontSize="17px"
      >
        <FiTwitter size={22} />
        Continue with Twitter
      </Button>
    </Flex>
  );
};

export default SignIn;
