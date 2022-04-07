import css from 'styled-jsx/css';
import { breakpoints } from '../../styles/theme';

export default css`
	.vw100 {
		width: 100vw;
	}
	.title,
	.description {
		text-align: center;
	}
	.main {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.title,
	.description {
		text-align: center;
	}
	.title a:hover,
	.title a:focus,
	.title a:active {
		text-decoration: underline;
	}
	.footer {
		display: flex;
		flex: 1;
		padding: 2rem 0;
		border-top: 1px solid #eaeaea;
		justify-content: center;
		align-items: center;
	}
	.footer a {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-grow: 1;
	}
	@media (min-width: ${breakpoints.mobile}) {
		.title {
			margin: 0;
			font-size: 3rem;
		}
	}
`;
