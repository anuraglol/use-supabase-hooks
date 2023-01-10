import { chakra, Flex, Text } from "@chakra-ui/react";

const MainCodeBlock = () => {
	return (
		<Flex
			bgColor="accent.glass"
			rounded="lg"
			fontSize="md"
			fontFamily="fira"
			border="2px solid"
			borderColor="accent.border"
			mt="6"
			textColor="white"
			p="4"
			direction="column"
			mx={4}
		>
			<Text gap="2">
				<chakra.span textColor="code.purple">import</chakra.span>
				<chakra.span textColor="code.pink">{` { useSelectData } `}</chakra.span>
				<chakra.span textColor="code.purple">from</chakra.span>
				<chakra.span textColor="code.green">{` "use-supabase-hooks"`}</chakra.span>
			</Text>

			<Text gap="2" mt="4">
				<chakra.span textColor="code.purple">const</chakra.span>
				<chakra.span textColor="code.pink">{` { data, loading, error } `}</chakra.span>
				<chakra.span textColor="code.white">{`= `}</chakra.span>
				<chakra.span textColor="code.pink">{`useSelectData(client,`}</chakra.span>
			</Text>

			<Text ml={4} textColor="code.green">{`"users",`}</Text>

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
