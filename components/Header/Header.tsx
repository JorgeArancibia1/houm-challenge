import NextLink from 'next/link';
import { Container, Link, Text, Grid, Image, Row } from '@nextui-org/react';

export const Header = () => {
	return (
		<Container fluid responsive={true}>
			<Row>
				<Grid.Container gap={0} justify="center" alignItems="center" xs={12}>
					<Grid justify="center" xs={12} sm={12} md={1} lg={1}>
						<NextLink href="/" passHref>
							<Link>
								<>
									<Image
										src="https://houm.com/static/brandImage/houmLogo.svg"
										alt="Houm Logo"
										width={182}
										height={70}
										css={{ margin: 0 }}
									/>
								</>
							</Link>
						</NextLink>
					</Grid>
					<Row fluid justify="center" align="center">
						<Text
							h1
							css={{
								'@xsMax': { fontSize: '1.5em' },
								'@xs': { fontSize: '1.8em' },
								'@sm': { fontSize: '2em' },
								'@md': { fontSize: '2.3em' },
								'@lg': { fontSize: '2.5em' },
							}}
						>
              Poke-Houm{' '}
							<Link href="./" color="primary">
                Challenge
							</Link>
						</Text>
					</Row>
				</Grid.Container>
			</Row>
		</Container>
	);
};
