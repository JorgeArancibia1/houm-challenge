import css from 'styled-jsx/css';
import { breakpoints } from '../../styles/theme';

export default css`
	.vw100 {
		width: 100vw;
	}
	/* .atitle,
	.atitle,
	.atitle:hover,
	.atitle:focus,
	.atitle:active {
		text-decoration: underline;
	} */
	@media (min-width: ${breakpoints.mobile}) {
		.title {
			margin: 0;
			font-size: 3rem;
		}
	}
`;
