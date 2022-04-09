import css from 'styled-jsx/css';
import { colors, fonts, margin } from './theme';

export const globalStyles = css.global`
	.orange {
		color: ${colors.orange};
	}
	.dark-orange {
		color: ${colors.darkOrange};
	}
	.d-flex-center {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.d-flex-around {
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.m1 {
		margin: ${margin.m1};
	}
	.m2 {
		margin: ${margin.m2};
	}
	.m3 {
		margin: ${margin.m3};
	}
	.m5 {
		margin: ${margin.m5};
	}
	.m10 {
		margin: ${margin.m10};
	}
	.ml-5 {
		margin-left: 3%;
	}
	.border-red {
		border: 1px solid red;
	}
	html,
	body {
		padding: 0;
		margin: 0;
		font-family: ${fonts.base};
	}
	a {
		color: inherit;
		text-decoration: none !important;
	}
	* {
		box-sizing: border-box;
	}
	ul,
	li {
		list-style: none;
		display: flex;
		margin: 0 15px;
	}
`;
