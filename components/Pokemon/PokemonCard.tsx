import { PokemonList } from '../../interfaces';
import { FC } from 'react';
import { Card, Grid, Row, Text } from '@nextui-org/react';

interface Props {
	pokemon: PokemonList;
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {
	const { id, name, img } = pokemon;
	return (
		<Grid xs={12} sm={6} md={2} xl={1}>
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
	);
};
