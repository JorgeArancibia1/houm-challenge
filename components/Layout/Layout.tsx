import { FC } from 'react';
import styles from './layoutStyle';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Navbar } from '../Ui';

export const Layout: FC = ({ children }) => {
	return (
		<>
			<Header />
			<Navbar />
			<main className='main'>{children}</main>
			<Footer />
			<style jsx>{styles}</style>
		</>
	);
};
