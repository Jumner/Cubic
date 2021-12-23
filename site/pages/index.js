import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogHeader,
	Button,
	Flex,
	Heading,
	Link,
	Text,
} from '@chakra-ui/react';
import React from 'react';
import Page from './components/Page';

function SiteDialog() {
	const cancelRef = React.useRef();
	const [isOpen, setIsOpen] = React.useState(false);
	React.useEffect(() => {
		if (localStorage.getItem('seen') != 'true') {
			setIsOpen(true);
			localStorage.setItem('seen', 'true');
		}
	}, []);
	const onClose = () => {
		setIsOpen(false);
	};
	return (
		<AlertDialog
			leastDestructiveRef={cancelRef}
			isOpen={isOpen}
			onClose={onClose}
		>
			<AlertDialogContent>
				<AlertDialogHeader bg="site.blue" borderTopRadius="md">
					Hey!
				</AlertDialogHeader>
				<AlertDialogBody>
					Though my main site is built without a single library, I am not scared
					of the bleeding edge.
				</AlertDialogBody>
				<AlertDialogFooter>
					<Button onClick={onClose} colorScheme="site.green">
						Enjoy!
					</Button>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
export default function Home() {
	return (
		<Page name="Home">
			<SiteDialog />
			<Heading>
				An intense project inspired by{' '}
				<Link
					href="https://www.youtube.com/watch?v=n_6p-1J551Y"
					color="site.green.500"
				>
					Cubli
				</Link>
			</Heading>
			<Text fontSize="large">
				The idea was to replicate just the balancing portion, and put my year or
				so of control knowledge to the test. Turns out, I severely
				underestimated the complexity of this project and every aspect pushed me
				to my limits.
			</Text>
			<Heading>The current state of cubic</Heading>
			<Text fontSize="large">
				Sadly, right now, it is not fully working. I am having huge troubles
				with getting my control to translate into the real world. However, I am
				determined to finish it and I{"'"}m sure there is plenty more that I
				will learn in this journey.
			</Text>
			<Heading>Check out the 4 pillars of Cubic</Heading>
			<Flex w="full" justify="space-evenly">
				<Heading>
					<Link color="site.green.500" href="design">
						Design
					</Link>
				</Heading>
				<Heading>
					<Link color="site.green.500" href="hardware">
						Hardware
					</Link>
				</Heading>
				<Heading>
					<Link color="site.green.500" href="control">
						Control
					</Link>
				</Heading>
				<Heading>
					<Link color="site.green.500" href="challenges">
						Challenges
					</Link>
				</Heading>
			</Flex>
		</Page>
	);
}
