import '../styles/globals.js';
import { globalStyles } from '../styles/globals';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Component {...pageProps} />
			<style jsx global>
				{globalStyles}
			</style>
		</>
	);
}

export default MyApp;
