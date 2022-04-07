import Head from 'next/head';
import { Hero } from '../components/Hero/Hero';
import { Layout } from '../components/Layout/Layout';
import { NextPage, GetStaticProps } from 'next';
import { pokemon } from '../api';
import { PokemonList, PokemonResult } from '../interfaces';

interface Props {
	pokemons: PokemonList[];
}

const Home: NextPage<Props> = ({ pokemons }) => {
	console.log(pokemons);
	return (
		<>
			<Head>
				<title>Houm Challenge</title>
				<meta name='description' content='' />
				<link rel='icon' href='https://houm.com/static/brandImage/houmLogo.svg' />
			</Head>

			<Layout>
				<ul>
					{pokemons.map(({ id, name }) => (
						<li key={id}>
							#{id} - {name}
						</li>
					))}
				</ul>
			</Layout>
			<style jsx>{``}</style>
		</>
	);
};

export const getStaticProps: GetStaticProps = async (ctx) => {
	const { data } = await pokemon.get<PokemonResult>('/pokemon?limit=10');
	console.log(data);

	const pokemons: PokemonList[] = data.results.map((p, i) => ({
		...p,
		id: i + 1,
		img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
			i + 1
		}.svg`,
	}));
	// const pokemons: PokemonList[] = data.results.map((p) => ({
	// 	...p,
	// 	id: parseInt(p.url.substr(-2)),
	// 	img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${p.url.substr(
	// 		-2
	// 	)}.svg`,
	// }));
	return {
		props: {
			pokemons,
		}, // will be passed to the page component as props
	};
};

export default Home;
