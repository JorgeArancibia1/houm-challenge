import Image from 'next/image';
import NextLink from 'next/link';
import { Link, Spacer } from '@nextui-org/react';

export const Header = () => {
	return (
		<header className='d-flex-around'>
			<div className='ml-5'>
				<NextLink href='/' passHref>
					<Link>
						<>
							<Image
								src='https://houm.com/static/brandImage/houmLogo.svg'
								alt='Vercel Logo'
								width={122}
								height={70}
							/>
						</>
					</Link>
				</NextLink>
			</div>
			<Spacer css={{ flex: 1 }} />{' '}
			<h1 className='title vw100'>
				Poke-Houm{' '}
				<Link href='./' color='primary'>
					Challenge
				</Link>
			</h1>
		</header>
	);
};
