import '../styles/globals.js';
import type { AppProps } from 'next/app';
import { globalStyles } from '../styles/globals';
import { NextUIProvider } from '@nextui-org/react';
import { darkTheme } from '../themes';
import { lightTheme } from '../themes';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<NextUIProvider theme={lightTheme}>
			<Component {...pageProps} />
			<style jsx global>
				{globalStyles}
			</style>
		</NextUIProvider>
	);
}

export default MyApp;
