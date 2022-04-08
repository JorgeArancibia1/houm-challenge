import Head from 'next/head';
import { Layout } from '../components/Layout/Layout';
import { NextPage, GetStaticProps } from 'next';
import { pokemon } from '../api';
import { Pokemon, AllPokemon } from '../interfaces';
import { Grid } from '@nextui-org/react';
import { PokemonCard } from '../components/Pokemon';
import { Pagination } from '@nextui-org/react';
import { IncompletePokemon } from '../interfaces/pokemon';
import { useEffect, useState } from 'react';
import changePagination from '../utils';

interface Props {
	pokemons: Pokemon[];
}

const Home: NextPage<Props> = ({ pokemons }) => {
	const [from, setFrom] = useState(0);

	const filteredPokemon = (): Pokemon[] => {
		return pokemons.slice(from, from + 10);
	};

	const onChange = (e) => {
		changePagination(e, setFrom);
	};

	return (
		<>
			<Head>
				<title>Houm Challenge</title>
				<meta name='author' content='Jorge Arancibia' />
				<link rel='icon' href='https://houm.com/static/brandImage/houmLogo.svg' />
			</Head>

			<Layout>
				<Pagination rounded onChange={onChange} total={5} initialPage={1} />
				<Grid.Container gap={2} justify='flex-start'>
					{filteredPokemon().map((pokemon) => (
						<PokemonCard key={pokemon.id} pokemon={pokemon} />
					))}
				</Grid.Container>
				<Pagination rounded onChange={onChange} total={5} initialPage={1} />
			</Layout>
		</>
	);
};

export const getStaticProps: GetStaticProps = async (ctx) => {
	const fetchAllPokemon = async (): Promise<Pokemon[]> => {
		const { data } = await pokemon.get<AllPokemon>(`/pokemon?limit=50`);
		const smallPokemonList = data.results;
		return transformSmallPokemonIntoPokemon(smallPokemonList);
	};

	const transformSmallPokemonIntoPokemon = (
		smallPokemonList: IncompletePokemon[]
	): Pokemon[] => {
		const pokemonArr: Pokemon[] = smallPokemonList.map(({ url, name }) => {
			const pokeArr = url.split('/');
			console.log(pokeArr);
			const id = pokeArr[6];
			const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
			return {
				id: parseInt(id),
				name,
				url,
				img,
			};
		});
		return pokemonArr;
	};

	const pokemons: Pokemon[] = await fetchAllPokemon();

	return {
		props: {
			pokemons,
		},
	};
};

export default Home;
