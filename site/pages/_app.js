import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';

import '@fontsource/rowdies';
import '@fontsource/cabin';

export default function App({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}
