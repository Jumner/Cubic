import { Flex, Heading, Link, SimpleGrid, Text } from '@chakra-ui/react';

function Email({ name, children }) {
	return (
		<>
			<Text>{name}</Text>
			<Text as="a" href={'mailto:' + children} ml="5">
				{children}
			</Text>
		</>
	);
}

export default function Footer() {
	return (
		<Flex
			w="full"
			direction="column"
			align="center"
			bg="site.gray"
			color="site.blue"
			borderTop="5px solid"
			borderColor="site.blue"
			p="5"
		>
			<Heading
				w="full"
				textAlign="center"
				color="site.green.500"
				borderBottom="3px solid"
				borderColor="site.green.500"
				borderRadius="3px"
			>
				Thanks for reading!
			</Heading>
			<Text mt="5" fontSize="large">
				You can check out my{' '}
				<Link color="site.green.500" href="https://www.justinfrank.ca">
					main website
				</Link>{' '}
				for contact info
			</Text>
		</Flex>
	);
}
