import * as React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
	fonts: {
		heading: `'Open Sans', sans-serif`,
		body: `'Raleway', sans-serif`
	},
	colors: {
		light: {
			100: 'rgba(247, 247, 248, 1)',
			200: 'rgba(228, 227, 238, 1)'
		},
		pink: {
			100: 'rgba(245, 188, 219, 1)',
			200: 'rgba(253, 181, 161, 1)'
		},

		purple: {
			100: 'rgba(180, 175, 220, 1)',
			200: 'rgba(116, 9, 66, 1)',
			300: 'rgba(98, 44, 111, 1)',
			400: 'rgb(38, 0, 39)'
		},
		blue: {
			100: 'rgba(175, 220, 217, 1)',
			200: 'rgba(1, 143, 204, 1)',
			300: 'rgba(36, 61, 135, 1)',
			400: 'rgba(18, 27, 59, 1)'
		}
	}
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<ChakraProvider theme={theme}>
		<App />
	</ChakraProvider>
);
