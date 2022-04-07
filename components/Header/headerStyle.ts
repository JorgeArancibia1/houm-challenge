import css from 'styled-jsx/css';
import { breakpoints } from '../../styles/theme';

export default css`
	.vw100 {
		width: 100vw;
	}

	@media (min-width: ${breakpoints.mobile}) {
		.title {
			margin: 0;
			font-size: 3rem;
		}
	}
`;
