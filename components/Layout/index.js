import { Navbar } from '../Navbar';
import styles from './layoutStyle';
import Footer from '../Footer';
import Header from '../Header';

export const Layout = ({ children }) => {
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
