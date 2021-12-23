import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Heading,
	Text,
} from '@chakra-ui/react';
import Page from './components/Page';

function Item({ title, children }) {
	return (
		<AccordionItem>
			<Heading>
				<AccordionButton>
					<AccordionIcon></AccordionIcon>
					<Box>{title}</Box>
				</AccordionButton>
			</Heading>
			<AccordionPanel>{children}</AccordionPanel>
		</AccordionItem>
	);
}

export default function Challenges() {
	return (
		<Page name="Challenges">
			<Heading fontSize="6xl">Challenges</Heading>
			<Text fontSize="large">
				A list of all the challenges I have faced and how I overcame them.
			</Text>
			<Text fontSize="large">
				This has been the single most difficult thing I have ever done. So there
				are a lot of problems I had.
			</Text>
			<Accordion allowMultiple="true" w="full" p="10">
				<Item title="test">hello</Item>
			</Accordion>
		</Page>
	);
}
