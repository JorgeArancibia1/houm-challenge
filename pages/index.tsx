import { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import changePagination from '../utils'
import { Layout } from '../components/Layout/Layout'
import { pokemon } from '../api'
import { Pokemon, AllPokemon } from '../interfaces'
import { Grid, Input, Pagination, useTheme } from '@nextui-org/react'
import { PokemonCard } from '../components/Pokemon'
import { IncompletePokemon } from '../interfaces/pokemon'
import { useState, ChangeEvent } from 'react'
interface Props {
  pokemons: Pokemon[]
}

const Home: NextPage<Props> = ({ pokemons }) => {
  const [from, setFrom] = useState(0)
  const [search, setSearch] = useState('')

  const filteredPokemon = (): Pokemon[] => {
    if (search.length === 0) {
      return pokemons.slice(from, from + 10)
    }
    const filtered = pokemons.filter(({ name }) => name.includes(search))

    return filtered.slice(from, from + 10)
  }

  const onChange = e => {
    changePagination(e, setFrom)
  }

  const onSearchChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setFrom(0)
    setSearch(target.value)
  }

  return (
    <>
      <Head>
        <title>Houm Challenge</title>
        <meta name="author" content="Jorge Arancibia" />
        <link rel="icon" href="https://houm.com/static/brandImage/houmLogo.svg" />
      </Head>

      <Layout>
        <Grid.Container gap={4} justify="center">
          <Grid>
            <Input labelPlaceholder="Search" value={search} onChange={onSearchChange} />
          </Grid>
        </Grid.Container>

        <Grid.Container gap={2} justify="flex-start">
          {filteredPokemon().map(pokemon => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </Grid.Container>
        <Grid.Container gap={2} justify="center">
          <Grid>{!search && <Pagination rounded onChange={onChange} total={5} initialPage={1} />}</Grid>
        </Grid.Container>
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ctx => {
  const fetchAllPokemon = async (): Promise<Pokemon[]> => {
    const { data } = await pokemon.get<AllPokemon>('/pokemon?limit=50')
    const smallPokemonList = data.results
    return transformSmallPokemonIntoPokemon(smallPokemonList)
  }

  const transformSmallPokemonIntoPokemon = (smallPokemonList: IncompletePokemon[]): Pokemon[] => {
    const pokemonArr: Pokemon[] = smallPokemonList.map(({ url, name }) => {
      const pokeArr = url.split('/')
      const id = pokeArr[6]
      const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
      return {
        id: parseInt(id),
        name,
        url,
        img,
      }
    })
    return pokemonArr
  }

  const pokemons: Pokemon[] = await fetchAllPokemon()

  return {
    props: {
      pokemons,
    },
  }
}

export default Home
