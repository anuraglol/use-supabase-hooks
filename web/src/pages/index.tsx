import { Box, Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import {
	HeroText,
	MainCodeBlock,
	ImportUseUser,
	ImportUseAuth,
	Footer,
} from "@/components";

const Home: NextPage = () => {
	return (
		<Box
			minH="100vh"
			w="full"
			bgColor="accent.black"
			display="flex"
			flexDirection="column"
			alignItems="center"
			bgImage={{
				base: "url(/assets/mobile-bg.svg)",
				md: "url(/assets/bg.svg)",
			}}
			bgSize="cover"
			fontFamily="GT"
		>
			<HeroText />
			<Flex w="full" flexDir={{ base: "column", md: "row" }} justifyContent="space-between" my="8" px={{ base: 4, md: 6, lg: 8 }} experimental_spaceY={{ base: 16, md: 0 }}>
				<ImportUseUser />

				<ImportUseAuth />
			</Flex>
			<MainCodeBlock />

			<Footer />
		</Box>
	);
};

export default Home;
