import '../styles/globals.css';
import { fonts, colors } from '../styles/theme';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Component {...pageProps} />
			<style jsx global>{`
				.orange {
					color: ${colors.orange};
				}
				.dark-orange {
					color: ${colors.darkOrange};
				}
				html,
				body {
					padding: 0;
					margin: 0;
					font-family: ${fonts.base};
				}
			`}</style>
		</>
	);
}

export default MyApp;
