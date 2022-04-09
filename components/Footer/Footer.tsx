import { Text, Link, Container, Row, Image } from '@nextui-org/react';
import { colors } from '../../styles/theme';

export const Footer = () => {
	return (
		<Container>
			<Row justify='center' align='center'>
				<Row>
					<Text
						b
						css={{
							color: colors.blackFont,
							'@xsMax': { fontSize: '0.8rem' },
							'@xs': { fontSize: '0.9rem' },
							'@sm': { fontSize: '1rem' },
							'@md': { fontSize: '1.1rem' },
							'@lg': { fontSize: '1.2rem' },
						}}
					>
						Made by
					</Text>
					<Link
						href='https://github.com/JorgeArancibia1'
						css={{
							color: colors.darkOrange,
							fontWeight: 'bold',
							'@xsMax': { fontSize: '1rem' },
							'@xs': { fontSize: '1rem' },
							'@sm': { fontSize: '1.1rem' },
							'@md': { fontSize: '1.2rem' },
							'@lg': { fontSize: '1.2rem' },
						}}
					>
						&nbsp;Jorge Arancibia&nbsp;
					</Link>
					<Text
						b
						css={{
							color: colors.blackFont,
							'@xsMax': { fontSize: '0.8rem' },
							'@xs': { fontSize: '0.9rem' },
							'@sm': { fontSize: '1rem' },
							'@md': { fontSize: '1.1rem' },
							'@lg': { fontSize: '1.2rem' },
						}}
					>
						for
					</Text>
				</Row>
				<Row>
					<Image
						src='https://houm.com/static/brandImage/houmLogo.svg'
						alt='Vercel Logo'
						width={82}
						height={36}
					/>

					<Text>❤️</Text>
				</Row>
			</Row>
		</Container>
	);
};
