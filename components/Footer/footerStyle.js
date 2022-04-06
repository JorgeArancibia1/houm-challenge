import css from 'styled-jsx/css';
import { breakpoints } from '../../styles/theme';

export default css`
	@media (min-width: ${breakpoints.mobile}) {
		.footer {
			flex: 1;
			padding: 2rem 0;
			border-top: 1px solid #eaeaea;
		}
	}
`;
