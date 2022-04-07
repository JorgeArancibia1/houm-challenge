import Image from 'next/image';

export const Footer = () => {
	return (
		<footer className='footer d-flex-center'>
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
	);
};
