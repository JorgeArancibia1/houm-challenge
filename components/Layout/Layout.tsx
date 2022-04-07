import { FC, ReactNode } from 'react';
import styles from './layoutStyle';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Navbar } from '../Ui';
import Head from 'next/head';

interface Props {
	title?: string;
	children: ReactNode;
}

export const Layout: FC<Props> = ({ children, title }) => {
	return (
		<>
			<Head>
				<title>{title || '¿Quién es ese pokemon?'}</title>
				<meta name='author' content='Jorge Arancibia' />
				<meta name='description' content={`Información sobre el pokémon ${title}`} />
				<meta name='keywords' content={`${title}, pokemon, pokedex`} />
				<link rel='icon' href='https://houm.com/static/brandImage/houmLogo.svg' />
			</Head>
			<Header />
			<Navbar />
			<main className='main'>{children}</main>
			<Footer />
			<style jsx>{styles}</style>
		</>
	);
};
