import axios from 'axios'

const pokemon = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
})

export default pokemon
