import { Box, Container, Flex, VStack } from '@chakra-ui/react';
import Footer from './Footer';
import Header from './Header';

export default function Page({ children, name }) {
	return (
		<Flex
			direction="column"
			justify="space-between"
			align="center"
			w="full"
			h="full"
		>
			<Header page={name} />
			<VStack p="5" w="95%" justify="space-evenly" h="full">
				{children}
			</VStack>
			<Footer />
		</Flex>
	);
}
