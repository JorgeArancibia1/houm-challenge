import type { AppProps } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';
import { darkTheme } from '../themes';
import { lightTheme } from '../themes';
import { globalStyles } from '../styles/globals.ts';

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
