import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '../Navbar';

export const Layout = ({ children }) => {
	return (
		<>
			<header>
				<h1 className='title'>
					Poke-Houm{' '}
					<Link href='/home' passHref>
						<a className='orange'>Challenge</a>
					</Link>
				</h1>
			</header>
			<Navbar />
			<main className='main'>{children}</main>
			<footer className='footer'>
				<a href='https://github.com/JorgeArancibia1'>
					Made by
					<span className='dark-orange'> &nbsp;Jorge Arancibia&nbsp; </span> for Houm ❤️
					<span>
						<Image
							src='https://houm.com/static/brandImage/houmLogo.svg'
							alt='Vercel Logo'
							width={72}
							height={16}
						/>
					</span>
				</a>
			</footer>
			<style jsx>{`
				/* .orange {
					color: #f67c40;
				}
				.dark-orange {
					color: #ff452b;
				} */
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
				.title,
				.description {
					text-align: center;
				}
				.main {
					flex: 1;
					display: flex;
					flex-direction: column;
					/* justify-content: center; */
					align-items: center;
				}
				.title {
					margin: 0;
					line-height: 1.15;
					font-size: 4rem;
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
			`}</style>
		</>
	);
};
