import { Text, Link } from '@nextui-org/react';
import Image from 'next/image';
import { colors } from '../../styles/theme';

export const Footer = () => {
	return (
		<footer className='footer d-flex-center'>
			<Text
				css={{
					color: colors.blackFont,
					'@xsMax': { fontSize: '0.8em' },
					'@xs': { fontSize: '1em' },
					'@sm': { fontSize: '1em' },
					'@md': { fontSize: '1.1em' },
					'@lg': { fontSize: '1.3em' },
				}}
			>
				Made by
				<Link
					href='https://github.com/JorgeArancibia1'
					css={{
						color: colors.darkOrange,
						fontWeight: 'bold',
						'@xsMax': { fontSize: '1em' },
						'@xs': { fontSize: '1em' },
						'@sm': { fontSize: '1em' },
						'@md': { fontSize: '1em' },
						'@lg': { fontSize: '1em' },
					}}
				>
					&nbsp;Jorge Arancibia&nbsp;
				</Link>
			</Text>
			<Text
				css={{
					color: colors.blackFont,
					'@xsMax': { fontSize: '0.8em' },
					'@xs': { fontSize: '1em' },
					'@sm': { fontSize: '1em' },
					'@md': { fontSize: '1.1em' },
					'@lg': { fontSize: '1.3em' },
				}}
			>
				for Houm ❤️
			</Text>
			<span>
				<Image
					src='https://houm.com/static/brandImage/houmLogo.svg'
					alt='Vercel Logo'
					width={72}
					height={16}
				/>
			</span>
		</footer>
	);
};
