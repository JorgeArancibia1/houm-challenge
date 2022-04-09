// Aquí debe ser la exportación por defecto

import { Layout } from '../../components/Layout'
import { GetStaticProps, NextPage } from 'next'
import { CompletePokemon } from '../../interfaces'
import { pokemon } from '../../api'
import { Button, Container, Grid, Image, Text, Card } from '@nextui-org/react'
import { colors } from '../../styles/theme'
import Head from 'next/head'

interface Props {
  pokemon: CompletePokemon
}

const DetailsPage: NextPage<Props> = ({ pokemon }) => {
  const { name, sprites } = pokemon
  return (
    <Layout title={name}>
      <Grid.Container css={{ marginTop: '5px' }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card css={{ padding: '30px' }} hoverable>
            <Card.Body>
              <Card.Image
                src={sprites.other?.dream_world.front_default || '/imagen-sin-recurso-disponible.png'}
                alt={name}
                width="100%"
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card css={{ padding: '30px' }} hoverable>
            <Card.Header
              css={{
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
              }}
            >
              <Text h1 transform="capitalize">
                {pokemon.name}
              </Text>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites:</Text>
              <Container direction="row" display="flex" gap={0}>
                <Image src={sprites.front_default} alt={name} width={100} height={100} />
                <Image src={sprites.back_default} alt={name} width={100} height={100} />
                <Image src={sprites.front_shiny} alt={name} width={100} height={100} />
                <Image src={sprites.back_shiny} alt={name} width={100} height={100} />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  )
}

// Se usa cuando la página tiene por nombre un argumento dinámico (Se generan las rutas y 1 html por cada parámetro que le indiquemos desde el servidor).
export async function getStaticPaths() {
  const pokemonId = [...Array(50)].map((num, index) => `${index + 1}`)
  return {
    // Paths que se generan en build-time
    paths: pokemonId.map(id => ({
      params: { id },
    })),
    // 'false' -> Si el url no existe, que no lo muestre, 'blocking' -> Mostrará algo aunque el url no corresponda.
    fallback: false, // false o 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string }
  const { data } = await pokemon.get<CompletePokemon>(`/pokemon/${id}`)

  return {
    props: {
      pokemon: data,
    },
  }
}

export default DetailsPage
