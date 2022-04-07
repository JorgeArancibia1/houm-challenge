import Head from 'next/head';
import { Hero } from '../components/Hero/Hero';
import { Layout } from '../components/Layout/Layout';
import { NextPage, GetStaticProps } from 'next';
import { pokemon } from '../api';
import { PokemonList, PokemonResult } from '../interfaces';
import { Card, Grid, Row, Text } from '@nextui-org/react';

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
				<Grid.Container gap={2} justify='flex-start'>
					{pokemons.map(({ id, name, img }) => (
						<Grid xs={12} sm={6} md={2} xl={1} key={id}>
							<Card hoverable clickable>
								<Card.Body css={{ p: 1 }}>
									<Card.Image src={img} width='100%' />
								</Card.Body>
								<Card.Footer>
									<Row justify='space-between'>
										<Text>#{id}</Text>
										<Text transform='capitalize'>{name}</Text>
									</Row>
								</Card.Footer>
							</Card>
						</Grid>
					))}
				</Grid.Container>
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
