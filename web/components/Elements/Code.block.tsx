import { Flex, Text } from "@chakra-ui/react";

const MainCodeBlock = () => {
  return (
    <Flex
      bgColor="#07070899"
      rounded="lg"
      fontSize="md"
      fontFamily="fira"
      border="2px solid #700BF04F"
      mt="6"
      textColor="white"
      p="4"
      direction="column"
    >
      <Flex gap="2">
        <Text textColor="code.purple">import</Text>
        <Text textColor="code.pink">{` { useSelectData } `}</Text>
        <Text textColor="code.purple">from</Text>
        <Text textColor="code.green">{` "use-supabase-hooks"`}</Text>
      </Flex>

      <Flex gap="2" mt="4">
        <Text textColor="code.purple">const</Text>
        <Text textColor="code.pink">{` { data, loading, error } `}</Text>
        <Text textColor="code.purple">{`=`}</Text>
        <Text textColor="code.pink">{`useSelectData(client,`}</Text>
      </Flex>

      <Flex gap="2" ml="4">
        <Text textColor="code.green">{`"users",`}</Text>
      </Flex>

      <Text textColor="code.white" ml="4">{`{`}</Text>
      <Flex gap="2" ml="8">
        <Text textColor="code.pink">{`eqs:`}</Text>
        <Flex>
          <Text textColor="code.white">{`[`}</Text>
          <Text textColor="code.green">{`"id",`}</Text>
          <Text textColor="code.white">{` 1`}</Text>
          <Text textColor="code.white">{`]`}</Text>
        </Flex>
      </Flex>
      <Text textColor="code.white" ml="4">{`}`}</Text>
      <Text textColor="code.white">{`)`}</Text>
    </Flex>
  );
};

export default MainCodeBlock;
