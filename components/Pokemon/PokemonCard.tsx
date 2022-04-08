import { PokemonList } from '../../interfaces';
import { FC } from 'react';
import { Card, Grid, Row, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';

interface Props {
	pokemon: PokemonList;
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {
	const { id, name, img } = pokemon;

	const router = useRouter();

	const onClick = () => {
		router.push(`/pokemon/${pokemon.id}`);
	};

	return (
		<Grid xs={12} sm={6} md={2} xl={1}>
			<Card hoverable clickable onClick={onClick}>
				<Card.Body css={{ p: 1 }}>
					<Card.Image src={img} width='100%' height={200} />
				</Card.Body>
				<Card.Footer>
					<Row justify='space-between'>
						<Text>
							<strong> # </strong>
							{id}
						</Text>
						<Text transform='capitalize'>
							<strong>{name}</strong>
						</Text>
					</Row>
				</Card.Footer>
			</Card>
		</Grid>
	);
};
