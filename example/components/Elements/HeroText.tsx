import { Box, Flex, Text, useClipboard } from "@chakra-ui/react";
import Image from "next/image";
import { FC } from "react";
import { toast } from "react-hot-toast";
import { FiCopy } from "react-icons/fi";

const HeroText: FC = () => {
  const { onCopy, hasCopied } = useClipboard("npm i use-supabase-hooks");

  return (
    <Flex direction="column" gap="2" textAlign="center" textColor="white">
      <Flex fontWeight="900" fontSize="4xl" gap="4" alignItems="center">
        <Image
          src="/assets/supabase-logo.svg"
          alt="supabase logo"
          width="40"
          height="52"
        />
        use-supabase-hooks
      </Flex>
      <Text fontSize="xl" fontWeight="500" textColor="#EDEAF1CC">
        React hooks for supabase, type safe!
      </Text>

      <Flex
        bgColor="#07070899"
        px="4"
        h="2.9rem"
        rounded="xl"
        justifyContent="center"
        alignItems="center"
        fontSize="lg"
        fontFamily="fira"
        gap="4"
        border="2px solid #700BF04F"
        mt="6"
      >
        <Flex textColor="#AB71F6">
          npm&nbsp; <Text color="white">i use-supabase-hooks</Text>
        </Flex>

        <FiCopy
          size={22}
          cursor="pointer"
          onClick={() => {
            onCopy();
            toast.success("Copied to clipboard!");
          }}
        />
      </Flex>
    </Flex>
  );
};

export default HeroText;
