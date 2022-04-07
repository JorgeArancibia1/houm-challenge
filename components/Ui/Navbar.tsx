import { colors, breakpoints, fontSize } from '../../styles/theme';

export const Navbar = () => {
	return (
		<div>
			<ul className='d-flex-center'>
				<li>Pokemon</li>
				<li>Otros</li>
			</ul>

			<style jsx>{`
				@media (min-width: ${breakpoints.mobile}) {
					ul,
					li {
						color: ${colors.blackFont};
						font-size: ${fontSize.f20};
					}
					div {
						border-bottom: 1px solid #eaeaea;
						width: 100vw;
					}
				}
			`}</style>
		</div>
	);
};
