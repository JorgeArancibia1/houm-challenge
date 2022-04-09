import { FC, ReactNode } from 'react';
import Head from 'next/head';
import { Navbar } from '../Ui';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Switch, useTheme, Container, Row } from '@nextui-org/react';
import { useTheme as useNextTheme } from 'next-themes';
import BrightIcon from './BrightIcon';

interface Props {
	title?: string;
	children: ReactNode;
}

export const Layout: FC<Props> = ({ children, title }) => {
	const { setTheme } = useNextTheme();
	const { isDark } = useTheme();
	return (
		<>
			<Head>
				<title>{title || '¿Quién es ese pokemon?'}</title>
				<meta name='author' content='Jorge Arancibia' />
				<meta name='description' content={`Información sobre el pokémon ${title}`} />
				<meta name='keywords' content={`${title}, pokemon, pokedex`} />
				<link rel='icon' href='https://houm.com/static/brandImage/houmLogo.svg' />
			</Head>
			<Container>
				<Row>
					<Switch
						checked={isDark}
						onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
						css={{ marginTop: '10px' }}
						iconOn={<BrightIcon />}
					/>
				</Row>
			</Container>
			<Header />
			<Navbar />
			<main className='main'>{children}</main>
			<Footer />
		</>
	);
};
