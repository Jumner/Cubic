import { Flex, Heading } from '@chakra-ui/react';

function NavLink({ page, url, children }) {
	return (
		<Heading
			as="a"
			href={`/${url}`}
			color={page == children ? 'site.blue' : ''}
			_hover={{ color: 'site.green.500' }}
		>
			{children}
		</Heading>
	);
}

export default function Header({ page }) {
	return (
		<Flex
			w="100vw"
			bg="site.gray"
			p="5"
			px="10"
			justify="space-between"
			color="white"
		>
			<Heading color="site.green.500">Cubic</Heading>
			<Flex justify="space-evenly" gap="10">
				<NavLink page={page} url="">
					Home
				</NavLink>
				<NavLink page={page} url="design">
					Design
				</NavLink>
				<NavLink page={page} url="hardware">
					Hardware
				</NavLink>
				<NavLink page={page} url="control">
					Control
				</NavLink>
			</Flex>
		</Flex>
	);
}
