import Head from 'next/head';
import { Layout } from '../components/Layout/Layout';
import { NextPage, GetStaticProps } from 'next';
import { pokemon } from '../api';
import { PokemonList, PokemonResult } from '../interfaces';
import { Grid } from '@nextui-org/react';
import { PokemonCard } from '../components/Pokemon';
import { Pagination } from '@nextui-org/react';

interface Props {
	pokemons: PokemonList[];
}

let quantity = 0;

const Home: NextPage<Props> = ({ pokemons }) => {
	// const [quantity, setQuantityPokes] = useState(2);
	// console.log(pokemons);

	const onChange = (e) => {
		console.log(e);
		if (e === 1) {
			quantity = 1;
		}
		if (e === 2) {
			quantity = 6;
		}
	};
	return (
		<>
			<Head>
				<title>Houm Challenge</title>
				<meta name='description' content='' />
				<meta name='author' content='Jorge Arancibia' />
				<link rel='icon' href='https://houm.com/static/brandImage/houmLogo.svg' />
			</Head>

			<Layout>
				<Grid.Container gap={2} justify='flex-start'>
					{pokemons.map((pokemon) => (
						<PokemonCard key={pokemon.id} pokemon={pokemon} />
					))}
				</Grid.Container>
				<Pagination rounded onChange={onChange} total={5} initialPage={1} />;
			</Layout>
		</>
	);
};

export const getStaticProps: GetStaticProps = async (ctx) => {
	console.log('Q => ', quantity);
	quantity = 11;
	const { data } = await pokemon.get<PokemonResult>(
		`/pokemon?limit=${quantity}&offset=3`
	);

	const converterId = (data, i) => {
		let a = [];

		i < 9
			? a.push(
					data.results[i].url.substring(0, data.results[i].url.length - 1).substr(-1)
			  )
			: a.push(
					data.results[i].url.substring(0, data.results[i].url.length - 1).substr(-2)
			  );

		console.log('RESULT => ', a);
		return a;
	};

	// const pokemons: PokemonList[] = data.results.map((p, i) => ({
	// 	...p,
	// 	id: i + 1,
	// 	img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
	// 		i + 1
	// 	}.svg`,
	// }));

	const pokemons: PokemonList[] = data.results.map((p, i) => ({
		...p,
		id:
			i >= 9
				? parseInt(p.url.substring(0, p.url.length - 1).substr(-2))
				: parseInt(p.url.substring(0, p.url.length - 1).substr(-1)),
		img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${converterId(
			data,
			i
		)}.svg`,
	}));
	return {
		props: {
			pokemons,
		},
	};
};

export default Home;
