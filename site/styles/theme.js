import { extendTheme } from '@chakra-ui/react';
import { Mode } from '@chakra-ui/theme-tools';
const colours = {
	site: {
		gray: '#1a201a',
		blue: '#1CCAD8',
		green: {
			100: '#b6fcd5',
			200: '#86faba',
			300: '#55f89e',
			400: '#24f682',
			500: '#0CF574',
			600: '#0ac45d',
			700: '#079346',
			800: '#05622e',
			900: '#023117',
		},
	},
};

export const theme = extendTheme({
	colors: colours,
	fonts: { heading: 'Rowdies', body: 'Cabin' },
});
