import { Heading, Image, Text } from '@chakra-ui/react';
import Page from './components/Page';
import Render from './../public/img/finalrender.png';
export default function Design() {
	return (
		<Page name="Design">
			<Heading fontSize="6xl">Design</Heading>
			<Text fontSize="large">
				Because this of the nature of this project, everything needed to be
				designed from scratch
			</Text>
			<Image src={Render.src} w="lg" alt="Render" />
		</Page>
	);
}
