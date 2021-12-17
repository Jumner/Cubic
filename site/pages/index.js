import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogHeader,
	Button,
	Text,
} from '@chakra-ui/react';
import React from 'react';
import Page from './components/Page';

export default function Home() {
	const cancelRef = React.useRef();
	const [isOpen, setIsOpen] = React.useState(true);
	const onClose = () => setIsOpen(false);
	return (
		<Page name="Home">
			<Text>hello, what is going on?</Text>
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
						Though my main site is built without a single library, I am not
						scared of the bleeding edge.
					</AlertDialogBody>
					<AlertDialogFooter>
						<Button onClick={onClose} colorScheme="site.green">
							Enjoy!
						</Button>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</Page>
	);
}
